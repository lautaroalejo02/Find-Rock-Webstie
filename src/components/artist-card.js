import React from "react";
import "./artist-card.css";
import { Link } from "react-router-dom";
class ArtistCard extends React.Component {
  render() {
    return (
      <div className="col-3">
        <Link to={"/artista?" + this.props.id}>
          <div className="item">
            <img src={this.props.img} alt="" className="pic img-fluid" />
            <p className="titulo">{this.props.titulo}</p>

            {/* <audio controls id="player " src={this.props.audio}></audio> */}
          </div>
        </Link>
      </div>
    );
  }
}

export default ArtistCard;
