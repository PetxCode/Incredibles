import { Button } from "antd";
import { Header } from "antd/lib/layout/layout";
import React from "react";
import { Link } from "react-router-dom";

const HeaderBar = () => {
  return (
    <div>
      <Header
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          color: "white",
        }}
      >
        <div>
          <Link
            to="/"
            style={{
              color: "white",
            }}
          >
            Home
          </Link>
        </div>
        <div>
          <Link
            to="/use"
            style={{
              color: "white",
            }}
          >
            Use Case
          </Link>
        </div>
        <div>
          <Button>
            <Link to="/add">Add User</Link>
          </Button>
        </div>
      </Header>
    </div>
  );
};

export default HeaderBar;
