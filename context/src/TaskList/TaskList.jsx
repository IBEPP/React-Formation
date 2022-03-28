import { useContext } from "react";
import { con } from "../App";
import React from "react";

function TakList () {
    
    const context = useContext(con);
    return (
        <div>
            {(context.results.map(x => {
                return(
                    <div key={x.id}> 
                        <h2> {x.title} </h2> 
                        <p> {x.priority} </p> 
                    </div>
                    )}))}
                
            <h1> Liste de tâches </h1>
        </div>
    )
}

export default TakList;