App({
  globalData: {
    name: '张三',
    age: 18
  },
  onLoad: function () {
    console.log(this.globalData.name);
  }
})