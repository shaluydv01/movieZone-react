import React, { useState } from "react";
import { movies } from "./data.js";

const Movies = () => {
  const [movieList, setMovieList] = useState(movies);

  const filterByCategory = (cat) => {
    setMovieList(movies.filter((data) => data.category == cat));
  };

  return (
    <>
      <div className="my-3 mx-auto" style={{ width: "1000px", margin: "auto" }}>
        <div className="mx-auto text-center">
          <button onClick={() =>setMovieList(movies)} type="button" className="btn btn-outline-primary mx-3 px-3">
            All
          </button>
          <button onClick={() =>filterByCategory("Action")} type="button" className="btn btn-outline-danger mx-3">
            Action
          </button>
          <button onClick={() =>filterByCategory("Thriller")} type="button" className="btn btn-outline-success mx-3">
            Thriller
          </button>
          <button onClick={() =>filterByCategory("Animation")} type="button" className="btn btn-outline-light mx-3">
            Animation
          </button>
          <button onClick={() =>filterByCategory("Horror")} type="button" className="btn btn-outline-info mx-3">
            Horror
          </button>
          <button onClick={() =>filterByCategory("Drama")} type="button" className="btn btn-outline-warning mx-3">
            Drama
          </button>
          <button onClick={() =>filterByCategory("Sci-Fi")} type="button" className="btn btn-outline-primary mx-3">
            Sci - Fi
          </button>
        </div>
      </div>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexWrap: "wrap",
          width: "1200px",
          // backgroundColor:'black',
          textAlign: "center",
          // margin: "auto",
          margin: '1.5rem 1.2rem 1.5rem 0.5rem'
        }}
      >
        {movieList.map((data) => (
          <div key={data.id} style={{ maxWidth: "300px", textAlign: "center" }}>
            <div style={{ padding: "10px" }} className="hover_effect">
              <img
                src={data.poster_path}
                alt=""
                style={{
                  width: "200px",
                  height: "280px",
                  border: "1px solid yellow",
                  borderRadius: "10px",
                }}
              />
            </div>
            <div className="text" style={{textAlign: 'center'}}>
              <h3>{data.title}</h3>
              <p>{data.release_date}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Movies;
