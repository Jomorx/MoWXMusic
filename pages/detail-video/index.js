import {
    getMVDetails,
    getMVUrl,
    getReatedVideo
} from "../../service/api_video"

// pages/detail-video/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        mvURLInfo: {},
        mvDetail: {},
        relatedVideos: []
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad({id}) {
        this.getPageData(id)
    },
    getPageData(id) {
        getMVUrl(id).then(res => {
            // this.mvURLInfo = res.data
            this.setData({
                mvURLInfo: res.data
            })
        })

        getMVDetails(id).then(res => {
            this.setData({
                mvDetail: res.data
            })

        })
        getReatedVideo(id).then(res => {
            this.setData({
                relatedVideos: res.data
            })

        })
    }
})