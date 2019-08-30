import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import {Link} from 'react-router-dom'
export default class LoginPage extends Component {
    constructor(){
        super()
        this.state=({
            phonenum:"",
            passwordnum:"",
            success:false,
            loser:false
        })
    }
    render() {
        let {phonenum , passwordnum , success , loser} =this.state
        return (
            <WeekWrapper>
                <div className="LoginHeader">
                    <Link to="/register">&lt;</Link>
                </div>
                <div className="LoginMain">
                    <h3>会员登录</h3>
                    <div>
                        <input type="text" placeholder="手机号/邮箱地址" value={phonenum} onChange={this.handleaccount.bind(this)}/>
                        <input type="text" placeholder="请输入密码" value={passwordnum} onChange={this.handlepassword.bind(this)}/>
                        <span className="tubiao"></span>
                        <div>
                            <input type="checkbox"/>
                            <span>两周内免登录</span>
                            <a className="forget">忘记密码</a>
                        </div>
                        <div className="clicklogin" onClick={this.handlelogin.bind(this)}>登录</div>
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
                {success?<div className="registersuccess">
                    <p>恭喜您！登录成功</p>
                    <p>loading...</p>
                </div>:""}
                {loser?<div className="registersuccess">
                    <p>请输出正确信息...</p>
                    <button onClick={this.handlessure.bind(this)}>确定</button>
                </div>:""}
            </WeekWrapper>
        )
    }
    handlessure(){
        this.setState({
            loser:false
        })
    }
    handleaccount(e){
        let phonenumvalue = e.target.value
        this.setState({
            phonenum:phonenumvalue,
        })
    }
    handlepassword(e){
        let passwordnumvalue = e.target.value
        this.setState({
            passwordnum:passwordnumvalue,
        })
    }
    handlelogin(){
        let arr=[]
        let usernews = localStorage.getItem("news");
        arr=JSON.parse(usernews)
        for(var item in arr){
            if(arr[item].password === this.state.passwordnum && arr[item].account === this.state.phonenum ){
                this.setState({
                    success:true
                }) 
                break;
            }else{
                this.setState({
                    loser:true
            })
             break;
            }
            
        }
       
    }
        
        
}