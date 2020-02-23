import React from "react";
import "./page-home.css";
import logo from "./logo.svg";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    this.props.history.push("/busqueda?" + this.state.busqueda);
  };
  handleChange = e => {
    this.setState({
      busqueda: e.target.value
    });
  };
  handleClick = e => {
    e.preventDefault();
    this.setState({
      modal: true
    });
  };

  state = {
    modal: false,
    busqueda: ""
  };
  render() {
    const hola = (
      <div className="container">
        <div className="row" className="centrado">
          <div className="col-md-6" className="centrar">
            <img id="logo" src={logo} alt="" />
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
                  value={this.state.busqueda}
                  placeholder="Busca una banda"
                  onChange={this.handleChange}
                />
              </div>
              <div className="actions">
                <button type="submit" className="btng">
                  Search Similar Artists
                </button>
                <button className="btng" onClick={this.handleClick}>
                  I feel lucky
                </button>
              </div>
            </form>
          </div>
        </div>
        {/* MODALES */}
        {/* {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>Hola jajaja</h4>
          </Modal>,

          document.getElementById("teleport")
        )} */}
      </div>
    );
    return ReactDOM.createPortal(
      hola,

      document.getElementById("teleport")
    );
  }
}

export default PageHome;
