import React, { useState } from "react";
import NavHeader from "./NavHeader";
import TopBar from "./TopBar";

const Header = () => {
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <TopBar
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        setIsMenuOpen={setIsMenuOpen}
        isMenuOpen={isMenuOpen}
      />
      <NavHeader
        isLogin={isLogin}
        setIsLogin={setIsLogin}
        isRegister={isRegister}
        setIsRegister={setIsRegister}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </>
  );
};

export default Header;
