import moRequest from './index'

export function getTopMV(offset, limit = 10) {
  return moRequest.get("/top/mv", {
    offset,
    limit
  })
}
export function getMVDetails(mvid){
    return moRequest.get(`/mv/detail`,{mvid})
}

export function getMVUrl(id){
    return moRequest.get("/mv/url",{id})
}

export function getReatedVideo(mvid){
    return moRequest.get("/simi/mv",{mvid})
}