// components/grayBG/grayBG.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },
  externalClasses: ['window-top'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleWindowClose() {
      this.triggerEvent('tapWindowClose', {}, {})
    }
  }
})
