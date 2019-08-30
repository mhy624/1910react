import  React, { Component } from 'react';
import {WeekWrapper} from "./styled";
import { CityName_Num } from "@api/week"
import store from "../../store"
 class City extends Component {
     constructor(){
         super()
         this.state={
            ...store.getState().search,
            searchNum:[],

         }
         store.subscribe(this.handleUpdate.bind(this))
     }
    render() {
        let {searchNum} =this.state
        return (
            <WeekWrapper>
                <div className="citywrap">
                    <ul>
                       {
                        searchNum.map((item,index)=>(
                            <li key={index} onClick={this.handleClick.bind(this,item.CITYJX)}>{item.JXNAME}</li>
                        ))
                       }

                    </ul>
                </div>
            </WeekWrapper>
        )
    }
    handleClick(val){
        let action = {
            type : "CLICK_CITYNAME"
        }
        store.dispatch(action)
        this.props.handleClick(val)
    }
    componentDidMount(){
        this.handleCityName()
        
    }
    async handleCityName(){
        let data = await CityName_Num();
        if(data){
            this.setState({
                searchNum:data.data.fcitys
            })
        }
       
    }
    handleUpdate(){
        this.setState(store.getState().search);
    }
   
}
export default City;
