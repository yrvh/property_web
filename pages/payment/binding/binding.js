// pages/payment/binding/binding.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    bindTitle: "绑定信息",
    bindMessage: "当前还没绑定信息",
    bindBtn: "立即绑定",
    messageNum: 0,
    showHouse: false,
    showRemove: false,
    houseList: [],
    activeRemoveBtn: 1,
    bindSuccess: false,
    showSuccess: false,
    isOk: true,
  },

  handleShowHouse() {   // 点击绑定房间号的函数
    this.setData({
      showHouse: true,
    })
  },
  handleHouseClose() {   // 点击关闭房间号的函数
    this.setData({
      showHouse: false,
    })
  },
  handleHouseBtn() {   // 点击确定按钮 提交绑定信息
    if(this.data.isOk){
      this.setData({
        showSuccess: true,
        bindSuccess: true,
      })
    }
    else{
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
    })
    if(this.data.houseList.length>0){
      this.setData({
        bindBtn: "新增绑定"
      })
    }
  },
  handleSuccessClose() {   // 点击右上角叉号,关闭成功提示信息的弹窗
    this.setData({
      showSuccess: false,
    })
  },




  handleRemoveHouse() {   // 点击解除绑定,函数
    this.setData({
      showRemove: true,
    })
  },
  handleRemoveClose() {   // 点击右上角叉号,  关闭 解除绑定房间的页面
    this.setData({
      showRemove: false,
    })
  },
  handleNoRemove(e) {   // 点击取消按钮,  取消 解除绑定房间
    this.setData({
      activeRemoveBtn: parseInt(e.currentTarget.dataset.num),
    })
    setTimeout(()=>{
      this.setData({
        showRemove: false,
        activeRemoveBtn: 1
      })
    }, 400)
  },
  handleSureRemove(e) {   // 点击取消按钮,  确定 解除绑定房间
    this.setData({
      activeRemoveBtn: parseInt(e.currentTarget.dataset.num),
    })
    setTimeout(() => {
      this.setData({
        showRemove: false,
      })
    }, 100)
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