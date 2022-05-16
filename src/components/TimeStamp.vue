<template>
  <span>{{nowTime}}</span>
</template>
<script>
  export default {
    data() {
      return {
        nowTime: ''
      }
    },
    methods: {
      timeFormat(timeStamp) {
        let year = new Date(timeStamp).getFullYear();
        let month = new Date(timeStamp).getMonth();
        let day = new Date(timeStamp).getDate();
        let hour = new Date(timeStamp).getHours();
        let min = new Date(timeStamp).getMinutes();
        let second =new Date(timeStamp).getSeconds();
        let mon = month + 1 < 10 ? '0' + (month + 1) : month + 1;
        let dd = day < 10 ? '0' + day : day;
        let hh = hour < 10 ? '0' + hour : hour;
        let mm = min < 10 ? '0' + min : min;
        let ss = second < 10 ? '0' + second : second;

        let week = new Date(timeStamp).getDay();
        let weeks = ['日', '一', '二', '三', '四', '五', '六'];
        let getWeek = '星期' + weeks[week];

        return `${year}.${mon}.${dd}\xa0${getWeek}\xa0${hh}:${mm}:${ss}`; 
      }
    },
    created() {
      setInterval(() => {
        let timeStamp = new Date();
        this.nowTime = this.timeFormat(timeStamp);
      }, 1000);
    }
  }
</script>