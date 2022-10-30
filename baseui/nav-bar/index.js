// baseui/nav-bar/index.js
const globalData = getApp().globalData

Component({
    options: {
        multipleSlots: true
    },

    properties: {
        title: {
            type: String,
            value: "默认标题"
        },
        handleClickLeftArrow: {
            type: Function,
            value: () => wx.navigateBack({
                delta: 0,
            })
        }
    },
    data: {
        statusBarHeight: globalData.statusBarHeight,
        navBarHeight: globalData.navBarHeight
    },
    methods: {
        handleClickLeftArrow(){
            this.properties.handleClickLeftArrow()
        }
    }
})