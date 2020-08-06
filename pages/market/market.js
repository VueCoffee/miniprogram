// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ishome: false,
    showHead: false,
    tabsData: [{
      title: "全部",
      new: false
    }, {
      title: "咖啡系列",
      new: false
    }, {
      title: "小鹿茶系列",
      new: false
    }, {
      title: "瑞幸坚果",
      new: true
    }],
    current: 0
  },
  handleTabClick: function(event) {
    const index = e.currentTarget.dataset.index
    this.setData({activeTab: index})
  },
  handleSwiperChange: function (event) {
    const index = event.detail.current
    this.setData({
      current: index
    })
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