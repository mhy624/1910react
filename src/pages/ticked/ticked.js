import styled from "styled-components";


export const PagesName = styled.div`
    width:100%;
    height:5.68rem;;
    background:#eee;
    .HanderTic-nav{
        width:90%;
        height:.6rem;
        background:#fff;
        margin:auto;
        overflow: hidden;
        border-radius:.1rem;
        p{
            font-size:.14rem;
        }
        p:nth-child(1){
           margin: .08rem 0 .02rem;
        }
    }
    .ticked-div{
        width:90%;
        height:3.5rem;
        margin:auto;
        overflow: hidden;
        font-size:.14rem;
        color: #7b8187;
        line-height:.3rem;
        h2{
            font-size:.24rem;
           margin: .1rem 0 ;
           color:#000;
        }
    }
    .gradual-red{
        width:100%;
        height:.6rem;
        background:#fff;;
        position:fixed;
        top:6.12rem;
        left:0;
        display:fiex;
        justify-content: space-between;
        align-items: center;
        span{
            display:block;
            width:3.07rem;
            height:.44rem;
            text-align:center;
            background:blue;
            line-height:.44rem;
            font-size:.2rem;
            color:#fff;
            background:#ff2959;
            border-radius:.1rem;
        }
    }
    .kongbai{
        width:100%;
        height:1rem;
        background:#eee;
    }
`
export const HanderTic = styled.div`
    width:100%;
    height:2.5rem;
    .HanderTic-div{
        width:90%;
        height:.6rem;
        margin:auto;
        display:flux;
        justify-content :space-between;
        align-items:center;
        font-size:.16rem;
        .HanderTic-divs{
        display:flux;
        justify-content :space-between;
        .HanderTic-p{
            margin-right:.14rem;
            }
        }
    }
    .HanderTic-divss{
        width:100%;
        height:1.8rem;
        margin-top:.1rem;
        display:flux;
        justify-content :space-between;
        img{
            width:1.2rem;
            height:1.6rem;
            border-radius:.1rem;
            margin-left:.2rem;
        }
        .HanderTic-divssvvv{
            width:2rem;
            height:1.37rem;
            margin-right:.2rem;
            h3{
                margin-bottom:1.06rem;
            }
            p{
                font-size:.14rem;
            }
        }
    }
`

export const TickedDiss = styled.div`
    width:100%;
    background:#eee;
    overflow: hidden;
    >div{
        width:90%;
        margin:auto;
        overflow: hidden;
        h3{
            font-size:.24rem;
           margin: .1rem 0 ;
           color:#000;  
        }
        p{
            font-size: .14rem;
            color: #7b8187;
            line-height: .4rem;
            margin-left:.3rem;
        }
        span{
            color:#ff2959;
            font-size:.14rem;
            margin-left:1.2rem;
        }
    }
    .faq-div{
        width:90%;
        height:.45rem;
        background:#fff;
        margin: .2rem auto;
        line-height:.45rem;
        border-radius:.1rem;
        p{
            font-size:.2rem;
        }
    }
`

