import React from "react";

const MovieCard = ({ myData }) => {
  const { alt_description } = myData;
  // console.log(myData)
  // console.log(myData.urls);
  return (
    <div className="card">
      <div className="card-info">
        {/* <p className="card-id">{id}</p> */}
        <img src={myData.urls.thumb}/>
        <p>{alt_description}</p>
        {/* <h2>{title.substr(0, 15)}</h2> */}
      </div>
    </div>
  );
};

export default MovieCard;
