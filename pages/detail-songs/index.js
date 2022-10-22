import {
    rankingStore
} from "../../store/index"
import {getSongMenuDetail} from '../../service/api_music'
// pages/detail-songs/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        type:"",
        ranking:"",
        songInfo:"",
    },

    /**
     * 生命周期函数--监听页面加载
     */
    async onLoad({
        ranking,type,id
    }) {
        this.setData({type})
        if(type==="rank"){
            // this.setData({songInfo})
            rankingStore.onState(ranking,this.getRankingDataHandler )
        }else if(type==="menu"){
            const res = await getSongMenuDetail(id)
            // console.log(res);
            this.setData({songInfo:res.playlist})
        }

    },
    onUnload(){
        if(this.data.ranking){

        rankingStore.offState(this.data.ranking,this.getRankingDataHandler)}
    },
    getRankingDataHandler(res) {
        this.setData({songInfo:res})
    }
})