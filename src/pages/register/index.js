import React, { Component } from 'react'
import { WeekWrapper } from "./styled"
import {Link} from 'react-router-dom'
export default class RegisterPage extends Component {
    constructor(){
        super()
        this.state=({
            account:"",
            password:"",
            flag:false,
        })
    }
    render() {
        let {account , password,flag} = this.state;
        return (
            <WeekWrapper>
                <div className="LoginHeader">
                    <Link to="/home">&lt;</Link>
                </div>
                <div className="LoginMain">
                    <h3>会员注册</h3>
                    <div>
                        <input type="text" placeholder="请输入手机号" value={account} onChange={this.handleaccount.bind(this)}/>
                        <input type="text" placeholder="请输入密码" value={password} onChange={this.handlepassword.bind(this)}/>
                        <span className="tubiao"></span>
                        <input type="text" placeholder="验证码"/>
                            <a className="authcode">获取验证码</a>
                        <div className="clicklogin" onClick={this.handleregister.bind(this)}>注册</div>
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
                {flag?<div className="registersuccess">
                    <p>恭喜您！注册成功</p>
                    <p>loading...</p>
                 </div>:""}
            </WeekWrapper>
        )
    }
    handleaccount(e){
        let accountvalue = e.target.value
        this.setState({
            account:accountvalue,
        })
    }
    handlepassword(e){
        let passwordvalue = e.target.value
        this.setState({
            password:passwordvalue,
        })
    }
    handleregister(){
        let object={},arr=[],localobject={}
        object.account=this.state.account
        object.password=this.state.password
       //先判断storage中是否含有数据，如果有，先将数据取出来存入到arr中
        let usernews = localStorage.getItem("news");
        if(usernews != null){
            //取出localStorage的数据
            arr=JSON.parse(usernews)
        }
        arr.push(object);
        localStorage.setItem("news",JSON.stringify(arr))

        this.setState({
            flag:true,
        })
        window.setTimeout(()=>{
            this.props.history.push("/login")
        },1500)
    }
}
