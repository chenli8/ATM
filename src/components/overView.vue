<template>
    <div>
        <statistic></statistic>
        <div class="data-summary clearfix">
            <div class="col-6 fl" style="width:200px;margin:0px 10px;" v-for='(i,item) in scaleData'>
                <div class="summary" :style='{borderLeftColor:i===0||i%2===0?COLORARR[0]:COLORARR[1]}'>
                    <h2>{{item.scale}}</h2>
                    <h5>{{item.id}}</h5>
                </div>
            </div>
        </div>
        <div id="barSvg">
            <div style="width:900px; margin:0 auto;height:500px;">
                <div class="chart-cnt" id="costAvgChartCnt" style="width:inherit;height:inherit">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import echarts from 'echarts';
import statistic from './statisticDate.vue';
export default {
    	data() {
            return {
                COLORARR: ["#5aacff", "#847aff"],
                scaleData: [],
                oDate:Date.now()
            }
       },
        /*filters:{
        	date:function(input){
        		var oDate=new Date(input);
            	return oDate.getFullYear()+'-'+(this.toDou(oDate.getMonth()+1))+'-'+this.toDou(oDate.getDate());
        	}
        },*/
        ready() {
            this.init();
        },
        methods: {

            init() {
                this.fetchData();
            },
            fetchData() {
                let self = this;
                const url=process.env.NODE_ENV.snapshotPath+"data_atm/build/bar.json";
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
                    success: data=>{
                        let xAxisData = [],
                            seriesData = [],
                            chartDom = document.getElementById("costAvgChartCnt"),
                            option = {
                                tooltip: {
                                    trigger: 'item'
                                },
                                xAxis: [{
                                    type: 'category',
                                    data: []
                                }],
                                yAxis: [{
                                    type: 'value'
                                }],
                                series: [{
                                    name: '',
                                    type: 'bar',
                                    data: [],
                                    itemStyle: {
                                        normal: {
                                            color: function(params) {
                                                const colorIndex = params.dataIndex === 0 || params.dataIndex % 2 === 0 ? 0 : 1;
                                                return self.COLORARR[colorIndex];
                                            }
                                        }
                                    }
                                }]
                            };
                        
                        let _data=[{
                                "id": "applist设备数(8月)",
                                "equipment": 504000000,
                                "scale": "5.04亿"
                            }, {
                                "id": "聚集点数据设备数(8月)",
                                "equipment": 559000000,
                                "scale": "5.59亿"
                            }, {
                                "id": "城市归属数据设备数(8月)",
                                "equipment": 281000000,
                                "scale": "2.81亿"
                            }, {
                                "id": "安卓:IOS",
                                "equipment": 2196835898,
                                "scale": (1675942002/520893896).toFixed(2)+":1"
                            }, {
                                "id": "男:女",
                                "equipment": 992036323,
                                "scale": (515208884/476827439).toFixed(2)+":1"
                            }
                        ];
                        self.scaleData = data.data.concat(_data);

                        for (let i = 0,scaleDataLen=data.data.length;i<scaleDataLen; i++) {
                            let obj = data.data[i];
                            xAxisData.push(obj.id);
                            seriesData.push(obj.equipment);
                        }
                        option.xAxis[0].data = xAxisData;
                        option.series[0].data = seriesData;
                        echarts.init(chartDom).setOption(option);
                    },
                    error: function(res) {
                        console.warn(res);
                    }
                })

            },
            /*toDou(input){
            	return input<10?'0'+input:''+input;
            }*/
        }
}
</script>
