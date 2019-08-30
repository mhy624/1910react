import React, { Component } from 'react'
import { WeekWrapper } from "./styled";
import { statement } from '@babel/template';
import {search_detail} from "@api/week"
import store from "../../store"
import {Link}  from "react-router-dom"
export default class SearchDetail extends Component {
    constructor(){
        super()
        this.state = {
            ...store.getState().search,
            val:""
        }
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {val} = this.state;
        return (
            <WeekWrapper>
                <div className="headerwrap">
                    <Link to="/order"><button>返回</button></Link>
                    <h4>{val.ALADING_NAME}</h4>
                    <br/>
                    <hr/>
                    <p>{val.ALADING_TIME}</p>
                    <br/>
                    <hr/>
                    <p>{val.INVOICEZZTITLE}</p>
                </div>
            </WeekWrapper>
        )
    }
    async handleFirstNum(val1){
        let data = await search_detail(val1);
        if(data){
            this.setState({
                val:data.data.product
            })
        }
    }
    componentDidMount(){
        this.handleFirstNum(this.state.ticket)
    }
    
    handleUpdate(){
       this.setState(store.getState().search);
   }
}

