<template>
  <div id="consumeBar" style="height:350px;width:100%;"></div>
</template>
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    let consumeBarDom = document.getElementById('consumeBar');
    let consumeBar = echarts.init(consumeBarDom);
    let option = {
      // title: {
      //   text: '用户消费TOP5排行榜'
      // },
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: {
      //     type: 'shadow'
      //   }
      // },
      legend: {
        textStyle: {
          color: '#fff'
        }
      },
      grid: {
        height: 300,
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      color: ['white'],
      xAxis: {
        type: 'value',
        label: {
          color: '#fff'
        },
        splitLine: {
          show: false,
          lineStyle: {
            color: ['#eee']
          }
        },
        axisLabel: {
          color: '#9FC1FF'
        },
        boundaryGap: [0, 0.01]
      },
      yAxis: {
        type: 'category',
        inverse: true,
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        },
        axisLabel: {
          color: '#fff',
          fontSize: 12,
          padding: [0, 10, 0, 0]
        },
        animationDuration: 300,
        animationDurationUpdate: 300,
        data: ['用户1', '用户2', '用户3', '用户4', '用户5']
      },
      series: [
        {
          name: '总支付',
          type: 'bar',
          realtimeSort: true,
          seriesLayoutBy: 'column',
          color: {
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {offset: 0, color: '#452FEE'},
              {offset: 1, color: '#5CB0FF'}
            ]
          },
          label: {
            show: true,
            color: '#fff',
            position: 'right',
            valueAnimation: true
          },
          data: [23489, 29034, 104970, 131744, 630230]
        },
        {
          name: '总盈亏',
          type: 'bar',
          realtimeSort: true,
          color: {
            x: 0,
            y: 0,
            x2: 1,
            y2: 1,
            colorStops: [
              {offset: 0, color: '#9512FF'},
              {offset: 1, color: '#F71BFF'}
            ]
          },
          label: {
            show: true,
            color: '#fff',
            position: 'right',
            valueAnimation: true
          },
          data: [23438, 31000, 121594, 134141, 681807]
        }
      ],
      //animation
      animationDuration: 0,
      animationDurationUpdate: 2000,
      animationEasing: 'linear',
      animationEasingUpdate: 'linear',
      graphic: {
        elements: [
          {
            type: 'text',
            right: 160,
            bottom: 60,
            style: {
              text: '',
              font: 'bolder 80px monospace',
              fill: 'rgba(100, 100, 100, 0.25)'
            },
            z: 100
          }
        ]
      }
    };
    option && consumeBar.setOption(option);

    //模拟websocket接口
    setTimeout(() => {
      option.series[0].data = [23489, 29034, 304970, 131744, 630230];
      option.series[1].data = [23438, 31000, 221594, 134141, 681807];
      consumeBar.setOption(option)
    }, 3000);
    window.onresize = function() {
      consumeBar.resize();
    }
  }
}
</script>
<style scoped>

</style>