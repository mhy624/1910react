import React, { Component } from 'react'
import { WeekWrapper } from "./styled"
import {Link} from 'react-router-dom'
export default class RegisterPage extends Component {
    render() {
        return (
            <WeekWrapper>
                <div className="LoginHeader">
                    <Link to="/home">&lt;</Link>
                </div>
                <div className="LoginMain">
                    <h3>会员注册</h3>
                    <div>
                        <input type="text" placeholder="请输入手机号"/>
                        <input type="text" placeholder="请输入密码"/>
                        <span className="tubiao"></span>
                        <input type="text" placeholder="验证码"/>
                            <a className="authcode">获取验证码</a>
                        <div className="clicklogin">注册</div>
                        <div className="mainbottom">
                            <span>
                            <Link to="/login">马上登录</Link>
                            </span>
                            <div>
                                <p>登录注册表示同意<a className="pa">永乐票务用户服务协议</a></p>
                            </div>
                        </div>
                    </div>
                </div>
            </WeekWrapper>
            
        )
    }
}
