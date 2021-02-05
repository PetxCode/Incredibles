import React from "react";

const SerachCard = ({ movie }) => {
  return (
    <div
      style={{
        height: "200px",
        width: "180px",
        borderRadius: "5px",
        backgroundColor: "lightgray",
        marginBottom: "10px",
        marginLeft: "35px",
      }}
    >
      <div>
        <img src={movie.poster} alt={movie.title} />
      </div>
    </div>
  );
};

export default SerachCard;
