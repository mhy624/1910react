import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import { week_choice } from "@api/week"
import BScrollComponent from "@common/bscroll";
import {connect} from "react-redux";
import {mapStateToProps,mapDispatchToProps} from "./connect";
 class WeekChoice extends Component {
    state = {
        weekGoods: [],
        page:0
    }
    render() {
       
        let { weekGoods } = this.state;
        return (
            <BScrollComponent ref="bscroll">
                <WeekWrapper>
                    {
                        weekGoods.map((item, index) => (
                            <div className="weekItem" key={index}>
                                <h3>{item.group_section.title}</h3>
                                <div className="weekDate">{item.group_section.desc}</div>
                                <div className="tabs">
                                    {
                                        item.tabs.map((child, idx) => (
                                            <div className="weekGood" key={idx}>
                                                <div className="weekGoodImg">
                                                    <img src={child.url} alt="" />
                                                </div>
                                                <div className="weekGoodName">
                                                    {child.title}
                                                </div>
                                                <div className="weekGoodDes">{child.desc}</div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        ))
                    }

                </WeekWrapper>
            </BScrollComponent>
        )
    }
    componentWillUpdate(){
        this.refs.bscroll.handleRestpullingUp();
    }
    componentDidMount() {
       this.handleWeekGetData();
        this.refs.bscroll.handlepullingUp(()=>{
            this.handleWeekGetData();
        })
    }
    async handleWeekGetData(){
        let {cityId} = this.props;
        let {page} = this.state;
        let data = await week_choice(cityId,page);
        if(data){
            this.setState({
                weekGoods: [...this.state.weekGoods,...data],
                page:++this.state.page
            })
           
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(WeekChoice)
