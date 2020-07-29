// components/home/home_combination/home_combination_item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    itemData: {
      type: Object,
      value: {
        combination: false,
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
      }
    }
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

  }
})
