<template>
  <div class="show_platform">
    <animate-amount v-if="showUserAmountBig" :userAmount="userAmountBig"></animate-amount>
    <div class="header"></div>
    <div class="content">
      <div class="current_time fs_14">
        <time-stamp></time-stamp>
      </div>
      <div class="main">
        <div class="left">
          <div class="grid_title">
            <img src="../assets/img/icon_title.png" alt="">
            用户消费TOP5排行榜
          </div>
          <animate-echarts></animate-echarts>
        </div>
        <div class="center">
          <div class="center_box">
            <div class="current">
              <div class="current_header">
                <div class="current_header_icon_box">
                  <div class="current_header_icon"></div>
                  <span style="font-size: 20px;">流水金</span>
                </div>
                <span class="last_current_money fs_14">昨日流水总额：&nbsp;123456</span>
              </div>
              <div class="current_money">
                <animate-number></animate-number>
              </div>
            </div>
            <div class="users">
              <div class="new_users">
                <span class="users_title">新增用户</span>
                <countTo class="users_count" :startVal="startVal" :endVal="endVal" :duration="3000" :autoplay="true" :decimals="0"></countTo>
              </div>
              <div class="total_users">
                <span class="users_title">累计用户</span>
                <!-- <span class="users_count">456789</span> -->
                <countTo class="users_count" :startVal="startVal" :endVal="endVal" :duration="3000" :autoplay="true" :decimals="0"></countTo>
              </div>
            </div>
          </div>
          <div class="center_bottom_bg_box"></div>
        </div>
        <div class="right">
          <div class="grid_title">
            <img src="../assets/img/icon_title.png" alt="">
            销售动态看板（万）
          </div>
          <div class="today_amount">
            <div class="today_amount_content">
              <span class="today_amount_count">35.02</span>
              <span class="today_amount_title">今日充值金额</span>
            </div>
          </div>
          <div class="profit">
            <div class="total_profit">
              <!-- 总利润 -->
              <span>35.02</span>
            </div>
            <div class="profit_rate">
              <!-- 利润比 -->
              <span>35.02%</span>
            </div>
          </div>
        </div>
      </div>
      <div class="info">
        <div class="left">
          <div class="grid_title">
            <img src="../assets/img/icon_title.png" alt="">
            <span>用户新增</span>
          </div>
          <div class="left_grid">
            <table>
              <thead class="bg_form">
                <tr>
                  <th style="width: 40%;text-align: left;">用户昵称</th>
                  <th style="width: 30%;">用户ID</th>
                  <th style="width: 30%;">时间</th>
                </tr>
              </thead>
              <transition-group name="table-roller" tag="tbody">
                <tr v-for="item in usersAddArray" :key="item.userId" class="table-roller-item">
                  <td style="width: 40%;text-align: left;">{{item.userName}}</td>
                  <td style="width: 30%;">{{item.userId}}</td>
                  <td style="width: 30%;">{{item.registerTime}}</td>
                </tr>
              </transition-group>
            </table>
          </div>
        </div>
        <div class="center">
          <div class="grid_title_plus">
            <img src="../assets/img/icon_title.png" alt="">
            <span>实时充值</span>
          </div>
          <div class="center_grid">
            <table>
              <thead class="bg_form_plus">
                <tr>
                  <th style="width: 30%;text-align: left;">用户昵称</th>
                  <th style="width: 20%;">时间</th>
                  <th style="width: 20%;">金额</th>
                  <th style="width: 30%;">订单号</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td style="width: 30%;text-align:left;"></td>
                  <td style="width: 20%;"></td>
                  <td style="width: 20%;"></td>
                  <td style="width: 30%;"></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="right">
          <div class="grid_title">
            <img src="../assets/img/icon_title.png" alt="">
            <span>挖矿数据</span>
          </div>
          <div class="right_grid">
            <table>
              <thead class="bg_form">
                <tr>
                  <th style="width: 40%;text-align: left;">池子名</th>
                  <th style="width: 30%;">总挖矿数</th>
                  <th style="width: 30%;">盈利率</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in wkArr" :key="item.id">
                  <td class="wk_td" style="width: 40%;text-align: left;">
                    {{item.name}}
                  </td>
                  <td style="width: 30%;">
                    {{item.total}}
                  </td>
                  <td style="width: 30%;">
                    <div class="wk_profit">
                      <div class="wk_profit_rate">
                        <div class="wk_profit_rate_lv" :style="'width:' + (item.totalRate * 75)/100 + 'px;'"></div>
                      </div>
                      <span>{{item.totalRate}}%</span>
                    </div>
                    
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AnimateEcharts from '../components/AnimateEcharts.vue';
import AnimateNumber from '../components/AnimateNumber.vue';
import AnimateAmount from '../components/AnimateAmount.vue';
import {createSocket, sendWSPush} from '../assets/js/websocket.js';
import countTo from 'vue-count-to';
import TimeStamp from '../components/TimeStamp.vue';
export default {
  components: {
    AnimateEcharts,
    AnimateNumber,
    AnimateAmount,
    countTo,
    TimeStamp
  },
  data() {
    return {
        startVal: 0,
        endVal: 999,
        duration: 3,
        usersAddArray: [{userName: '苏文豪', userId: 1, registerTime: '20220511'}],
        userAmountBig: {},
        showUserAmountBig: false,
        //挖矿数据
        wkArr: [
          {name: '池子一号池子一号池子一号池子一号', total: '1762', totalRate: '94.37'},
          {name: '池子二号', total: '1711', totalRate: '74.37'},
          {name: '池子三号', total: '1722', totalRate: '44.37'}
        ],
        //一丸赏大屏数据结构
        scanBoardData: {
          //消费top5排行
          consumeTop5: [
            {userName: '苏文豪', totalConsume: 60032, totalYK: 59023},
            {userName: '小明', totalConsume: 56032, totalYK: 51023},
            {userName: '小红', totalConsume: 50032, totalYK: 49023},
            {userName: 'coco', totalConsume: 24456, totalYK: 17684},
            {userName: '贝克汉姆', totalConsume: 21234, totalYK: 12386}
          ],
          //流水金
          currentMoney: 99999,
          lastMoney: 66666,
          //用户数
          todayUserCount: 54,
          totalUserCount: 1999,
          //充值与利润
          todayRecharge: 32980,
          totalProfit: 3598,
          profitRate: 21.79,
          //新增用户
          //可以考虑初次连接后台时，获取5条，此后每次只推送一条
          usersNew: [
            {userName: '小明一号', userId: '123456', registerTime: 20220512},
            {userName: '小明二号', userId: '123456', registerTime: 20220512},
            {userName: '小明三号', userId: '123456', registerTime: 20220512},
            {userName: '小明四号', userId: '123456', registerTime: 20220512},
            {userName: '小明五号', userId: '123456', registerTime: 20220512}
          ],
          //实时充值
          //可以考虑初次连接后台时，获取5条，此后每次只推送一条
          actualRecharge: [
            {userName: '小明一号', rechargeTime: 20220512, rechargeAmount: 20220512, orderNumber: '1234567ew'},
            {userName: '小明二号', rechargeTime: 20220512, rechargeAmount: 20220512, orderNumber: '1234567ew'},
            {userName: '小明三号', rechargeTime: 20220512, rechargeAmount: 20220512, orderNumber: '1234567ew'},
            {userName: '小明四号', rechargeTime: 20220512, rechargeAmount: 20220512, orderNumber: '1234567ew'},
            {userName: '小明五号', rechargeTime: 20220512, rechargeAmount: 20220512, orderNumber: '1234567ew'},
          ],
          //挖矿数据

        }
    }
  },
  created() {
    // createSocket('ws://192.168.1.31:8080/firstSocket/1');
    createSocket('ws://localhost:3000');
    sendWSPush('suwenhao');
    window.addEventListener('onmessageWS', function(e) {
      console.log('data', e.detail.data);

    })
  },
  mounted() {
    
    setTimeout(() => {
      this.startVal = this.endVal;
      this.endVal = 52.89;
      // this.usersAddArray.push({userName: '小明', userId: '421083199104081920', registerTime: '20220520'})
      this.showUserAmountBig = true;
      this.userAmountBig = {
          userName: '苏文豪苏文豪苏',
          recharge: '9999' 
        };
    }, 3000)
    setTimeout(() => {
      this.showUserAmountBig = true;
      this.userAmountBig = {
        userName: '朱莎莉',
          recharge: '1234'
      }
    }, 5000)
    let userId = 2;
    setInterval(() => {
      if(this.usersAddArray.length >= 6){
        this.usersAddArray.shift();
      }
      this.usersAddArray.push({userName: '小明'+userId+'号', userId: userId, registerTime: '20220520'});
      ++userId
    }, 2000)
  }
}
</script>
<style>
.table-roller-enter {
  opacity: 0;
  transform: translateY(40px);
} 
.table-roller-leave-to {
  opacity: 0;
  transform: translateY(-40px);
}
.table-roller-leave-active {
  position: absolute;
  display: none;
}
.table-roller-item {
  transition: all 1s;
  display: inline-block;
}
.wk_td {
  box-sizing: border-box;
  padding-left: 30px;
  background-image: url('../assets/img/ic_form.png');
  background-repeat: no-repeat;
  background-position-y: center;
}
.wk_profit {
  display: flex;
  align-items: center;
  justify-content: space-evenly;
}
.wk_profit_rate {
  width: 75px;
  height: 8px;
  background-color: #1E2751;
  position: relative;
}
.wk_profit_rate_lv {
  height: 8px;
  position: absolute;
  background-image: linear-gradient(to right, #4763E9, #5CD9FF);
}
</style>