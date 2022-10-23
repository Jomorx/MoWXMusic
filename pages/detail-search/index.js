// pages/detail-search/index.js
import {
    getSearchHot,
    getSearchSuggest
} from "../../service/api_search"
import debounce from "../../utils/debounce"
const debounceGetSearchSuggest = debounce(getSearchSuggest, 300)
Page({
    data: {
        hotKeyWords: [],
        suggestSongs: [],
        suggestSongsNodes: [],
        searchKeyword: ""
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
                suggestSongs: []
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
                const nodes = []
                if (keyword.toLowerCase().startsWith(searchKeyword.toLowerCase())) {
                    const key1 = keyword.slice(0, searchKeyword.length)
                    const node1 = {
                        name: "span",
                        attrs: {
                            style: "color: red;",
                        },
                        children: [{
                            type: "text",
                            text: key1
                        }]
                    }
                    nodes.push(node1)
                    const key2 = keyword.slice(searchKeyword.length)
                    const node2 = {
                        name: "span",
                        attrs: {
                            // style: "color: black;",
                        },
                        children: [{
                            type: "text",
                            text: key2
                        }]
                    }
                    nodes.push(node2)
                } else {
                    const node = {
                        name: "span",
                        attrs: {
                            // style: "color: white;",
                        },
                        children: [{
                            type: "text",
                            text: keyword
                        }]
                    }
                    nodes.push(node)
                }
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
    }
})