import React, { Component } from 'react'
import {WeekWrapper} from "./styled";
import { search_Num } from "@api/week"
import BScrollComponent from "../../common/bscroll";
import store from "../../store"
import City from "../../components/city"
import Classify from "../../components/classify"
 class SearchResult extends Component {
     constructor(){
        super()
        this.state = store.getState().search;
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {searchNum,city} = this.state;
        console.log(city)
        return (
            
                <WeekWrapper>
                    <div className="searchheader">
                        <h3 >搜索</h3>
                        <a onClick={this.handlereturn.bind(this)}>&lt;</a>
                        <div>
                            <input type="text" />
                            <a>取消</a>
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
                    {city?<City/>:""}
                    <Classify/>
                    <BScrollComponent ref="bscroll">
                    <div className="headermain" >
                    {
                        searchNum.map((item,index)=>(
                            
                                <div className="mainmain" key={index}>
                                    <a>
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
                                    </a>
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
    handleOnclickDown(stutes){
        let action = {
            type:"ONCLICKDOWN",
            stutes
        }
        store.dispatch(action)
    }
    handleOnclick(){
        let action = {
            type:"CLICK_NUM"
        }
        store.dispatch(action)
    }
    handlereturn(){
        let action = {
            type:"RETURN_NUM"
        }
        store.dispatch(action)
    }
    componentDidMount(){
        this.handleFirstNum(this.state.value)
        
    }
    async handleFirstNum(){
        let data = await search_Num(this.state.value);
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