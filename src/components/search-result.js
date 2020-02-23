import React, { Component } from "react";
import ArtistCard from "./artist-card.js";
import SimilarArtist from "./similar-artists";

import Loading from "./loading.js";
import Error from "./error.js";
import PageArtist from "../page-artist.js";

class SearchResult extends Component {
  state = {
    loading: false,
    error: null,
    data: {
      data: [],
      album: {}
    }
  };
  componentWillReceiveProps(e) {
    let termino = e.busqueda;
    console.log(termino, "llega a search");
    this.fetchData(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + termino,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
          "x-rapidapi-key": "3d86728325msh0aa1110437ce7dep1bfe71jsnd1faee0a6219"
        }
      }
    );
  }

  UNSAFE_componentDidMount() {
    // this.fetchData(
    //   "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + termino,
    //   {
    //     method: "GET",
    //     headers: {
    //       "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    //       "x-rapidapi-key": "3d86728325msh0aa1110437ce7dep1bfe71jsnd1faee0a6219"
    //     }
    //   }
    // );
    // this.fetchData(
    //   "http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=Abba&api_key=9ee99b722969e9c0bdbebf1e6f42b3f6&format=json"
    // );
  }
  // fetchData(url,headers) = async (response) => {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   console.log(data, "Lo que trae la API");
  //   this.setState({
  //     data: data
  //   });
  // };

  //El fetchdata tiene que ser asincrono
  fetchData = async (url, headers) => {
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

  render() {
    return (
      <React.Fragment>
        {this.state.loading && <Loading />}
        {this.state.error && <Error errorMensaje={this.state.errorMensaje} />}

        <div className="container">
          <div className="row">
            {this.state.data.data.map((item, i) => {
              return (
                <React.Fragment>
                  <ArtistCard
                    id={item.id}
                    albumid={item.album.id}
                    img={item.album.cover}
                    titulo={item.title}
                    key={i}
                  />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default SearchResult;
