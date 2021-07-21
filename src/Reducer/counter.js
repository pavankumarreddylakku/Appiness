const countReducer = (state= 0,action) => {
    console.log(action,"act");
    switch(action.type){
        case "Increment": return state + action.payload;
       case "Decrement": return state - 1;
       default: return state;
    }
};
export default countReducer;