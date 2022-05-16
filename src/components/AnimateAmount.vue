<template>
  <div id="fixedAmount" :class="{'fixed_animate_in': animateIn, 'fixed_animate_out': animateOut}">
    <div class="fixed_user_content">
      <img class="fixed_user_img" src="../assets/img/icon_title.png" alt="">
      <span class="fixed_user_name">{{firstUserAmount.userName}}</span>
      <span>充值</span>
      <span class="fixed_user_amount">{{firstUserAmount.recharge}}</span>
    </div>
  </div>
</template>
<script>
  export default {
    props: {
      userAmount: {
        type: Object,
        default: () => {}
      }
    },
    data() {
      return {
        animateIn: false,
        animateOut: false,
        //用来存放userAmount，以防短时间内涌入数据量过多，动画更替不及
        userAmountArr: [],

      }
    },
    computed: {
      firstUserAmount() {
        return this.userAmountArr.length ? this.userAmountArr[0] : [];
      }
    },
    watch: {
      //监听数据变化，如果变化，存入数组
      userAmount: {
        handler() {
          this.userAmountArr.push(this.userAmount);
        },
        deep: true,
        immediate: true
      },
      //监听userAmountArr数组长度
      'userAmountArr.length': {
        handler(newVal, oldVal) {
          if(newVal === 1 && !oldVal) {
            this.animateInOut();
          }
        },
        immediate: true
      }
    },
    methods: {
      animateInOut() {
        this.animateOut = false;
        this.animateIn = true;
        //动画持续5s，停留3s
        setTimeout(() => {
          this.animateIn = false;
          this.animateOut = true;
        }, 8000)
        //13秒运动完成后，才能开始下个运动循环
        setTimeout(() => {
          this.userAmountArr.shift();
          if(this.userAmountArr.length) {
            this.animateInOut();
          }
        }, 13000)
      }
    },
  }
</script>
<style scoped>
#fixedAmount {
    position: fixed;
    top: calc(50% - 51px);
    height: 102px;
    width: 300px;
    background-image: url('../assets/img/bg_user_amount.png');
    background-repeat: no-repeat;
    background-position: center;
    background-size: 100%;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
}
.fixed_user_content {
  height: 46px;
  width: 232px;
  display: flex;
  align-items: center;
  font-size: 15px;
}
.fixed_user_img {
  width: 42px;
  height: 42px;
  border-radius: 50%;
}
.fixed_user_name {
  width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin: 0 5px;
}
.fixed_user_amount {
  font-size: 20px;
  color: #F8FF6B;
  line-height: 20px;
  margin-left: 5px;
}
.fixed_animate_in {
  animation: fixedAnimateIn 5s linear forwards;
}
.fixed_animate_out {
  animation: fixedAnimateOut 5s linear forwards;
}
@keyframes fixedAnimateIn {
  0% {
    left: 0;
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    left: calc(50% - 150px);
    opacity: 1;
  }
}
@keyframes fixedAnimateOut {
  0% {
    left: calc(50% - 150px);
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
  100% {
    left: calc(100%);
    opacity: 0;
  }
}
</style>