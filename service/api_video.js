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

export function getReatedVideo(id){
    return moRequest.get("/related/allvideo",{id})
}