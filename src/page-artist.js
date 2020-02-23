import React, { Component } from "react";
import ArtistCard from "./components/artist-card.js";
import SearchBar from "./components/search-bar.js";
import "./page-artist.css";
import SimilarArtists from "./components/similar-artists.js";
import Loading from "./components/loading.js";
import Error from "./components/error.js";

class PageArtist extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      data: [],
      album: {},
      artist: {}
    }
  };
  componentDidUpdate(prevProps) {
    if (this.props.location !== prevProps.location) {
      window.location.reload(false);
      this.fetchData();
    }
  }

  componentDidMount(e) {
    let artista = this.props.history.location.search.substr(1);
    console.log(artista);
    this.fetchData(
      "https://deezerdevs-deezer.p.rapidapi.com/track/" + artista,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "3d86728325msh0aa1110437ce7dep1bfe71jsnd1faee0a6219"
        }
      }
    );
  }
  fetchData = async (url, headers) => {
    let artista = this.props.history.location.search.substr(1);

    this.setState({
      loading: true
    });
    const response = await fetch(url, headers);
    const data = await response.json();
    console.log(data, "Lo que trae la API");
    if (data.error) {
      this.setState({
        loading: false,
        error: true,
        errorMensaje: data.message
      });
    } else {
      this.setState({
        error: false,
        loading: false,
        data: data
      });
    }
  };

  changeHandle = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <SearchBar onChange={this.changeHandle} />
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}
        <div className="container">
          <div className="row centrar">
            <div className="col-md-3" />
            <div className="col-md-6">
              <img
                src={this.state.data.album.cover_medium}
                className="pic-artist margenes50"
              />
              <h2>{this.state.data.title}</h2>
              <h4>Artista: {this.state.data.artist.name}</h4>
              <h5>Album: {this.state.data.album.title}</h5>
              <h5>Fecha: {this.state.data.release_date}</h5>

              <audio
                controls
                src={this.state.data.preview}
                type="audio"
              ></audio>
            </div>
          </div>
          <div className="row, centrar">
            <SimilarArtists titulo={this.state.data.artist.name} />
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default PageArtist;
