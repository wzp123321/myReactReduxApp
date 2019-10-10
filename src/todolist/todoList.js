import React, { Component } from 'react';

import store from "../store/index";

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            inputValue:store.getState().inputValue,
            topicslist:store.getState().topicslist
         }
    }
    render() { 
        return (  
            <div>
                <input value={this.state.inputValue} onChange={this.inputChange}></input>
                <button>添加</button>

            </div>
        );
    }

    inputChange(e){
        console.log(e);
    }
}
 
export default TodoList;