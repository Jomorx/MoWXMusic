const timeRegExp = /\[(\d{2}):(\d{2})\.(\d{2,3})\]/
export const parseLyric = (lyricString)=>{
    const lyricInfos = []
    const lyricStrings = lyricString.split("\n")
    for(const str of lyricStrings){
        const res = timeRegExp.exec(str)
        if(!res) continue
        //获取时间
        const minute = res[1]*60*1000
        const second = res[2]*1000
        const millsecond = res[3].length===2?res[3]*10:res[3]
        const time =minute+second+parseInt(millsecond)
        const lyricText = str.replace(timeRegExp,"")
        lyricInfos.push({time,lyricText})
        // console.log();
    }
    return lyricInfos
}