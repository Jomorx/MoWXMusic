import chRequest from './index'

export function getTopMV(offset, limit = 10) {
  return chRequest.get("/top/mv", {
    offset,
    limit
  })
}
export function getMVDetails(mvid){
    return chRequest.get(`/mv/detail`,{mvid})
}

export function getMVUrl(id){
    return chRequest.get("/mv/url",{id})
}

export function getReatedVideo(id){
    return chRequest.get("/related/allvideo",{id})
}