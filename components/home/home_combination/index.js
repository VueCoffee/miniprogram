// components/home/home_combination/index.js
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
    combinationData: [
      {
        combination: true,
        image: "/image/test/combination_i.png",
        title: "巧克力拿铁&芝士牛角包",
        description: "巧克力、咖啡和芝士的美妙融合,口感绵长。",
        list: [
          {
            image: "/image/test/coffee_i.png"
          },
          {
            image: "/image/test/food_i.png"
          }
        ],
        price: 30,
        reducePrice: 8
      },
      {
        combination: false,
        image: "/image/test/combination_i1.png",
        title: "卡布奇诺&水果麦片简餐",
        description: "健康早餐搭配,让您干劲满满活力一整天!",
        list: [
          {
            image: "/image/test/coffee_i1.png"
          },
          {
            image: "/image/test/food_i1.png"
          }
        ],
        price: 29,
        reducePrice: 7
      },
      {
        combination: false,
        image: "/image/test/combination_i2.png",
        title: "冲绳黑糖拿铁& Beatz冻干黄社",
        description: "黑糖、咖啡和黄桃的美妙融合,自然清",
        list: [
          {
            image: "/image/test/coffee_i2.png"
          },
          {
            image: "/image/test/food_i2.png"
          }
        ],
        price: 32,
        reducePrice: 8
      }
    ]
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
