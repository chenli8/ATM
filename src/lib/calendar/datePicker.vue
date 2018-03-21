
<template>
    <div 
        class="td-datepicker-container"
        :class="{
            'top': state.position === 'top',
            'open': state.pickerShow
        }"
    >
        
        <div class="td-datepicker-value" @click.stop="togglePicker">
            <!-- <i 
                @click.stop="clearValue" 
                class="td-datepicker-clear ion-ios-calendar-outline"
                v-show="state.pickerShow"
            ></i> -->
            <i class="td-datepicker-clear ion-ios-calendar-outline"       
            ></i>
            <div class="td-datepicker-value-input">
                {{valueDisplay}}
            </div>
        </div>
        <div class="td-datepicker-content" v-show="state.pickerShow" v-el:picker transition="picker-fade-in-down">
            <div class="td-datepicker-contrl">
                <div class="td-datepicker-info-year">
                    <span class="td-datepicker-arrow ion-ios-arrow-left" @click.stop="moveYear(false)"></span>
                    <span class="td-datepicker-year-text" @click.stop="toggleView('year')">{{timeTmp.year}}</span>
                     <span class="td-datepicker-arrow ion-ios-arrow-right" @click.stop="moveYear(true)"></span>
                </div>
                <div class="td-datepicker-info-month" v-show="options.type!=='year'">
                    <span class="td-datepicker-arrow ion-ios-arrow-left" @click.stop="moveMonth(false)"></span>
                    <span class="td-datepicker-month-text" @click.stop="toggleView('month')">{{timeTmp.month}}</span>
                    <span class="td-datepicker-arrow ion-ios-arrow-right" @click.stop="moveMonth(true)"></span>
                </div>
            </div>
            <div class="td-datepicker-days" v-show="state.dayListShow">
                <div class="td-day-week" v-for="item in weekList">{{item}}</div>
                <div class="td-day-item" v-for="day in dayList">
                    <span 
                        class="td-day-text"
                        :class="{ 
                            'selected': day.selected,
                            'out-month': !day.inMonth,
                            'unavailable': day.unavailable,
                            'disabled':disabled(day),
                        }"
                        @click.stop="touchDay($event, day)"
                    >{{day.value}}</span>
                </div>
            </div>
            <div class="td-datepicker-list" v-if="state.weekListShow">
                <div 
                    class="td-datepicker-list-item" :class="{'disabled':disabled(week)}" style="padding:8px 0;"
                    v-for="week in weekDataList" 
                    @click.stop="setWeek(week)"
                >
                    <span class="td-datepicker-list-item-text" >{{week.value}}</span>
                </div>
            </div>
            <div class="td-datepicker-list" v-if="state.monthListShow">
                <div 
                    class="td-datepicker-list-item" :class="{'disabled':disabled(timeTmp.current.year())}"
                    v-for="item in monthList" 
                    @click.stop="setMonth(item)"
                >
                    <span class="td-datepicker-list-item-text">{{item}}</span>
                </div>
            </div>
            <div class="td-datepicker-list" v-if="state.yearListShow" @scroll="scrollingYear">
                <div 
                    class="td-datepicker-list-item" :class="{'disabled':disabled(item)}"
                    v-for="item in yearList" 
                    @click.stop="setYear(item)"
                >
                    <span class="td-datepicker-list-item-text">{{item}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import moment from 'moment'
import './datePicker.css';

const pad= (val) => {
    val = Math.floor(val);
    if (val < 10) {
        return '0' + val;
    }
    return val + '';
}

const getNearMonth = (time) => {
    return {
        pre: moment(moment(time).add(-1, 'months')),
        next: moment(moment(time).add(1, 'months'))
    }
}

const generateDayList = (time, currentMonth = false) => {
    let dayList = []
    const dayCount = moment(time).daysInMonth()
    for (let i = 1; i < dayCount + 1; i++) {
        dayList.push({
            time: moment(moment(time).get('year') + '-' + pad(moment(time).get('month') + 1) + '-' + pad(i)),
            value: i,
            selected: false,
            unavailable: false,
            inMonth: currentMonth
        })
    }
    return dayList
}

const generateShowList = (time) => {
    const nearMonth = getNearMonth(time)
    const currentDayList = generateDayList(time, true)
    const nextList = generateDayList(nearMonth.next)
    const preList = generateDayList(nearMonth.pre)
    let firstDayAtWeek = moment(time).date(1).day()
    if (firstDayAtWeek === 0) firstDayAtWeek = 7

    for (let i = preList.length - 1; i > preList.length - firstDayAtWeek; i--) {
        currentDayList.unshift(preList[i])
    }
    const listCount = 42 - currentDayList.length
    for (let i = 0; i < listCount; i++) {
        currentDayList.push(nextList[i])
    }
    return currentDayList
}

const generateYearList = (year) => {
    let years = []
    for (let i = 5; i > 0; i--) {
        years.push(year - i)
    }
    years.push(year)
    for (let i = 1; i < 5; i++) {
        years.push(Math.floor(year) + i)
    }
    return years
}
const generateWeekDataList=(time)=>{
    // weeks
    const firstMonthDay=moment(time).startOf('month')
    const endMonthDay=moment(time).endOf('month')
    let monthDay=firstMonthDay
    let list=[]
    
    for(let i=0;i<5;i++){
        const startTime=moment(monthDay).day(0).add(1,'days');
        const endTime=moment(startTime).day(7);
        // const 
        let obj={
            time: time,
            startTime:startTime,
            endTime:endTime,
            week:startTime.week(),
            value:moment(time).get('year')+'-'+pad(startTime.week())+'  '+moment(startTime).format('MM-DD')+'——'+moment(endTime).format('MM-DD')
        }
        monthDay=moment(endTime).add(1,'days');
      if((endMonthDay.isAfter(obj.endTime))||(obj.startTime.year()===obj.endTime.year()&&obj.startTime.month()!==obj.endTime.month()&&i>2&&obj.endTime.date()===1)||obj.week===53){
            list.push(obj);
            // console.log(obj.week+"==="+obj.startTime.format("YYYY-MM-DD")+"===="+obj.endTime.format("YYYY-MM-DD"))
      }
    }
    return list;
}
const selectByValue = (list, value) => {
    list.forEach(day => {
        if (day.inMonth && day.value === value) {
            day.selected = true
        }
    })
}

const weekLimit = (list, availables) => {
    list.map(day => {
        if (availables.indexOf(Math.floor(day.time.format('d'))) === -1) {
            day.unavailable = true
        }
    })
}

export default {
    props: {
        date: {
            type: Object
        },
        limit: {
            type: Object,
            default () {
                return {}
            }
        }
    },
    data () {
        return {
            state: {
                autoHide: false,
                timePickerShow: true,
                dayListShow: true,
                pickerShow: false,
                weekListShow:false,
                monthListShow: false,
                yearListShow: false,
                position: 'bottom'
            },
            timeTmp: {
                time: {
                    value: '',
                    placeHolder: ''
                },
                current: null,
                year: '2016',
                month: '06'
            },
            options: {
                autoPosition: true,
                position: 'bottom',
                quickClose: true,
                placeHolder: '请选择时间',
                timePicker: false,
                format: 'YYYY-MM-DD',
                monthList: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                weekList: ['一', '二', '三', '四', '五', '六', '日'],
                type:'day',
            },
            weekList: [],
            weekDataList:[],
            dayList: [],
            monthList: [],
            yearList: []
        }
    },
    computed: {
        valueDisplay () {
            let str = this.date.value
            if (!str) {
                return this.options.placeHolder
            }
            return str
        }
    },
    ready () {
        this.init()
        window.addEventListener('click', this.hide, false)
    },
    mounted () {
        this.init()
        window.addEventListener('click', this.hide, false)
    },
    beforeDestroy () {
        window.removeEventListener('click', this.hide)
    },
    components: {
       
    },
    watch:{
        'date.options.type':function(val, oldVal){
          this.options.type=val;
          this.date.value='';
        }
    },
    methods: {
        hide (e) {
            // if (!catIn(e.target, this.$el)) {
                this.state.pickerShow = false
            // }
        },
        init (current) {
            if (this.date.options) {
                for (let key in this.date.options) {
                    this.options[key] = this.date.options[key]
                }
            }
            this.state.timePickerShow = this.options.timePicker
            this.state.position = this.options.position
            this.weekList = this.options.weekList
            this.monthList = this.options.monthList
        },
        parse (value, format = 'YYYY-MM-DD') {
            let current = moment(Date.parse(value))
            if (moment(Date.parse(value)).format(format) === 'Invalid date') {
                current = moment()
            }
            this.timeTmp.current = current
            this.updateData(current.get('date'))
        },
        yearDisplay () {
            this.timeTmp.year = moment(this.timeTmp.current).get('year')
        },
        monthDisplay () {
            this.timeTmp.month = moment(this.timeTmp.current).get('month') + 1
        },
        toggleView (view) {
            
            this.state.dayListShow = false
            this.state.weekListShow=false
            this.state.monthListShow = false
            this.state.yearListShow = false
            switch (view) {
            case 'day':
                this.state.dayListShow = true
                break
            case 'month':
                this.state.monthListShow = true
                break
            case 'week':
                this.state.weekListShow=true
                this.weekDataList=generateWeekDataList(this.timeTmp.current)
                break
            case 'year':
                this.state.yearListShow = true
                this.yearList = generateYearList(this.timeTmp.year)
                break
            default:
                this.state.dayListShow = true
                break
            }
        },
        setMonth (month) {
            if(this.timeTmp.current.year()<=2014){
                return;
            }
            let is=false
            const index = this.monthList.indexOf(month)
            this.timeTmp.current = moment(this.timeTmp.current).set('month', index)
            this.updateData()
            if(this.options.type!=='month'){
                is=true
                this.toggleView(this.options.type)
            }
            this.output(null,is)
        },
        setYear (year) {
            if(year<=2014)return ;
            let is=false
            this.timeTmp.current = moment(this.timeTmp.current).set('year', year)
            this.updateData()
            if(this.options.type!='year'){
                is=true
                this.toggleView(this.options.type)
            }

            this.output(null,is);
        },
        moveYear (next) {
            if (next) {
                this.timeTmp.current = moment(this.timeTmp.current).add(1, 'year')
            } else {
                this.timeTmp.current = moment(this.timeTmp.current).add(-1, 'year')
            }
            this.updateData()
            this.output(null,true)
            if(this.options.type==='week'){
                this.toggleView(this.options.type)
            }

        },
        moveMonth (next) {
            if (next) {
                this.timeTmp.current = moment(this.timeTmp.current).add(1, 'months')
            } else {
                this.timeTmp.current = moment(this.timeTmp.current).add(-1, 'months')
            }
            this.updateData()
            this.output(null,true)
            if(this.options.type==='week'){
                this.toggleView(this.options.type)
            }
        },
        setWeek (week){
            if (week.unavailable) return;
            this.output(week)
        },
        scrollingYear (e) {
            const $el = e.target
            const childHeight = $el.getElementsByClassName('td-datepicker-list-item')[0].offsetHeight
            if ($el.scrollTop < childHeight) {
                let topYear = this.yearList[0]
                for (let i = -1; i > -3; i--) {
                    this.yearList.unshift(topYear + i)
                }
                $el.scrollTop = 2 * childHeight
            }
            if ($el.scrollHeight - $el.scrollTop < $el.offsetHeight + childHeight) {
                let topYear = this.yearList[this.yearList.length - 1]
                for (let i = 1; i < 3; i++) {
                    this.yearList.push(topYear + i)
                }
                $el.scrollTop = $el.scrollHeight - 2 * childHeight
            }
        },
        updateData (selectValue) {

            let list = generateShowList(this.timeTmp.current, selectValue)
            if (selectValue) {
                selectByValue(list, selectValue)
            }
            if (this.options.limit) {
                if (this.options.limit.weekDay) {
                    weekLimit(list, this.options.limit.weekDay.availables)
                }
                if (this.options.limit.customerLimit) {
                    list.forEach(day => {
                        day.type=this.options.type;
                        if (this.options.limit.customerLimit(day)) {
                            day.unavailable = true
                        }
                    })
                }
            }
            this.dayList = list
            this.yearDisplay()
            this.monthDisplay()
        },
        togglePicker (e) {

            if (this.options.autoPosition) {
                if (this.$el.getBoundingClientRect().top < 320) {
                    this.state.position = 'bottom'
                } else {
                    this.state.position = 'top'
                }
            }
            
            this.parse(this.date.value, this.options.format)
            this.state.pickerShow = !this.state.pickerShow
            this.toggleView(this.options.type);
        },
        clearDay () {
            this.dayList.map(day => {
                day.selected = false
                return day
            })
        },
        clearValue (e) {
            this.date.value = ''
            this.date.rawDate = {}
            this.clearDay()
        },
        disabled(date){
            var year;
            if(date){
               year= typeof date==="number"?date:date.time.year();
            }
            if(year<=2014){
                if(typeof date==='object'){
                    date.unavailable=true;
                }
                return true;
            }
            return false;
        },
        touchDay (e, day) {
            if (day.unavailable) return
            this.clearDay()
            day.selected = true
            if (this.state.timePickerShow) {
                if (!this.timeTmp.time.value) {
                    let now = new Date()
                    this.timeTmp.time.value = pad(now.getHours()) + ':' + pad(now.getMinutes()) + ':' + pad(now.getSeconds())
                }
            } else {
                this.output(day)
            }
        },
        timeChange (time) {
            this.dayList.forEach(day => {
                if (day.selected) {
                    let tmp = moment(day.time).format('YYYY-MM-DD')
                    this.date.value = moment(Date.parse(tmp + ' ' + time.value)).format('YYYY-MM-DD HH:mm:ss')
                }
            })
        },
        output (day,sw) {
            if (!this.state.timePickerShow) {
                if(this.options.type==='year'){
                    this.date.value=this.timeTmp.year
                }else if(this.options.type==='month'){
                    if(this.timeTmp.year<=2014){

                    }else{
                    this.date.value=this.timeTmp.year+"-"+pad(this.timeTmp.month)
                        
                    }
                }else if(this.options.type==='day'&&day&&day.time){
                    this.date.rawDate = moment(day.time)
                    this.date.value = this.date.rawDate.format(this.options.format)
                }else if(this.options.type==='week'&&day&&day.week){
                    this.date.value=this.timeTmp.year+'-'+pad(day.week);
                }

                if(sw){

                }else{
                    if (this.options.quickClose) {
                        this.togglePicker()
                    }
                }
            } else {
                const tmp = moment(day.time).format('YYYY-MM-DD')
                this.date.rawDate = moment(Date.parse(tmp + ' ' + this.timeTmp.time.value))
                this.date.value = this.date.rawDate.format(this.options.format)
            }
            this.$emit('update', this.date)
        },
        confirm () {
            this.dayList.forEach(day => {
                if (day.selected) {
                    this.output(day)
                }
            })
            this.state.pickerShow = false
        }
    }
}
</script>