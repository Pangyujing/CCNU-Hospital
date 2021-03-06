// pages/gide/gide.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: ['地理位置', '常见问题', '联系电话'],
    currentTab: 0,
    newsList: [
      { title:"1 、关于打点滴问题",
      content: "有部分同学说，生病就医，要求打点滴，医生不允，只给开口服药，认为医生不重视。其实，这是有误区的。打针效果是快些，但打针是有创治疗，潜在的副作用（危险因素）较多，（ 1 ）造成创伤；（ 2 ）可能传染疾病；（ 3 ）还有极少数可能造成输液反映、过敏等。校医院医生是自家人，把同学当作自己的孩子，在可不打针的情况下用口服药恰恰是爱护同学，并非不重视。社会医院可不一样，动不动就打针，两个原因：（ 1 ）利益驱动，打针利润高；（ 2 ）因为打针效果快病人认为他水平高。实际上，该打针治疗，校医院会开处方安排打针的，要知道每天有很多同学打针。"},
      { title: "2 、服务态度问题",
        content:"以良好的医德医风、热情的服务态度为同学服务是我们经常抓的工作，尤其是党员先进性教育活动中我们更是加大了力度，我们强调，对同学服务，校医要充当三个角色：医生、老师、长辈，职业上为同学服务，行为上正面影响同学，感情上关心同学。通过经常性医德医风教育活动，校医院服务态度不断进步，很多患者致感谢信、表扬信、或口头表扬感谢，肯定和鼓励医务人员。但确定有少数医务人员有时做的不好。我们将继续加强医德医风教育，不断改进服务态度。"
      },
      {title:" 3 、关于药品“质量”、药品档次问题",
        content: "校医院药品都是在武汉市卫生局招标的定点正规医药公司购进的（这是卫生局的统一规定），不存在假药、过期药等质量问题，请同学放心。由于校医院是基层医院，药品档次当然比不上大医院（重病可转大医院）。但校医院根据学校的财力是在不断提高药品档次的。这次，我们对同学们的意见进行归类、分析，做出了两个调整：（ 1 ）进一步提高有关药品的档次；（ 2 ）增加了急诊时间内的药品种类。"
      },
      { title: "4 、关于医生与患者交流较少的问题",
        content: "这是一个客观存在的问题。但这里面有一个难于处理的矛盾：门诊量太大，医生需抢时间接诊所有的病人。按卫生部规定，如内科每个医生每天需接诊病人 30 人，口腔科每天每个医生接诊 18 人。当初学校学生规模 8000 人时，校医院有医务人员 91 人，而现在学校全日制学生规模2万4千人，却只有医务人员 92 人，工作量非常大，医生每人每天接诊常常是 60 人左右，有时高达 70 人甚至更高，所以医生与患者交流简短。我们将进一步要求医生尽最大努力与患者作精练交流。"},
      { title: "5 、关于医疗水平问题",
        content:"校医院的医疗水平在同等医院里应该说水平是较高的。在高校医院里，我们是一级甲等医院，武大、华工医院是二级乙等医院，比我们高一个级别，其他高校医院都比我们低，是无等级医院。我校医院的医疗水平和工作质量卫生局是首肯的（每年卫生局有多次专业检查、评价），我校医院是湖北省慢性病综合防治试点单位（武汉市仅两家，高校医院仅我们一家），还是武汉市创文明品牌医院单位（高校医院仅我们一家，需有较好基础才准争创），基本医疗水平还不错的。与大医院比较当然是有很大距离。大医院也不可能什么病都一治就好，所以我们确实存在有的病治疗效果较慢、甚至效果不明显的问题。我们将进一步加大派出进修、定期开展业务学习的力度，提高专业水平。"},
      { title:"6 、急诊挂号费问题",
        content:"有的同学提出，急诊是否可与平诊一样，不加收挂号费。急诊加收挂号费是医院普遍规矩，是政府允许的，何况我们收费很低，平诊收挂号费 1.00 元，急诊多 0.5 元。校医院是严格按政府规定、学校管理要求进行收费的，不会乱收费。"},
      { title:"7 、服务时间问题",
        content:"有的同学提出：“就诊时间是否能放宽些，更方便学生。”校医院是校内为数不多的一年 365 天，每天 24 小时服务的单位，医务人员非常辛苦。若延长正常的就诊时间，短时间是可以的，但经常性的要求医务人员延长上班时间，他们会从维权角度强调医院违反劳动法。业余时间就诊，医院是保证医务人员值班的。我们将逐步克服困难，争取主要科室适当延长正常上班时间。"},
      { title:"8 、关于有时有的科室找不到医生问题",
        content:"这是目前难于克服的一个问题。校医院麻雀小肝胆全，有的科室只有一个医生，当这个医生参加中午值班、晚上值班、双休日值班时，就需给于补休，一个医生的科室在补休时也就间歇地关门了。经校医院不断发展后，医生增加了，这个问题可逐步解决。"},
      {title:"9 、医院环境、设施、条件太差问题",
        content:"这是长期的老大难问题，我们多次向学校呼吁，也未得到较大力度的改善。学校财力是有限的，重点是向教学、科研倾斜，这点我们是理解的。我们希望学校在各单位条件都改善之后，近期内能回头来重视一下医院建设，大力改善一下医院的条件。"}
    ]
  },
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx
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