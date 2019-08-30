import React, { Component, Fragment } from "react"
import { Header, Classify, Contertext, BottomCon } from "./find"
import { mapStateToProps, mapDispatchToProps } from "./connect"
import { connect } from "react-redux"
import Bscroll from "@common/bscroll"
class Find extends Component {
    constructor() {
        super();
        this.state = {
            
        }
    }
    render() {  
        let { name, TypeName, namas, typeLists} = this.props.find
        return (
            <Fragment>
           
                <Header>
                    <div className="fanhui" onClick={this.props.clickHandlerCon.bind(this)}>返回</div>
                    <div>分类</div>
                    <div className="suosou" onClick={this.props.clickHandSouSuoCon.bind(this)}>搜索</div>
                </Header>
                <Classify>
                    <div>
                        <p>{name}</p>
                        <p>{TypeName}</p>
                        <p>{namas}</p>
                    </div>
                </Classify>
                <Bscroll ref="bsorll">
                <Contertext>
                    {
                        typeLists.map((page, ins) => (
                            <div className="Contertext-div" key={ins} onClick={this.props.handlerClick.bind(this, page.productid)}>
                                <img src={"//static.228.cn" + page.pbigimg} />
                                <div className="Contertext-divs">
                                    <h3 className="Contertext-h3">{page.name}</h3><br />
                                    <p className="Contertext-p">{page.enddate}</p><br />
                                    <p className="Contertext-ps">{page.vname}</p>
                                    <p className="Contertext-pre">{parseInt(page.minprice)} - {page.maxprice}元</p>
                                </div>
                            </div>
                        ))
                    }
                    <div className="bottom">
                        <div className="botton-div">查看更多</div>
                    </div>
                    <BottomCon>

                    </BottomCon>
                </Contertext>
                </Bscroll>
            </Fragment>
        )
    }
        async componentDidMount() {
        this.props.asyncAcionFin();
        this.refs.bsorll.handleRestpullingUp();
        this.refs.bsorll.handlefinishPullDown();
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Find)