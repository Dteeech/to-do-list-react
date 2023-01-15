import React from 'react'
const StoreContext = React.createContext([])
// initialstate
const initialState = {
    tasks : [
        "test",
        "test2"
    
    ],
    count : 2,
    inputValue : ""
}

export {StoreContext, initialState};
// le payload
// export