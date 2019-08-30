import React, { Component } from 'react'
import { WeekWrapper } from "./styled";

export default class MinePage extends Component {
    render() {
        return (
            <WeekWrapper>
                <div>
                    <div className="headerdiv">
                        <div className="lt">
                            <span>
                                <a>&lt;</a>
                            </span>
                        </div>
                        <div className="photo">
                            <img src="https://m2static.228.cn/images/head-photo.png" alt=""/>
                            <span>
                                <a></a>
                                <a></a>
                            </span>
                            <h4>wap132****5983</h4>
                            <div className="wallet">
                                <i><a>0张<br/>现金券</a></i>
                                <i><a>0张<br/>现金券</a></i>
                                <i><a>0张<br/>现金券</a></i>
                            </div>
                        </div>
                    </div>
                    <div className="mainwrap">
                        <div className="mainheader">
                            <a ><i></i>我的订单</a>
                            <a ><i></i>现金券</a>
                        </div>
                        <ul>
                            <li><a><span></span>收货地址</a></li>
                            <li><a><span></span>我的收藏</a></li>
                            <li><a><span></span>我的登记</a></li>
                            <li><a><span></span>我的提问</a></li>
                            <li><a><span></span>观演凭证</a></li>
                        </ul>
                    </div>
                </div>
            </WeekWrapper>
        )
    }
}
