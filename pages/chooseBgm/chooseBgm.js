const app = getApp()

Page({
  data: {
    bgmList: [],
    serverUrl: "",
    videoParams: {}
  },

  onLoad: function(params) {
    var me = this;
    console.log(params);
    me.setData({
      videoParams: params
    })
    wx.showLoading({
      title: '正在获取背景音乐中...',
    })
    var serverUrl = app.serverUrl;
    wx.request({
      url: serverUrl + '/video/QueryBgm',
      method: "POST",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        console.log(res);
        if (res.data.status == 200) {
          var bgmList = res.data.data;
          me.setData({
            serverUrl: serverUrl,
            bgmList: bgmList
          })
          wx.hideLoading();
        } else {
          wx.showToast({
            title: '获取信息失败',
          })
        }
      }

    })
  },
  upload: function(e) {
    var me = this;
    var serverUrl = app.serverUrl;
    //音乐
    var bgmId = e.detail.value.bgmId;
    var desc = e.detail.value.desc;

    console.log("bgmId:" + bgmId);
    console.log("desc:" + desc);
    //视频相关数据
    var duration = me.data.videoParams.duration;
    var tmpHeight = me.data.videoParams.tmpHeight;
    var tmpWidth = me.data.videoParams.tmpWidth;
    var tmpVideoUrl = me.data.videoParams.tmpVideoUrl;
    var tmpCoverUrl = me.data.videoParams.tmpCoverUrl;
    var kk = undefined;
    console.log("duration:" + duration);
    console.log("tmpHeight:" + tmpHeight);
    console.log("tmpWidth:" + tmpWidth);
    console.log("tmpVideoUrl:" + tmpVideoUrl);
    console.log("tmpCoverUrl:" + tmpCoverUrl);
    //上传短视频
    wx.showLoading({
      title: '正在上传中',
    })
    var userinfo = app.getGlobalUserInfo();
    wx.uploadFile({
      url: serverUrl + '/video/Upload',
      //文件的临时路径
      filePath: tmpVideoUrl,
      name: 'file',
      formData: {
        userId: userinfo.id,
        bgmId: bgmId,
        desc: desc,
        videoSeconds: duration,
        videoHeight: tmpHeight,
        videoWidth: tmpWidth
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        var data = JSON.parse(res.data)
        var videoId = data.data;
        //上传成功,再次上传封面
        if (data.status == 200) {
            //无视频
            wx.hideLoading();
            //返回上一个界面
            wx.navigateBack({
              delta: 1
            })
          
/*              wx.showLoading({
        title: '正在上传中',
    })
            wx.uploadFile({
        url: serverUrl + '/video/Uploadcover',
                //文件的临时路径
                filePath: tmpCoverUrl,
                name: 'file',
                formData: {
            userId: app.userInfo.id,
                    videoId: videoId
        },
        header: {
            'content-type': 'application/json' // 默认值
        },
        success: function(res) {
            var data = JSON.parse(res.data)
            wx.hideLoading();
            //上传成功
            if (data.status == 200) {
                wx.hideLoading();
                //返回上一个界面
                wx.navigateBack({
                        delta:1
                })
            } else {
                wx.showToast({
                        title: '封面解析失败',
                        icon: "none",
                        duration: 2000
                })
            }
        }
    })*/
        } else {
          wx.showToast({
            title: '视频上传失败',
            icon: "none",
            duration: 2000
          })
        }
      }
    })
  }
})