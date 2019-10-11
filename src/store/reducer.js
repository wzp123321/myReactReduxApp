const defaultState = {
    inputValue:"zpwan1",
    topicslist :["摸摸头","捏捏腿"]
};


export default (state=defaultState,action)=>{
    const newState = JSON.parse(JSON.stringify(state));
    if(action.type === "inputValueChange"){
        newState.inputValue = action.value;
        return newState
    }
    if(action.type === "clickadditem"){
        newState.topicslist.push(newState.inputValue);
        newState.inputValue = "";
        return newState
    }
    
    if(action.type === "getItemDelete"){
        newState.topicslist.splice(action.value,1)
        return newState
    }
    return state;
}