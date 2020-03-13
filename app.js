//app.js
App({
  //serverUrl: "http://cloud.ngrok2.xiaomiqiu.cn",
//内网穿透网址
  //serverUrl: "http://3mze35.natappfree.cc",
  //
  
  userInfo: null,
  
  onLaunch: function() {
    wx.showShareMenu({
      //转发
      withShareTicket: false
    })
  }, setGlobalUserInfo:function(user){
    wx.setStorageSync("userInfo", user);
  },
  getGlobalUserInfo:function(){
    return wx.getStorageSync("userInfo");
  },

  reportReasonArray: [
    "色情低俗",
    "政治敏感",
    "涉嫌诈骗",
    "辱骂谩骂",
    "广告垃圾",
    "诱导分享",
    "引人不适",
    "过于暴力",
    "违法违纪",
    "其它原因"
  ]
})