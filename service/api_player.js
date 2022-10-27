import moRequest from "./index";

export const getSongDetail=(ids)=>moRequest.get("/song/detail",{ids})
export const getSongLyric = (id)=>moRequest.get("/lyric",{id})