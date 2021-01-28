import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "./Context/GlobalState";
import "./headerStyle.css";

const HeaderView = () => {
  const { mgs, greeting, std, auth, setAuth } = React.useContext(GlobalContext);
  return (
    <div>
      <Header className="header">
        <Link className="headerLink" to="/">
          Home Display
        </Link>
        <Link className="headerLink" to="/usecase">
          Use Case
        </Link>
        <Link className="headerLink" to="/feed">
          Feed Up
        </Link>

        {auth ? (
          <Button
            onClick={() => {
              setAuth(!auth);
            }}
          >
            LogOut
          </Button>
        ) : (
          <Button
            onClick={() => {
              setAuth(!auth);
            }}
          >
            LogIn
          </Button>
        )}
      </Header>
    </div>
  );
};

export default HeaderView;
