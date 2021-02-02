import { Button } from "antd";
import React, { useState } from "react";
import "./Home.css";

const HomeDisplay = () => {
  const [playing, setPlaying] = useState(false);

  const starting = () => {
    setPlaying(!playing);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("play")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };

  const endStarting = () => {
    setPlaying(!playing);
    let video = document.getElementsByClassName("video")[0];
    video.srcOject.getTracks()[0].stop();
  };

  return (
    <div>
      <center>This is the First Page</center>

      <center>
        <div className="video">
          <video height="100%" width="100%" muted autoPlay className="play" />
        </div>
      </center>

      <center>
        {playing ? (
          <Button onClick={starting}>Start</Button>
        ) : (
          <Button onClick={endStarting}>Stop</Button>
        )}
      </center>
    </div>
  );
};

export default HomeDisplay;
