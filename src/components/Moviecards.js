import React,{useState} from 'react';
import '../css/MovieCards.css';
import heart from "../images/heart1.png";
import outlineHeart from "../images/heart2.png";

const Moviecards = ({ name, link }) => {

  const [cHeart, setHeart] = useState(0)
  const fav = (e) => {
    // setHeart(cHeart + 1);
    // e.preventDefalut();
    // setHeart(cHeart ? false : true);
  }
  
  return (
    <div className="movie-cards">
      <div className="title">{name}</div>
      <div className="title-fav">
        <button className="watch">
          <a href={link} target="_blank">Watch</a>
        </button>
        <button className="heart" onClick={fav()}>
          <img src={cHeart ? outlineHeart : heart} alt="heart" />
        </button>
      </div>
    </div>
  );
}

export default Moviecards
