// components/cart/list/list-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {
        image: "/image/test/coffee_i2.png",
        name: "巧克力摩卡",
        price: 24,
        hot: true
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    num: 0,
    isCheck: true
  },

  /**
   * 组件的方法列表
   */
  methods: {
    hanlderItemCheckClick: function() {
      const check = this.data.isCheck
      this.setData({
        isCheck: !check
      })
    }
  }
})
