import React from 'react';
import axios from 'axios';

export class Favorites extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            movies: [],
            favIDs: localStorage.getItem("favorites"),
        }
    }

    getStorage = (() => {
        let fav = JSON.parse(localStorage.getItem("favorites"));
        // console.log("voiciiiiiiiiiiiiiiiii",fav);
        return fav
        // if (fav === null) {
        //     fav = []
        // }
    })

    getMovie = ((id) => {
        // let api = "0c777f7ab5515dc10db44ebe01b935fb"
        // let favorites = this.getStorage()
        // for (let i = 0; i < id.length; i++) {
        //     console.log(id[i]);
        // }
        let URL = `http://api.themoviedb.org/3/movie/${id}?api_key=0c777f7ab5515dc10db44ebe01b935fb`;
        axios(URL).then((reponse) => {
            console.log( "ici la reponse ",reponse.data);
            let movies = [...this.state.movies]
            
            movies.push(reponse.data)

            this.setState({
                movies: movies,
            })
        })
    })

    componentDidMount = (() => {

      
            // favIDs.forEach(id){
            //     getMovie(id)
            // }
        
        // console.log("favvvvvvvv ",JSON.parse(this.state.favIDs));
        let favest = JSON.parse(this.state.favIDs)
        console.log(favest);
        for (let i = 0; i <favest.length; i++) {
            // console.log("ici la boucleeeeeeeee ",favest[i]);
            this.getMovie(favest[i])
            // this.getMovie(favest[i])
        }
    })
    
    render() {
        
        return (
            <>
            <h1 onClick={ () => (this.getMovie(500))}>Favorites</h1>
            {/* onClick={this.getMovie(500)} */}
            {/* {this.componentDidMount()} */}
            {this.getStorage()} 
            {/* {localStorage.getItem('favorites')} */}
            {/* <h1 onClick={ () => ( this.componentDidMount())}> Salut </h1> */}
        </>
        )
    }
}