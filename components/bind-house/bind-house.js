// components/bind-house/bind-house.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title:{
      type: String,
      value: "绑定信息"
    },
    message: {
      type: String,
      value: "当前还没绑定信息"
    },
    btn: {
      type: String,
      value: "立即绑定"
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
    handleBindHouse() {
      this.triggerEvent('tapBindHouse',{},{})
    }
  }
})
