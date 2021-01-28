import React, { useContext } from "react";
import { GlobalContext } from "./Context/GlobalState";

const FeedUpPage = () => {
  const { mgs, greeting, std, auth } = useContext(GlobalContext);
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
    </div>
  );
};

export default FeedUpPage;
