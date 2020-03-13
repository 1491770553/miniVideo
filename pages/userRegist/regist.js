const app = getApp()

Page({
  data: {},
  doRegist: function(e) {
    var formObject = e.detail.value;
    var username = formObject.username;
    var password = formObject.password;
    var number = formObject.number;
    var nickname = formObject.nickname;
    var submit = formObject.submit;
    //简单的验证
    if (username.length == 0 || password.length == 0 || number.length == 0 || nickname.length == 0) {
      wx.showToast({
        title: '以上表格不能为空,需要填写完整！',
        icon: 'none',
        duration: 1000
      })
    } else {
      if (number.length == 11) {
        var serverUrl = app.serverUrl;
        wx.showLoading({
          title: '注册中...',
        });
        wx.request({
          url: serverUrl + '/Users/regist',
          method: "post",
          data: {
            username: username,
            password: password,
            number: number,
            nickname: nickname
          },
          header: {
            'content-type': 'application/json' // 默认值
          },
          success: function(res) {
            //注册成功
            if (res.data.msg == 'OK') {
              //返回登录页面
              wx.navigateTo({
                url: '../userLogin/login?msg=OK'
              })
            } else {
              wx.showToast({
                title: res.data.msg,
                icon: 'none',
                duration: 3000
              })
            }

          }
        })
      } else {
        wx.showToast({
          title: '手机号不正确',
          icon: 'none',
          duration: 1000
        })
      }
    }
  },
  goLoginPage: function() {
    //返回登录
    wx.navigateTo({
      url: '../userLogin/login',
    })
  }
})