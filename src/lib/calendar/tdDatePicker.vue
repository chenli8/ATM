
<template>
    <div class="form-wrapper">
            <p class="head-wrapper">
                <span class="title-wrapper">{{locaDateInfo.dateLabel}}</span>
                <a><Icon type="help-circled"></Icon><rd-tooltip>日：起始日与结束日跨度不能超过31天；月：起始月与结束月跨度不能超过3个月</rd-tooltip></a>
            </p>
            <div>
              <div class="form-item-wrapper">
                <label>{{locaDateInfo.dateTypeLabel}}</label>
                <Radio-group :model=model>
                  <Radio :value="item.id" :disabled=disabled  @change="typeChange(item)"  v-for="item in dateTypeList">{{item.name}}</Radio>
               </Radio-group>
              </div>
              <div class="form-item-wrapper">
                <label v-show='appsize'>{{locaDateInfo.startDateLabel}}</label>
                <label v-if='!appsize'>{{locaDateInfo.timeLabel}}</label>
                <date-picker :date="startDatePicker" @update="update" ></date-picker>
              </div>
              <div class="form-item-wrapper" v-show='appsize'>
                <label>{{locaDateInfo.endDateLabel}}</label>
                <date-picker :date="endDatePicker"  @update="update"></date-picker>
              </div>
            </div>
    </div>
</template>
<script>
import {Radio,RadioGroup} from 'iview';
import {rdTooltip} from 'radon-ui';
import {dateInfo} from '../../vuex/business-util';
import datePicker from './datePicker.vue';

export default {
    props: {
        change: {
            type: Function,
            default:function(){},
        },
        update: {
            type: Function,
            default:function(){},
        },
        disabled:{
            type:Boolean,
            default:false,
        },
        model:{
            type:Number,
        },
        type:{
            type:Array,
            default:function(){
                return [1,2,3];
            }
        },
        appsize:{
            type:Boolean,
            default:true,
        }
    },
    data () {
        let locaDateInfo=dateInfo();
        let type;
        if(this.type.length!==3){
            let _locaDateInfo=[];
            if(this.type.length===1){
                const obj=locaDateInfo.typeList[this.type[0]-1];
                _locaDateInfo.push(obj);
                if(this.model===obj.id){
                    type=obj.value;
                }
            }
            if(this.type.length===2){
                const obj=locaDateInfo.typeList[this.type[0]-1];
                _locaDateInfo.push(obj);
                if(this.model===obj.id){
                    type=obj.value;
                }
               if(this.type.length===2){
                    const obj=locaDateInfo.typeList[this.type[1]-1];
                    _locaDateInfo.push(obj);
                    if(this.model===obj.id){
                        type=obj.value;
                    }
               }
            }
            //日周月都显示
           /* const obj=locaDateInfo.typeList[this.type[0]-1];
            _locaDateInfo.push(obj);
            if(this.model===obj.id){
                type=obj.value;
            }
           if(this.type.length===2){
            const obj=locaDateInfo.typeList[this.type[1]-1];
            _locaDateInfo.push(obj);
            if(this.model===obj.id){
                type=obj.value;
            }
           }*/
           locaDateInfo.typeList=_locaDateInfo;
           if(type){
             locaDateInfo.startDatePicker.options.type=type;
             locaDateInfo.endDatePicker.options.type=type;
           }
        }
        return {
            locaDateInfo,
            dateTypeList:locaDateInfo.typeList,
            startDatePicker:locaDateInfo.startDatePicker,
            endDatePicker:locaDateInfo.endDatePicker,
        }
    },
   components: {
        Radio,
        RadioGroup,
        datePicker,
        rdTooltip,
    },
    ready () {
        // if(this.type.length!==3){
        //     locaDateInfo.forEach();
        // }
    },
    watch:{
        'disabled'(val, oldVal){
          const self=this;
          self.dateTypeList.forEach(function(obj){
                if(obj.id===self.model){
                  self.typeChange(obj);
                }
          });
        },
        type:function(val,oldVal){
                let locaDateInfo=dateInfo();
                let type;
                if(this.type.length!==3){
                    let _locaDateInfo=[];
                    if(this.type.length===1){
                        const obj=locaDateInfo.typeList[this.type[0]-1];
                        _locaDateInfo.push(obj);
                        if(this.model===obj.id){
                            type=obj.value;
                        }
                        this.model=1
                    }
                    if(this.type.length===2){
                        const obj=locaDateInfo.typeList[this.type[0]-1];
                        _locaDateInfo.push(obj);
                        if(this.model===obj.id){
                            type=obj.value;
                        }
                       if(this.type.length===2){
                            const obj=locaDateInfo.typeList[this.type[1]-1];
                            _locaDateInfo.push(obj);
                            if(this.model===obj.id){
                                type=obj.value;
                            }
                       }
                       this.model=1
                    }
                    //日周月都显示
                   /* const obj=locaDateInfo.typeList[this.type[0]-1];
                    _locaDateInfo.push(obj);
                    if(this.model===obj.id){
                        type=obj.value;
                    }
                   if(this.type.length===2){
                    const obj=locaDateInfo.typeList[this.type[1]-1];
                    _locaDateInfo.push(obj);
                    if(this.model===obj.id){
                        type=obj.value;
                    }
                   }*/
                   locaDateInfo.typeList=_locaDateInfo;
                   if(type){
                     locaDateInfo.startDatePicker.options.type=type;
                     locaDateInfo.endDatePicker.options.type=type;
                   }
                }
                    this.locaDateInfo=locaDateInfo
                    this.dateTypeList=locaDateInfo.typeList
                    this.startDatePicker=locaDateInfo.startDatePicker
                    this.endDatePicker=locaDateInfo.endDatePicker
         }
    },
    methods: {
        typeChange(item){
            this.startDatePicker.value='';
            this.endDatePicker.value='';
            this.startDatePicker.options.type=item.value;
            this.endDatePicker.options.type=item.value;
            this.change(item);
            this.update(this.startDatePicker);
            this.update(this.endDatePicker);
        }
    },
}
</script>