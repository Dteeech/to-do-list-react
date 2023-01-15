// importer storecontext et usecontext
import {StoreContext} from '../context.js';
import {useContext} from 'react';
    
//const counter     
    const Counter = () => {
// dispatch et utilisation du context dans context.js
    const [state,dispatch]= useContext(StoreContext);
    return(
        <div>
            liste : {state.count}
        </div>
    )
}
// export component
export default Counter; 
