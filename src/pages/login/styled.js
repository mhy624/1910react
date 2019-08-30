import styled from "styled-components";

export const WeekWrapper = styled.div`
    width:100%;
    height:100%;
    background:url(//m2static.228.cn/images/loginBg.jpg) no-repeat 50%;
    .LoginHeader{
        width: 3.452rem;
        height: .6rem;
        margin:0 auto;
        padding-top:.29rem;
        a{
            font-size:.26rem;
            color: #babbbc；
        }
    }
    .LoginMain{
        width:2.75rem;
        height:5.17rem;
        margin: 0.3rem 0.5rem 0;
        h3{
            width:2.75rem;
            height:.416rem;
            color:#FFFFFF;
            margin:0 0 .3rem;
            font-size:.32rem;
        }
        div{
            width:2.75rem;
            height:1.12rem;
            color:#000000;
            font-size:.14rem;
            line-height: 0.25rem;
            position: relative;
            input{
                outline-colo:blue;
                height: 0.42rem;
                width:2.77rem;
                margin-bottom:.25rem;
                border: 0.01rem solid rgba(255, 255, 255, .6);
                border-radius: 1rem;
                background: rgba(0, 0, 0, 0);
                text-align: center;
                color:#747474;
                font-size: 0.16rem;
                padding: 0 0.3rem 0 .2rem;
                outline:none;
                background:url(https://m2static.228.cn/images/icon.png) no-repeat ;
                background-position:21px -209px;
                background-size: 0.8rem 25rem;
            }
            input:nth-child(2){
                background-position:21px -238px;
            }
            .tubiao{
                display:block;
                height:.3rem;
                width:.3rem;
                position: absolute;
                top:73px;right:0px;
                background:url(https://m2static.228.cn/images/icon.png) no-repeat ;
                background-position:0px -103px;
                background-size: 0.8rem 25rem;
            }
            div{
                height: 0.192rem;
                width:2.55rem;
                margin:0 .1rem;
                color:#b4b9bc;
                line-height: 0.25rem;
                position: relative;
                input{
                    width:.15rem;
                    height:.15rem;
                    margin-right:.05rem;
                    opacity: 0.5;
                    position: absolute;
                    bottom:-.27rem;
                }
                span{
                    display:inline-block;
                    line-height: 0.25rem;
                    margin-left:.2rem
                }
                .forget{
                    color:#b4b9bc;
                    float:right
                }
            }
            .clicklogin{
                height: 0.45rem;
                width:2.75rem;
                background: rgba(255, 255, 255, .7);
                color: #fff;
                border-radius: 1rem;
                opacity: 0.8;
                font-size: 0.16rem;
                line-height: 0.45rem;
                text-indent: 1.22rem;
                margin:.2rem 0 0 0 ;
            }
            ul{
                height: 0.25rem;
                width:2.75rem;
                margin: 0.5rem 0 0;
                li{
                    height: 0.25rem;
                    width:.91rem;
                    float: left;
                    a{
                        display:block;
                        height: 0.25rem;
                        width:0.25rem;
                        background:url(https://m2static.228.cn/images/icon.png) no-repeat ;
                        background-position:0px 0px;
                        background-size: 0.8rem 25rem;
                        margin-left:0.33rem;
                    } 
                }
                li:nth-child(2){
                    a{
                        background-position:0px -36px;
                    }
                }
                li:nth-child(3){
                    a{
                        background-position:0px -74px;
                    }
                }
            }
            .mainbottom{
                margin: 0.8rem 0  0.4rem 0;
                height:.75rem;
                width: 100%;
                text-align: center;
                span{
                    a{
                        font-size: 0.14rem;
                        margin-bottom: 0.4rem;
                        display: block;
                        width:100%;
                        color:#ff3a56;
                        text-align: center;
                    }
                }
                p{
                    color: rgba(255, 255, 255, 0.4);
                    font-size: .11rem;
                    margin-bottom:.4rem
                    text-align:center;
                    a{
                        color:#a13247;
                        font-size: .11rem;
                        text-decoration: underline;
                        }
                }
                
            }
        }
    }
    .registersuccess{
        width:2.5rem;
        height:1.5rem;
        background:rgba(233,249,247,.8);
        position: absolute;
        left:63px;
        top:156px;
        text-align:center;
        border-radius:20px
        p{
            font-size:30px;
            color:red
            line-height:.75rem
        }
        button{
            width:.6rem;
            height:.4rem;
            font-size:18px;
            margin-top:.1rem;
            border:1px solid red;
            font-weight:900
        }
        
    }
    
`