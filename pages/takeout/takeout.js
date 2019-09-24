// pages/takeout/takeout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ifShow: false,
    currentIndex: 0,
    count: 0,
    allPrice: 0,
    itemPrice: 0,
    shoppingList: [],
    orderList: ["[新品]葡萄系列", "招牌水果茶", "大大片鲜果茶", "热鲜果茶系列", "自由pick奶茶"],
    imgsList: [{
        id: 0,
        num: 0,
        price: 25,
        detail: {
          type: "葡萄鲜果大方",
          imgSrc: "../../images/naicha_1.png",
          detail: "1000cc鲜果茶，当季甄选巨峰葡萄✖️金牡丹茶，搭配条切芒果/蜜瓜/西瓜/百香果"
        }
      },
      {
        id: 0,
        num: 0,
        price: 22,
        detail: {
          type: "葡萄小方",
          imgSrc: "../../images/naicha_2.png",
          detail: "小方杯鲜果果茶，当季甄选巨峰葡萄✖️金牡丹茶，搭配每日手作柠檬冻"
        }
      },
      {
        id: 1,
        num: 0,
        price: 26,
        detail: {
          type: "水果茶(招牌红茶)",
          imgSrc: "../../images/naicha_3.png",
          detail: "定制浅焙红茶，微微蜜香，甜气洋溢。含块状应季水果如芒果/哈密瓜/百香果/青柠/金桔"
        }
      },
      {
        id: 1,
        num: 0,
        price: 20,
        detail: {
          type: "水果茶(招牌绿茶)",
          imgSrc: "../../images/naicha_4.png",
          detail: "定制白毫绿芽，鲜灵的茉莉花香，更为清爽。含块状应季水果如芒果/哈密瓜/百香果/青柠/金桔"
        }
      },
      {
        id: 1,
        num: 0,
        price: 18,
        detail: {
          type: "水果茶(招牌青茶)",
          imgSrc: "../../images/naicha_5.png",
          detail: "嫩度较高的高山乌龙，香气馥郁回甘。含块状应季水果如芒果/哈密瓜/百香果/青柠/金桔"
        }
      },
      {
        id: 2,
        num: 0,
        price: 28,
        detail: {
          type: "水果茶(招牌普洱)",
          imgSrc: "../../images/naicha_6.png",
          detail: "特选陈年普洱，厚重又不失细腻。含块状应季水果如芒果/哈密瓜/百香果/青柠/金桔"
        }
      },
      {
        id: 2,
        num: 0,
        price: 25,
        detail: {
          type: "水果茶(招牌柠檬曼巴)",
          imgSrc: "../../images/naicha_7.png",
          detail: "经典柠檬茶与水果的碰撞。清脆香甜的当季蜜瓜+西瓜+芒果，伴以香水柠檬，激发不曾有过的果香"
        }
      },
      {
        id: 3,
        num: 0,
        price: 29,
        detail: {
          type: "经典热水果绿茶",
          imgSrc: "../../images/naicha_8.png",
          detail: "热饮550cc。清脆香甜的当季蜜瓜+西瓜+芒果，伴以香水柠檬，激发不曾有过的果香"
        }
      },
      {
        id: 3,
        num: 0,
        price: 22,
        detail: {
          type: "经典热水果青茶",
          imgSrc: "../../images/naicha_9.png",
          detail: "经典柠檬茶与水果的碰撞。清脆香甜的当季蜜瓜+西瓜+芒果，伴以香水柠檬，激发不曾有过的果香"
        }
      }
    ]
  },
  changetap: function(e) {
    console.log(e.target)
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    })
  },
  orderCardchange: function(e) {
    this.setData({
      currentIndex: e.currentTarget.dataset.index
    });
  },

  // 列表中购买➕1
  addNum: function(e) {
    // 获取当前购买数量
    let num = e.currentTarget.dataset.num;
    // 获取当前下标
    let index = e.currentTarget.dataset.index;
    num++;
    let newList = this.data.imgsList;
    newList[index].num = num;

    function ShopItem(num, price, type) {
      this.num = num,
        this.price = price,
        this.type = type
    }
    let currentPrice = newList[index].price;
    let currentName = newList[index].detail.type;
    let currentNum = newList[index].num
    let shopItem = new ShopItem(currentNum, currentPrice, currentName);
    let newShoppingList = this.data.shoppingList;
    newShoppingList.push(shopItem)
    let find = false;
    for (let i = 0; i < newShoppingList.length; i++) {
      for (let j = i + 1; j < newShoppingList.length; j++) {
        if (newShoppingList[i].type === newShoppingList[j].type) {
          find = true;
          newShoppingList.splice(i, 1)
        }
      }
      if (find) break;
    }

    this.setData({
      imgsList: newList,
      shoppingList: newShoppingList
    });
    this.countNum();
    this.count();
  },
  //列表中购买-1
  deleteNum: function(e) {
    // 获取当前购买数量
    let num = e.currentTarget.dataset.num;
    // 获取当前下标
    let index = e.currentTarget.dataset.index;
    let count = e.currentTarget.dataset.count;
    if (num > 0) {
      num--;
    }
    let newList = this.data.imgsList;
    newList[index].num = num;

    let newShoppingList = this.data.shoppingList
    console.log(newShoppingList)
    for (let i = 0; i < newShoppingList.length; i++) {
      if (newList[index].detail.type === newShoppingList[i].type && newShoppingList[i].num > 0) {
        newShoppingList[i].num--;
        if (newShoppingList[i].num === 0) {
          newShoppingList.splice(i, 1)
        }
      }
    }
    this.setData({
      imgsList: newList,
      shoppingList: newShoppingList
    });
    this.countNum();
    this.count();
  },
  // 购物车商品总数
  countNum: function() {
    let that = this;
    let allNum = 0;
    let newList = that.data.imgsList;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].num > 0) {
        allNum = allNum + newList[i].num
      }
    }
    that.setData({
      count: allNum
    });
  },
  // 结算金额
  count: function() {
    let that = this;
    let newPrice = 0;
    let newList = that.data.imgsList;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].num > 0) {
        newPrice = newPrice + newList[i].price * newList[i].num
      }
    }
    that.setData({
      allPrice: newPrice
    })
  },
  //点击购物车，出现商品详情的动画
  carsconfirm: function(e) {
    console.log('点击购物车');
    this.showModel();
  },
  //显示遮罩层和商品详情
  showModel: function() {
    let animation = wx.createAnimation({
      duration: 200,
      delay: 0,
      timingFunction: 'linear'
    });
    animation.translateY(600).step();
    this.setData({
      animationData: animation.export(),
      ifShow: true
    });
    setTimeout(function() {
      animation.translateY(0).step();
      this.setData({
        animationData: animation.export()
      })
    }.bind(this), 100)
  },
  //隐藏遮罩层和商品详情
  hideModal: function() {
    let animation = wx.createAnimation({
      duration: 200,
      timingFunction: 'linear',
      delay: 0
    });
    animation.translateY(700).step()
    this.setData({
      animationData: animation.export()
    });
    setTimeout(function() {
      animation.translateY(0).step();
      this.setData({
        animationData: animation.export(),
        ifShow: false
      })
    }.bind(this), 200)
  },
  // 购物车中购买➕1
  addItem: function(e) {
    console.log(e.currentTarget.dataset)
    let num = e.currentTarget.dataset.num;
    let index = e.currentTarget.dataset.index;
    num++;
    let newShoppingList = this.data.shoppingList;
    newShoppingList[index].num = num;
    //使列表中的数量变化与购物车中保持一致
    let newList = this.data.imgsList;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].detail.type === newShoppingList[index].type) {
        newList[i].num = num
      }
    }
    //将数据返回给前台
    this.setData({
      shoppingList: newShoppingList,
      imgsList: newList
    });
    this.countNum()
    this.count()
  },
  //购物车中购买➖1
  deleteItem: function(e) {
    let num = e.currentTarget.dataset.num;
    let index = e.currentTarget.dataset.index;
    if (num > 0) {
      num--
    }
    let newShoppingList = this.data.shoppingList;
    newShoppingList[index].num = num;
    //使列表中数据变化与购物车中保持一致
    let newList = this.data.imgsList;
    for (let i = 0; i < newList.length; i++) {
      if (newList[i].detail.type === newShoppingList[index].type && newList[i].num > 0) {
        newList[i].num--
      }
    }
    //数量为0时清楚选项
    if (num === 0) {
      newShoppingList.splice(index, 1)
    }
    //返回给前台
    this.setData({
      shoppingList: newShoppingList,
      imgsList: newList
    });
    this.countNum();
    this.count()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})