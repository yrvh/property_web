// pages/payment/bindingHis/bindingHis.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bindTitle: "缴费记录",
    bindMessage: "当前还未绑定房间",
    bindBtn: "立即绑定",
    messageNum: 0,
    showHouse: false,
    houseList: [],
    bindSuccess: false,
    showSuccess: false,
    isOk: false,
  },

  handleShowHouse() {   // 点击绑定房间号的函数
    this.setData({
      showHouse: true,
    })
  },
  handleCloseHouse() {   // 点击关闭房间号的函数
    this.setData({
      showHouse: false,
    })
  },
  handleHouseBtn() {   // 点击确定按钮 提交绑定信息
    if (this.data.isOk) {
      this.setData({
        showSuccess: true,
        bindSuccess: true,
      })
    }
    else {
      this.setData({
        showSuccess: false,
        bindSuccess: false,
      })
    }
    this.setData({
      showHouse: false,
      messageNum: this.data.messageNum + 1,
    })
    this.setData({
      bindMessage: "当前绑定" + this.data.messageNum + "条房间信息",
      houseList: this.data.houseList.concat(1),
      bindBtn: "新增绑定"
    })
  },



  /**
   * 生命周期函数--监听页面加载
   */
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