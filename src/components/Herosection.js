import React from 'react'
import "../css/Herosection.css";
import play from '../images/play.png';
import heart from '../images/heart1.png';

const Herosection = () => {
  return (
    <div className="hero-section-container hero-effect">
      <div className="movie-container">
        <p className="movie-name">Inception</p>
        <p className="movie-description">
          A thief who steals corporate secrets through the use of dream-sharing
          technology is given the inverse task of planting an idea into the mind
          of a C.E.O., but his tragic past may doom the project and his team to
          disaster.
        </p>
        <div className="btn-container">
          <button className="play-btn">
            <img alt="play" src={play} height={"15rem"} width={"15rem"} />
            Play
          </button>
          <button className="favourite-btn">
            <img alt="heart" src={heart} height={"20rem"} width={"20rem"} />
            Favourite
          </button>
        </div>
      </div>
    </div>
  );
}

export default Herosection
