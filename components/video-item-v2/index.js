// components/video-item-v2/index.js
import {
    getMVDetails,
    getMVUrl,
    getReatedVideo
} from "../../service/api_video"
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        video:{
            type:Object,
            value:{}
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        mvURLInfo: {},
        mvDetail: {},
        relatedVideos: []
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleVideoClick(e){
            wx.navigateTo({
              url: `/pages/detail-video/index?id=${e.currentTarget.dataset.id}`,
            })
        },
        
    },


    /**
     * 生命周期函数--监听页面加载
     */

})
