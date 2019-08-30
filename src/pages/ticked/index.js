import React, { Component } from "react";
import { HanderTic, PagesName, TickedDiss } from "./ticked"
import { connect } from "react-redux"
import { mapStateToProps, mapDispatchToProps } from "./connect"

class Ticked extends Component {
    constructor() {
        super();
        this.state = {

        }
    }
    render() {
        
        let {tickedList} = this.props.ticked
        return (
            <PagesName>
            <div className="gradual-red">
            <p>耳机</p>
            <span onClick={this.props.handlerSpanAdd.bind(this)}>立即购买</span>
            </div>
                <HanderTic>
                    <div className="HanderTic-div">
                        <div onClick={this.props.clickHnadlerNum.bind(this)}>返回</div>
                        <div className="HanderTic-divs">
                            <p className="HanderTic-p" onClick={this.props.shoucangClick.bind(this)}>收藏</p>
                            <p>转发</p>
                        </div>
                    </div>
                    <div className="HanderTic-divss">
                        <img src={"http://static.228.cn"+tickedList.PBIGIMG} />
                        <div className="HanderTic-divssvvv">
                            <h3>{tickedList.ALADING_NAME} </h3>
                            <p> <span>¥ </span>{tickedList.MINPRICE} - <span>{tickedList.MAXPRICE}</span></p>
                        </div>
                    </div>
                </HanderTic>
                <div className="HanderTic-nav">
                    <p>{tickedList.ENDDATE}</p>
                    <p>{tickedList.VNAME}</p>
                </div>
                <div className="ticked-div">
                    <h2>注意事项</h2>
                    <div>
                       {tickedList.PRECAUTIONS}
                    </div>
                </div>
                <TickedDiss>
                    <div>
                        <h3>演出详情</h3>
                        <p>{tickedList.INTRODUCTION1} </p>
                        
                        <span>查看更多</span>
                    </div>
                    <div className="faq-div">
                       <p> FAQ</p>
                    </div>
                    <div className="faq-div">
                       <p> 在线问答</p>
                    </div>
                    
                </TickedDiss>
                <div className="kongbai"></div>
            </PagesName>
        )
    }
    componentDidMount(){
        let {pathname} =this.props.location
        let pid=pathname.split("/")[2]
        let url = "/server/product/ticket-"+pid+".json?pid="+pid+".html"
       this.props.handlerTypeAsync(url);
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Ticked)