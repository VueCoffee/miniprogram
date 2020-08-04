// components/product/vcontent/vcontent-item/index.js
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
    num: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
		reduceClick: function(event) {
      let num = this.data.num - 1
      if(num < 0) {
        num = 0
      }
      this.setData({
        num: num
      })
      this.triggerEvent('shopnum', {
        num: -1,
        price: -event.currentTarget.dataset.price
      },{
        bubbles: true,
         composed: true
      })
    },
    addClick: function(event) {
      const num = this.data.num + 1
      this.setData({
        num: num
      })
      this.triggerEvent("shopnum", {
        num: 1,
        price: event.currentTarget.dataset.price
      },{
        bubbles: true,
        composed: true
      })
    }
  }
})
