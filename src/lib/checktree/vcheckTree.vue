
<script>
import { Checkbox, CheckboxGroup } from 'iview';
const ICON=['ion-arrow-right-b','ion-arrow-down-b'];

var checkboxTree = Vue.extend({
  name: 'checkbox-tree',
      components: { 
        Checkbox, 
        CheckboxGroup 
    },
  template:[
       '<div v-bind:style="{marginLeft:getMarginLeft(data.id)}" v-show="data.id==0||data.expanded" style="clear:both;" >',
       '<div  style="float:left;width:16px;text-align:center;cursor:pointer; line-height:27px;" @click="handleExpandIconClick(data,$event)" v-show="data.children&&data.children.length!=0" ><i class="ion-arrow-right-b"></i></div>',
       '<Checkbox :value="data.name" style="display:inline-block; margin:3px 3px 3px 0;" :checked.sync="data.checked" v-bind:style="{marginLeft:checkboxMargin(data)}" @change="upadateSelected(data,$event)" >{{data.name}}</Checkbox>',
       '<template v-for="obj in data.children">',
       '<vcheck-tree :data="obj" @change="onChange" ></vcheck-tree>',
       '</template>',
       '</div>',
       ].join(''),
  props:{
      data:{},
  },
  data(){
    return {
      selectList:[],
      onChange:function(){},
    }
  },
  watch:{
   
  },
  ready(){
    this.onChange=this._events["change"][0]||this.$parent._events["change"][0];
    this.$set('data.checked',false);
    this.$set('data.expanded',false);
  },
  methods:{
      handleExpandIconClick(item,event) {
        let target = event.target;
        let is;
        if (target.tagName.toLowerCase() !=='i'){ return;}
        if(target.className==='ion-arrow-right-b'){
          target.className='ion-arrow-down-b';
          is=true;
        }else{
          target.className='ion-arrow-right-b';
          is=false;
        }
        item.children.forEach(function(obj){
          obj.expanded=is;
        });
        
    },
    checkboxMargin:(data)=>{
      if(data.children&&data.children.length>0){
        return '0px';
      }else{
        return '16px';
      }
    },
    getMarginLeft:(codeP)=>{
      if(!codeP){
        return '16px';
      }
      return '16px';
      // return codeP.length*6+'px';
    },
    upadateSelected:function(item,ev){
      const self=this;
      this.selectList=[];
      item.checked=item.checked;
      if(!item.checked){
      }else{
        item.expanded=item.checked;
      }
      this.selectList.push({
          id:item.id,
          name:item.name,
          checked:item.checked
        });
      function check(item){
        if(item.children){
          for(var i=0;i<item.children.length;i++){
              var obj=item.children[i];
               obj.checked=item.checked;
               if(obj.id){
                self.selectList.push({
                    id:obj.id,
                    name:obj.name,
                    checked:obj.checked,
                 });
               }
              item.children.$set(i,obj);
              check(obj);
          }
        }
      }
      check(item);
      this.$emit('change',self.selectList);
      if(ev&&ev.stopPropagation){
        ev.stopPropagation();
      }
    },
  }
})
//注册个递归组件
Vue.component('vcheckTree',checkboxTree);

</script>
