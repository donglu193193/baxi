<template>
  <div class="layout"  >
    <canvas id="depth" width="800" height="300"></canvas>
    <canvas id="x" width="800" height="24"></canvas>
    <canvas id="y" width="48" height="300"></canvas>
  </div>
</template>
<script>
  export default {
    data() {
      return {


      }
    },
    created() {
      this.init();
    },
    mounted: function() {

    },
    methods: {
      init() {
        this.$get("index/selTdepth", {
          tradeMarket: "BTC_QC"
        }).then(res => {
          // console.log(JSON.parse(res.data.asks))
          var asks = JSON.parse(res.data.asks) || [];
          var bids = JSON.parse(res.data.bids) || [];
          var obj = {};
          obj.sell = asks.map(res => {
            console.log(111)
            return {
              price: res[0],
              amount: res[1],
            }
          })
          obj.buy = bids.map(res => {
            return {
              price: res[0],
              amount: res[1],
            }
          })
          for (var i in obj.buy) {
            var total = 0;
            for (var n = 0; n <= i; n++) {
              total += obj['buy'][n]['amount'];
            }
            obj['buy'][i]['total'] = total;
          }
          for (var i in obj['sell']) {
            var total = 0;
            for (var n = i; n < obj['sell'].length; n++) {
              total += obj['sell'][n]['amount'];
            }
            obj['sell'][i]['total'] = total;
          }

          var gap = 10; //X轴偏移量 防止左右两部分连接以利于美观
          var canvas = document.getElementById('depth');
          var width = canvas.getAttribute('width');
          var height = canvas.getAttribute('height');

          //计算交易量的最大值，作为纵坐标的最大刻度值 
          var maxAmount = Math.max(obj['sell'][0]['total'], obj['buy'][obj['buy'].length - 1]['total']);
          var scaleH = maxAmount / height;

          //买卖各占一半宽度
          var scaleW = width / 2 / obj['sell'].length;

          var context = canvas.getContext('2d');

          //开始一个连续绘制路径
          context.beginPath();
          context.fillStyle = '#9dd'; //设置买入区域填充颜色
          var x = 0,
            y = 0;
          context.moveTo(width / 2 - gap, height);
          //从中间向上、向左绘制买单图
          for (var i in obj['buy']) {
            var x = width / 2 - i * scaleW - gap;
            var y = height - obj['buy'][i]['total'] / maxAmount * height;
            context.lineTo(x, y);
          }

          context.lineTo(0, y); //延伸到最左侧边缘
          context.lineTo(0, height);
          context.lineTo(width / 2 - gap, height);
          context.fill(); //形成一个封装区域 并按fillStyle指定的颜色填充   
          context.closePath();

          //同上 开始绘制卖单深度图
          context.beginPath();
          context.fillStyle = '#1aa';
          context.moveTo(width / 2 + gap, height);
          for (var i in obj['sell']) {
            var index = obj['sell'].length - i - 1;
            var x = width / 2 + i * scaleW + gap;
            var y = height - obj['sell'][index]['total'] / maxAmount * height;
            context.lineTo(x, y);
          }
          context.lineTo(width + gap, y);
          context.lineTo(width + gap, height);
          context.lineTo(width / 2 + gap, height);
          context.fill();
          context.closePath();
          //X轴刻度
          var contextX = document.getElementById('x').getContext('2d');
          var contextY = document.getElementById('y').getContext('2d');
          contextX.fillStyle = '#ccc';
          contextY.fillStyle = '#ccc';
          for (var i in obj['buy']) {
            if (i % 3) continue;
            var x = width / 2 - i * scaleW - 30;
            var y = 12;
            contextX.fillText(obj['buy'][i]['price'], x, y);
          }
          for (var i in obj['sell']) {
            if (i % 3) continue;
            var x = width / 2 + i * scaleW;
            var y = 12;
            var index = obj['sell'].length - i - 1;
            contextX.fillText(obj['sell'][index]['price'], x, y);
          }
          //Y轴5等份
          var seg = maxAmount / 5;
          for (var i = 1; i < 6; i++) {
            var x = 12;
            var y = height - seg * i / maxAmount * height;
            contextY.fillText(seg * i > 1000 ? (seg * i / 1000 + 'K') : seg * i, x, y);
          }
        }).catch(res => {});
      },
    }
  }
</script>
<style scoped>
  .layout{
    position:relative;
    height:350px;  
  }

  .layout canvas{
    position:absolute;  
  }

  .layout #x{
    top:300px;
    left:0; 
  }

  .layout #y{
    top:0px;
    left:800px; 
  }
</style>

