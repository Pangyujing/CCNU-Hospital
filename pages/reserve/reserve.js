var util = require('../../data/util.js'); 
const app = getApp();
var inputVal = '';
var msgList = [];
var windowWidth = wx.getSystemInfoSync().windowWidth;
var windowHeight = wx.getSystemInfoSync().windowHeight;
var keyHeight = 0;

/**
 * 初始化数据
 */
function initData(that) {
  inputVal = '';

  msgList = [{
    speaker: 'server',
    contentType: 'text',
    content: '同学你好！我是今天的值班医生，请问有什么问题需要解决？'
  },
  {
    speaker: 'customer',
    contentType: 'text',
    content: '我咳嗽，不知道挂哪科？'
  },
  {
    speaker: 'server',
    contentType: 'text',
    content: '同学你是否发烧呢？'
  },
    {
      speaker: 'customer',
      contentType: 'text',
      content: '不烧'
    },
  ]
  that.setData({
    msgList,
    inputVal
  })
}

// pages/reserve/reserve.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    scrollHeight: '100vh',
    inputBottom: 0,
    navbar: ['在线预约', '医师咨询'],
    currentTab: 0,
    array: ['急诊', '门诊内科', '门诊外科', '中西医结合科', '门诊康复科', '门诊口腔科', '门诊感染科', '门诊中医科', '门诊心理科', '门诊公卫科', '门诊耳鼻喉科', '门诊心血管科'],
    touxiang: 'https://manager.diandianxc.com/diandianxc/mrtx.png',
    icon_r: 'https://manager.diandianxc.com/mine/enter.png',
    sex: [
      { name: '0', value: '男', checked: 'true' },
      { name: '1', value: '女' }
    ],
    isSex: "0",
    information: [],
    userSex: '',
    modalHidden: true
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
    })
  },
  //单选按钮发生变化
  radioChange(e) {
    // console.log(e.detail.value);
    var sexName = this.data.isSex
    this.setData({
      isSex: e.detail.value
    })
  },

  //表单提交
  formSubmit(e) {
    console.log(e);
    var userSex = this.data.isSex == 0 ? '男' : '女';
    var information = e.detail.value;
    console.log(userSex);
    this.setData({
      information: e.detail.value,
      userSex,
      modalHidden: false
    });
  },

  //模态框取消
  modalCancel() {
    wx.showToast({
      title: '取消提交',
      icon: 'none'
    })
    this.setData({
      modalHidden: true,
    })
  },
  //模态框确定
  modalConfirm() {
    wx.showToast({
      title: '提交成功',
      icon: 'success'
    })
    this.setData({
      modalHidden: true
    })
  },
  //科室选择器
  bindPickerChange: function (e) {
    // console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 调用函数时，传入new Date()参数，返回值是日期和时间  
    var time = util.formatTime(new Date());
    // 再通过setData更改Page()里面的data，动态更新页面的数据  
    this.setData({
      time: time
    })
    initData(this);
    this.setData({
      cusHeadIcon: app.globalData.userInfo.avatarUrl
    });
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
     * 获取聚焦
     */
  focus: function (e) {
    keyHeight = e.detail.height;
    this.setData({
      scrollHeight: (windowHeight - keyHeight) + 'px'
    });
    this.setData({
      toView: 'msg-' + (msgList.length - 1),
      inputBottom: keyHeight + 'px'
    })
    //计算msg高度
    // calScrollHeight(this, keyHeight);

  },

  //失去聚焦(软键盘消失)
  blur: function (e) {
    this.setData({
      scrollHeight: '100vh',
      inputBottom: 0
    })
    this.setData({
      toView: 'msg-' + (msgList.length - 1)
    })

  },

  /**
   * 发送点击监听
   */
  sendClick: function (e) {
    msgList.push({
      speaker: 'customer',
      contentType: 'text',
      content: e.detail.value
    })
    inputVal = '';
    this.setData({
      msgList,
      inputVal
    });


  },

  /**
   * 退回上一页
   */
  toBackClick: function () {
    wx.navigateBack({})
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})