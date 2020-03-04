// pages/detail/detail.js
Page({
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
  },

  /**
   * 页面返回销毁时提交数据
   */
  onUnload(){
    // 1.获取首页的页面对象,getCurrentPages获取当前所有栈的页面
    const pages = getCurrentPages();
    const home = pages[pages.length - 2];

    // 2.调用页面对象的setData
    home.setData({
      title:'Jerry'
    });
  },

  handleBack(){
    wx.navigateBack({
      
    })
  }
})