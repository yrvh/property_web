Page({
  data: {
    active: 2,
    notpayIconPath: "/assets/icon/notpay2.png",
    historyIconPath: "/assets/icon/history2.png",
  },
  handleChangeNav(e) {   // 切换 "待缴费用"和"缴费记录"页的函数
    this.setData({
      active: parseInt(e.currentTarget.dataset.num),
    })
    this.setData({
      notpayIconPath: "/assets/icon/notpay" + this.data.active + ".png",
      historyIconPath: "/assets/icon/history" + this.data.active + ".png",
    })
  },
  handleNotpayToBinding() {
    wx.navigateTo({
      url: '/pages/payment/binding/binding',
    })
  },
  handleHistoryToBinding() {
    wx.navigateTo({
      url: '/pages/payment/bindingHis/bindingHis',
    })
  },


  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})