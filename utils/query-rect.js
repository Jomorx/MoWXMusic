export default function(selector){
    return new Promise((resolve,reject)=>{
        const query = wx.createSelectorQuery()
        query.select(selector).boundingClientRect()
        query.selectViewport().scrollOffset()
        query.exec((res) => {
            resolve(res)
        })
    })
   
} 