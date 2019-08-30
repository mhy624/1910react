import {
    Home,
    Find,
    Order,
    Mine,
    Login,
    Campaign,
    Subject,
    DetailM,
    CityM
} from "@pages"

export const tabBarRoute = [
    {
        path:"/home",
        component:Home,
        meta:{
            flag:true
        },
        name:"首页",
        icon:"\ue628"
    },
    {
        path:"/find",
        component:Find,
        meta:{
            flag:true
        },
        name:"分类",
        icon:"\ue663"
    },
    {
        path:"/order",
        component:Order,
        meta:{
            flag:true
        },
        name:"搜索",
        icon:"\ue737"
    },
    {
        path:"/mine",
        component:Mine,
        meta:{
            flag:true,
            auth:true
        },
        name:"我的",
        icon:"\ue617"
    },

]

export const noTabBarRoute = [
    {
        path:"/login",
        component:Login,
        meta:{
            flag:false
        },
        name:"登陆",
       
    },
    {
        path:"/campaign",
        component:Campaign,
        meta:{
            flag:false
        },
        name:"宣传",
       
    },
    {
        path:"/subject",
        component:Subject,
        meta:{
            flag:true
        },
        name:"活动",
       
    },
    {
        path:"/detail_M",
        component:DetailM,
        meta:{
            flag:false
        },
        name:"活动",
       
    },
    {
        path:"/cityM",
        component:CityM,
        meta:{
            flag:false
        },
        name:"首页城市",
       
    }
]

export const routeConfig = tabBarRoute.concat(noTabBarRoute)