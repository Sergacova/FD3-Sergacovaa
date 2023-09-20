import React from "react"
import {Movies} from "../components/Movies"
import { Preloader } from "../components/Preloader"
import { Search } from "../components/Search"

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
    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?s=matrix&apikey=${str}`)
        .then(data => this.setState({movies: data.Search}))
    }
    searchMovies = (str) => {
        fetch(`http://www.omdbapi.com/?apikey=76945206&s=${str}`)
        .then(response => response.json())
        .then(data => this.setState({movies: data.Search}))
    }

    render () {
        const {movies} = this.state;

        
        return <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {
            movies.length ? 
            ( <Movies movies={this.state.movies}/>
            ): <Preloader />
        }
    
        <Movies movies={this.state.movies}/></main>

}
}

export {Main}