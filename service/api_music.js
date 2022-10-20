import chRequest from './index'
export const getBanners= ()=>chRequest.get("/banner",{type:2})
export const getRankings=(idx)=>chRequest.get("/top/list",{idx})