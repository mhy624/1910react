import styled from 'styled-components'

export const CampaignWrapper =styled.div`
    width:100%;
    header{
        width:100%;
        height:1.9rem;
        overflow:hidden;
        position:relative;
        .btns{
            width:.3rem;
            height:.3rem; 
            background:rgba(0,0,0,0.3);
            /* background:url(https://m2static.228.cn/images/icon.png) no-repeat; */
            background-size: .75rem;
            border-radius:50%;
            text-align:center;
            line-height:.3rem;
            color:#FFF;
            font-weight:400;
            font-size:.2rem;
            position:absolute;
            top:.29rem;
            left:.15rem;
            z-index:11;
        }
        .bg{
            position:absolute;
            height: 2.5rem;
            padding-top:.6rem;
            top: -.6rem;
            left: -50%;
            width: 200%;
            border-radius: 50%;
            overflow:hidden;
            img{
                width:70%;
                position:absolute;
                left:15%;
            }
        }
    }
    .text{
        width:100%;
        height:2.5rem;
        background:#fff;
        padding:.2rem;
        div:nth-child(1){
            width:100%;
            height:.22rem;
            margin-bottom:.15rem;
            font-size: .17rem;
            text-align: center;
        }
        .main{
            width:100%;
            height:1.73rem;
            p{
                font-size: .14rem;
                line-height: .22rem;
                letter-spacing: .02rem;
                color: #7b8187;
                display: block;
                margin-inline-start: 0px;
                margin-inline-end: 0px;
            }
        }
    }
    .list{
        width:100%;
        padding:.2rem;
        .floor{
            width:100%;
            height:1.29rem;
            margin-bottom:.15rem;
            padding-bottom:.15rem;
            display:flex;
            img{
                width:.85rem;
                height:1.13rem;
                background: rgba(181, 237, 3, 0.3);
                box-shadow: 0px 1px 4px 0px rgba(58, 64, 69, 0.3);
                border-radius: .1rem;
            }
            .right{
                width:2.35rem;
                margin-left:.15rem;
                font-size:.14rem;
                div:nth-child(1){
                    height: .4rem;
                    line-height: .2rem;
                    display: block;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    font-weight:bold;
                }
                div:nth-child(2),
                div:nth-child(3),
                div:nth-child(4){
                    display: block;
                    color: #999ea3;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    overflow: hidden;
                }
                div:nth-child(2),
                div:nth-child(4){
                    margin-top: 0.1rem;
                }
                div:nth-child(3){
                    font-size:.12rem;
                    line-height:.16rem;
                }
                div:nth-child(4){
                    color:#ff3a56;
                    font-weight:bold;
                }
            }
        }
    }
`