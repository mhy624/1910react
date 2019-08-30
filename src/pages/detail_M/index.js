import React, { Component } from 'react'
import { DetailMWrapper } from './styled'
import { detail_M_api } from '@api/home'
export default class DetailM extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            text: {},
            path:"",    
        }
    }
    render() {
        let { list, text,path } = this.state
        console.log()
        var content=text.WAPCONTEXT
        return (
            <DetailMWrapper>
                <header>
                <a href="#/subject"><div className="btns" >&lt;</div></a>
                    <div className="bg" >
                        <img src={path+text.IMG} alt=""/>
                    </div>
                </header>
                <div className="text">
                    <div>{text.REMARK}</div>
                    <div className="main">
                        <p dangerouslySetInnerHTML = {{ __html:content }}></p>
                    </div>
                </div>
                <div className="list">
                    {
                        list.map((item,index) => (
                            <div key={index} className="floor">
                                <img src={"https://static.228.cn"+item.PBIGIMG} alt="" />
                                <div className="right">
                                    <div>{item.NAME}</div>
                                    <div>{item.SHOWDATE}</div>
                                    <div>{item.VNAME}</div>
                                    <div><span>{item.MINPRICE}</span> - <span>{item.MAXPRICE}</span>元</div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </DetailMWrapper>
        )
    }
    async componentDidMount() {
        let URL = this.props.location.pathname.split("/")[3]
        console.log(this.props.location.pathname)
        console.log(URL)
        let url = "/server/subject/detail-"+URL+".json"
        let data = await detail_M_api(url);
        this.setState({
            list: data.data.subjectProductList,
            text: data.data.subjectMap,
            path:"https://static.228.cn"
        })
    }

}
