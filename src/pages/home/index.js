import React, { Component } from 'react'
import { HomeWrapper } from "./styled"
import { Page } from "@common/commonStyledM"
import { venue_api } from "@api/home"
import { home_api } from "@api/home"
import Swiper from 'swiper/dist/js/swiper.js'
import 'swiper/dist/css/swiper.min.css'
export default class Home extends Component {
    constructor(props){
        super(props);
        this.state = {
            list: [],
            pic: [],
            venue:[],
            city:'全国',
            banner:[
                "//static.228.cn/upload/2019/08/20/1566273354714_x1l8.jpg",
                "//static.228.cn/upload/2018/11/17/1542430574022_i1w5.jpg",
                "//static.228.cn/upload/2019/07/22/1563778969714_b7o1.jpg",
                "//static.228.cn/upload/2019/07/09/1562654036473_e5c7.jpg",
                "//static.228.cn/upload/2019/07/26/1564137082824_n5j6.jpg",
                ],
            url: "",
            flag:true
        }
    }
        

    render() {
        let { list, pic ,banner,venue,flag,city} = this.state;
        return (
            <Page>
                <HomeWrapper>
                    {/*头部*/}
                    <header>
                        <div className="header_l" onClick={this.goCity.bind(this)}>{city}</div>
                        <div className="header_r" onClick={this.goOrder.bind(this)}><input type="text" placeholder="搜索"></input></div>
                    </header>
                    {/*轮播*/}
                    <div className="banner">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                {
                                    banner.map((child,ids)=>(
                                        <div key={ids} className="swiper-slide"><img src={child} alt=""/></div>
                                    ))
                                }
                            </div>
                            {/*如果需要分页器 */}
                            <div className="swiper-pagination"></div>
                        </div>
                    </div>
                    {/*分类*/}
                    <div className="kind">
                        <ul className="one">
                            <li><i className="one"></i><span>演唱会</span></li>
                            <li><i className="two"></i><span>话剧舞台剧</span></li>
                            <li><i className="three"></i><span>体育赛事</span></li>
                            <li><i className="four"></i><span>儿童亲子</span></li>
                        </ul>
                        <ul className="two">
                            <li><i className="one"></i><span>全部分类</span></li>
                            <li onClick={this.goSubject.bind(this)}><i className="two"></i><span>活动</span></li>
                            <li><i className="three"></i><span>永乐说</span></li>
                            <li><i className="four"></i><span>我的</span></li>
                        </ul>
                    </div>
                    {/*大图*/}
                    <div className="pic" onClick={this.goCampaign.bind(this)}>
                        {
                            pic.map((val, key) => (
                                <img key={key} src={val} alt="" />
                            ))
                        }
                    </div>
                    {/*小图*/}
                    <div className="main">
                        <div className="title">
                            <div onClick={this.handleToggle.bind(this)} style={{color:flag?'#000':'#ccc'}}>推荐</div>
                            <div onClick={this.handleToggle.bind(this)} style={{color:flag?'#ccc':'#000'}}>场馆</div>
                        </div>                      
                        {flag?<ul className="recommend">
                            {
                                list.map((item, index) => (
                                    <li key={index}>
                                        <img src={"https://static.228.cn" + item.PBIGIMG} alt="" />
                                        <p className="info">{item.NAME}</p>
                                        <p className="date">{item.BEGINDATE}</p>
                                        <p className="price">￥<span>{item.MINPRICE} </span><span className="gray">起</span></p>
                                    </li>
                                ))
                            }
                        </ul>:<ul className="venue">
                            {
                                venue.map((name,num)=>(
                                    <li key={num}>
                                        <img src={name.pic} alt="" />
                                        <p className="info">{name.name}</p>
                                        <p className="adress">{name.name}</p>
                                    </li>
                                )) 
                            }
                                
                        </ul>}
                    </div>
                    <div className="more" onClick={this.goFind.bind(this)}>查看更多</div>
                </HomeWrapper>
            </Page>
        )
    }
    
    async componentDidMount() {
        await new Swiper('.swiper-container', {
            autoplay: true,
            loop:true,
            pagination: {
                el: '.swiper-pagination',
            }
        });
        let data = await home_api();
        let data2=await venue_api();
        this.setState({
            list: data.data.recommendPage.list,
            pic: ["https://static.228.cn/upload/2019/06/21/1561085418197_z8x2_m1.jpg"],
            venue:data2.data.theatre_list
            // banner:data.data.slideList
        })

        if(this.props.location.query){
           this.fresh() 
        }
        
    }
    async fresh(){
        console.log(this.props.location.query)
        let cityId=this.props.location.query.cityId
        let city=this.props.location.query.city
        let data = await home_api(cityId);
        this.setState({
            list: data.data.recommendPage.list,
            pic:["https://static.228.cn/upload/2019/06/21/1561085418197_z8x2_m1.jpg"],
            city:city
        })
    }
    goCampaign(){
        this.props.history.push('/campaign')
    }
    goFind(){
        this.props.history.push('/find')
    }
    goOrder(){
        this.props.history.push('/order')
    }
    goSubject(){
        this.props.history.push('/subject')
    }
    goCity(){
        this.props.history.push('/cityM')
    }
    handleToggle(){
        this.setState({
            flag:!this.state.flag  
        })
    }
    

}

