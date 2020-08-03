// components/home/home_guide/home_guide_item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    icon: {
      type: String,
      value: "/image/icon/icon_coffee.png"
    },
    title: {
      type: String,
      value: "咖啡"
    },
    description: {
      type: String,
      value: "咖啡好喝的很"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    toProductList: function() {
      wx.navigateTo({
        url: '/pages/product/product',
      })
    }
  }
})
