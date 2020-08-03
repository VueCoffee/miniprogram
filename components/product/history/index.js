// components/product/vcontent/history/index.js
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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    calcHeight: function (callback) {
      const query = this.createSelectorQuery()
      query.select('.history-view').boundingClientRect(function (rect) {
        callback && callback(rect)
      }).exec()
    }
  }
})
