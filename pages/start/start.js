/**
 * start.js
 */

// 获取小程序实例
const app = getApp();

Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  goToIndex() {
    wx.getSetting({
      success(res) {
          if (!res.authSetting['scope.record']) {
              wx.authorize({
                  scope: 'scope.record',
                  success() {
                      // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
                      wx.startRecord()
                  }
              })
          }
      }
  })
    // wx.switchTab({
    //   url: '/pages/index/index'
    // })
  },
  onLoad() {
    const that = this;
    wx.setNavigationBarTitle({
      title: wx.getStorageSync('mallName')
    });

    app.getUserInfo((userInfo) => {
      that.setData({
        userInfo: userInfo
      });
    });
  },
  onReady() {
    const that = this;
    setTimeout(() => {
      that.setData({
        remind: ''
      });
    }, 1000);

    // 监听加速度数据
    wx.onAccelerometerChange((res) => {
      let angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        })
      }
    })
  }
})