import {
    getSongDetail, getSongLyric
} from "../../service/api_player"
import {
    audioContext
} from "../../store/index"
import { parseLyric } from "../../utils/parse-lyric"

// pages/music-player/index.js
Page({
    data: {
        id: 0,
        currentSong: {},
        currentPage: 0,
        lyricInfos:[],
        currentLyricText:"",
        currentLyricIndex:0,
        contentHeight: 0,
        isMusicLyric: true,
        currentTime: 0,
        sliderValue: 0,
        isSliderChanging: false,
        lyricScrollTop:0
    },
    onLoad({
        id
    }) {
        this.setData({
            id
        })
        this.getPageData(id)

        const {
            screenHeight,
            statusBarHeight,
            navBarHeight,
            deviceRadio
        } = getApp().globalData
        this.setData({
            contentHeight: screenHeight - statusBarHeight - navBarHeight,
            isMusicLyric: deviceRadio >= 2
        })
        audioContext.stop()
        audioContext.src = `http://music.163.com/song/media/outer/url?id=${id}.mp3`
        audioContext.autoplay = true
        audioContext.onCanplay(() => {
            audioContext.play()
        })
        audioContext.onTimeUpdate(() => {
            //根据时间修改slidervalue值
            if (!this.data.isSliderChanging) {
                this.setData({
                    currentTime: audioContext.currentTime * 1000,
                    sliderValue: audioContext.currentTime * 1000 / this.data.currentSong.dt * 100
                })
            }
            //设置歌词
            for (let i = 0; i < this.data.lyricInfos.length; i++) {
                const lyricInfo = this.data.lyricInfos[i];
                if(lyricInfo.time>this.data.currentTime){
                    if(i===0) break
                    if(this.data.currentLyricIndex!==i-1){
                        const currentLyricText = this.data.lyricInfos[i-1].lyricText
                        this.setData({currentLyricText,
                            currentLyricIndex:i-1,lyricScrollTop:35*i-1})
                    }
                    break
                }
                
            }
        })
    },
    getPageData(id) {
        getSongDetail(id).then(res => {
            console.log(id);
            this.setData({
                currentSong: res.songs[0]
            })
        })
        getSongLyric(id).then(res=>{
            const lyricString = res.lrc.lyric
            const lyricInfos = parseLyric(lyricString)
            this.setData({lyricInfos})
        })
    },
    handleSwiperChange(e) {
        const {
            current
        } = e.detail
        this.setData({
            currentPage: current
        })
    },
    handleSliderChange(e) {
        const currentTime = this.data.currentSong.dt * e.detail.value / 100
        audioContext.pause();
        audioContext.seek(currentTime / 1000)
        this.setData({
            sliderValue: e.detail.value,
            isSliderChanging:false
        })
        this.setData({
            currentTime: currentTime
        })
    },
    handleSliderChanging(e) {
        const currentTime = this.data.currentSong.dt * e.detail.value / 100
        this.setData({
            isSliderChanging: true,
            currentTime
        })
    }
})