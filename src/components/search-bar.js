import React from "react";
import "./search-bar.css";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

class SearchBar extends React.Component {
  state = {
    busqueda: ""
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });

    console.log("Soy el input: ", e.target.name, e.target.value);
  };
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.name);
  };
  handleClick = e => {
    e.preventDefault();
    console.log(e.target.name, "Ouch me apretaron");
  };

  render() {
    return (
      <React.Fragment>
        <div className="row">
          <div className="col-md-2">
            <Link to="/">
              <img className="logo-barra" src={logo} alt="" />
            </Link>
          </div>
          <div className="col-md-6">
            <form
              className="form-inline"
              onSubmit={this.handleSubmit}
              name="form"
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.props.onChange}
                />
              </div>
            </form>
          </div>
        </div>
        <hr />
      </React.Fragment>
    );
  }
}

export default SearchBar;
