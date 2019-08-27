import React, { Component } from 'react'
import {WeekWrapper} from "./styled"
import BScrollComponent from "@common/bscroll"
import store from "../../store"
 class Search extends Component {
    constructor(){
        super()
        this.state = store.getState().search;
       
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {value} = this.state
        return (
                <WeekWrapper>
                    <div className="searchheader">
                        <h3>搜索</h3>
                        <a>&lt;</a>
                        <div>
                            <input type="text" value={value} onChange={this.handleInput.bind(this)}/>
                            <a>取消</a>
                            <i onClick={this.handlesear.bind(this) }></i>
                        </div>
                    </div>
                    <div className="searchmain">
                    </div>
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
                </WeekWrapper>
        )
    }
    handleInput(e){
        let val =e.target.value;
        let action = {
            type:"SEARCH_INPUT",
            value:val
        }
        store.dispatch(action)
    }
    handlesear(){
        let action = {
            type:"SEARCH_NUM"
        }
        store.dispatch(action)
    }
    handleUpdate(){
       
        this.setState(store.getState().search);
    }
}

export default Search;