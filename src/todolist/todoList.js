import React, { Component } from 'react';

import {connect} from "react-redux";

import TodoListUI from "./todoListUI";

class TodoList extends Component {
    render() { 
        // 解构赋值
        let {inputValue,inputChange,topicslist,getItemDelete,clickAddItem} = this.props
        return (  
            <TodoListUI 
            inputValue={inputValue}
            inputChange={inputChange}
            topicslist={topicslist}
            getItemDelete={getItemDelete}
            clickAddItem={clickAddItem}
            />
        );
    }
}
 
// 第一个参数stateToProps：隐射关系
const stateToProps = (state)=>{
    return {
        inputValue:state.inputValue,
        topicslist:state.topicslist
    }
}

// dispatch
const dispatchToProps = (dispatch)=>{
    return {
        inputChange(e){
           const action = {
               type:"inputValueChange",
               value:e.target.value
           };
           dispatch(action);
        },
        clickAddItem(){
            const action = {
                type:"clickadditem"
            };
            dispatch(action);
        },
        getItemDelete(index){
            const action = {
                type:"getItemDelete",
                value:index
            };
            dispatch(action);
        }
    }
}
export default connect(stateToProps,dispatchToProps)(TodoList);