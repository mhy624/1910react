import React, { Component, Fragment} from 'react'
import SearchResult from "../../components/searchResult"
import {PageTwo} from "@common/pageTwo"
import Search from "../../components/search"
import store from "../../store"
export default class OrderPage extends Component {
    constructor(){
        super()
        this.state = store.getState().search;
        console.log( this.state)
        store.subscribe(this.handleUpdate.bind(this))
    }
    render() {
        let {flag} = this.state;
        
        return (
            <PageTwo>
            <SearchResult/>
            {/*{flag?<SearchResult/>:<Search/>}*/}
            </PageTwo>
        )
    }
    handleUpdate(){
       
       this.setState(store.getState().search);
   }
}
