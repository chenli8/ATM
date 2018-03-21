<template >

</template>
<script>
import Vue from 'vue';
import '../vuex/date.js';
Vue.component('statistic', {
    template: '<div class="statistic_con"><span>统计时间:'+new Date().Format("yyyy-MM-dd")+'</span></div>'
});
</script>
