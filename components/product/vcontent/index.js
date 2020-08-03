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
    }
  }
})