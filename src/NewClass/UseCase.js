import { Button } from "antd";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./ContextAPI/Global";

const UseCase = () => {
  const { users, removeUserNow } = useContext(GlobalContext);
  return (
    <div>
      <center
        style={{
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        This is the Use Case
      </center>

      {users.map(({ id, name }) => (
        <div
          key={id}
          style={{
            display: "flex",
            justifyContent: "space-between",
            margin: "0 80px",
            border: "1px solid lightgray",
            padding: "10px 50px",
            alignItems: "center",
          }}
        >
          <div>{name}</div>
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
            >
              <Link to={`/edit/${id}`}>Edit</Link>
            </Button>
            <Button
              style={{
                // marginRight: "20px",
                width: "120px",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => {
                removeUserNow(id);
                console.log(id);
              }}
            >
              Remove
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UseCase;
