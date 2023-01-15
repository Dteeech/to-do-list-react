const reducer = (state, action) => {
    switch (action.type){
        case 'ADD' :
            return{
                ...state,
                tasks: [...state.task, action.payload],
                count: state.count +1
            }
    
        case 'REMOVE' : 
            return{
                ...state,   
                count: state.count -1,
                tasks: action.payload
                
            }
        case "INPUT_CHANGE":
            return{
                ...state,
                inputValue:action.payload
            }
            
        default:
        return state;
    }
}

export {reducer}