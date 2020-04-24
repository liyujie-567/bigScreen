<template>
    <div class="login">
      <div class="login-title">
        <div class="title-img">
          <!-- 这里是logo图片-->
        </div>
      </div>
      <div class="login-content">
        <div class="content-left">
          <img src="../../assets/img/bigscreen_login.png"/>
        </div>
        <div class="content-right">
          <div class="right-title">用户登录</div>
          <div class="right-input">
            <el-input placeholder="请输入账号" v-model="userName">
              <i slot="prefix" class="el-input__icon el-icon-user icon-style"></i>
            </el-input>
            <el-input placeholder="请输入密码" v-model="password">
              <i slot="prefix" class="el-input__icon el-icon-goods icon-style"></i>
            </el-input>
          </div>
          <div class="right-btn">
            <button class="login" @click="loginIn">大屏1</button>
            <button class="out" @click="loginOut">大屏2</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import util from '../../assets/js/util'

export default {
  name: 'login',
  data () {
    return {
      userName: '',
      password: ''
    }
  },
  mounted () {
    window.onresize = () => {
      location.reload();
    };
  },
  created () {
    util.os_equipment().isPc ? this.setHtmlFontSize(54) : this.setHtmlFontSize(46)
  },
  methods: {
    setHtmlFontSize (num) {
      const htmlWidth = document.documentElement.clientWidth || document.body.clientWidth;
      const htmlDom = document.getElementsByTagName('html')[0];
      htmlDom.style.fontSize = htmlWidth / num + 'px';
    },
    // 登录
    loginIn () {
      this.$router.push('/index')
    },
    loginOut () {
      this.$router.push('/productionIndex')
    }
  }
}
</script>

<style scoped lang="less">
@spacing: 20px;
@fill: 100%;
.regionSize (@regionW: 100%, @regionH: 100%) {
  width: @regionW;
  height: @regionH;
}
.login {
  .regionSize();
  background: url("../../assets/img/eboard_bg.png");
  background-size: @fill @fill;
  box-sizing: border-box;
  .login-title {
    width: @fill;
    overflow: hidden;
    .title-img {
      width: @spacing * 40;
      margin: @spacing * 4 0 0 @spacing * 4;
      & > img {
        .regionSize();
        vertical-align: middle;
      }
    }
  }
  .login-content {
    display: flex;
    .content-left {
      margin: @spacing * 10 @spacing * 10 0 @spacing * 18;
      width: 50%;
      & > img{
        .regionSize();
      }
    }
    .content-right {
      width: @spacing * 46;
      height: @spacing * 56;
      margin: @spacing * 10 @spacing * 10 0 0;
      background: rgba(13, 39, 70, 0.6);
      border-radius: @spacing;
      .right-title {
        width: @fill;
        text-align: center;
        font-size: @spacing * 2.4;
        color: #fff;
        margin: @spacing * 6 0;
      }
      .right-input {
        width: 80%;
        margin: 0 auto;
        line-height: @spacing * 10;
        .user-icon {
          width: 16px;
          height: 16px;
          background: url("../../assets/img/user.png");
          background-size: cover;
        }
        .icon-style {
          font-size: @spacing * 1.6;
          color: #6f93de;
          margin-top: @spacing * 4;
        }
        /deep/ .el-input__inner {
          background: transparent;
          border: none;
          border-bottom: 1px solid #6f93de;
          color: #6f93de;
          border-radius: initial;
          font-size: @spacing * 1.5;
          height: @spacing * 4;
          line-height: @spacing * 4;
          padding: 0 @spacing * 5;
        }
        /deep/ input::-webkit-input-placeholder {
          color: #6f93de;
        }
      }
      .right-btn {
        width: 76%;
        margin: @spacing * 7 auto;
        display: flex;
        .login {
          flex: 1;
          height: @spacing * 5;
          line-height: @spacing * 5;
          text-align: center;
          background: #0e65bc;
          border: 1px solid #0e65bc;
          color: #fff;
          border-radius: @spacing / 2;
          font-size: @spacing * 1.7;
          box-shadow: 0px 0px 10px #0e65bc;
          cursor: pointer;
        }
        .out {
          flex: 1;
          height: @spacing * 5;
          line-height: @spacing * 5;
          text-align: center;
          border: 2px solid #0e65bc;
          background: transparent;
          color: #0e65bc;
          border-radius: @spacing / 2;
          font-size: @spacing * 1.7;
          margin-left: @spacing * 4;
          box-shadow: 0px 0px 10px #0e65bc;
          cursor: pointer;
        }
      }
    }
  }
}
</style>
