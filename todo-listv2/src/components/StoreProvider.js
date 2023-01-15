import React from 'react'
import {reducer} from  '../reducer.js'
import {initialState, StoreContext} from '../context.js'

// Creation du provider
const StoreProvider = ({children}) => {
    // On stocke le use reducer dans notre dispatch
    const [state, dispatch] = React.useReducer(reducer, initialState)
    return (
        <StoreContext.Provider value={[state, dispatch]} >
            {children}
        </StoreContext.Provider>
        
    )
}
export default StoreProvider;