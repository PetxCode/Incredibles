import { Button } from "antd";
import React, { useState, useHistory } from "react";
import { Link } from "react-router-dom";
import Axios from "axios";
import SerachCard from "./SerachCard";

const MovieScreen = () => {
  // const hist = useHistory();
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);

  const API = "5f33e3d9d55add50898b7b7fbcc5a8ad";
  const search = (e) => {
    e.preventDefault();
    setQuery(e.target.value);

    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${API}&language=en-US&page=1&include_adult=false&query=${e.target.value}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          setResult(data.results);
          console.log(result);
        } else {
          setResult([]);
        }
      });
  };

  return (
    <div>
      <center>This is the Movie</center>

      <center>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 50px",
            margin: "0 40px",
          }}
        >
          <Button>
            <Link to="/">Watch List</Link>
          </Button>
          <Button>
            <Link to="/">Watched Movie</Link>
          </Button>
        </div>
      </center>

      <div>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            marginTop: "40px",
          }}
        >
          <input
            style={{
              width: "600px",
              marginBottom: "20px",
              height: "40px",
              padding: "20px",
            }}
            placeholder="Search Movie"
            value={query}
            onChange={search}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Button
              style={{
                marginRight: "20px",
                width: "120px",
                backgroundColor: "green",
                color: "white",
              }}
              onClick={() => {
                // hist.push("/use");
              }}
            >
              Search
            </Button>
          </div>
        </form>
      </div>
      <div>
        {result.length >= 0 && (
          <div>
            {result.map((movie) => (
              <div>
                <SerachCard movie={movie} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MovieScreen;
