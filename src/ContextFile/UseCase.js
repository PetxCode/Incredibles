import { Button } from "antd";
import React, { useContext, useState } from "react";
import { GlobalContext } from "./Context/GlobalState";
import "./Home.css";

const UseCase = () => {
  const [playNow, setPlayNow] = useState(true);
  const { mgs, greeting, std } = useContext(GlobalContext);

  const start = () => {
    setPlayNow(!playNow);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("video")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.log(err)
    );
  };

  const stop = () => {
    setPlayNow(!playNow);
    let video = document.getElementsByClassName("video")[0];
    video.srcObject.getTracks()[0].stop();
  };

  return (
    <div>
      <center>This is the Use case Page</center>
      <center> {std[1].name} </center>

      <center>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            // backgroundColor:"black"
          }}
        >
          <video
            background="black"
            muted
            autoPlay
            height="480px"
            width="720px"
            className="video"
          />
          <div>
            {playNow ? (
              <Button onClick={start}>Start Playing</Button>
            ) : (
              <Button onClick={stop}>Stop Playing</Button>
            )}
          </div>
        </div>
      </center>
    </div>
  );
};

export default UseCase;
