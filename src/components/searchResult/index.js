import React, { Component } from 'react'
import {Link}  from "react-router-dom"
import {WeekWrapper} from "./styled";
import { search_Num , search_city} from "@api/week"
import BScrollComponent from "../../common/bscroll";
import store from "../../store"
import City from "../../components/city"
import Classify from "../../components/classify"
import Time from "../../components/time"
 class SearchResult extends Component {
     constructor(){
        super()
        this.state = {
            ...store.getState().search,
            sreachNum:"",
            sreachNum2:"",
            sreachNum3:""
        }
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {searchNum,city,classify,time,sreachNum2,value2} = this.state;
        return (
            
                <WeekWrapper>
                    <div className="searchheader">
                        <h3 >搜索</h3>
                        <a onClick={this.handlereturn.bind(this)}>&lt;</a>
                        <div>
                            <input type="text" value={value2} onChange={this.handleOnchange.bind(this)}/>
                            <Link to="/home">取消</Link>
                            <i onClick={this.handleOnclick.bind(this)}></i>
                        </div>
                    </div>
                    <div className="headerclass">
                        <ul>
                            <li onClick={this.handleOnclickDown.bind(this,1)}> <i></i> 全国</li>
                            <li onClick={this.handleOnclickDown.bind(this,2)}> <i></i> 全部分类</li>
                            <li onClick={this.handleOnclickDown.bind(this,3)}> <i></i> 全部时间</li>
                        </ul>
                    </div>
                    {city?<City handleClick={this.getChildValue.bind(this)}/>:""}
                    {classify?<Classify/>:""}
                    {time?<Time/>:""}
                    <BScrollComponent ref="bscroll">
                    <div className="headermain" style={{background:(city||classify||time)?"rgba(0,0,0,0.6)":"#FFF"}}>
                    {
                        searchNum.map((item,index)=>(
                            
                                <div className="mainmain" key={index} onClick={this.handlesearchdetail.bind(this,index)}>
                                    <Link to="/searchDetail">
                                        <div className="mainphoto">
                                            <i>售票中</i>
                                            <img src={"http://static.228.cn"+item.pbigimg} alt=""/>
                                        </div>
                                        <div className="mainwrap">
                                            <b>{item.shorta}</b>
                                            <span>{item.begindate} ~ {item.enddate}</span>
                                            <span>{item.vname}</span>
                                            <span><b>{parseInt(item.minprice)} - {item.maxprice}元</b></span>
                                        </div>
                                    </Link>
                                </div>
                        ))
                    }
                        <div className="searchbottom">
                                <div>
                                    <p>
                                        <a>最新资讯</a>
                                        <a>合作招商</a>
                                        <a>联系我们</a>
                                    </p>
                                    <span>© 永乐票务</span>
                                </div>
                            </div>
                        </div>
                    </BScrollComponent>
                </WeekWrapper>
            
        )
    }
    //点击进入详情
    handlesearchdetail(index){
        let action = {
            type:"handlesearchcity",
            ticket:this.state.searchNum[index].productid
        }
        store.dispatch(action)
    }
    getChildValue(cityname){
        let abbr = cityname
       this.handlesearchcity(abbr,this.state.value2)
    }
    handleOnclick(){
        let action = {
            type:"handleOnchange",
            handleOnchange:this.state.sreachNum3
        }
        store.dispatch(action)
        this.handleFirstNum(this.state.sreachNum3)
    }
    handleOnchange(e){
        let val = e.target.value
        
        this.setState({
            sreachNum3:val,
            value2:val
        })

    }
    handleOnclickDown(stutes){
        let action = {
            type:"ONCLICKDOWN",
            stutes:stutes
        }
        store.dispatch(action)
        this.handleFirstNum(this.state.value2)
    }
    handlereturn(){
        let action = {
            type:"RETURN_NUM"
        }
        store.dispatch(action)
    }
    componentDidMount(){
        this.handleFirstNum(this.state.value2)
    }
    async handleFirstNum(value){
        let data = await search_Num(value);
        if(data){
            this.setState({
                searchNum:data.data.pagerMemory.fistPage
            })
        }
       
    }
    async handlesearchcity(Abbr,Num){
        let data = await search_city(Abbr,Num);
        if(data){
            this.setState({
                searchNum:data.data.pagerMemory.fistPage
            })
        }
       
    }
    handleUpdate(){
       this.setState(store.getState().search);
   }
  
}

export default SearchResult;