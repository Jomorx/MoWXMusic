import moRequest from './index'
export const getBanners= ()=>moRequest.get("/banner",{type:2})