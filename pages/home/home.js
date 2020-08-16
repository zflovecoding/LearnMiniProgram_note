 Page({
  data:{
    name : "Doke",
    age : 10,
    stars:[
      {id : 24,name : 'Kobe',age:40},
      {id : 25,name : 'cbd',age:32},
      {id : 26,name : 'pdd',age:56},
      {id : 27,name : 'lbw',age:23}
    ],
    counter:0
  },
  handleBtnClick(){
   //1.错误做法：界面是不会刷新的   
   //this.data.counter += 1
   //2.this.setData() 对
   this.setData({
     counter: this.data.counter+1
   })
  },
handleSubtraction(){
    this.setData({
      counter: this.data.counter-1
    })
}

 })