import styled from 'styled-components'

export const HomeWrapper =styled.div`
    width:100%;
    overflow-y:auto;
    padding-bottom:.5rem;
    header{
        width:100%;
        height:.48rem;
        background: linear-gradient(to right, #ff7e6f, #ff2959);
        box-shadow: 0px 2px 6px 0px rgba(255, 37, 68, 0.2);
        padding:.04rem .15rem .04rem .1rem;
        display:flex;
        align-items: center;

        .header_l{
            width:.5rem;
            height:.4rem;
            margin-right:.15rem;
            color:#FFF;
            font-size:.14rem;
            line-height: .4rem;
            text-align: center;
        }
        .header_r{
            width: 2.85rem;
            height:.34rem;
            input{
                width:100%;
                height:100%;
                border:none;
                border-radius:.5rem;
                font-size:.13rem;
                text-align: center;
            }
        }
    }
    .banner{
        width:100%;
        height:1.52rem;
        background: rgba(159, 217, 2, 0.3);
        .swiper-container{
            width:100%;
            height:100%;
            
                   img{
                       width:100%;
                   } 
        }
    }
    .kind{
        width: 100%;
        height:1.85rem;
        padding: .25rem .2rem;
        ul{
            width:100%;
            height: .55rem;
            display:flex; 
        }
        .one{
            li{
                display:flex;
                flex-direction:column;
                justify-content:center;
                width:25%;
                i{
                    width:.36rem;
                    height:.36rem;
                    background: rgba(159, 217, 2, 0.3);
                    margin:0 .24rem;
                    background:url(https://m2static.228.cn/images/icon.png) no-repeat;
                    background-size: .75rem;
                }
                .one{
                    background-position:.01rem -6.92rem;
                }
                .two{
                    background-position:.01rem -7.36rem;
                }
                .three{
                    background-position:.01rem -7.8rem;
                }
                .four{
                    background-position:.01rem -8.24rem;
                }
                span{
                    text-align: center;
                }
            }   
        }
        .two{
            margin-top: .25rem;
            li{
                display:flex;
                flex-direction:column;
                justify-content:center;
                width:25%;
                i{
                    width:.36rem;
                    height:.36rem;
                    background: rgba(159, 217, 2, 0.3);
                    margin:0 .24rem;
                    background:url(https://m2static.228.cn/images/icon.png) no-repeat;
                    background-size: .75rem;
                }
                .one{
                    background-position:.01rem -8.68rem;
                }
                .two{
                    background-position:.01rem -9.12rem;
                }
                .three{
                    background-position:.01rem -9.56rem;
                }
                .four{
                    background-position:.01rem -10rem;
                }
                span{
                    text-align: center;
                }
                span{
                    text-align: center;
                }
            }
            
        }
    }
    .pic{
        width: 100%;
        height:1.92rem;
        padding:.2rem;
        img{
            width:100%;
            height:1.52rem;
            border-radius:.1rem;
        }
    }
    .main{
        width:100%;
        .title{
            width:100%;
            color:#000;
            font-size:.22rem;
            padding:.1rem .2rem .15rem;
            display:flex;
            div{
                line-height:.24rem;
                margin-right:.1rem;
                font-weight:700;
            }
            
        }
        .recommend{
            width:100%;
            padding:0 .2rem;
            display:flex;
            flex-wrap: wrap;
            li:nth-child(3n){ 
                margin-right:0;
            }
            li{ 
                margin-right:.1rem;
                margin-bottom:.12rem;
                
                width:1.05rem;
                height:2.08rem;
                img{
                    width:1.05rem;
                    height:1.4rem;
                    background: rgba(229, 186, 6, 0.3);
                    border-radius: .1rem;
                    display: block;
                }
                .info{
                    width:100%;
                    font-size: .13rem;
                    height: .34rem;
                    line-height: .18rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2;
                    margin-top: 0.05rem;
                }
                .date{
                    font-size:.11rem;
                    color:#999;   
                }
                .price{
                    color:#ff3a56;
                    font-size: 0.13rem;
                    margin-right: 0.05rem;
                    .gray{
                        color: #b5bbc1;
                        font-size: .1rem;
                        margin-top: .02rem;
                   }
               }
           } 
        }
        .venue{
            width:100%;
            padding:0 .2rem;
            display:flex;
            flex-wrap: wrap;
            li:nth-child(2n){
                margin-right:0;
            }
            li{
                width:1.6rem;
                height:1.8rem;
                margin-right:.1rem;
                margin-bottom:.12rem;
                img{
                    width:1.62rem;
                    height:1.4rem;
                    background: rgba(229, 186, 6, 0.3);
                    border-radius: .1rem;
                    display: block;
                }
                .info{
                    font-size: .13rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    display: -webkit-box;
                    -webkit-box-orient: vertical;
                    -webkit-line-clamp: 2; 
                }
                .adress{
                    color: #999;
                    font-size: .11rem;
                }
            }
            
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