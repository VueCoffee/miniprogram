// components/navigation/navigation-product/index.js

const app = getApp()

Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    navigationBarHeight: app.globalData.navigationBarHeight
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onback: function() {
      wx.navigateBack({
        delta: 1,
      })
    }
  }
})
