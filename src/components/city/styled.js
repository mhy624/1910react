import styled from "styled-components"

export const WeekWrapper = styled.div`
        width:3.75rem;
        height:100%;
        overflow-y: auto
        .citywrap{
            width:100%;
            height:auto;
            background:#fff;
            overflow-y: scroll；
            ul{
                width:100%;
                padding: .2rem .3rem;
                background: #fff;
                li{
                    height: .45rem;
                    line-height: .45rem;
                    text-align: center;
                    float: left;
                    width: calc(100% / 3);
                    list-style: none;
                    font-size:14px;
                }
            }
        }
        

`