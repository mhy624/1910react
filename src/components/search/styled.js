import styled from "styled-components"

export const WeekWrapper = styled.div`
    width: 100%;
    height:6.16rem;
    .searchheader{
        width: 100%;
        height:.84rem;
        text-align:center;
        position: relative;
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
    .searchmain{
        width:100%;
        height:4.56rem;
    }
    .searchbottom{
        width:100%;
        height:.77rem;
        text-align:center;
        box-shadow: 0 -20px 15px -9px #f4f4f4 inset;
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
`