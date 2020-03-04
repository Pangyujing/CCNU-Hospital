// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    newsList:[
      {
        id: "123",
        date: "2019-12-25",
        title: "发热护理措施"
      },
      {
        id: "456",
        date: "2019-12-25",
        title: "静脉输液小知识"
      },
      {
        id: "789",
        date: "2019-11-13",
        title: "秋天谨防感冒"
      },
      {
        id: "134",
        date: "2019-11-11",
        title: "水痘防治及护理"
      },
      {
        id: "134",
        date: "2019-10-30",
        title: "关爱女性健康讲座"
      }
    ],
    imgList: [
      "/images/yiyuan.jpg","http://img1.gtimg.com/edu/pics/hv1/176/110/2088/135800426.jpg","http://img1.gtimg.com/edu/pics/hv1/175/110/2088/135800425.jpg","http://img1.gtimg.com/edu/pics/hv1/202/1/2219/144290932.jpg",
    ],
    //是否采用衔接滑动  
    circular: true,
    //是否显示画板指示点  
    indicatorDots: false,
    //选中点的颜色  
    indicatorcolor: "#000",
    //是否竖直  
    vertical: false,
    //是否自动切换  
    autoplay: true,
    //自动切换的间隔
    interval: 2500,
    //滑动动画时长毫秒  
    duration: 100,
    //所有图片的高度  
    imgheights: [],
    //图片宽度 
    imgwidth: 750,
    //默认  
    current: 0
  },
  goToHealth: function () {
    wx.navigateTo({
      url: '/pages/health/health',
    })
  },
  goToTime: function () {
    wx.navigateTo({
      url: '/pages/time/time',
    })
  },
  goToGide: function () {
    wx.navigateTo({
      url: '/pages/gide/gide',
    })
  },
  imageLoad: function (e) {//获取图片真实宽度  
    var imgwidth = e.detail.width,
      imgheight = e.detail.height,
      //宽高比  
      ratio = imgwidth / imgheight;
    console.log(imgwidth, imgheight)
    //计算的高度值  
    var viewHeight = 750 / ratio;
    var imgheight = viewHeight;
    var imgheights = this.data.imgheights;
    //把每一张图片的对应的高度记录到数组里  
    imgheights[e.target.dataset.id] = imgheight;
    this.setData({
      imgheights: imgheights
    })
  },
  bindchange: function (e) {
    // console.log(e.detail.current)
    this.setData({ current: e.detail.current })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      index_key: indexData.newsList,
    })
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