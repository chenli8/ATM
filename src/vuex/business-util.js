export const dateTypeList = [{
    id: 1,
    name: '日',
    value: 'day',
}, {
    id: 2,
    name: '周',
    value: 'week',
}, {
    id: 3,
    name: '月',
    value: 'month',
}];
export const workingDayList = [{
    id: 1,
    name: '工作日',
}, {
    id: 2,
    name: '非工作日',
}];
export const selectivityList = [{
    id: 0,
    name: '不选POI',
},{
    id: 1,
    name: '模糊搜索POI',
}, {
    id: 2,
    name: '围栏圈POI',
}];
export const source = [{
  name: "北京",
  code: "beijing"
},{
  name: "上海",
  code: "shanghai"
},{
  name: "广州",
  code: "guangzhou"
},{
  name: "深圳",
  code: "shenzhen"
}];
export const dateInfo = () => {
    return {
        dateLabel: '选择时间',
        dateTypeLabel: '时间类型',
        startDateLabel: '起始范围',
        timeLabel:'时间范围',
        endDateLabel: '结束范围',
        typeList: [{
            id: 1,
            name: '日',
            value: 'day',
        }, {
            id: 2,
            name: '周',
            value: 'week',
        }, {
            id: 3,
            name: '月',
            value: 'month',
        }],
        //配置开始日期 type(day,week,month,year)
        startDatePicker: {
            value: '',
            options: {
                placeHolder: '请选择时间',
                type: 'day',
                tag: 'startDatePicker',
                limit: {
                    customerLimit (day) {
                       let  time=new Date()*1,
                            end=time-3*24*60*60*1000,
                            state=new Date(day.time._i)*1;
                            if(state>end){
                                return true
                            }else{
                                return false
                            }
                    }
                }
            }
        },
        endDatePicker: {
                        value: '',
                        options: {
                            placeHolder: '请选择时间',
                            type: 'day',
                            tag: 'endDatePicker',
                            limit: {
                                customerLimit (day) {
                                   let  time=new Date()*1,
                                        end=time-3*24*60*60*1000,
                                        state=new Date(day.time._i)*1;
                                        if(state>end){
                                            return true
                                        }else{
                                            return false
                                        }
                                }
                            }
                        }
        },
    }
};
export const timeList = () => {
    let list = [];
    for (let i = 0; i < 24; i++) {
        list.push({
            id: i,
            name: i
        });
    }
    return list;
}

export const TIMESTR = '0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23';
export const areaTypeList = [{
    id: 1,
    name: '国家'
}, {
    id: 2,
    name: '省份'
}, {
    id: 3,
    name: '城市'
}];
export const appQueryTypeList = [{
    id: 1,
    name: '名称',
}, {
    id: 2,
    name: '包名',
}, {
    id: 3,
    name: '哈希',
}];
export const behaviorTypeList = [{
    id: 'installAppList',
    name: '安装',
}, {
    id: 'activeAppList',
    name: '活跃',
}];
export const filterTypeList = [{
    id: 1,
    name: '居住地',
}, {
    id: 2,
    name: '工作地',
}];
export const activeTypelist = [{
    id: 1,
    name: '按天活跃',
}, {
    id: 2,
    name: '按小时活跃',
}];
export const activeBehaviorList = [{
    id: 1,
    name: '第一次活跃',
}, {
    id: 2,
    name: '最后一次活跃',
}];
export const groupTypeList  = [{
    id: 1,
    name: ' 按天/月统计',
}, {
    id: 2,
    name: '全时段统计',
}];
export const locationTypeList = [{
    id: 1,
    name: '上传中心点+半径'
}, {
    id: 2,
    name: '上传围栏'
}, {
    id: 3,
    name: '选择围栏'
}];
export const locationGhettoTypeList = [
{
    id: 0,
    name: '无围栏'
},
{
    id: 1,
    name: '上传中心点+半径'
}, {
    id: 2,
    name: '上传围栏'
}, {
    id: 3,
    name: '选择围栏'
}];
export const coordinaryTypeList = [{
    id: 1,
    name: 'WGS84'
}, {
    id: 2,
    name: '百度'
}, {
    id: 3,
    name: '高德'
}]
export const deviceList = [{
    id: 21,
    name: 'TDID'
}, {
    id: 31,
    name: 'MAC'
}, {
    id: 41,
    name: 'IMEI'
}, {
    id: 51,
    name: 'PHONENOMD5'
}, {
    id: 61,
    name: 'IDFA'
}, {
    id: 71,
    name: 'AndroidID'
}, {
    id: 81,
    name: 'IMSI'
}];
export const md5DeviceList = [{
    id: 32,
    name: '小写MD5加密的MAC'
}, {
    id: 33,
    name: '大写MD5加密的MAC'
}, {
    id: 42,
    name: '小写MD5加密的IMEI'
}, {
    id: 43,
    name: '大写MD5加密的IMEI'
}, {
    id: 44,
    name: '截取前14位后MD5加密的IMEI'
}, {
    id: 62,
    name: '小写MD5加密的IDFA'
}, {
    id: 63,
    name: '大写MD5加密的IDFA'
}, {
    id: 72,
    name: '小写MD5加密的AndroidID'
}, {
    id: 73,
    name: '大写MD5加密的AndroidID'
}];
export const regionTypeList = [{
    id: 'area',
    name: '出现'
}, {
    id: 'residentCityByMonth',
    name: '按月常驻'
}, {
    id: 'residentCity',
    name: '常驻(与时间无关)'
}];
export const equipmentProList = [{
    id: 91,
    name: '原始机型'
}, {
    id: 92,
    name: '网络'
}, {
    id: 93,
    name: '运营商'
}, {
    id: 94,
    name: '分辨率'
}, {
    id: 95,
    name: 'OS'
}, {
    id: 97,
    name: '品牌'
},{
    id:98,
    name:'价格范围'
},{
     id:99,
    name:'屏幕尺寸'
},{
     id:100,
    name:'硬件特性'
},{
     id:101,
    name:'功能特性'
}];
export const fileContentList = [{
    id: 1,
    name: '位置聚集点'
}, {
    id: 2,
    name: '经纬度'
}];
export const coordinateList = [{
    id: 1,
    name: 'WGS84（GPS）'
}, {
    id: 2,
    name: 'BD09LL（百度地图）'
}];
export const inquiryList = [{
    id: 1,
    name: '社区街道'
}, {
    id: 2,
    name: '周边POI'
}, {
    id: 3,
    name: 'POI排名(TOP1000倒序排列)'
}];
export const withinList = [{
    id: 1,
    name: '工作日'
}, {
    id: 2,
    name: '周六日'
}, {
    id: 3,
    name: '全部'
}];
export const brushList = [{
    id: 1,
    name: '过滤刷量设备'
},
{
    id: 2,
    name: '过滤非刷量设备'
}];
export const placeList = [{
    id: 0,
    name: '全部'
},
{
    id: 2,
    name: '工作地'
},
{
    id: 1,
    name: '居住地'
}];
export const resideList = [
{
    id: 2,
    name: '工作地'
},
{
    id: 1,
    name: '居住地'
}];
export const domainList = [
{
    id: 1,
    name: '城市统计'
},
{
    id: 2,
    name: '区统计'
}];
export const tagExpressionList = [{
    id:1,
    name: 'OR'
},
{
    id:2,
    name: 'AND'
}];
export const appSelectivityList = [{
    id:1,
    name: '模糊选择'
},
{
    id:2,
    name: '上传APP文件 (只支持上传APP哈希，每行单列)'
}];
export const getWeek = (one,two,idx) => {
    if(idx==1){
         let  stateTime=new Date(one),
              endTimeR=new Date(two),
              threeDate=30*24*60*60*1000;
              if(endTimeR*1-stateTime*1>threeDate){
                   return false
              }else{
                   return true
              }
    }else if(idx==2){
            let d1 = new Date();
            let d2 = new Date();
            d2.setMonth(0);
            d2.setDate(1);
            let rq = d1-d2;
            let s1 = Math.ceil(rq/(24*60*60*1000));
            let week = Math.ceil(s1/7);
            let oDate = new Date(),
                y1=one.split('-')[0],
                y2=two.split('-')[0],
                z1=one.split('-')[1],
                z2=two.split('-')[1],
                newyear=oDate.getFullYear();
               if(week<10){
                week='0'+week
               }
               let newWeek=newyear+'-'+week;
              if(y2-y1==0 && one<=two && one<newWeek && two<newWeek){
                  if(z2*1-z1*1+1>8){
                    return false
                  }else{
                    return true
                  }
              }else if(y2-y1==1 && one<=two && one<newWeek && two<newWeek){
                    if(z1.substr(0,1)==0){
                        z1=z1.substr(1,1)
                    }
                    if(z2.substr(0,1)==0){
                        z2=z2.substr(1,1)
                    }
                    function change(y1){
                        var dateArr=[];
                        for(var i=0;i<10;i++){
                                dateArr.push(2010+i*6)
                        }
                        if(dateArr.indexOf(y1*1)!=-1){
                              return 53
                        }else{
                              return 52
                        }
                    }
                    let s=change(y1);
                    if(s-z1*1+z2*1+1>8){
                       return false
                    }else{
                        return true
                    }
              }else{
                return false
              }
             
    }else if(idx==3){
                let timed=new Date(),
                    yeard=timed.getFullYear(),
                    s1=one.split('-')[0]*1,
                    s2=two.split('-')[0]*1,
                    x1=one.split('-')[1]*1,
                    x2=two.split('-')[1]*1,
                    monthd =timed.getMonth()+1;
                    if(monthd<10){
                        monthd='0'+monthd
                    }
                    let y=yeard+'-'+monthd;
                    if(s2-s1==0 && one<=two && one<y && two<y){
                          if(x2-x1>2){
                            return false
                          }else{
                            return true
                          }
                  }else if(s2-s1==1 && one<=two && one<y && two<y){
                      if(12-x1*1+x2*1>2){
                            return false
                        }else{
                            return true
                        }
                  }else{
                    return false
                  }

    }              
}
