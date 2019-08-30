import React, { Component,Fragment } from 'react'
import { Page } from "@common/commonStyledM"
import {HeaderWrapper,CityMWrapper} from "./styled"
import {city_api} from '@api/home'
export default class CityM extends Component {
    state={
        hot:[],
        more:[],
        all:''
    }
    render() {
        let {more,hot,all} = this.state
        return (
            <Fragment>
                <Page>
                    <HeaderWrapper>
                        <div onClick={this.goHome.bind(this)} className="header_l">&lt;</div>
                        <div className="header_r">选择演出城市</div>
                    </HeaderWrapper>
                    <CityMWrapper>
                        <div className="dw">定位城市<span>北京</span></div>
                        <div className="hotcity">热门城市</div>
                        <div className="hot">
                            <ul>
                                <li>{all}</li>
                                {
                                    hot.map((child,ids)=>(
                                       <li key={ids} onClick={this.getName.bind(this,child.CITYJX,child.JXNAME)}>{child.JXNAME}</li> 
                                    ))
                                }
                                
                            </ul>
                        </div>
                        <div className="morecity">更多城市</div>
                        <div className="more">
                            <ul>
                                
                                {
                                    more.map((item,index)=>(
                                        <li key={index} onClick={this.getName.bind(this,item.CITYJX,item.JXNAME)}>{item.JXNAME}</li>
                                    ))
                                }
                                
                            </ul>
                        </div>
                    </CityMWrapper>
                </Page>
            </Fragment>
        )
    }
    goHome(){
        this.props.history.goBack()
    }
    getName(val,id){
        
        this.props.history.push({pathname:'/home',query:{cityId:val,city:id}})
    }
    async componentDidMount() {
        let data = await city_api();
        this.setState({
            more:data.data.fcitys,
            hot:data.data.hotCitys,
            all:data.data.cityName
        })
    }
    
}
