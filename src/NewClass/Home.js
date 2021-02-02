import { Button } from "antd";
import React, { useState } from "react";

const Home = () => {
  const [playing, setPlaying] = useState(true);

  const on = () => {
    setPlaying(!playing);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("MyVideo")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (error) => console.log(error)
    );
  };

  const off = () => {
    setPlaying(!playing);
    let video = document.getElementsByClassName("MyVideo")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div>
      <center>This is the Home screen</center>

      <center>
        <div
          style={{
            width: "720px",
            height: "360px",
            border: "1px solid lightgray",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <video height="100%" width="100%" autoPlay mute className="MyVideo" />
          <div
            style={{
              width: "100%",
              heigth: "100%",
              backgroundColor: "black",
            }}
          ></div>
        </div>
        <div>
          {playing ? (
            <Button onClick={on}> Start </Button>
          ) : (
            <Button onClick={off}> Stop</Button>
          )}
        </div>
      </center>
    </div>
  );
};

export default Home;
