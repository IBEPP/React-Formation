import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Liste } from '../pages/Liste';
import { EventClasse } from '../pages/Event';
import { Produits } from '../pages/Produits';
import Produit from '../components/Produit';
import { Styled } from '../components/10-style-component/Styled';
import { Map } from '../components/11-localisation/Map';

export class Router extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
        <>
            <Routes>
                <Route path="/" element={<Liste />}/>
                {/* <Route path="/promesse" element={<Promesse />}/> */}
                <Route path="/event-class" element={<EventClasse />}/>
                <Route path="/products" element={<Produits />} />
                <Route path="/products/:produitId" element={<Produit />} />
                <Route path="/styled-component" element={<Styled />} />
                <Route path="/google-map" element={< Map />} />
                <Route path="*" element={ <h1>Cette page n'existe pas</h1>}/>
                {/* <Rout   e path="/personnage" element={<Personne name="Jean" salut="toto"/>}/>
                <Route path="/personnage-render" element={<Personne name={name} salut="toto"/> }/> */}
            </Routes>
        </>
        )
    }
}