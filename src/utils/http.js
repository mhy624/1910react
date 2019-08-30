import { fetch as fetchPolyfill } from "whatwg-fetch";
import qs from "qs";

const get = (url, data) => {
    let str = "";
    for (var key in data) {
        str += "&" + key + "=" + data[key]
    }
    url = url + str.substr(1)
    return fetchPolyfill(url, {
        headers: {
            "content-type": "application/json"
        },
        credentials: "include"
    }).then(res=>res.json())

}

const post =(url,data)=>{
    return fetchPolyfill(url,{
        method:"POST",
        headers: {
            "content-type": "application/json"
        },
        credentials: "include",
        body:qs.stringify(data)
    }).then(res=>res.json())
}
    export default {
        get,
        post
    }