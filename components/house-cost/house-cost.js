// components/house-cost/house-cost.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    houseNum: {
      type: String,
      value: ""
    },
    propertyFee: {
      type: String,
      value: ""
    },
    commonFee: {
      type: String,
      value: ""
    },
    rubbishFee: {
      type: String,
      value: ""
    },
    totalFee: {
      type: String,
      value: ""
    },
    houseCostBtn: {
      type: String,
      value: "缴费"
    }
  },
  externalClasses: ['cost-btn'],

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
