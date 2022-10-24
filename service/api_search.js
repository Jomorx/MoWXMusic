import moRequest from "./index";

export const getSearchHot=()=>moRequest.get("/search/hot")
export const getSearchSuggest=(keywords)=>moRequest.get("/search/suggest",{
    keywords,
    type:"mobile"
})
export const getSearchResult=(keywords)=>moRequest.get("/search",{keywords})