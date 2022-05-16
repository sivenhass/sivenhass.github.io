<template>
  <div>
    <Roller class="roller_num" default="100000000" :text="rollerNum" :isNumberFormat="true" :transition="1"></Roller>
  </div>
</template>
<script>
import Roller from 'vue-roller';
export default {
  components: {
    Roller
  },
  data() {
    return {
      rollerNum: '100000000'
    }
  },
  methods: {
    
  },
  mounted() {
    //模拟接口
    setTimeout(() => {
      this.rollerNum = '100000009';
    }, 2000)
    setTimeout(() => {
      this.rollerNum = '100001999';
    }, 5000)
    setTimeout(() => {
      this.rollerNum = '100002123';
    }, 5100)
  }
}
</script>
<style scoped>

  .roller_num  {
    font-size: 45px;
  }
  .roller_num >>> .roller__wrapper {
    margin: 0 3px;
    background-image: url(../assets/img/bg_number.png);
    background-repeat: no-repeat;
    background-size: 100% 100%;
    mask-image: unset;
  }
  .roller_num >>> .roller__wrapper:nth-of-type(1) {
    display: none;
  }
  .roller_num >>> .roller__wrapper:nth-of-type(4),
  .roller_num >>> .roller__wrapper:nth-of-type(8)
  {
    background-image: unset;
  }
  .roller_num >>> .roller__wrapper:nth-of-type(4) .roller__char__item,
  .roller_num >>> .roller__wrapper:nth-of-type(8) .roller__char__item {
    width: unset;
  }
  .roller_num >>> .roller__wrapper .roller__char__item {
    width: 44px;
  }
</style>