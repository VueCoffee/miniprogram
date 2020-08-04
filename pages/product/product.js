// pages/product/product.js
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navigationBarHeight: app.globalData.navigationBarHeight,
    ishome: false,
    shopnum: {
      num: 0,
      price: 0
    }
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

  },
  handleShopNum: function(event) {
    let shopnum = this.data.shopnum
    shopnum.num = shopnum.num + event.detail.num
    shopnum.price = shopnum.price + event.detail.price
    this.setData({
      shopnum: shopnum
    })
  }
})