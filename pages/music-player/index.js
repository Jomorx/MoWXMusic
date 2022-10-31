import {
    getSongDetail, getSongLyric
} from "../../service/api_player"
import {
    audioContext,playerStore
} from "../../store/index"

// pages/music-player/index.js
Page({
    data: {
        id: 0,
        currentSong:{},
        lyricInfos:[],
        durationTime:0,

        currentPage: 0,
        currentLyricText:"",
        currentLyricIndex:0,

        contentHeight: 0,
        isMusicLyric: true,
        currentTime: 0,
        sliderValue: 0,
        isSliderChanging: false,
        lyricScrollTop:0
    },
    onLoad({id}) {
        this.setData({id})
        // playerStore.dispatch("playMusicWithSongIdAction",{id})
        this.setupPlayerStoreLinstener()
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
        // audioContext.onCanplay(() => {
        //     audioContext.play()
        // })
        // audioContext.onTimeUpdate(() => {
        //     //根据时间修改slidervalue值
        //     if (!this.data.isSliderChanging) {
        //         this.setData({
        //             currentTime: audioContext.currentTime * 1000,
        //             sliderValue: audioContext.currentTime * 1000 / this.data.currentSong.dt * 100
        //         })
        //     }
        //     //设置歌词
        //     for (let i = 0; i < this.data.lyricInfos.length; i++) {
        //         if(!this.data.lyricInfos.length) return 
        //         const lyricInfo = this.data.lyricInfos[i];
        //         if(lyricInfo.time>this.data.currentTime){
        //             if(i===0) break
        //             if(this.data.currentLyricIndex!==i-1){
        //                 const currentLyricText = this.data.lyricInfos[i-1].lyricText
        //                 this.setData({currentLyricText,
        //                     currentLyricIndex:i-1,lyricScrollTop:35*i-1})
        //             }
        //             break
        //         }
                
        //     }
        // })
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
            isSliderChanging:true
        })
    },
    handleSliderChanging(e) {
        const currentTime = this.data.currentSong.dt * e.detail.value / 100
        this.setData({
            isSliderChanging: true,
            currentTime
        })
    },
    setupPlayerStoreLinstener(){
        playerStore.onStates(["currentSong","durationTime","lyricInfos"],({currentSong,durationTime,lyricInfos})=>{
            // this.setData({currentSong,durationTime,lyricInfos})
            if(currentSong) this.setData({currentSong})
            if(durationTime) this.setData({durationTime})
            if(lyricInfos) this.setData({lyricInfos})
        })
        playerStore.onStates(["currentTime","currentLyricIndex","currentLyricText"],({currentTime,currentLyricIndex,currentLyricText})=>{
            if(currentTime&&!this.data.isSliderChanging) {
                const sliderVlaue = currentTime/this.data.durationTime*100
                this.setData({currentTime,sliderVlaue})
            }
            if(currentLyricIndex) this.setData({currentLyricIndex,lyricScrollTop:currentLyricIndex*35})
            if(currentLyricText) this.setData({currentLyricText})
        })
    }
}) 