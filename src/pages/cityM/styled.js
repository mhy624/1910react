import styled from "styled-components"

export const HeaderWrapper = styled.div`
    width:100%;
    height:.4rem;
    padding:0 .4rem;
    display:flex;
    position:fixed;
    top:0;
    left:0;
    z-index:9;
    background:#FFF;
    .header_l{
        position:absolute;
        left:.1rem;
        font-size:.3rem;
        line-height:.4rem;
        color:red;
        z-index:11;
    }
    .header_r{
        width:100%;
        height:100%;
        text-align:center;
        line-height:.4rem;
        font-size:.17rem;
    }
`
export const CityMWrapper = styled.div`
    position:absolute;
    top:.4rem;
    padding:0 .2rem ;
    width:100%;
    .dw{
        width:100%;
        height:.2rem;
        margin-top:.3rem;
        color: #999;
        line-height:.2rem;
        font-size:.13rem;
        span{
            color:#FF3A56;
            font-size:.14rem;
            margin-left:.1rem;
        }
    }
    .hotcity{
        width:100%;
        height:.16rem;
        margin-top:.2rem;
        color: #999;
        font-size:.14rem;
    }
    .hot{
        width:100%;
        ul{
            width:100%;
            height:100%;
            display:flex;
            margin:.1rem 0;
            flex-wrap:wrap;
            color: #7b8187;
            font-size:.14rem;
            li{
                width:25%;
                height:.4rem;
                line-height:.4rem;
                text-align:center;
            }
        }
    }
    .morecity{
        width:100%;
        margin-top:.2rem;
        color: #999;
        font-size:.13rem;
    }
    .more{
        width:100%;
        margin:.1rem 0;
        ul{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            color: #7b8187;
            font-size:.14rem;
            li{
                width:25%;
                height:.4rem;
                line-height:.4rem;
                text-align:center;
            }
        }
    }
`
