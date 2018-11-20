//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    page:'https://quanmin.geekmark.cn/static/linksAppTest/index.html?_=',
    time: new Date().getTime()
  },

  onLoad: function () {
  
    
  },
  onShareAppMessage: function (options) {
    if (options.from === 'button') {
      // 来自页面内转发按钮
      console.log(options.target)
    }
    return {

      title: '随身计划书产品百宝箱!', 
      desc: '随身计划书产品百宝箱!', 
      path: 'pages/index/index' ,
      success: function (res) {
       
      },
      fail: function () {
       
      }
    }
  },
  
})
