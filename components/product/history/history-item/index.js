// components/product/vcontent/history/history-item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    historyTitle: {
      type: String,
      value: "好喝的咖啡"
    },
    price: {
      type: Number,
      value: 0
    }
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
