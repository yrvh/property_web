// components/payment-notpay/notpay.js
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
    showCostDetails: false,
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleCostDetailsClose() {  // 右上角叉号
      this.setData({
        showCostDetails: false,
      })
    },
    handlePayCost() {
      this.setData({
        showCostDetails: true,
      })
    }
  }
})
