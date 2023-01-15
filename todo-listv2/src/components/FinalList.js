//composant contenant le use context
import {useContext} from 'react'
import {StoreContext} from '../context.js'

const FinalList = () => {
    const [state,dispatch] = useContext(StoreContext);
    
    const handleDelete = (value) => {
        let result = state.tasks.filter((e) => e !== value)  
        dispatch({
            type:"REMOVE",
            payload: result
        })
    }   
    
    //handle modify pour le bonus
    
    return(
        
        <ul>
            {state.tasks.map((task, i) => {
                return(
                    <li key={i}>
                        <p>{task}</p>
                        <strong onClick={()=> handleDelete(task)}>x</strong>
                    </li>
                )
            })}
        
        </ul>
    )
    
}
export default FinalList;    