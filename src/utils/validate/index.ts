const checkMobile = (mobileNum: string): boolean => {
    if (mobileNum.match(/[a-zA-Z]/g)) {
      return false
    } else if( !(/^1[3456789]\d{9}$/.test(mobileNum)) ) {
        return false
    } else {
        return true
    }
  }

  // 验证身份证号码
const checkCardNo = (card: any): boolean => {
    let code = /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
    if (!card || !code.test(card)) {
    //   alert('身份证号格式错误！')
      return false
    }
    if (card.length == 18) {
      // console.log('length === 18')
      card = card.split('');
      //加权因子
      let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
      //校验位
      let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
      let sum = 0
      let ai = 0
      let wi = 0
      for (let i = 0; i < 17; i++) {
        ai = card[i];
        wi = factor[i];
        sum += ai * wi;
      }
      if (parity[sum % 11] != card[17]) {
        // alert("请输入真实有效的身份证号！")
        return false
      }
      return true
    }
    return false
}

export { checkMobile, checkCardNo }