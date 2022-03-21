import axios from 'axios';
import React from 'react';
// import { Card } from '../components/Card';
import dayjs from 'dayjs';
import * as moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');
console.log(moment.locale());
var now = moment();
console.log(now);

// let LAST_WEEK = dayjs.tz("2014-06-01 12:00", "France/Paris")
// let TODAY = dayjs.tz("2014-06-01 12:00", "France/Paris")
let LAST_WEEK = moment("1995-12-25");
let TODAY = moment("1995-12-25");

dayjs().format()

const API_KEY = "f41e0eae90e54f52c3395e4a7271f9ac";
// const New_API = "http://api.themoviedb.org/3/discover/movie?primary_release_date.gte={LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}"

export class Weekly extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: []
        }
    }

    // Le nom est imposé. 
    componentDidMount() {
        const URL = `http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${LAST_WEEK}&primary_release_date.lte=${TODAY}&api_key=${API_KEY}`
        axios(URL).then( (reponse) => {
            console.log(reponse.data);
            // const data = reponse.data;
            // const movies = data.results
            // // console.log(movies);
            // this.setState({
            //     movies: movies
            // })
        })
    }

    render() {
        return (
        <>
            <h1>Weekly</h1>
            {/* {
                this.state.movies.map(movie => {
                    return <Card key={movie.id} title={movie.title} image={movie.poster_path} descritpion={movie.overview} year={movie.release_date}/>
                })
            } */}
        </>
        )
    }
}