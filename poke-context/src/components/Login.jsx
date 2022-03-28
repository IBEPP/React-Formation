// import { useState } from "react";
// import { render } from "@testing-library/react";
// import { Route, Routes } from "react-router-dom";
import React from 'react';
import { useForm } from 'react-hook-form';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../App.css";


function Login () {

    // const {register, handleSubmit} = useForm()
    
    //creation de formulaire cote javascript
    //register est une function qui permet de relier un champ {<input/>} de html au formulaire javascript crée juste au dessus
    // let register = form.register;
    // console.log(register);
    // let handleSubmit = form.handleSubmit;
    // console.log(handleSubmit);
    // pour enregistrer un champ ont doit lui donner un nom
    // console.log(userNameInput);
    // console.log(passwordInput);
    
    // let error = form;
    
    // let validationOptions = {
    //     password: {
    //         required: "Le champ est obligatoire",
    //         maxLength: {
    //             value: 15,
    //             message: "nom d'utilisateur est obligatoire"
    //         }
    //     }
    // }
    // console.log(error);
    // console.log(register());
    
    
    const { register, formState, handleSubmit } = useForm();

    let userNameInput = register("userName", {required:true, maxLength:{value:15, message:"le nom d'utilisateur doit comporter moins de 15 caractères"}});
    
    let passwordInput = register("password", {required:true, minLength:{value:6, message:"le code doit être supérieur ou égal à 6"}})
    
    // console.log(" ici register " ,register())

    const {errors} = formState;
    
    const onSubmit = ((data) => {
        console.log(data);
    })
    
    const onError = ((error) => {
        console.error(error)
    })
    // console.log(" voici erros !!!!!! ",errors)
    
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit,onError)} >
                <div className="mb-3">
                    <label htmlFor="userName" className="form-label"></label>
                    <input type="text" {...userNameInput} className="form-control" id="userName" placeholder="Nom d'utilisateur" />
                    {errors.userName?.type === "maxLength" && <div className='test'>{errors.userName.message} </div>}
                
                
                    <label htmlFor="password" className="form-label"></label>
                    <input type="password" {...passwordInput} className="form-control" id="password" placeholder="Mot de passe" />
                    {errors.password?.type === "minLength" && <div className='test'>{errors.password.message}</div>}
                </div>
                <button type="submit" className="btn btn-danger col-sm-12 "> SE CONNECTER </button>
                </form>
        </div>
    )
}

export default Login;