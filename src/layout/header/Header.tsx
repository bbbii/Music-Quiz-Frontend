import React, { ReactNode } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@chakra-ui/react";

import "./Header.css";
import { ColorModeSwitcher } from "ColorModeSwitcher";

type HeaderProps = {
  children?: ReactNode;
};

const Header: React.FC<HeaderProps> = ({ children }) => {
  const navigate = useNavigate();

  const goToLoginPage = () => {
    navigate("/login");
  };

  return (
    <div className="header-container">
      <div className="header-top-bar">
        <Link to={"/"}>
          <img className="header-logo-image" alt="logo" src="/img/doge.png" />
        </Link>
        <p className="header-site-name">아이거...</p>
        <div>
          <Button
            style={{
              backgroundColor: "rgb(61, 61, 61)",
              fontFamily: "SUIT-ExtraBold",
              color: "white",
              fontSize: "20px",
              width: "5rem",
            }}
            onClick={goToLoginPage}
          >
            로그인
          </Button>
          <ColorModeSwitcher />
        </div>
      </div>
      {children}
    </div>
  );
};

export default Header;
