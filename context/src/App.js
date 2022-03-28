import TakList from "./TaskList/TaskList";
import Task from "./Task/Task";
import React from "react";
import {useState} from "react";
export const con = React.createContext();

function App () {

  const [results, setResult] = useState([
    { id: 1, title: 'Tache 01', priority: 'Important'},        
    { id: 2, title: 'Tache 02', priority: 'Urgent'}   
 ])
  // console.log(results);
  return (
    
    <div>
      <con.Provider value={{
        results,
        setResult,
      }} >
      <TakList/>
      <Task/>
      </con.Provider>
    </div>
    
  )
}

export default App;