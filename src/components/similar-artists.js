import React from "react";
import ArtistCard from "./artist-card.js";
import "../page-artist.css";
import { Link } from "react-router-dom";

class SimilarArtists extends React.Component {
  state = {
    loading: false,
    error: null,
    data: {
      data: [],
      album: {}
    }
  };
  componentWillReceiveProps(props) {
    let termino = props.titulo;
    console.log(termino, "llega a search");
    this.fetchData(
      "https://deezerdevs-deezer.p.rapidapi.com/search?q=" + props.titulo,
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
        <div className="row centrar margenes50">
          <div className="col-md-12">
            <h5>Del mismo Artista</h5>
            <hr />
          </div>
        </div>

        <div className="row">
          {this.state.data.data.slice(0, 4).map((item, j) => {
            return (
              <React.Fragment>
                <Link to={"/artista?" + this.props.id}>
                  <div className="col-md-3">
                    <ArtistCard
                      id={item.id}
                      albumid={item.album.id}
                      img={item.album.cover}
                      titulo={item.title}
                      key={j}
                    />
                  </div>
                </Link>
              </React.Fragment>
            );
          })}
        </div>
      </React.Fragment>
    );
  }
}
export default SimilarArtists;
