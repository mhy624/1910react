import styled from "styled-components";

export const Header = styled.div`
width:100%;
height:.5rem;
display: flex;
justify-content:space-between;
align-items: center;
font-size:.15rem;
position:fixed;
top:0;
left:0;
z-index:10;
background:#fff;
    .fanhui{
    margin-left:.14rem;
    }
    .suosou{
        margin-right:.14rem;
    }
`
export const Classify = styled.div`
    width:100%;
    height:.5rem;
    position:fixed;
top:.5rem;
left:0;
background:#fff;
z-index:10;
   div{
    width:100%;
    height:.5rem;
    display: flex;
    justify-content:space-between;
    align-items: center;
    font-size:.14rem;
    p:nth-child(1){
        margin-left:.4rem;
    }
    p:nth-child(3){
        margin-right:.4rem;
        }
   }
    ul{
        position:absolute;
        top:.9rem;
        width:100%;
        height:auto;
        display:flex;
        flex-wrap:wrap;
        justify-content:space-between;
        overflow:scroll;
        background:#fff;
        z-index:100;
        li{
            width:33%;
            height:.4rem;
            text-align:center;
            line-height:.4rem;
            font-size:.14rem;
        }
    }
`
export const Contertext=styled.div`
    width:100%;
    height:auto;
    margin-top:1rem;
    .Contertext-div{
        width:3.33rem;  
        height:1.29rem;
        margin:0 auto;
        display: flex;
        align-items: center;
        justify-content:space-between;
        color: #999ea3;
        font-size:.12rem;
        img{
            width:0.85rem;
            height:1.13rem;
            border-radius: .1rem;
        }
        .Contertext-divs{
            width:2.35rem;
            height:1.11rem;

            .Contertext-h3{
                font-size:.13rem;
                color:#000;
            }
            .Contertext-p{
                margin-top:.14rem;
                font-size:0;
                color: #999ea3;
                font-size:.12rem;
            }
            .Contertext-ps{
              
            }
            .Contertext-pre{
                color: #ff3a56;
                font-size: 0.14rem;
            }
        }
    }
    .bottom{
        width:100%;
        height:.5rem;
        .botton-div{
            width:1rem;
            height:.3rem;
            background:#eee;
            font-size:.16rem;
            text-align:center;
            line-height:.3rem;
            margin:0 auto;
            color:#ff7e6f;
            margin-top:.1rem;
            border-radius: .2rem;
        }
    }
`

export const BottomCon=styled.div`
    width:100%;
    height:1.2rem;
    background:#eee;
`





