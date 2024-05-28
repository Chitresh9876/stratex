import React, { useEffect, useState } from 'react';
import '../css/Moviesection.css';
import Moviecards from './Moviecards';
import axios from 'axios';

const Moviesection = () => {
  const [movieData, setMovieData] = useState([]);
  useEffect(() => {
    // setMovieData(data());
    // console.log(data());
    data();
  }, [])
  
  const data = async () => {
    const url = process.env.REACT_APP_API_KEY;
    await axios
      .get("https://dummyapi.online/api/movies")
      .then((res) => {
        setMovieData(res?.data);
        // console.log(res?.data);
      })
      .catch((err) => {
        console.log("cannot fetch data");
      });
  };


  return (
    <div className="movie-section">
      <div className="movie-title">Movies</div>
      <div className="movie-card">
        {movieData.map((e) => {
          return <Moviecards key={e?.id} name={e?.movie} link={e?.imdb_url}/>;
        })}
      </div>
    </div>
  );
}

export default Moviesection
