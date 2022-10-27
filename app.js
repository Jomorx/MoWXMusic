// app.js
App({
    globalData:{
        screenWidth: 0,
        screenHeight: 0,
        statusBarHeight: 0,
        navBarHeight: 44
    },
    onLaunch(){
        //获取设备高度等
        const info = wx.getSystemInfoSync()
        this.globalData.screenWidth = info.screenWidth
        this.globalData.screenHeight = info.screenHeight
        this.globalData.statusBarHeight = info.statusBarHeight
        this.globalData.deviceRadio = info.screenHeight/info.screenWidth
        
        }
})
