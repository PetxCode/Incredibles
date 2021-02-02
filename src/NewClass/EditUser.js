import { Button } from "antd";
import React from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from "./ContextAPI/Global";

const EditUser = (props) => {
  const hist = useHistory();
  const { users, editUser } = React.useContext(GlobalContext);

  const [presentUser, setPresentUser] = React.useState({
    id: " ",
    name: " ",
  });

  const presentID = props.match.params.id;

  React.useEffect(() => {
    const userID = presentID;

    const presentUser = users.find((user) => user.id === userID);
    setPresentUser(presentUser);
  }, [presentID, users]);

  return (
    <div>
      <center
        style={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        Edit user
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
            placeholder="Edit User"
            value={presentUser.name}
            name="name"
            onChange={(e) => {
              setPresentUser({
                ...presentUser,
                [e.target.name]: e.target.value,
              });
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
                editUser(presentUser);
                hist.push("/use");
              }}
            >
              Okay
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

export default EditUser;
