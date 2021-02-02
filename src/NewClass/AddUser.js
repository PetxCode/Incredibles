import { Button } from "antd";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "../NewClass/ContextAPI/Global";
import { v4 as uuid } from "uuid";

const AddUser = () => {
  const hist = useHistory();
  const { users, addingUsers } = useContext(GlobalContext);
  const [input, setInput] = React.useState("");

  const addUser = () => {
    const newUser = { id: uuid(), name: input };

    addingUsers(newUser);
  };

  return (
    <div>
      <center
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Add new user
      </center>

      <div>
        <form
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <input
            style={{
              width: "600px",
              marginBottom: "20px",
              height: "40px",
              padding: "20px",
            }}
            placeholder="Enter a New User"
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
            }}
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
                addUser();
                hist.push("/use");
              }}
            >
              Add User
            </Button>
            <Button
              style={{
                // marginRight: "20px",
                width: "120px",
                backgroundColor: "red",
                color: "white",
              }}
              onClick={() => {
                hist.push("/use");
              }}
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
