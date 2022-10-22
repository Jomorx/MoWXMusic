// pages/home-music/index.js
import {
    getBanners,
    getSongMenu
} from '../../service/api_music'
import {
    rankingStore
} from '../../store/index'
import queryRect from '../../utils/query-rect'
import throttle from '../../utils/throttle'
const throttleQueryRect = throttle(queryRect, 1000)
Page({

    /**
     * 页面的初始数据
     */
    data: {
        banners: [],
        swiperHeight: 0,
        recommendSongs: [],
        hotSongMenu: [],
        recommendSongMenu: [],
        rankings: {
            0: {},
            1: {},
            3: {}
        }

    },
    onLoad() {
        this.getPageData()
        //发起共享数据请求
        rankingStore.dispatch("getRankingDataAction")
        rankingStore.onState("hotRanking", res => {
            if (!res.tracks) return
            const recommendSongs = res.tracks.slice(0, 6)
            this.setData({
                recommendSongs
            })
        })
        rankingStore.onState("newRanking", this.getRankingHandler(0))
        rankingStore.onState("hotRanking", this.getRankingHandler(1))
        rankingStore.onState("upRanking", this.getRankingHandler(3))
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
        getSongMenu("全部").then(res => {
            // console.log(res);
            this.setData({
                hotSongMenu: res.playlists
            })
        })
        getSongMenu("日语").then(res => {
            // console.log(res);
            this.setData({
                recommendSongMenu: res.playlists
            })
        })

    },
    async handleSwiperImageLoaded() {
        const rect = await throttleQueryRect(".swiper-image")
        this.setData({
            swiperHeight: rect[0].height
        })
    },
    getRankingHandler: function (idx) {
        return (res) => {
            if (Object.keys(res).length === 0) return
            const name = res.name
            const coverImgUrl = res.coverImgUrl
            const playCount = res.playCount
            const songList = res.tracks.slice(0, 3)
            const rankingObj = {
                name,
                coverImgUrl,
                playCount,
                songList
            }
            this.setData({
                rankings: {
                    ...this.data.rankings,
                    [idx]: rankingObj
                }
            })
            console.log(this.data.rankings)
        }
    },
})