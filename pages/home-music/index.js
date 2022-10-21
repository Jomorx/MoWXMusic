// pages/home-music/index.js
import {
    getBanners, getSongMenu
} from '../../service/api_music'
import {rankingStore} from '../../store/index'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
const throttleQueryRect = throttle(queryRect,1000)
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners: [],
        swiperHeight:0,
        recommendSongs:[],
        hotSongMenu:[],
        recommendSongMenu:[]
    },
    onLoad() {
        this.getPageData()
        rankingStore.dispatch("getRankingDataAction")
        rankingStore.onState("hotRanking",res=>{
            if(!res.tracks) return 
            const recommendSongs = res.tracks.slice(0,6)
            // console.log(recommendSongs);
            this.setData({recommendSongs})
        })
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
        getSongMenu("全部").then(res=>{
            // console.log(res);
            this.setData({hotSongMenu:res.playlists})
        })
        getSongMenu("日语").then(res=>{
            // console.log(res);
            this.setData({recommendSongMenu:res.playlists})
        })

    },
   async handleSwiperImageLoaded() {
    const rect= await  throttleQueryRect(".swiper-image")
      this.setData({swiperHeight:rect[0].height})
    }
})