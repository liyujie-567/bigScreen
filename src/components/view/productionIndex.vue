<template>
  <div class="index">
    <!--头部-->
    <header class="header">
      <div class="header-left">
        <div>XXXXXX有限公司</div>
        <div>XXXXX</div>
      </div>
      <div class="header-con">
        <!--这里是一个图片logo-->
        <div style="font-size: 30px;text-align: center;color: #fff;">XXXX看板</div>
      </div>
      <div class="header-right">2020-04</div>
    </header>

    <!--图表块-->
    <div class="echart-content">
      <div class="pro-flex">
        <div class="flex-li">
          <div class="flex-title">月计划达成率</div>
          <echart :id="one.Id" :eStyle="one.eStyle" :option="one.Option"></echart>
        </div>
        <div class="flex-li">
          <div class="flex-title">月良品率</div>
          <echart :id="two.Id" :eStyle="two.eStyle" :option="two.Option"></echart>
        </div>
        <div class="flex-li">
          <div class="flex-title">月人均时产量</div>
          <echart :id="three.Id" :eStyle="three.eStyle" :option="three.Option"></echart>
        </div>
      </div>
      <div class="pro-flex margin-top">
        <div class="flex-li">
          <div class="flex-title">月停机时间</div>
          <echart :id="four.Id" :eStyle="four.eStyle" :option="four.Option"></echart>
        </div>
        <div class="flex-li">
          <div class="flex-title">月停机类型分析</div>
          <echart :id="five.Id" :eStyle="five.eStyle" :option="five.Option"></echart>
        </div>
        <div class="flex-li">
          <div class="flex-title">月OEE</div>
          <echart :id="six.Id" :eStyle="six.eStyle" :option="six.Option"></echart>
        </div>
      </div>
    </div>

    <!--foot-->
    <footer class="footer">
      本系统由XXXX有限公司开发
    </footer>
  </div>
</template>

<script>
import util from '../../assets/js/util'
import echarts from "echarts"

export default {
  name: 'productionIndex',
  data () {
    return {
      one: {
        Id: '',
        eStyle: {},
        Option: {}
      },
      two: {
        Id: '',
        eStyle: {},
        Option: {}
      },
      three: {
        Id: '',
        eStyle: {},
        Option: {}
      },
      four: {
        Id: '',
        eStyle: {},
        Option: {}
      },
      five: {
        Id: '',
        eStyle: {},
        Option: {}
      },
      six: {
        Id: '',
        eStyle: {},
        Option: {}
      }
    }
  },
  created () {
    // 根据当前窗口改变html值
    util.os_equipment().isPc ? this.setHtmlFontSize(48) : this.setHtmlFontSize(46)
    this.initOne()
    this.initTwo()
    this.initThree()
    this.initTour()
    this.initFive()
    this.initSix()
  },
  mounted() {
    this.$nextTick(() => {
      // this.initList()
    })
    window.addEventListener('resize', () => {
      this.charts.resize()
    })
    window.onresize = () => {
      location.reload();
    };
  },
  methods: {
    setHtmlFontSize (num) {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
      const htmlDom = document.getElementsByTagName('html')[0];
      htmlDom.style.fontSize = htmlWidth / num + 'px';
    },
    initOne () {
      this.one.Id = 'one'
      this.one.eStyle = util.os_equipment().isPc ? {height: '310px'} : {height: '190px'}
      this.one.Option = {
        grid: {
          top: '16%',
          left: '1%',
          right: '10%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          name:'日',
          nameTextStyle:{
            color:'#add6ff',
            fontSize: util.os_equipment().isPc ? 14 : 10,
          },
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle:{
              fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
              color: '#add6ff'//字体颜色
            },
          },
          data: ['1', '3', '5', '7', '9', '11', '13']
        },
        yAxis: {
          type: 'value',
          name: '百分比',
          min: 0,
          max: 100,
          nameTextStyle:{// y轴上方单位的颜色
            color:'#add6ff',
            fontSize: util.os_equipment().isPc ? 14 : 10,
          },
          axisLabel: {
            textStyle:{
              fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
              color: '#add6ff'//字体颜色
            },
          },
          splitLine: {
            lineStyle: {
              color: '#083261',
              type:'dashed' // 虚线
            }
          },
        },
        series: [{
          type: 'line',
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#1181ec', //改变折线点的颜色
              lineStyle: {
                color: '#1181ec' //改变折线颜色
              }
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#2e64b5'
                },
                {
                  offset: 1,
                  color: '#0f2642'
                }
              ], false)
            },
          },
          data: [60, 68, 66, 67, 50, 89, 30]
        }]
      }
    },
    initTwo () {
      this.two.Id = 'two'
      this.two.eStyle = util.os_equipment().isPc ? {height: '310px'} : {height: '190px'}
      this.two.Option = {
        grid: {
          top: '16%',
          left: '1%',
          right: '10%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          name:'日',
          nameTextStyle:{
            color:'#add6ff',
            fontSize: util.os_equipment().isPc ? 14 : 10,
          },
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle:{
              fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
              color: '#add6ff'//字体颜色
            },
          },
          data: ['1', '3', '5', '7', '9', '11', '13']
        },
        yAxis: {
          type: 'value',
          name: '百分比',
          min: 0,
          max: 100,
          nameTextStyle:{// y轴上方单位的颜色
            color:'#add6ff',
            fontSize: util.os_equipment().isPc ? 14 : 10,
          },
          axisLabel: {
            textStyle:{
              fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
              color: '#add6ff'//字体颜色
            },
          },
          splitLine: {
            lineStyle: {
              color: '#083261',
              type:'dashed' // 虚线
            }
          },
        },
        series: [{
          type: 'line',
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#1ccea1', //改变折线点的颜色
              lineStyle: {
                color: '#1ccea1' //改变折线颜色
              }
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#157a6e'
                },
                {
                  offset: 1,
                  color: '#102d3f'
                }
              ], false)
            },
          },
          data: [20, 80, 40, 10, 70, 55, 68]
        }]
      }
    },
    initThree () {
      this.three.Id = 'three'
      this.three.eStyle = util.os_equipment().isPc ? {height: '310px'} : {height: '190px'}
      this.three.Option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '16%',
          left: '1%',
          right: '1%',
          bottom: util.os_equipment().isPc ? '-3%' : '-10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              rotate: 40,
              formatter : function(params){
                var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 10;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                // 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  // 循环每一行,p表示行
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";// 表示每一次截取的字符串
                    var start = p * provideNumber;// 开始截取的位置
                    var end = start + provideNumber;// 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;// 最终拼成的字符串
                  }

                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
                // 将最终的字符串返回
                return newParamsName
              },
              textStyle:{
                fontSize: util.os_equipment().isPc ? 8 : 6, // 字体大小
                color: '#add6ff' // 字体颜色
              },
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '产量',
            min: 0,
            max: 1000,
            nameTextStyle:{// y轴上方单位的颜色
              color:'#add6ff',
              fontSize: util.os_equipment().isPc ? 14 : 10,
            },
            axisLabel: {
              textStyle:{
                fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
                color: '#add6ff'//字体颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: '#083261',
                type:'dashed' // 虚线
              }
            },
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#62d7ff'
                }, {
                  offset: 1,
                  color: '#0077e6'
                }]),
              }
            },
            data: [550, 590, 740, 820, 930, 710, 585]
          }
        ]
      }
    },
    initTour () {
      this.four.Id = 'four'
      this.four.eStyle = util.os_equipment().isPc ? {height: '310px'} : {height: '190px'}
      this.four.Option = {
        grid: {
          top: '16%',
          left: '1%',
          right: '10%',
          bottom: '0%',
          containLabel: true
        },
        xAxis: {
          name:'日',
          nameTextStyle:{
            color:'#add6ff',
            fontSize: util.os_equipment().isPc ? 14 : 10,
          },
          type: 'category',
          boundaryGap: false,
          axisLabel: {
            textStyle:{
              fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
              color: '#add6ff'//字体颜色
            },
          },
          data: ['1', '3', '5', '7', '9', '11', '13']
        },
        yAxis: {
          type: 'value',
          name: '分钟',
          min: 0,
          max: 1000,
          nameTextStyle:{// y轴上方单位的颜色
            color:'#add6ff',
            fontSize: util.os_equipment().isPc ? 14 : 10,
          },
          axisLabel: {
            textStyle:{
              fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
              color: '#add6ff'//字体颜色
            },
          },
          splitLine: {
            lineStyle: {
              color: '#083261',
              type:'dashed' // 虚线
            }
          },
        },
        series: [{
          type: 'line',
          symbol: 'none',
          itemStyle: {
            normal: {
              color: '#3e87e8', //改变折线点的颜色
              lineStyle: {
                color: '#3e87e8' //改变折线颜色
              }
            }
          },
          areaStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                {
                  offset: 0,
                  color: '#404bbb'
                },
                {
                  offset: 1,
                  color: '#141c3b'
                }
              ], false)
            },
          },
          data: [378, 560, 623, 655, 780, 810, 920]
        }]
      }
    },
    initFive () {
      this.five.Id = 'five'
      this.five.eStyle = util.os_equipment().isPc ? {height: '310px'} : {height: '190px'}
      this.five.Option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          orient: 'vertical',
          x: '70%',
          y: 'center',
          itemWidth: util.os_equipment().isPc ? 10 : 6,
          itemHeight: util.os_equipment().isPc ? 10 : 6,
          textStyle: {
            color: '#fff',
            fontSize: util.os_equipment().isPc ? 14 : 10
          },
          formatter:function(name){
            var resultStr = name + ' - 20%'
            return resultStr
          },
          data: ['直达', '邮件营销', '搜索引擎', '百度', '联盟广告']
        },
        color : ['#0bc69d', '#dc5846', '#f3d174', '#00d5ff', '#2a7fd5'],
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: ['20%', '30%'],
            center: ["30%", "50%"],
            labelLine: {
              show: false
            },
            itemStyle: {
              normal: {
                color: '#0077e6'
              }
            },
            data: [
              {value: 1}
            ]
          },
          {
            name: '访问来源',
            type: 'pie',
            radius: ['60%', '90%'],
            center: ["30%", "50%"],
            label: {
              show: false
            },
            labelLine: {
              show: false
            },
            data: [
              {value: 335, name: '直达'},
              {value: 310, name: '邮件营销'},
              {value: 234, name: '搜索引擎'},
              {value: 135, name: '百度'},
              {value: 148, name: '联盟广告'},
            ]
          }
        ]
      }
    },
    initSix () {
      this.six.Id = 'six'
      this.six.eStyle = util.os_equipment().isPc ? {height: '310px'} : {height: '190px'}
      this.six.Option = {
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        grid: {
          top: '16%',
          left: '1%',
          right: '1%',
          bottom: util.os_equipment().isPc ? '-3%' : '-10%',
          containLabel: true
        },
        xAxis: [
          {
            type: 'category',
            data: ['产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566', '产品：XH-001-554566'],
            axisTick: {
              alignWithLabel: true
            },
            axisLabel: {
              rotate: 40,
              formatter : function(params){
                var newParamsName = "";// 最终拼接成的字符串
                var paramsNameNumber = params.length;// 实际标签的个数
                var provideNumber = 10;// 每行能显示的字的个数
                var rowNumber = Math.ceil(paramsNameNumber / provideNumber);// 换行的话，需要显示几行，向上取整
                // 判断标签的个数是否大于规定的个数， 如果大于，则进行换行处理 如果不大于，即等于或小于，就返回原标签
                // 条件等同于rowNumber>1
                if (paramsNameNumber > provideNumber) {
                  // 循环每一行,p表示行
                  for (var p = 0; p < rowNumber; p++) {
                    var tempStr = "";// 表示每一次截取的字符串
                    var start = p * provideNumber;// 开始截取的位置
                    var end = start + provideNumber;// 结束截取的位置
                    // 此处特殊处理最后一行的索引值
                    if (p == rowNumber - 1) {
                      // 最后一次不换行
                      tempStr = params.substring(start, paramsNameNumber);
                    } else {
                      // 每一次拼接字符串并换行
                      tempStr = params.substring(start, end) + "\n";
                    }
                    newParamsName += tempStr;// 最终拼成的字符串
                  }

                } else {
                  // 将旧标签的值赋给新标签
                  newParamsName = params;
                }
                // 将最终的字符串返回
                return newParamsName
              },
              textStyle:{
                fontSize: util.os_equipment().isPc ? 8 : 6, // 字体大小
                color: '#add6ff' // 字体颜色
              },
            }
          }
        ],
        yAxis: [
          {
            type: 'value',
            name: '产量',
            min: 0,
            max: 1000,
            nameTextStyle:{// y轴上方单位的颜色
              color:'#add6ff',
              fontSize: util.os_equipment().isPc ? 14 : 10,
            },
            axisLabel: {
              textStyle:{
                fontSize: util.os_equipment().isPc ? 14 : 10,//字体大小
                color: '#add6ff'//字体颜色
              },
            },
            splitLine: {
              lineStyle: {
                color: '#083261',
                type:'dashed' // 虚线
              }
            },
          }
        ],
        series: [
          {
            name: '直接访问',
            type: 'bar',
            barWidth: '40%',
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                  offset: 0,
                  color: '#87ffb9'
                }, {
                  offset: 1,
                  color: '#01c19b'
                }]),
              }
            },
            data: [550, 590, 740, 820, 930, 710, 585]
          }
        ]
      }
    }
  }
}
</script>

<style scoped lang="less">
  @import "../../less/bigScreen";
</style>
