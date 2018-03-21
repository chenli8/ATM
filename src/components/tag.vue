<template>
   <div id="tagPage">
    <div style="float:left"><statistic></statistic></div>
    <p style="position:relative;top:4px"><label for="" style="float:left;color:#000" v-show="choiceName.length>0">选择的是：</label>
        <Breadcrumb  style="float:left">
           <Breadcrumb-item v-for='item in choiceName' track-by="$index">{{item}}</Breadcrumb-item>
        </Breadcrumb>
    </p>
    <div style="overflow:hidden;clear:both">
        <div id="tagSvg" style="width:48%;float:left;text-align:center;">
        </div>
        <div style="width: 1%;float: left;height: 550px; margin: 0px 1%;border-right: 1px dashed #ccc;"></div>
        <div style="float:right;width:48%;height:600px;">
            <div id="tagCanvas" style="height:inherit;">
            </div>
        </div>
    </div>
</div>
</template>

<script>
import d3 from "d3";
import echarts from 'echarts';
import statistic from './statisticDate.vue';
export default{
	data(){
		return { // 总设备
                equipment: {
                    "name": '总设备',
                    "num": 0
                },
                mapData: {},
                selectedId: 1,
                // 0未进入下一级,1进入下一级;记录特殊情况的存在,双击某圆进入之后,发现只有一个子节点（子节点占整个圆形）,再次双击子节点时,无法返回上级
                switchStatus:0,
                choiceName:[]
            }
	},
	ready() {
            this.init();
        },
         methods: {
                // 初始化
                init: function() {
                    this.fetchData();
                },
                getJSON: function(arr) {
                    var _arr = arr || [],
                        map = {},
                        firstArr, jsonStr;

                    function getChild(childArr, parentObj) {

                        var json = parentObj || {};
                        json.children = [];

                        for (var i = 0, len = childArr.length; i < len; i++) {
                            var child = childArr[i];
                            child.children = [];

                            if (map[child.id]) {
                                child.children.push(getChild(map[child.id], child));
                            }

                            json.children.push(child);
                        }

                        return json;
                    };


                    for (var i = 0, len = _arr.length; i < len; i++) {
                        var obj = _arr[i];
                        if (map[obj.parentid]) {
                            map[obj.parentid].push(obj);
                        } else {
                            map[obj.parentid] = [];
                            map[obj.parentid].push(obj);
                        }
                    }
                    //获取第一个key
                    for (var i in map) {
                        firstArr = map[i];
                        break;
                    }

                    if (firstArr && firstArr.length) {

                        var jsonAll = getChild(firstArr);
                        jsonAll.name = "总设备";
                        // jsonStr=JSON.stringify(jsonAll);
                    }
                    return jsonAll; //jsonStr;
                },
                //将后端传来的数组转换为map
                arrayToMap: function(arr) {
                    var map = {};

                    for (var i = 0, len = arr.length; i < len; i++) {
                        var obj = arr[i];

                        if (map[obj.parentid]) {
                            map[obj.parentid].push(obj);
                        } else {
                            map[obj.parentid] = [];
                            map[obj.parentid].push(obj);
                        }
                    }
                    this.mapData = map;
                },
                // 渲染 柱状图
                renderCanvas: function(dataArr) {
                   
                    var self=this,
                        yAxisData = [], 
                        seriesData = [],
                        $tagCanvas=$("#tagCanvas"),
                        chartDom =$("#tagCanvas").get(0),
                        option = {
                            tooltip: {
                                trigger: 'item'
                            },
                            xAxis: [{
                                show: false,
                                splitNumber:3,
                                min:0,
                                max:self.equipment.num,
                                scale:false,
                                type: 'value'
                            }],
                            yAxis: [{
                                type: 'category',
                                splitLine: {　　　　
                                    show: true
                                },
                                data: []
                            }],
                            grid:{
                                left:"15%"
                            },
                            color: ["#1F77B4"],
                            series: [{
                                name: '',
                                type: 'bar',
                                barWidth : 30,
                                itemStyle : { 
                                    normal: {
                                        label : {
                                            show: true, 
                                            position:'right',
                                            textStyle: {
                                                color: '#000'
                                            }, 
                                            formatter: function(data){
                                               let percent='',
                                                   allPercent=(data.value/self.equipment.num*100).toFixed(2)+"%",
                                                   firstData=dataArr[0];
                                                if(firstData.parent&&firstData.parent.num){
                                                     percent="   占"+firstData.parent.name+":"+(data.value/firstData.parent.num*100).toFixed(2)+"%";
                                                }
                                                
                                                return data.value+";   占"+self.equipment.name+":"+allPercent+";"+percent;
                                            }
                                        },

                                    }
                                },
                                data: []
                            }]
                        };
                   
                    //sort
                    if(dataArr.length>1){
                        dataArr.sort(function(a,b){
                            
                            return a.num-b.num;
                        });
                    }
                    for (var i = 0, len = dataArr.length; i < len; i++) {
                        var obj = dataArr[i];
                        yAxisData.push(obj.name);
                        seriesData.push(parseInt(obj.num || 0));
                    }
                    option.yAxis[0].data = yAxisData;
                    option.series[0].data = seriesData;
                  
                    echarts.init(chartDom).setOption(option);
                },
                // 从mapData获取数据
                getChildDataCountById: function(id) {
                    var count = 0,
                        childData = this.mapData[id];
                    if (childData) {
                        for (var i = 0, len = childData.length; i < len; i++) {
                            count += parseInt(childData[i].num || 0);
                        }
                    }
                    return count;

                },
                // 删除子类的子类
                removeChildData: function(arr) {

                    for (var i = 0, len = arr.length; i < len; i++) {
                        var obj = arr[i];
                        if (obj.children) {
                            delete obj.children;
                        }
                        if (obj.parent) {
                            delete obj.parent;
                        }
                    }
                    return arr;
                },
                // 渲染
                renderSVG: function(parentObj) {

                    d3.select("#tagSvg").selectAll("svg").remove();
                    var self = this;
                    //定义setTimeout执行方法
                    var TimeFn = null;
                    var diameter = $("#tagSvg").width(),
                        format = d3.format(",d");

                    var pack = d3.layout.pack()
                        .size([diameter - 4, diameter - 4])
                        .value(function(d) {
                            return parseFloat(d.num);
                        })
                        .padding(20)
                        // .radius(3)
                        .sort(function(a, b) {
                            b.num - a.num;
                        });

                    var svg = d3.select("#tagSvg").append("svg")
                        .attr("width", diameter)
                        .attr("height", diameter)

                        .append("g")
                        .attr("transform", "translate(2,2)");

                    //从self.mapData内查找数据
                    var selectedData = self.mapData[self.selectedId];

                    var childData = self.removeChildData(selectedData);


                    parentObj.children = childData;
                    var newObj = {};
                    for (var i in parentObj) {
                        newObj[i] = parentObj[i];
                    }
                    var nodes = pack.nodes(newObj);

                    var node = svg.selectAll(".node")
                        .data(nodes)

                    .enter().append("g")
                        .attr("class", function(d) {

                            return parseInt(d.is_leaf || 0) ? "leaf node" : "node";
                        })
                        .attr("transform", function(d) {

                            return "translate(" + d.x + "," + d.y + ")";
                        }).on("dblclick", function(obj) {
                            // 取消上次延时未执行的方法
                            clearTimeout(TimeFn);
                            //双击事件的执行代码
                            //如果ID不存在,则为最顶层节点
                            if (obj.id) {
                                var newObj,
                                    objID = parseInt(obj.id);
                                   
                                if (parseInt(obj.is_leaf)) {
                                    //如果是叶子节点,则返回 叶子的上级的上级
                                        self.selectedId = parseInt(obj.parent.parent.id||1);
                                        newObj = obj.parent.parent;
                                        self.choiceName.pop()
                                      
                                    
                                } else if (self.selectedId === objID) {
                                   //判断是进入下一级还是回退上一级,当前显示的===用户双击,则返回上级
                                    self.selectedId = parseInt(obj.parentid);
                                    newObj = obj.parent;
                                    self.choiceName.pop()
                                } else {
                                   self.choiceName.push(obj.name)
                                    //说明只有一个子节点
                                    var mapChild=self.mapData[obj.id];
                                   
                                    if(parseInt(obj.id)!=self.selectedId&&self.switchStatus&&obj.parent.id==self.selectedId&&obj.parent.children.length===1){
                                        self.switchStatus=0;
                                        if(obj.parent.parent){
                                            newObj=obj.parent.parent;
                                            self.selectedId=obj.parent.parent.id||1;
                                        }
                                    }
                                    else{
                                        self.selectedId = objID;
                                        newObj = obj;
                                    }
                                    if(self.selectedId!=1&&obj.parent&&obj.parent.children&&obj.parent.children.length===1){
                                           self.switchStatus=1;
                                    }
                                }
                                self.renderSVG(newObj);
                                
                            }
                            //渲染 echarts
                            self.renderCanvas(self.mapData[self.selectedId]);

                        }).on("click", function(obj, i, ev) {
                            // 取消上次延时未执行的方法
                          
                           clearTimeout(TimeFn);
                            //执行延时
                            TimeFn = setTimeout(function() {
                                //渲染 echarts
                                self.renderCanvas([obj]);

                            }, 300);
                        }).
                        on("mouseover", function(d){
                            
                        });

                    node.append("title")
                        .text(function(d) {
                            return d.name + ": " + format(parseFloat(d.num));
                        });

                    node.append("circle")
                        .attr("r", function(d) {
                            let allPercent=(d.num/self.equipment.num*100).toFixed(2);
                            if(allPercent<8&&!d.children&&d.parentid=="1"&&d.parent.name===self.equipment.name){
                                this.setAttribute("class",this.getAttribute("class")+" red");
                            }
                            return d.r;
                        });

                    node.append("text")
                        .attr("dy", ".3em")
                        .style("text-anchor", "middle")
                        .text(function(d, index) {
                            //第0个为父元素,不需要显示名称
                            var textName = !index ? "" : d.name.substring(0, d.r / 3);
                            return textName;
                        });
                    
                    d3.select(self.frameElement).style("height", diameter + "px");
                    //
                },
                // ajax 拉取数据
                fetchData: function() {
                	
                    d3.select("#tagSvg").selectAll("svg").remove();
                    var self = this;

                    var diameter = 500,
                        format = d3.format(",d");

                    var pack = d3.layout.pack()
                        .size([diameter - 4, diameter - 4])
                        .value(function(d) {
                            return parseFloat(d.num);
                        })
                        .padding(20)
                        // .radius(3)
                        .sort(function(a, b) {
                            b.num - a.num;
                        });

                    var svg = d3.select("#tagSvg").append("svg")
                        .attr("width", diameter)
                        .attr("height", diameter)
                        .append("g")
                        .attr("transform", "translate(2,2)");
                    var url=process.env.NODE_ENV.snapshotPath+"data_atm/build/tag.json";
                    $.ajax({
                            url: url,
                            data: {},
                            type: 'get',
                            dataType: 'json',
                            cache: true,
                            crossDomain: true,
                            xhrFields: {
                                withCredentials: true
                            },
                            success: function(data) {

                                //将数组转换map
                                self.arrayToMap(data);
                                //获取总设备数量
                                self.equipment.num = self.getChildDataCountById(self.selectedId);
                                //渲染SVG
                                self.renderSVG(self.equipment);
                                //渲染 echarts
                                self.renderCanvas(self.mapData[self.selectedId]);
                            }
                    });

                }
            }
}

</script>
<style >

circle {
    fill: rgb(31, 119, 180);
    fill-opacity: .25;
    stroke: rgb(31, 119, 180);
    stroke-width: 1px;
     cursor: pointer;
}
circle:hover{
    stroke:#333300;
}
.leaf circle {
    fill: #ff7f0e;
    fill-opacity: 1;
}

text {
    font: 10px sans-serif;
}
</style>