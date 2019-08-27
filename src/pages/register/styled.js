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
                margin-bottom:.28rem;
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
                background-position:0px -99px;
                background-size: 0.8rem 25rem;
            }
            .authcode{
                position: absolute;
                right: 0px;
                top:138px;
                display: block;
                font-size: 0.13rem;
                width:1rem;
                height: 0.45rem;
                text-align: center;
                line-height: 0.45rem;
                color:#ff3a56;
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
            }
            .mainbottom{
                margin: 0.75rem 0  0.4rem 0;
                height:.75rem;
                width: 100%;
                text-align: center;
                span{
                    a{
                        font-size: 0.14rem;
                        margin-bottom: 0.35rem;
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
    
`