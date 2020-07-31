// components/banner/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    ishome: {
      type: Boolean,
      value: false
    },
    bannerHeight: {
      type: Number,
      value: 220
    },
    dotBottom: {
      type: Number,
      value: 20
    },
    bannerData: {
      type: Array,
      value: [
        {
          image: "https://s2.luckincoffeecdn.com/luckywebrm/images/index/cover/bg-2.jpg"
        },
        {
          image: "https://s2.luckincoffeecdn.com/luckywebrm/images/index/product/bg.jpg"
        }
      ]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex: 0
  },

  /**
   * 组件的方法列表
   */
  methods: {
    swiperChange: function(event) {
      this.setData({
        currentIndex: event.detail.current
      })
    }
  }
})
