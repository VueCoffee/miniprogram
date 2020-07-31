// components/product/vcontent/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    tabIndex: {
      type: Number,
      value: 0
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  relations: {
    '../vtab/index' : {
      type: 'parent'
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    calcHeight: function(callback) {
      const query = this.createSelectorQuery()
      query.select('.vcontent-view').boundingClientRect(function(rect) {
        console.log(rect.height)
        callback && callback(rect)
      }).exec()
    }
  }
})
