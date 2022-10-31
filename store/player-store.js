export const audioContext = wx.createInnerAudioContext()
import {
    HYEventStore
} from "hy-event-store";
import { getSongDetail,getSongLyric } from "../service/api_player";
import { parseLyric } from "../utils/parse-lyric"

export const playerStore = new HYEventStore({
    state: {
        currentSong:{},
        id:0,
        durationTime:0,
        lyricInfos:[],
        
        currentTime: 0,
        currentLyricText:"",
        currentLyricIndex:0,
    },
    actions: {
        playMusicWithSongIdAction(ctx, {
            id
        }) {
            ctx.id=id
            //歌曲详情
            getSongDetail(id).then(({songs}) => {
                ctx.currentSong=songs[0];
                ctx.durationTime=songs[0].dt
            })

            getSongLyric(id).then(res => {
                const lyricString = res.lrc.lyric
                const lyricInfos = parseLyric(lyricString)
                ctx.lyricInfos=lyricInfos
            })
            audioContext.stop()
            audioContext.src = `http://music.163.com/song/media/outer/url?id=${id}.mp3`
            audioContext.autoplay = true
            this.dispatch("setupAudioContextLinstenerAction")
        },
        setupAudioContextLinstenerAction(ctx){
            audioContext.onCanplay(() => {
                audioContext.play()
            })
            audioContext.onTimeUpdate(() => {
                //根据时间修改slidervalue值
                        ctx.currentTime= audioContext.currentTime * 1000
                        // sliderValue: audioContext.currentTime * 1000 / this.data.currentSong.dt * 100
                //设置歌词
                for (let i = 0; i < ctx.lyricInfos.length; i++) {
                    if(!ctx.lyricInfos.length) return 
                    const lyricInfo = ctx.lyricInfos[i];
                    if(lyricInfo.time>ctx.currentTime){
                        if(i===0) break
                        if(ctx.currentLyricIndex!==i-1){
                            const currentLyricText = ctx.lyricInfos[i-1].lyricText
                            ctx.currentLyricIndex=i-1;
                            console.log(currentLyricText);
                            ctx.currentLyricText=currentLyricText
                        }
                        break
                    }
                    
                }
            })
        }
    }
})