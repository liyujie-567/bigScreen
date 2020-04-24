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
        <div class="header-right">2020-04-19 12:04</div>
      </header>

      <!--工单-->
      <div class="work">
        <div class="title">
          <div class="title-right">
            <div>今日共：<label>31</label>项</div>
            <div>已完成：<label>17</label>项</div>
            <div>未完成：<label>14</label>项</div>
          </div>
          <div class="title-con">当日工单任务执行情况</div>
          <div class="title-left"></div>
        </div>
        <!--table-->
        <div class="work-title">
          <el-table
            :data="tableData"
            :border="true"
            header-cell-class-name="header-class"
            cell-class-name="cell-class"
            :row-class-name="tableRowClassName">
            <el-table-column
              :width="os_equipment ? 80 : 40"
              align="center"
              label="状态">
              <template slot-scope="scope">
               已完成
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              align="center"
              :show-overflow-tooltip="true"
              label="工单号">
            </el-table-column>
            <el-table-column
              prop="address"
              align="center"
              :show-overflow-tooltip="true"
              label="产品型号">
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 120 : 60"
              align="center"
              label="计划开始时间">
              <template slot-scope="scope">
                今天 8:00
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 120 : 60"
              align="center"
              label="计划完成时间">
              <template slot-scope="scope">
                今天 8:00
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              align="center"
              label="工作中心">
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 80 : 40"
              align="center"
              label="状态">
              <template slot-scope="scope">
                夜班
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 100 : 60"
              align="center"
              label="目标产量">
              <template slot-scope="scope">
                1000
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 100 : 60"
              align="center"
              label="一次良品数">
              <template slot-scope="scope">
                400
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 100 : 60"
              align="center"
              label="返工数">
              <template slot-scope="scope">
                59
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 100 : 60"
              align="center"
              label="报废数">
              <template slot-scope="scope">
                88
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 100 : 60"
              align="center"
              label="计划达成率">
              <template slot-scope="scope">
                60%
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 100 : 60"
              align="center"
              label="良品率">
              <template slot-scope="scope">
                90%
              </template>
            </el-table-column>
            <el-table-column
              :width="os_equipment ? 100 : 60"
              align="center"
              label="人均小时产量">
              <template slot-scope="scope">
                900
              </template>
            </el-table-column>
          </el-table>
        </div>
      </div>

      <div class="index-equipment">
        <div class="bottom-left">
          <!--设备-->
          <div class="title-info">当日设备运行情况</div>
          <el-table
            :data="tableData"
            :border="true"
            header-cell-class-name="header-class"
            cell-class-name="cell-class">
            <el-table-column
              align="center"
              label="工作中心">
              <template slot-scope="scope">
                已完成
              </template>
            </el-table-column>
            <el-table-column
              prop="name"
              align="center"
              label="目标产量">
            </el-table-column>
            <el-table-column
              align="center"
              label="实际产量">
              <template slot-scope="scope">
                1200
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              width="100"
              label="运转率">
              <template slot-scope="scope">
               100%
              </template>
            </el-table-column>
            <el-table-column
              align="center"
              label="停机时间(分钟)">
              <template slot-scope="scope">
                60
              </template>
            </el-table-column>
            <el-table-column
              prop="date"
              align="center"
              label="OEE">
            </el-table-column>
          </el-table>
        </div>
        <div class="bottom-right">
          <!--停机Shutdown-->
          <div class="title-info">当日停机类型分析</div>
          <echart :id="Id" :eStyle="eStyle" :option="Option"></echart>
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

export default {
  name: 'Index',
  data () {
    return {
      os_equipment: util.os_equipment().isPc,
      tableData: [{
        date: '2016-05-02',
        status: 0,
        name: 'DD0001',
        address: 'XH-001-554XH554XH554XH554XH',
      }, {
        date: '2016-05-04',
        status: 1,
        name: 'DD0002',
        address: 'XH-001-554',
      }, {
        date: '2016-05-01',
        status: 2,
        name: 'DD0003',
        address: 'XH-001-554XH554XH554XH554XH',
      }, {
        date: '2016-05-03',
        status: 3,
        name: 'DD0005',
        address: 'XH-001-554',
      }],
      columnData: {
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
            fontSize: util.os_equipment().isPc ? 16 : 10
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
      },
      // 图表ID
      Id: '',
      eStyle: {},
      Option: {},
      charts: ''
    }
  },
  created () {
    // 根据当前窗口改变html值
    util.os_equipment().isPc ? this.setHtmlFontSize(48) : this.setHtmlFontSize(46)
    // table滚动
    this.play()
    this.initList()
  },
  mounted() {
    window.addEventListener('resize', () => {
      this.charts.resize()
    })
    window.onresize = () => {
      location.reload();
    };
  },
  methods: {
    play () {
      setInterval(this.change, 3000)
    },
    change () {
      this.tableData.push(this.tableData[0]);
      this.tableData.shift();
    },
    setHtmlFontSize (num) {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
      const htmlDom = document.getElementsByTagName('html')[0];
      htmlDom.style.fontSize = htmlWidth / num + 'px';
    },
    tableRowClassName({row}) {
      if (row.status === 0) {
        return 'blueNum';
      } else if (row.status === 1) {
        return 'yellowNum';
      } else if (row.status === 2) {
        return 'greenNum';
      } else {
        return 'greyNum';
      }
      return '';
    },
    initList () {
      this.Id = 'one'
      this.eStyle = {height: '310px'}
      this.Option = this.columnData
    }
  }
}
</script>

<style scoped lang="less">
  /deep/ .el-table .blueNum {
    color: #2a7fd5;
  }
  /deep/ .el-table .yellowNum {
    color: #fea323;
  }
  /deep/ .el-table .greenNum {
    color: #2afdb7;
  }
  /deep/ .el-table .greyNum {
    color: #85888d;
  }

  @import "../../less/bigScreen";
</style>
