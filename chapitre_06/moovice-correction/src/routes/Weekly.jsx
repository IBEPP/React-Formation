// import axios from 'axios';
// import React from 'react';
// import { Card } from '../components/Card';
// // import dayjs from 'dayjs';
// import * as moment from 'moment';
// import 'moment/locale/fr';

// moment.locale('fr');
// // console.log(moment.locale());
// // var now = moment();
// // console.log(now);

// // let LAST_WEEK = dayjs.tz("2014-06-01 12:00", "France/Paris")
// // let TODAY = dayjs.tz("2014-06-01 12:00", "France/Paris")
// // let LAST_WEEK = moment("1995-12-25");
// // let TODAY = moment("1995-12-25");
// var LAST_WEEK = moment().startOf('week').subtract(7,'days').format('YYYY-MM-DD')
// var TODAY = moment().format('YYYY-MM-DD')

// // dayjs().format()

// // const API_KEY = "f41e0eae90e54f52c3395e4a7271f9ac";
// // const New_API = "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte={LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}";


// export class Weekly extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             movies: []
//         }
//     }

//     // Le nom est imposé. 
//     componentDidMount() {
//         const URL = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=f41e0eae90e54f52c3395e4a7271f9ac`
//         console.log(URL)
//         axios(URL).then( (reponse) => {
//             console.log("ici la reponse >>>>>>>>>>>>>> ",reponse.data.results[0].backdrop_path);
//             const data = reponse.data.results[0];
//             // // console.log(movies);
            
//             let movies = data
//             movies = [...this.state.movies]
//             movies.push(movies)

//             this.setState({
//                 movies: movies
//             })
//         })
//     }

//     render() {
//         return (
//         <>
//             <h1>Weekly</h1>
//             {/* {
//                 this.state.movies.map(movie => {
//                     return <Card key={movie.id} title={movie.title} image={movie.poster_path} descritpion={movie.overview} year={movie.release_date}/>
//                 })
//             } */}
//             {this.state.movies.map((movie) => <Card test={movie[0].backdrop_path} /> )}
//         </>
//         )
//     }
// }

import axios from 'axios';
import React from 'react';
import { Card } from '../components/Card';
import * as moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');
var LAST_WEEK = moment().startOf('week').subtract(7,'days').format('YYYY-MM-DD')
var TODAY = moment().format('YYYY-MM-DD')

export class Weekly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }
 
    componentDidMount() {
        const URL = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=f41e0eae90e54f52c3395e4a7271f9ac`
        axios(URL).then( (reponse) => {
            const data = reponse.data;
            const movies = data.results
            this.setState({
                movies: movies
            })
        })
    }

    render() {
        return (
        <>
            <h1>Popular</h1>
            {
                this.state.movies.map(movie => {
                    return <Card key={movie.id} title={movie.title} image={movie.poster_path} descritpion={movie.overview} year={movie.release_date}/>
                })
            }
        </>
        )
    }
}