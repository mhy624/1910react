import {findAsyncAction } from "@actions/actionCreate"
export const mapStateToProps = (state) => ({
    find:state.find
})

export const mapDispatchToProps = (dispatch) => ({
    clickHandlerCon() {
        this.props.history.goBack();
    },
    clickHandSouSuoCon() {
        this.props.history.push("/order")
    },
    handlerClick(pid){
        this.props.history.push({pathname:"/ticked/"+pid})
    },
    asyncAcionFin(){
        dispatch(findAsyncAction())
    },
})
