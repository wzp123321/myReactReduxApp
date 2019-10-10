import React, { Component } from 'react'
import TodoList from "./todolist/todoList";


export default class App extends Component {
   
    render() { 
        return (
            <div>
                <div>Hello world</div>
                <TodoList></TodoList>
            </div>
         );
    }
}
 