import React, { Component,Fragment } from 'react'
import { Page } from "@common/commonStyledM"
import {SubjectWrapper,HeaderWrapper} from "./styled"
import {subject_api} from "@api/home"
import BScrollComponent from "@common/bscroll"; 
export default class Subject extends Component {
    constructor(){
        super();
        this.state={
            list:[],
            num:"list",
        }
    }
    render() {
        let {list}=this.state
        return (
            
            <Fragment>
                <Page>
                    <HeaderWrapper>
                        <div onClick={this.goHome.bind(this)} className="header_l">&lt;</div>
                        <div className="header_r">活动专区</div>
                    </HeaderWrapper>
                    <BScrollComponent ref="bscroll">
                        <SubjectWrapper>
                        {
                            list.map((item,index)=>(
                                <div key={index} className="list" onClick={this.goDetail.bind(this,item.URL)}>
                                    <img src={"https://static.228.cn"+item.IMG} alt=""/>
                                    <p>{item.REMARK}</p>
                                </div>
                            ))
                        }
                        <div className="more">查看更多</div>
                        </SubjectWrapper>
                    </BScrollComponent>
                </Page>
            </Fragment>
        )
    }
    goHome(){
        this.props.history.push('/home')
    }
    goDetail(url){
        // console.log(url,111)
        this.props.history.push({pathname:"/detail_M/"+url})
    }
    componentWillUpdate(newProps,newState){
        if(newState.num!==this.state.num){
            this.refs.bscroll.handleRestpullingUp()
        }
        // console.log(newState.list)        
    }

    
    componentDidMount() { 
        this.handleGetData()
        this.refs.bscroll.handlepullingUp(()=>{
            this.handleGetData()
        }) 
 
          
    }
    async handleGetData(){
        // console.log(this.state.num)
        let  {num}=this.state
        let data = await subject_api(num);
        
        if(data){
            this.setState({
                list:[...this.state.list,...data.data.subjectPage.list] ,
                num:this.state.num='more'
            }) 
        // console.log(this.state.num) 
        }
    }
}
