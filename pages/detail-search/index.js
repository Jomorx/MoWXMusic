// pages/detail-search/index.js
import {
    getSearchHot,
    getSearchResult,
    getSearchSuggest
} from "../../service/api_search"
import debounce from "../../utils/debounce"
import stringToNodes from "../../utils/stringToNodes"
const debounceGetSearchSuggest = debounce(getSearchSuggest, 300)
Page({
    data: {
        hotKeyWords: [],
        suggestSongs: [],
        suggestSongsNodes: [],
        searchKeyword: "",
        resultSongs:[]
    },
    onLoad(options) {
        this.getPageData()
    },
    handleSearchChange(e) {
        const {
            detail: searchKeyword
        } = e
        this.setData({
            searchKeyword
        })
        if (searchKeyword.length === 0) {
            this.setData({
                suggestSongs: [],
                resultSongs:[]
            })
            return
        }
        debounceGetSearchSuggest(searchKeyword).then(({
            result: {
                allMatch
            }
        }) => {
            const suggestKeywords = allMatch.map(item => item.keyword)
            const suggestSongsNodes = []
            for (const keyword of suggestKeywords) {
                const nodes = stringToNodes(keyword,searchKeyword)
                suggestSongsNodes.push(nodes)
            }
            this.setData({
                suggestSongsNodes: suggestSongsNodes
            })
            this.setData({
                suggestSongs: allMatch
            })
        })
    },
    getPageData() {
        //获取热词
        getSearchHot().then(res => {
            this.setData({
                hotKeyWords: res.result.hots
            })
        })
    },
    handleSearchAction(e){
        const {searchKeyword} = this.data
        getSearchResult(searchKeyword).then(({result:{songs}})=>{
            this.setData({resultSongs:songs})
        })
    },
    handleKeywordItemClick(e){
        const {keyword}= e.currentTarget.dataset
        this.setData({searchKeyword:keyword})
        this.handleSearchAction()
    }
})