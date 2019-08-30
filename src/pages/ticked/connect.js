import {TickedAsyncAction} from "@actions/actionCreate"

export const mapStateToProps=(state)=>({
    ticked:state.ticked
})

export const mapDispatchToProps=(dispatch)=>({
    clickHnadlerNum(){
        this.props.history.goBack();
    },
    shoucangClick(){
        this.props.history.push("/login")
    },
    handlerSpanAdd(){
        this.props.history.push("/login")
    },
    handlerTypeAsync(url){
        dispatch(TickedAsyncAction(url))
    }
})
 