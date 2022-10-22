const BASE_URL = "http://123.207.32.32:9001"
const header= {"cookie": "WM_TID=BdOoCIK7kA9BABRVVAI72BwgU31HDDTk; _ntes_nnid=346c541e88c339cce2e7d2e53c1309f5,1647603110617; _ntes_nuid=346c541e88c339cce2e7d2e53c1309f5; WEVNSM=1.0.0; WNMCID=korjph.1647603110729.01.0; NMTID=00OKZWH3SQO_azbUUTBlfsjt0-2gb8AAAF_nMxTfw; ntes_kaola_ad=1; __snaker__id=K3Oen4XcEPwqLd8T; _9755xjdesxxd_=32; YD00000558929251%3AWM_TID=rXPNWejj2MNAEAAEFULEG0z1SQyC5iGj; timing_user_id=time_UZZ83FlSKh; _ga=GA1.1.432359991.1665290957; Qs_lvt_382223=1665290957; Qs_pv_382223=3759234917950097400; _clck=ryopq2|1|f5k|0; _ga_C6TGHFPQ1H=GS1.1.1665295057.2.0.1665295057.0.0.0; YD00000558929251%3AWM_NI=JUXOl4vLnyh8ogNy%2F8%2FTQZe2JD%2Bp1ts%2BpJvu%2BME1Al8FS8U1%2F2kvQBHX764tTWUKx4WvtDGz4Sv01vWCn1mZC2xHnT1eY4F4clySyDB3xkNVRt0xb7Gb7%2BO2wCAiWV%2FvaWE%3D; YD00000558929251%3AWM_NIKE=9ca17ae2e6ffcda170e2e6eeafd04f81eda9aff241f79a8aa6c45e868f8aadd160eda799abd73bed8f99d0c42af0fea7c3b92a8a8b98b0ef40b694a29aeb34adb9829aae34ed8c9fbbe83a8a9ce591b480b1f5c0abf57fe9938bd2c468fc9a9dd9d83bedeea597d44a8c88f9d7b78098899bacfb4095aabca5c672f88dbad1b47e959da2d2f05281eeb8a9ed60f3bb97d5c540a1b4b7b4fc5082edb88ccd5e92ac0099e13d85bef9ccce3ab59d8f8ad65eedaaafb8c837e2a3; MUSIC_U=c48aa116baac17634157f243afe8e021f810f885afa543e39face401270dae0a993166e004087dd31460bd2294081c2a73479095928a9cef8fcde2680c75eb44f2d66ada982ced64a0d2166338885bd7; __remember_me=true; __csrf=c87293e9cfcc38b9ce37aa8f564ef8db; gdxidpyhxdE=NATwPl954nXw30OMxh5TOnLhCCrwrE4M98tZZ0joh41CfIsXaVEB5j%2B%5C%5CBCE1fxMkL8Jb%5CcYlwopb8HxBj0AclS5tKvnLEag%5CPkQpiQct92dD3KV3kXOkwTarHCVRlEE%2Fpjioa7h%2F9QxP8SubjhnykJ0AuczBvARa0nCIxwDc3QYI%2Ft0%3A1666071154032; JSESSIONID-WYYY=H6H5nM2qrJvFQl%5C%2FO7xaqXc%5C8qd5cwK9J%5C8ejXMfSWbV2QqArWoea2PNrotpwyW8nAe1rEdqHNDRwGJ715WdtTpquOhHIQlbUTWJ71e%5C1ihJ5R89Xfqgo66kwUCu6xaaK7gFh531utrbTZnuWPrfjjj5fUau8XIxO9FRiINl%2Bfx641XE%3A1666081739766; _iuqxldmzr_=32; WM_NI=sDKrJCOOmdZq7ralFKmzl3hxPYnUYyTZ4fVFYSKkiv%2Bud1eEXnJ1pFlj%2FdrIHn3a3X0Xu7CSKpyEsxzSxzwfX6RIUsNoEo2RnYyo9VrgZAzvWuVGIc4Ivp5KWXKb2n%2BmQ0w%3D; WM_NIKE=9ca17ae2e6ffcda170e2e6eed6c8339489acaeea3aaaac8ea7c45e829f9f83c144f6a686a3bb7e9b888982c62af0fea7c3b92ab19c8593c9498d91a385d97bf5aeaf8dc541afa6a4d4eb749487a2b6dc739886fc87d54e9b8d858cec7ee9abacd2e84f9cb286d2f34eb0b6e185f1438cb2fd82b254f488bbd8c25989b0b7a6f274ba8db89bf66e9cea9eaad8798eb18b90b15aae87b790bc5eb2b996a2f97e95ab9aa8cc69f897ba91b84195888583b166e9b39fd1f637e2a3"}
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