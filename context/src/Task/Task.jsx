import { useContext } from "react";
import { useForm } from "react-hook-form";
import { con } from "../App";


function Task () {

    const context = useContext(con);

    // console.log("ici contexte" ,context);

    const { register, handleSubmit, formState } = useForm();
    // let {errors} = formState;
    // console.log(tacheInput);
    // let formulaire = useForm();
    // let stateError = formState.errors
    // console.log(stateError)


    let tacheInput = register("tache")
    let prioriteSelect = register("priorite");

    let results = (data) => {
        console.log(data)
        
        let copyTache = [...context.results];

        // console.log("voici les taches", copyTache);
    
        let dernierID = copyTache[copyTache.length - 1].id;
    
        // console.log("ici le dernier id", dernierID);
        
            let tache = {
                title: data.tache,
                priority: data.priorite,
                id: dernierID + 1,
                // copyTache
            }
        copyTache.push(tache)
        
        console.log("voici copyTache" ,copyTache)

        context.setResult(copyTache)
    
        // console.log(tache);
    }

    let errors = ((error) => {
        console.log(error);
    })    
    
    
    // let set = context.setResult
    // console.log(set);

    return (
        <div>
            <form onSubmit={handleSubmit(results,errors)} >
                <input type="submit" id="task" />
                <input type="text" id="task" {...tacheInput} />
                <select {...prioriteSelect} >
                            <option value="option"> veuillez choisir une option </option>
                    <option value="pas-important"> Pas Important </option>
                    <option value="important"> Important </option>
                    <option value="urgent"> Urgent </option>
                </select>
            </form>
            <h1> Tâche </h1>
        </div>
    )
}

export default Task;