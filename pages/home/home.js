//getApp()获取App()产生的示例对象
const app = getApp()
const name = app.globalData.name
const age = app.globalData.age
//name age can be used later in Page

//注册一个页面
//页面也有自己的生命周期函数

Page({
  //-----------2.初始化数据-------------------
  data:{
      message:'哈哈哈'
  } ,
  
  
   //-----------1.监听页面的生命周期函数-------------------
   //页面被加载出来时
   onLoad()
   {
      console.log('onLoad')
   },
   //页面显示出来时
   onShow(){
    console.log('onShow')
   },
   //页面初次渲染完成时（在onShow之后执行）
   onReady(){
    console.log('onReady')
   },
   //当页面隐藏起来时
   onHide(){
    console.log('onHide')
   },
   //监听页面卸载，页面跳转时
   onUnload(){
    console.log('onUnload')
   },
   //-----------3.监听wxml中相关的一些事件-------------------
   handleGetUserInfo(event){
    console.log(event)

  },
  handleViewClick(){
    console.log("哈哈哈被点击了")
  },
   //-----------4.监听wxml中其它事件-------------------
   //监听页面的滚动
  onPageScroll(obj){

  },
  //监听页面滚动到底部
  onReachBottom(){
  console.log('ReachBottom')
  },
  //下拉刷新
  onPullDownRefresh(){
    console.log('下拉刷新事件')
  }
  })