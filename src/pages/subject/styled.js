import styled from 'styled-components'

export const HeaderWrapper = styled.div`
    width:100%;
    height:.4rem;
    background:#F5F6F7;
    padding:0 .4rem;
    display:flex;
    position:fixed;
    top:0;
    left:0;
    z-index:9;
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
export const SubjectWrapper =styled.div`
    background:#F5F6F7;
    width:100%;
    padding:.55rem .15rem .5rem;
    .list{
        width:100%;
        height:2.12rem;
        background:#fff;
        margin-bottom:.2rem;
        border-radius:.1rem;
        img{
            width:100%;
            height:1.5rem;
            border-radius:.1rem;
            background: rgba(197, 33, 8, 0.3);
        }
        p{
            margin:.2rem;
            font-size: 0.17rem;
            font-weight: bold;
            text-align:center;
        }
    }
    .more{
        text-align:center;
        height:.3rem;
        line-height:.3rem;
        color:#ff4a62 ;
        margin-bottom: 0.1rem;
    }
`