import {
    getSearchHot, getSearchSuggest
} from "../../service/api_search"

// pages/detail-search/index.js
Page({

    data: {
        hotKeyWords:[],
        suggestSongs:[],
        keywords:""
    },
    onLoad(options) {
        this.getPageData()
    },
    handleSearchChange(e){
        const {detail:keywords} = e
        this.setData({keywords})
        if(keywords.length===0) return 
        getSearchSuggest(keywords).then(({result:{allMatch}})=>{
            // console.log(res);
            this.setData({suggestSongs:allMatch})
        })
    },
    getPageData() {
        //获取热词
        getSearchHot().then(res=>{
            // console.log(res);
            this.setData({hotKeyWords:res.result.hots})
        })

    }
})