const BASE_URL = "http://123.207.32.32:9001"
const header= {"cookie": "WM_TID=BdOoCIK7kA9BABRVVAI72BwgU31HDDTk; _ntes_nnid=346c541e88c339cce2e7d2e53c1309f5,1647603110617; _ntes_nuid=346c541e88c339cce2e7d2e53c1309f5; WEVNSM=1.0.0; WNMCID=korjph.1647603110729.01.0; NMTID=00OKZWH3SQO_azbUUTBlfsjt0-2gb8AAAF_nMxTfw; ntes_kaola_ad=1; __snaker__id=K3Oen4XcEPwqLd8T; _9755xjdesxxd_=32; YD00000558929251%3AWM_TID=rXPNWejj2MNAEAAEFULEG0z1SQyC5iGj; timing_user_id=time_UZZ83FlSKh; _ga=GA1.1.432359991.1665290957; Qs_lvt_382223=1665290957; Qs_pv_382223=3759234917950097400; _clck=ryopq2|1|f5k|0; _ga_C6TGHFPQ1H=GS1.1.1665295057.2.0.1665295057.0.0.0; WM_NI=Mb%2B1uNQ3ZEPKwanaUzYMgDA8XPA1VvoFqiSrOBWvBUGXGdL6KEBTIwRdLtHEvuP%2B1vxfjHqHjFbv33sdwDdNiLYeoAVv2WWG3ucGTdEmrfgXU3Okrk2XBIDmCyIXyQv2RHY%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eeafd672fba984d9d634a6b08fb6c55b969f9eb0d44283bb9ba7f5628ba8aca7f72af0fea7c3b92a8fbee5d2f84693ed96a6d341b5bfa282d8729b93a9a5c4349c908fd2d57ead9abf8ad27a8d9e9997c15f85888985cf3e899b8eb5cc7d92bc8495cb4fb6aba0ccb47ebcbaa6a9f444aa9aae97b239b1bcb9a5e746ab949786ee4b96aafeb8d64df1abada8d77087b3be87e65497ed818cf161f2888eaac76781a787b9fc5bb6ee9ea9dc37e2a3; JSESSIONID-WYYY=TShhVKQGS9pvzg%2BNR0kNYMMkov8NGb3Q2Wkb0j1ImDelKnzQ4FNdsE8ZKjkOEx9X2bq%2FCzEGWJkBEDN%5CVcf3%2Byy%2F30AKx3%2BVCzsq1j71w0ivObxcOh9ydQebjS%2F8H4Z%2B07GVcI1VeuV0XgDUA%2F7kPE%5CUiEKnqxC1BsRPhGybq%2F%2BGf6mn%3A1666853781441; _iuqxldmzr_=33; gdxidpyhxdE=2bxHx2CYah1qnz4%2BHptCI4pEJwwXz0SJVWyR%2FJl01RqouVgdeCRSnTu0ggbTSwsu3KSqaoPnd3eU905caLn94QN%5Czm0VAIxd1B4TkuDywqdc5jQjxkW%5CVeUt9%2F5JO%2BQ8j6yVSHyz0sqtIEy42flNZAE6hj%5CCrz%2B5XRWwO4UPdiOWAGL9%3A1666852882093; YD00000558929251%3AWM_NI=GhanVNBRNLlEIxBLP%2F4NWuwBeDv9mNu2FCPAHyn2s5zncPF2bYZsMq2jST0EMv0ufyedLjp3HFhzsDcAyKYWfDsOWgBbB1%2BE7iT%2BHhmLi0c9TPtXIcWnqxxTkV9fH36VbXg%3D; YD00000558929251%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eedae13cfcbc83babc5fbc868ba7d14f929b9eb1c14696ba8ba6b666bce89c8ef32af0fea7c3b92a85b8af8fd546828e82adef4f8ba88eadd325f8929996f64aa79cbadaf046b7ee8aa4d34b8ca7a2d3f23fbab2adb1c53aa2879694d07bf2b69db5b34f8faa0096e573a7bc848bf3398c9aa89bf250a19fb7acdc5da69cbdb0d66d82be8ed2aa4ff5b79ccccb64af94a7d1e2339890bcb9cc6995b2bf99fb60a98af787cb39f68aaeb9e637e2a3; MUSIC_U=c48aa116baac17634157f243afe8e02103bdb3b6460da0311b84d1646c920b6e993166e004087dd35851cd72bad382200319d4548960f7c08fcde2680c75eb44f2d66ada982ced64a0d2166338885bd7; __remember_me=true; __csrf=f7d5a5d077e740f62593568fcfa4c471"}
class MoRequest {
    request(url, method, params) {
        return new Promise((resolve, reject) => {
            wx.request({
                url: BASE_URL + url,
                method: method,
                data: params,
                header,
                success(res) {
                    resolve(res.data)
                },
                fail: reject
            })
        })
    }

    get(url, params) {
        return this.request(url, "GET", params)
    }

    post(url, data) {
        return this.request(url, "POST", data)
    }
}

const moRequest = new MoRequest()

export default moRequest