Page({

  /**
   * 页面的初始数据
   */
  data: {
    showStatus: false
  },
  clickonme:function(e){
    this.showModal()
  },
  //显示遮罩层
showModal: function(){
  let animation =  wx.createAnimation({
    duration: 200,
    delay: 0,
    timingFunction: 'linear'
  });
  this.animation = animation;
  animation.translateY(300).step();
  this.setData({
    showStatus: true,
    animationData: animation.export()//导出动画队列。
  });
  setTimeout(function (){
    animation.translateY(0).step()
    this.setData({
      animationData: animation.export()
    })
  }.bind(this), 500)
},

  hideModel:function(e){
    let animation = wx.createAnimation({
      duration: 100,
      delay: 0,
      timingFunction: 'linear'
    });
    animation.translateY(300).step();
    this.setData({
      animationData: animation.export()
    })
    setTimeout(function(){
      this.setData({
        animationData: animation.export(),
        showStatus: false
      })
    }.bind(this), 200)
  },

  


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})