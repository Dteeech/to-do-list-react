//Composant pour ajouter une tache depuis l'input
// import du usecontext et du storecontext

import {useContext} from 'react'
import {StoreContext} from '../context.js'

//creation du composant pour l'ajout de la tache
const AddTask = () => {
    
    //utilisation du dispatch pour save les states
    const [state, dispatch] = useContext(StoreContext);
    
    const handleChangeInputValue = (e)=> {
        dispatch({
            type : 'INPUT_CHANGE',
            payload: e.target.value
        })
    }
    
    const submit = (e) =>{
        e.targetDefault()
        if(state.inputValue.trim()==="" || state.tasks.includes(state.inputValue.trim())){
                return;
        }else {
            dispatch({
                type:'ADD',
                payload: state.inputValue
            })
        }
        dispatch({
            type:'INPUT_CHANGE',
            payload: ""
        })
    }
    
    return (
        <form onSubmit={submit}>
            <label>
            AJouter une tâche
                <input type="text" onChange={handleChangeInputValue} value={state.inputValue}/>
            </label>
            <input type="submit"/>
        
        
        </form>
    )
}

export default AddTask;