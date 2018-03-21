<template>
    <div>
            <div class="form-wrapper">
                <div class="form-item-wrapper-poi">
                       <label>{{listLabel}}</label>
                       <p><i-input :value.sync="value1" placeholder="输入任务名称" size="small"></i-input></p>
                </div>
            </div>
            <div class="form-wrapper">
                    <p class="head-wrapper"><label>{{coordinateLabel}}</label> </p>
                    <Radio-group :model="coordinateId" >
                        <Radio :value="item.id"  @change="upadatePoiFormcoordinate({id:item.id,text:item.name})" v-for="item in coordinateList">{{item.name}}</Radio>
                    </Radio-group>
            </div>  
            <div class="form-wrapper">
                   <p class="head-wrapper"> <label>{{inquiry}}</label> </p>
                    <Radio-group :model="inquiryId" >
                        <Radio :value="item.id"  @change="updateInquiry({id:item.id,text:item.name})" v-for="item in inquiryList">{{item.name}}</Radio>
                    </Radio-group>
            </div>
            <section v-show="community">
                 <div class="form-wrapper">
                   <p class="head-wrapper"> <label>{{within}}</label></p>
                    
                        <Radio-group :model="withinId" >
                            <Radio :value="item.id"  @change="upadatePoiFormwithin({id:item.id,text:item.name})" v-for="item in withinList">{{item.name}}</Radio>
                        </Radio-group>
                    
                 </div>
                 <div class="form-wrapper">
                    <p class="head-wrapper"><span>{{district}}</span></p>
                    <div class="form-swiper-poi">
                        <div>
                            <span>省</span>
                            <i-select :model.sync="province1" style="width:70px" size="small" @on-change="provinceChange(province1)">
                                <i-option v-for="item in provinceList" :value="item.id">{{  item.name }}</i-option>
                            </i-select>
                        </div>
                        <div>
                            <span>市</span>
                            <i-select :model.sync="province2" style="width:70px" size="small" @on-change="cityChange(province2)">
                                <i-option v-for="item in cityList" :value="item.id">{{  item.name }}</i-option>
                            </i-select>
                        </div>
                        <div>
                            <span>区</span>
                            <i-select :model.sync="province3" style="width:70px" size="small" @on-change='areaChange(province3)'>
                                <i-option v-for="item in areaList" :value="item.id">{{  item.name }}</i-option>
                            </i-select>
                        </div>
                    </div>
                 </div> 
                 <div class="form-wrapper">
                    <p class="head-wrapper"><span>{{timePericope}}</span>  </p>  
                    <div class='form-wrapper-pericope' v-for="obj in pericopeArr">
                          <div>
                              <p>
                                <label for="">开始时段</label>
                                 <i-select :model.sync="obj.start" style="width:85px" size="small" @on-change="pericopeChange(obj.start,$index,obj.end)">
                                    <i-option v-for="item in HOURARR" :value="item">{{  item }}</i-option>
                                 </i-select>
                              </p>
                              <p>
                                <label for="">结束时段</label>
                                 <i-select :model.sync="obj.end" style="width:85px" size="small" @on-change="pericopeChangeEnd(obj.start,$index,obj.end)">
                                    <i-option v-for="item in obj.endArr" :value="item">{{  item }}</i-option>
                                 </i-select>
                              </p>
                              <i-button type="ghost" @click="delTimeSlot($index)" size='small'  class="form-wrapper-pericope-remove">删除</i-button>
                        </div>
                       
                    </div>
                    <i-button type="ghost" @click="addTimeSlot()" size='small'  class="form-wrapper-pericope-add">添加</i-button>
                </div> 
            </section>
            <section v-show='circumjacent'>
                <div class="form-wrapper">
                    <p class="head-wrapper"><label>{{peripheryRadius}}</label> </p>
                    <Input-number :max="3000" :min="1" :step="1" :value.sync="periphery" size="small" @on-change='upadateperipheryRadius(periphery)'></Input-number> <span class="form-wrapper-periphery">米范围内 (请填写3000以内数字)</span>
                </div>  
                <div class="form-wrapper">
                    <p class="head-wrapper"><label>{{inquiryConnect}}</label> </p>
                   <check-tree :data="tagList" @change="updatePoiFormSelected" ></check-tree>
                </div>
                 
            </section>
        
    </div>
</template>
<script>
import {upadatePoiFormlistLabel,upadatePoiFormcoordinate,upadatePoiForminquiry,upadatePoiFormwithin,upadateperipheryRadius,upadatePoiFormwithinProvince,upadatePoiFormCity,upadatePoiFormArea,upadateTimePericope,deleteTimePericope,updatePoiFormSelected,getPoiFormData,getPoiFormDataCity,destroyedPoiFormData} from '../../../vuex/actions';
export default {
    data(){
        return {
            value1:'',
            province1:"",
            province2:"",
            province3:"",
            cityList:[],
            areaList:[],
            pericopeArr:[],
            periphery:0,
            HOURARR:["00","01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23"],
        }
    },
    ready(){
    },
    destroyed(){
      this.destroyedPoiFormData();
    },
    watch:{
            value1:function(){
                this.upadatePoiFormlistLabel(this.value1)
            }
    },
    methods:{
        getCity(){
            if(this.provinceList.length===0 &&　this.cityListArr.length===0 && this.areaListArr.length===0){
                this.getPoiFormDataCity()
            }
        },
        addTimeSlot(){
             this.pericopeArr.push({
                    start:this.HOURARR[0],
                    end:this.HOURARR[1],
                    endArr:this.HOURARR.slice(1,24)
             });
        },
        provinceChange(id){
            if(id){
              this.cityList=this.cityListArr[id]
               let index=-1;
               for(let i=0;i<this.provinceList.length;i++){
                    if(this.provinceList[i].id==id){
                        index=i
                    }
               }
               this.upadatePoiFormwithinProvince(this.provinceList[index].name)
               this.upadatePoiFormCity('')
               this.upadatePoiFormArea('','')
               this.province3=''
            }
        },
        cityChange(id){
           if(id){
               this.areaList=this.areaListArr[id];
               let index=-1;
               for(let i=0;i<this.cityList.length;i++){
                    if(this.cityList[i].id==id){
                        index=i
                    }
               }
               this.upadatePoiFormCity(this.cityList[index].name)
               this.upadatePoiFormArea('','')
           }
        },
        areaChange(id){
            if(id){
               let index=-1;
               let str=`${this.province1},${this.province2},${this.province3}`
               for(let i=0;i<this.areaList.length;i++){
                    if(this.areaList[i].id==id){
                        index=i
                    }
               }
               this.upadatePoiFormArea(str,this.areaList[index].name)
             }
        },
        pericopeChange(hour,index,end){
            let newArr=this.HOURARR.slice(this.HOURARR.indexOf(hour)+1,24),
            obj=this.pericopeArr[index];
            obj.endArr=newArr.length?newArr:["23"];
            obj.end=obj.endArr[0];
            this.upadateTimePericope(hour,index,end)
        },
        pericopeChangeEnd(hour,index,end){
           this.upadateTimePericope(hour,index,end)
        },
        delTimeSlot(index){
             this.pericopeArr.splice(index,1);
             this.deleteTimePericope(index)
        },
        updateInquiry(key,data){
             this.upadatePoiForminquiry(key,data)
             if(key.id===1){
                  this.periphery=0
                  this.delete()
             }else if(key.id===2){

                this.delete()
                if(!this.tagList.children){
                    this.getPoiFormData();
                }
             }else if(key.id===3){
              this.getCity()
                if(!this.tagList.children){
                    this.getPoiFormData();
                }
             }
        },
        delete(){
                this.province1=''
                this.province2=''
                this.province3=''
                this.pericopeArr=[]
        },
    },
    vuex: {
        getters: {
            listLabel:({outPoiForm})=>outPoiForm.listLabel,
            coordinateLabel:({outPoiForm})=>outPoiForm.coordinateLabel,
            coordinateId:({outPoiForm})=>outPoiForm.coordinateId,
            coordinateList:({outPoiForm})=>outPoiForm.coordinateList,
            inquiryId:({outPoiForm})=>outPoiForm.inquiryId,
            inquiry:({outPoiForm})=>outPoiForm.inquiry,
            inquiryList:({outPoiForm})=>outPoiForm.inquiryList,
            withinId:({outPoiForm})=>outPoiForm.withinId,
            within:({outPoiForm})=>outPoiForm.within,
            withinList:({outPoiForm})=>outPoiForm.withinList,
            district:({outPoiForm})=>outPoiForm.district,
            timePericope:({outPoiForm})=>outPoiForm.timePericope,
            peripheryRadius:({outPoiForm})=>outPoiForm.peripheryRadius,
            inquiryConnect:({outPoiForm})=>outPoiForm.inquiryConnect,
            community:({outPoiForm})=>outPoiForm.community,
            circumjacent:({outPoiForm})=>outPoiForm.circumjacent,
            tagList:({outPoiForm})=>outPoiForm.tagList,
            provinceList:({outPoiForm})=>outPoiForm.provinceList,
            cityListArr:({outPoiForm})=>outPoiForm.cityListArr,
            areaListArr:({outPoiForm})=>outPoiForm.areaListArr,
        },
        actions:{
            upadatePoiFormlistLabel,
            upadatePoiFormcoordinate,
            upadatePoiForminquiry,
            upadatePoiFormwithin,
            upadatePoiFormCity,
            upadateperipheryRadius,
            upadatePoiFormwithinProvince,
            upadatePoiFormArea,
            upadateTimePericope,
            deleteTimePericope,
            updatePoiFormSelected,
            getPoiFormData,
            getPoiFormDataCity,
            destroyedPoiFormData
        }
    }
}
</script>
