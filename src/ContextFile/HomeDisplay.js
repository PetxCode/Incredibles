import { Button } from "antd";
import React, { useState } from "react";
import "./Home.css";

const HomeDisplay = () => {
  const [playing, setPlaying] = useState(false);

  const HEIGHT = 500;
  const WIDTH = 760;

  const startVideo = () => {
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  };

  const stopVideo = () => {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div className="app">
      <div className="app__container">
        <video
          height="360px"
          width="720px"
          muted
          autoPlay
          className="app__videoFeed"
        ></video>
      </div>
      <div className="app__input">
        {playing ? (
          <button onClick={stopVideo}>Stop</button>
        ) : (
          <button onClick={startVideo}>Start</button>
        )}
      </div>
    </div>
  );
};

export default HomeDisplay;
