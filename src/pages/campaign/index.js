import React, { Component } from 'react'
import { CampaignWrapper } from './styled'
import { campaign_api } from '@api/home'
export default class campaign extends Component {
    constructor() {
        super();
        this.state = {
            list: [],
            text: {},
            path:""
        }
    }
    render() {
        let { list, text ,path} = this.state
        var content=text.WAPCONTEXT
        return (
            <CampaignWrapper>
                <header>
                    <div className="btns" onClick={this.goBack.bind(this)}>&lt;</div>
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
            </CampaignWrapper>
        )
    }
    async componentDidMount() {
        let data = await campaign_api();
        this.setState({
            list: data.data.subjectProductList,
            text: data.data.subjectMap,
            path:"//static.228.cn"
        })

    }
    goBack(){
        this.props.history.push('./home')
    }
}
