<template>
  <div class="login-container">
    <img class="img-top" :src="ImgTop" alt="" />
    <div class="con-logo">
      <img class="icon-logo" :src="Logo" alt="" />
      <p>常州市总工会</p>
    </div>
    <div class="con-login-form">
      <Field
        placeholder="请输入您的手机号"
        type="tel"
        maxlength="11"
        left-icon="{IconPhone}"
        clearable
      ></Field>
      <Field
        placeholder="请输入您的密码"
        type="password"
        left-icon="{IconPass}"
        clearable
      ></Field>
      <Button
        round
        size="large"
        color="rgb(25, 137, 250)"
        disabled="{disabled}"
        onClick="{this.toLogin.bind(this,this)}"
        >登录</Button
      >
    </div>
    <div class="con-register-forget">
      <span>忘记密码</span><span class="line-vertical"></span
      ><span>用户注册</span>
    </div>
  </div>
</template>

<script>
import { Button, Field } from "vant";
export default {
  components: {
    Field,
    Button,
  },
  data() {
    return {
      IconPhone: require('@IMG/login-register/icon_phone.png'),
      IconPass: require('@IMG/login-register/icon_pass.png'),
      ImgTop: require('@IMG/login-register/bg_top.png'),
      Logo: require('@IMG/common/img_logo.png')
    };
  },
  created() {
    console.log("kvvv");
  },
};
</script>

<style lang="scss">
.login-container {
  .img-top {
    width: 375px;
    height: 215px;
  }
  .con-logo {
    position: absolute;
    top: 25px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    .icon-logo {
      width: 83px;
      height: 83px;
    }
    p {
      font-size: 19px;
      line-height: 26.5px;
      color: #fff;
    }
  }
  .con-register-forget {
    font-size: 12px;
    color: #9f9f9f;
    display: flex;
    justify-content: center;
    align-items: center;
    .line-vertical {
      display: inline-block;
      width: 1px;
      height: 13px;
      background-color: #9f9f9f;
      margin: 0 16px;
    }
  }
  .con-login-form {
    width: 300px;
    margin: 45px auto 16px;
    .van-button--large {
      height: 40px;
      font-size: 18px;
      margin-top: 30px;
    }
    .van-field {
      border: 0.5px solid #ccc;
      border-radius: 44px;
      padding: 0 15px;
    }
    .van-field + .van-field {
      margin-top: 20px;
    }
    .van-field__body {
      position: relative;
      &:before {
        content: "";
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        width: 1px;
        height: 22px;
        background-color: #e8e8e8;
      }
      .van-field__control {
        height: 44px;
        padding-left: 10px;
        font-size: 14px;
      }
    }
    .van-icon__image {
      width: 22px;
      height: 22px;
      margin-top: 11px;
    }
    input:-webkit-autofill {
      -webkit-box-shadow: 0 0 0 1000px white inset !important;
    }
  }
}
</style>