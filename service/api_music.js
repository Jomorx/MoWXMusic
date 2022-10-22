import moRequest from './index'
export const getBanners = () => moRequest.get("/banner", {
    type: 2
})
export const getRankings = (idx) => moRequest.get("/top/list", {
    idx
})
export const getSongMenu = (cat = "全部", limit = 6, offset = 0) => moRequest.get("/top/playlist", {
    cat,
    limit,
    offset
})

export const getSongMenuDetail = (id) => moRequest.get("/playlist/detail/dynamic", {
        id
    })