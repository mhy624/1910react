import  React, { Component } from 'react';
import {WeekWrapper} from "./styled";
import { CityName_Num } from "@api/week"
 class Classify extends Component {
     constructor(){
         super()
         this.state=({
            searchNum:[]
         })
     }
    render() {
        let {searchNum} =this.state
        console.log(searchNum)
        return (
            <WeekWrapper>
                <div className="citywrap">
                    <ul>
                        <li>全国</li>
                       {
                        searchNum.map((item,index)=>(
                            <li key={index}>{item.JXNAME}</li>
                        ))
                       }

                    </ul>
                </div>
            </WeekWrapper>
        )
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
}
export default Classify;