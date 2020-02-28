// pages/home/home.js

const app = getApp()

Page({
  data:{
    name:"coderwhy",
    age:18,
    students:[
      {id:1,name:"aa",age:10},
      {id:2,name:"bb",age:11},
      {id:3,name:"cc",age:12},
      {id:4,name:"dd",age:13},
      {id:5,name:"ee",age:14}
    ],
    conter:0
  },
  handleBtnClick(){
    // 该做法界面不会刷新
    // this.data.conter += 1

    // this.setData()
    this.setData({
      conter:this.data.conter + 1
    })
  },
  handleSubtraction(){
    this.setData({
      conter: this.data.conter - 1
    })
  },
  handleGetUserInfo(event) {
    console.log(event);
  }
})