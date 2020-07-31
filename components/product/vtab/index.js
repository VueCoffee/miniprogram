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
        }
        ,
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
  relations: {
    '../vcontent/index' : {
      type: "child",
      linked: function(target) {
        const _this = this
        target.methods.calcHeight(function(rect) {
          _this.data._contentHeight[target.properties.tabIndex] = rect.height
          console.log(rect.height)
          _this.calcHeight()
        })
      }
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleTabClick: function(event) {
      const _heightRecords = this.data._heightRecords
      const index = event.currentTarget.dataset.index
      const contentScrollTop = _heightRecords[index - 1] || 0
      console.log(contentScrollTop)
      this.setData({
        activeTab: event.currentTarget.dataset.index,
        contentScrollTop: contentScrollTop
      })
    },
    calcHeight: function() {
      const _contentHeight = this.data._contentHeight
      const _heightRecords = []
      let temp = 0;
      this.properties.barData.forEach(function(item, index) {
        _heightRecords[index] = temp + (_contentHeight[index] || 0)
        temp = _heightRecords[index] 
      })
      this.data._heightRecords = _heightRecords
    }
  }
})
