// pages/home/home.js
Page({
  handleShowToast(){
    wx.showToast({
      title: '加载中ing',
      duration:3000,
      icon:'loading',
      mask:true
    })
  },

  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容，哈哈哈哈哈哈！',
    })
  },

  handleShowLoading(){
    wx.showLoading({
      title: '加载ing',
    })

    setTimeout(()=>{
      wx.hideLoading()
    },1000)
  },

  handleShowAction(){
    wx.showActionSheet({
      itemList: ['相册','拍照'],
    })
  },

  onShareAppMessage:function(options){
    return{
      title:"你好啊，赵春歌",
      path: "pages/home/home"
    }
  }
})