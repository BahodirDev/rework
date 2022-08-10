const initialState = {
    posts:[],
    user:''
}

function reducer(state=initialState,{type,payload}) {
    switch (type) {
        case "PENDING":
         return{
            ...state,
            user:payload
         }
    
        default:
           return state
    }
}

export default reducer;