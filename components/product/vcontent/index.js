// components/product/vcontent/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabIndex: {
      type: Number,
      value: 0
    },
    contentTitle: {
      type: String,
      value: "推荐"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    cofficeData: [
      {
        image: "/image/test/coffee_i.png",
        name: "冲绳黑糖拿铁",
        price: 27,
        hot: true
      },
      {
        image: "/image/test/coffee_i1.png",
        name: "陨石焦糖拿铁",
        price: 27,
        hot: true
      },
      {
        image: "/image/test/coffee_i2.png",
        name: "巧克力摩卡",
        price: 24,
        hot: true
      },
      {
        image: "/image/test/coffee_i.png",
        name: "卡布奇洛",
        price: 21,
        hot: false
      },
      {
        image: "/image/test/coffee_i1.png",
        name: "陨石焦糖拿铁",
        price: 27,
        hot: false
      },
      {
        image: "/image/test/coffee_i2.png",
        name: "巧克力摩卡",
        price: 24,
        hot: false
      }
      
    ]
  },
  relations: {
    '../vtab/index': {
      type: 'parent'
    }
  },
  lifetimes: {
    attached: function attached() {}
  },
  /**
   * 组件的方法列表
   */
  methods: {
    calcHeight: function (callback) {
      const query = this.createSelectorQuery()
      query.select('.vcontent-view').boundingClientRect(function (rect) {
        callback && callback(rect)
      }).exec()
    },
 
  }
})