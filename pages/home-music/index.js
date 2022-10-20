// pages/home-music/index.js
import {
    getBanners
} from '../../service/api_music'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
const throttleQueryRect = throttle(queryRect,1000)
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners: [],
        swiperHeight:0
    },
    onLoad() {
        this.getPageData()

    },
    handleSearchClick() {
        wx.navigateTo({
            url: '/pages/detail-search/index',
        })
    },
    getPageData() {
        getBanners().then(res => {
            this.setData({
                banners: res.banners
            })
        })

    },
   async handleSwiperImageLoaded() {
    const rect= await  throttleQueryRect(".swiper-image")
      this.setData({swiperHeight:rect[0].height})
    }
})