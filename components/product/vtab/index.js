// components/product/vtab/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    barData: {
      type: Array,
      value: [
        {
          title: "买过",
          description: ""
        },
        {
          title: "精选推荐",
          description: ""
        },
        {
          title: "大师咖啡",
          description: ""
        },
        {
          title: "小鹿茶精选",
          description: ""
        },
        {
          title: "健康轻食",
          description: ""
        },
        {
          title: "瑞幸坚果",
          description: "66折优惠"
        },
        {
          title: "幸运小食",
          description: "66折优惠"
        },
        {
          title: "周边潮品",
          description: ""
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    activeTab: 0,
    contentScrollTop: 0,
    _contentHeight: {},
    _heightRecords: []
  },

  lifetimes: {
    attached: function () {
      this.calcHeight()
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick: function (event) {
      const _heightRecords = this.data._heightRecords
      const index = event.currentTarget.dataset.index
      const contentScrollTop = _heightRecords[index - 1] || 0
      this.setData({
        activeTab: event.currentTarget.dataset.index,
        contentScrollTop: contentScrollTop
      })
    },
    calcHeight: function () {
      const _this = this
      const _heightRecords = []
      let temp = 0;
      this.properties.barData.forEach(function (item, index) {
        _this.calcContentHeight(index, function (rect) {
          _heightRecords[index] = temp + (rect.height || 0)
          temp = _heightRecords[index]
          _this.setData({
            _heightRecords: _heightRecords
          })
        })
      })
    },
    calcContentHeight: function (index, callback) {
      this.createSelectorQuery().select(`.vtab-vcontent-view-${index}`).boundingClientRect(function (rect) {
        callback && callback(rect)
      }).exec()
    },
    handleContentScroll: function(event) {
      const _heightRecords = this.data._heightRecords
      if(_heightRecords.length === 0) {
        return
      }
      const scrollTop = event.detail.scrollTop
      const length = this.properties.barData.length
      let index = 0
      if(scrollTop >= _heightRecords[0]) {
        for (let i = 1; i < length; i++) {
          if(scrollTop >= _heightRecords[i - 1] && scrollTop < _heightRecords[i]) {
            index = i
            break
          }
        }
      }
      if(index != this.data.activeTab) {
        this.setData({
          activeTab: index
        })
      }
    }
  }
})