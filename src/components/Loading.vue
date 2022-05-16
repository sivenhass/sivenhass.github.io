<template>
  <div class="circle-box_wrapper">
    <div class="circle-box_wrap">
      <div class="circle-box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div class="circle-box">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </div>
</template>
<style scoped>
  .circle-box_wrapper {
    width: 350px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .circle-box_wrap {
    height: 20px;
    width: 20px;
  }
  .circle-box {
    height: 20px;
    width: 20px;
    position: absolute;
  }
  .circle-box:nth-of-type(2) {
    transform: rotateZ(-45deg);
  }
  .circle-box span {
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: aliceblue;
    border-radius: 50%;
    display: block;
    animation: scaleMove 1s ease-in-out infinite;
  }
  .circle-box span:nth-of-type(1) {
    left: 0;
    top: 0;
  }
  .circle-box span:nth-of-type(2) {
    right: 0;
    top: 0;
  }
  .circle-box span:nth-of-type(3) {
    right: 0;
    bottom: 0;
  }
  .circle-box span:nth-of-type(4) {
    left: 0;
    bottom: 0;
  }
  @keyframes scaleMove {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }
  .circle-box:nth-of-type(1) span:nth-of-type(1) {
    animation-delay: -0.1s;
  }
  .circle-box:nth-of-type(2) span:nth-of-type(1) {
    animation-delay: -0.3s;
  }
  .circle-box:nth-of-type(1) span:nth-of-type(2) {
    animation-delay: -0.5s;
  }
  .circle-box:nth-of-type(2) span:nth-of-type(2) {
    animation-delay: -0.7s;
  }
  .circle-box:nth-of-type(1) span:nth-of-type(3) {
    animation-delay: -0.9s;
  }
  .circle-box:nth-of-type(2) span:nth-of-type(3) {
    animation-delay: -1.1s;
  }
  .circle-box:nth-of-type(1) span:nth-of-type(4) {
    animation-delay: -1.3s;
  }
  .circle-box:nth-of-type(2) span:nth-of-type(4) {
    animation-delay: -1.5s;
  }
</style>