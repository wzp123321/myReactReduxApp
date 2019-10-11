import React from 'react';

 const TodoListUI = (props)=>{
    let {inputValue,inputChange,topicslist,getItemDelete,clickAddItem} = props
    // 解构赋值
    return  (
        <div>
        <input value={inputValue} onChange={inputChange}></input>
        <button onClick={clickAddItem}>添加</button>
        <ul>
            {
                topicslist.map((item,index)=>{
                  return (
                        <li key={index} onClick={()=>{getItemDelete(index)}}>{item}</li>
                        )
                })
            }
        </ul>
    </div>
    )
}

 
export default TodoListUI;