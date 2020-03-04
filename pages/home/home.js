// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:"Stella_tang"
  },

  handlePushDetail(){
    wx.navigateTo({
      url: '/pages/detail/detail?title=Hi,汤汤',
    })
  }
})