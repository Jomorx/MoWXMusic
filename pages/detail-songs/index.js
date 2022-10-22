import {
    rankingStore
} from "../../store/index"

// pages/detail-songs/index.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        ranking:"",
        rankingInfo:""
    },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad({
        ranking,type,id
    }) {
        if(type==="rank"){
            this.setData({ranking})
            rankingStore.onState(ranking,this.getRankingDataHandler )
        }else if(type==="menu"){
            console.log(id);
        }

    },
    onUnload(){
        if(this.data.ranking){

        rankingStore.offState(this.data.ranking,this.getRankingDataHandler)}
    },
    getRankingDataHandler(res) {
        // console.log(res);
        this.setData({rankingInfo:res})
    }
})