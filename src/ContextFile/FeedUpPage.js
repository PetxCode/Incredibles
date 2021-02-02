import { Button } from "antd";
import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

const FeedUpPage = () => {
  const { mgs, greeting, std, auth } = useContext(GlobalContext);
  const [start, setStart] = React.useState(true);

  const startNow = () => {
    setStart(!start);

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

  const endNow = () => {
    setStart(!start);
    let video = document.getElementsByClassName("video")[0];
    video.srcObject.getTracks()[0].stop();
  };
  return (
    <div>
      <center>This is the FeedUpPage</center>
      <center>
        {auth ? (
          <center>
            {std.map(({ id, name }) => (
              <div key={id}>{name}</div>
            ))}
          </center>
        ) : (
          <h2>Please, you'd have to Login </h2>
        )}
      </center>

      <center>
        <div>
          <video height="500px" width="500px" autoPlay className="video" />
          <center>
            {start ? (
              <Button onClick={startNow}>Start</Button>
            ) : (
              <Button onClick={endNow}>End</Button>
            )}
          </center>
        </div>
      </center>
    </div>
  );
};

export default FeedUpPage;
