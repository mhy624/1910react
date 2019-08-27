import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import {Link} from 'react-router-dom'
export default class LoginPage extends Component {
    render() {
        return (
            <WeekWrapper>
                <div className="LoginHeader">
                    <Link to="/register">&lt;</Link>
                </div>
                <div className="LoginMain">
                    <h3>会员登录</h3>
                    <div>
                        <input type="text" placeholder="手机号/邮箱地址"/>
                        <input type="text" placeholder="请输入密码"/>
                        <span className="tubiao"></span>
                        <div>
                            <input type="checkbox"/>
                            <span>两周内免登录</span>
                            <a className="forget">忘记密码</a>
                        </div>
                        <div className="clicklogin">登录</div>
                        <ul>
                            <li><a ></a></li>
                            <li><a ></a></li>
                            <li><a ></a></li>
                        </ul>
                        <div className="mainbottom">
                            <span>
                                <Link to="/register">马上注册</Link>
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