import  React, { Component } from 'react';
import {WeekWrapper} from "./styled";
import { CityName_Num } from "@api/week"
 class Classify extends Component {
     constructor(){
         super()
         this.state=({
            searchNum:["全部时间","今天","明天","本周内","本周末","下周","本月"]
         })
     }
    render() {
        let {searchNum} =this.state
        return (
            <WeekWrapper>
                <div className="citywrap">
                    <ul>
                       {
                        searchNum.map((item,index)=>(
                            <li key={index}>{item}</li>
                        ))
                       }

                    </ul>
                </div>
            </WeekWrapper>
        )
    }
}
export default Classify;