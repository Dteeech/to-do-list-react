import React from "react"
import {StoreContext} from "./context.js"
import AddDTask from './components/AddTask.js'
import FinalList from './components/FinalList.js'
import Counter from './components/Counter.js'
import './App.css';

  function App() {
    const  [state, dispatch] = React.useContext(StoreContext);
  
  //App todo-list *
  //créer un input
  //recuperer la valeur input
  //stocker dans state
  //recuperer le state et afficher le contenu sous forme de liste
  //ajouter un composant pour la suppression
  //
    return (
        <div className="App">
          <Counter />
          <FinalList />
          <AddDTask />
          
        </div>
    );
}

export default App;
