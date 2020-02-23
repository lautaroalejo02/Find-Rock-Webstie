import React, { Component } from "react";
import ArtistCard from "./components/artist-card.js";
import SearchBar from "./components/search-bar.js";
import SearchResult from "./components/search-result";

class PageSearchResult extends Component {
  state = {
    busqueda: ""
  };
  //Para inicializar algo
  constructor(props) {
    super(props);
    console.log("Antes del metodo render jajajjas");
  }
  // Hace algo Luego del metodo render
  componentDidMount() {
    // Esto hace falta para bajar la ubicacion
    let search = this.props.history.location.search
      .substr(1)
      .replace("%20", "+");

    this.setState({
      busqueda: search
    });
    console.log(search, "Lo que me trae la url");
    console.log("Luego del metodo render");
  }
  //Hace algo antes de irnos del componente

  changeHandle = e => {
    this.props.history.push("/busqueda?" + this.state.busqueda);
    this.setState({
      busqueda: e.target.value
    });
  };
  render() {
    console.log("render()", "Estoy en render");
    return (
      <React.Fragment>
        <SearchBar onChange={this.changeHandle} />
        <SearchResult busqueda={this.state.busqueda} />
      </React.Fragment>
    );
  }
}
export default PageSearchResult;
