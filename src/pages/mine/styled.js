import styled from "styled-components";

export const WeekWrapper = styled.div`
    width:100%;
    height:100%;
    overflow-y:scroll;
    div{
        width:100%;
        height:3.19rem;
        .headerdiv{ 
            background: url(//m2static.228.cn/images/head-poho-bg.jpg) no-repeat top;
            background-size: 120%;
            position: relative;
            
            .lt{
                width:3.45rem;
                height:.31rem;
                position: relative;
                margin:0 auto;
                padding-top:.29rem;
                span{
                    display:block;
                    width:.3rem;
                    height:.3rem;
                    background:#986e6d;
                    border-radius:50%;
                    text-align:center;
                    a{
                       color:#e9dfdf;
                       font-size:.24rem;
                       line-height:.28rem;
                    }
                
                }
            }
            .photo{
                width:3.75rem;
                height:1.04rem;
                position: absolute;
                bottom:66px;
                background: url(https://m2static.228.cn/images/person-titBg.png) no-repeat top;
                background-size: 100%;
                text-align: center;
                img{
                    display:inline-block;
                    height: .64rem;
                    width: .64rem;
                    border: 2px solid #fff;
                    border-radius: 50%;
                }
                span{
                    display:block;
                    float:right;
                    position: absolute;
                    right:0;top:25px;
                    a{
                        width: .2rem;
                        height: .2rem;
                        display: block;
                        float: left;
                        margin-right: .26rem;
                        background: url(//m2static.228.cn/img/31af021.png) no-repeat;
                        background-size: .25rem;
                    }
                    a:nth-child(2){
                        background: url(//m2static.228.cn/img/31af021.png) no-repeat;
                        background-position: 0px -29px;
                        background-size:.25rem;
                    }
                }
                h4{
                    font-size: 0.18rem;
                    margin-top: 0.1rem;
                    font-weight: normal;
                }
                .wallet{
                    height: .4rem;
                    width:3.35rem;
                    height: .4rem;
                    margin: .2rem;
                    font-size: .12rem;
                    i{
                        display:block;
                        width: 1.11rem;
                        height: .4rem;
                        float:left;
                        font-style:normal;
                        font-siza:12px;
                        a{
                            line-height:.2rem;
                        }
                    }
                }
            }
        }
    }
    .mainwrap{
        width:3.75rem;
        height:3.8rem;
        margin-bottom:.5rem;
        .mainheader{
            display: flex;
            height: .98rem;
            border-top: 1px solid #f3f4f5;
            border-bottom: 1px solid #f3f4f5;
            line-height: .98rem;
            a{
                flex: 1;
                text-align: center;
                position: relative;
                padding-top: .24rem;
                font-size: .13rem;
                i{
                   
                    background: url(https://m2static.228.cn/img/31af021.png) no-repeat;
                    width: .24rem;
                    height: .28rem;
                    display: block;
                    position: absolute;
                    top:22px;
                    left: calc((100% - .21rem)/2);
                    background-size: 120%;
                    background-position: 0 -67px;
                }
            }
            a:nth-child(2){
                i{
                    width: .28rem;
                    
                    background-position:-1px -770px;
                }
                
            }
        }
        ul{
            text-align:center;
            li{
                width:1.25rem;
                height:.9rem;
                float:left;
                padding-top:.2rem;
                font-size:13px;
                a{
                    position: relative;
                    span{
                        width: .23rem;
                        height: .26rem;
                        display: block;
                        margin-left:.51rem;
                        margin-bottom:.1rem;
                        background: url(https://m2static.228.cn/img/31af021.png) no-repeat;
                        background-size: 120%;
                        background-position: 0 -596px;
                    }
                }
                
            }
            li:nth-child(2){
                a{
                    span{
                        background-position: 0 -327px;
                    }
                }
            }
            li:nth-child(3){
                a{
                    span{
                        background-position: 0 -291px;
                    }
                }
            }
            li:nth-child(4){
                a{
                    span{
                        background-position: 0 -364px;
                    }
                }
            }
            li:nth-child(5){
                a{
                    span{
                        background-position: 0 -215px;
                    }
                }
            }
        
    }

`