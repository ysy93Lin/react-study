const initialState = {
    inputValue: "write something",
    list: [
        "Hello",
        "World"
    ]
}

// Reducer里的state为只读 readonly
export default (state = initialState, action) => {
    console.log(action)
    switch(action.type) {
        case "changeInput":
            return action
        default:
            return state
    }
    
}