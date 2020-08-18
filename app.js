//注册小程序示例
App({
   //生命周期函数：后台存活2h
   onLaunch: function(options)  //小程序初始化完成时执行的生命周期函数
   {
      //异步调用（获取用户信息函数）
      /* wx.getUserInfo({
         数据拿到之后，再进行回调的,可能执行于Onshow之后
           success: function(res){
            console.log(res)
         }
         })*/

      
   },
   onShow: function (options)  //小程序界面显示出来后执行的生命周期函数
   {
     //1.判断小程序的进入场景
    /* console.log(options)
     switch(options.scene){
       case 1001:
         break;
       case 1002:
           break;
     }*/
    //2.获取用户信息，并且获取到用户信息后，将用户信息传递给服务器
    /*wx.getUserInfo({
      success: function(res){
            console.log(res)
         }
    })*/
   },
   onHide: function()//隐藏时
   {

   },
   onError:function()//发生错误时
   {

   },
    globalData:{
     name: 'xyz',
     age: 20
    }
})