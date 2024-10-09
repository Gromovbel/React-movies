import React from "react";

class Search extends React.Component {
  state = {
    search: "",
    type: "",
  };

  handleKeyPress = (event) => {
    if (event.key === "Enter") {
      this.props.searchMovies(this.state.search, this.state.type);
    }
  };

  render() {
    return (
      <div className="row">
        <div className="input-field">
          <input
            placeholder="Search"
            type="search"
            className="validate"
            value={this.state.search}
            onChange={(e) => this.setState({ search: e.target.value })}
            onKeyDown={this.handleKeyPress}
          />
          <button
            className="btn search-btn red darken-2"
            onClick={() =>
              this.props.searchMovies(this.state.search, this.state.type)
            }
          >
            Search
          </button>
        </div>

        <form action="#" className="radioForm">
          <label>
            <input
              type="radio"
              name="group1"
              value="movie&&series"
              onChange={(e) => this.setState({ type: e.target.value })}
              onKeyDown={this.handleKeyPress}
            />
            <span>All</span>
          </label>
          <label>
            <input
              type="radio"
              name="group1"
              value="movie"
              onChange={(e) => this.setState({ type: e.target.value })}
              onKeyDown={this.handleKeyPress}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              type="radio"
              name="group1"
              value="series"
              onChange={(e) => this.setState({ type: e.target.value })}
              onKeyDown={this.handleKeyPress}
            />
            <span>Series</span>
          </label>
        </form>
      </div>
    );
  }
}

export { Search };
