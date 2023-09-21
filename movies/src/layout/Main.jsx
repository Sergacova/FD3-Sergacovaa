import React from "react"
import { Movie } from "../components/Movie"
import {Movies} from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

const API_KEY=process.env.REACT_APP_API_KEY

class Main extends React.Component {
    state = {
        movies: [],
    }
    componentDidMount (){
        fetch("http://www.omdbapi.com/?s=matrix&apikey=76945206")
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    componentDidMount (){
        fetch("http://www.omdbapi.com/?apikey=76945206&s=game")
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }
    
    searchMovies = (str, type = 'all') => {
        this.setState({ loading: true });
        fetch(
            `https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${
                type !== 'all' ? `&type=${type}` : ''
            }`
        )
            .then((response) => response.json())
            .then((data) =>
                this.setState({ movies: data.Search, loading: false })
            )}     
    render() {
        const { movies, loading } = this.state;

        return (
            <main className='container content'>
                <Search searchMovies={this.searchMovies} />
                {loading ? <Preloader /> : <Movies movies={movies} />}
            </main>
        );
    }
}


export {Main}