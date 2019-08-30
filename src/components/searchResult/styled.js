import styled from "styled-components"

export const WeekWrapper = styled.div`
    width: 100%;
    height:6.16rem;
    .searchheader{
        width: 100%;
        height:.84rem;
        text-align:center;
        position: relative;
        background:#fff;
        z-index:10
        h3{
            font-weight: normal;
            font-size: 17px;
            line-height:.4rem
        }
        a{
            position: absolute;
            top:0;
            left:10px;
            font-size:26px;
            color:#fc5d72;
        }
        div{
            height: .34rem;
            margin: .1rem .2rem 0;
            position: relative;
            display: flex;
            input{
                font-size: .13rem;
                padding: 0 .3rem;
                width:2.955rem;
                height: .34rem;
                border: none;
                background: #f3f4f5;
                border-radius: 1rem;
                outline: none
            }
            a{
                width: .45rem;
                height: .34rem;
                line-height: .34rem;
                text-align: center;
                display: block;
                color: #5f646a;
                font-size: 14px;
                position: absolute;
                top:0;left:295px;
            }
            i{
                display: block;
                width: .14rem;
                height: .14rem;
                position: absolute;
                top:8px;left:9px;
                background:url(https://m.228.cn/images/icon.png) no-repeat;
                background-size: 1.5rem;
                background-position: 0 -28.76rem;
            }
        }
    }
    .headerclass{
        width:100%;
        height: .458rem;
        border-bottom:1px solid #fcfcfc ;
        position: relative;
        background:#fff;
        z-index:10
        ul{
            display: flex;
            border-bottom: 1px solid #f9fafa;
            li{
                flex: 1;
                text-align: center;
                line-height: .45rem;
                color: #999ea3;
                position: relative;
                text-overflow: ellipsis;
                white-space: nowrap;
                overflow: hidden;
                padding: 0 .2rem 0 0.1rem;
                font-size: 14px;
                i{
                    position: absolute;
                    right: 7%;
                    top: .2rem;
                    width: 0.15rem;
                    height: .15rem;
                    display: block;
                    background:url(https://m.228.cn/images/icon.png) no-repeat;
                    background-size: 1.5rem;
                    background-position: 0 -29.4rem;
                }
            }
        }
    }
    .headermain{
        width:100%;
        height:auto;
        padding: .2rem;
        background: #fff;
        .mainmain{
            width:3.35rem;
            height:auto;
            a{
                display: block;
                margin-bottom: .15rem;
                border-bottom: 1px solid #fafafb;
                padding-bottom: .15rem;
                overflow: hidden;
                color: #333;
                .mainphoto{
                    position: relative;
                    float: left;
                    width: .85rem;
                    height: 1.13rem;
                    border-radius: .1rem;
                    overflow: hidden;
                    box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
                    i{
                        background-position: 0 -24.19rem;
                        display: block;
                        height: .20rem;
                        line-height: .20rem;
                        color: #fff;
                        font-style: normal;
                        position: absolute;
                        top: 0;
                        font-size: .11rem;
                        font-weight: bold;
                        border-radius: .1rem 0;
                        padding: 0 .05rem;
                        left: 0;
                        text-align: center;
                        background-size: 1.5rem;
                        background:url(https://m.228.cn/images/icon.png) no-repeat;
                        background: linear-gradient(to right, #ff7e6f, #ff2959);
                        box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);

                    }
                    img{
                        width:.85rem;
                        height:1.13rem;
                    }
                }
                .mainwrap{
                    margin-left: .15rem;
                    float: left;
                    width: calc(100% - 1rem);
                    b{
                        height: .4rem;
                        line-height: .2rem;
                        display: block;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        display: -webkit-box;
                        font-size:14px;
                        font-weight:900;
                    }
                    span{
                        display: block;
                        color: #999ea3;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                        overflow: hidden;
                    }
                    span:nth-child(2){
                        margin-top: 0.1rem;
                        font-size:14px;
                    }
                    span:nth-child(4){
                        margin-top: 0.1rem;
                        b{
                            color: #ff3a56;
                            font-size: 0.14rem;
                            margin-right: 0.05rem;
                        }
                    }
                }
            }
        }
        .searchbottom{
        width:100%;
        height:.77rem;
        text-align:center;
        box-shadow: 0 -20px 15px -9px #f4f4f4 inset;
        margin-bottom:1.1rem;
        div{
            width:100%;
            height:100%;
            box-shadow: 2px 20px 15px -9px #f4f4f4 inset;
            p{
                margin-bottom: 0.1rem;
                padding-top: 0.2rem;
                
                a{
                    margin: 0 .15rem;
                    color: #5f646a;
                    font-size: .12rem;
                }
            }
            span{
                color: #ccd1d6;
                font-size: .11rem;
                font-style: normal;
            }
        }
    }
    }
    
    
`