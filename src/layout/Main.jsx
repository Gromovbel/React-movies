import React from "react";
import { Movies } from "../components/Movies";
import { Preloader } from "../components/Preloader";
import { Search } from "../components/Search";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    loading: true,
  };

  componentDidMount() {
    fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix`)
      .then((response) => response.json())
      .then((data) => this.setState({ movies: data.Search, loading: false }));
  }

  searchMovies = (str, type) => {
    this.setState({ loading: true });
    if (str && type) {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}&type=${type}`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    } else if (!str && type) {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=matrix&type=${type}`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    } else if (str && !type) {
      fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&s=${str}`)
        .then((response) => response.json())
        .then((data) => this.setState({ movies: data.Search, loading: false }));
    }
  };

  render() {
    const { movies, loading } = this.state;

    return (
      <main className="container content">
        <Search searchMovies={this.searchMovies} />
        {loading ? <Preloader /> : <Movies movies={movies} />}
      </main>
    );
  }
}

export { Main };
