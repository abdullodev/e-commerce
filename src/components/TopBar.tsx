import React, { FC, useState } from "react";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { Button } from "@mui/material";

type Props = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isRegister: boolean;
  isMenuOpen: boolean;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const TopBar: FC<Props> = ({
  isLogin,
  setIsLogin,
  isRegister,
  setIsRegister,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  return (
    <>
      <div className="topBar">
        <div className="top_greating">
          <p>Welcome to our shop!</p>
        </div>
        <div className="top_navbar_info">
          <ul className="top_nav_list">
            <li>
              <MdLocationPin className="top_nav_icon" />
              <div>Location</div>
            </li>
            <li onClick={() => setIsLogin(true)}>
              <AiOutlineLogin className="top_nav_icon" />
              <div>Log In</div>
            </li>
            <li onClick={() => setIsRegister(true)}>
              <AiOutlineLogout className="top_nav_icon" />
              <div>Register</div>
            </li>
          </ul>
        </div>
      </div>

      <div
        className={
          isLogin || isRegister || isMenuOpen ? "auto_back active" : "auto_back"
        }
        onClick={() => {
          setIsLogin(false);
          setIsRegister(false);
          setIsMenuOpen(false);
        }}
      ></div>

      <div className={isLogin ? "auto_box login active" : "auto_box"}>
        <div className="auto_header">
          <h3>Login</h3>
          <IoMdClose
            className="auto_close_icon"
            onClick={() => setIsLogin(false)}
          />
        </div>
        <form className="auto_form">
          <div className="input_form_box">
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="input_form_box">
            <input type="password" placeholder="Password" />
          </div>
          <div className="auto_submit">
            <Button className="auto_submit_btn my_btn" type="submit">
              Log In
            </Button>
          </div>
        </form>
        <div className="auto_footer">
          <p>You don't have an account?</p>
          <Button
            className="auto_question_btn"
            onClick={() => {
              setIsLogin(false);
              setIsRegister(true);
            }}
          >
            Register
          </Button>
        </div>
      </div>

      <div
        className={
          isRegister ? "auto_box register active" : "auto_box register"
        }
      >
        <div className="auto_header">
          <h3>Register</h3>
          <IoMdClose
            className="auto_close_icon"
            onClick={() => setIsRegister(false)}
          />
        </div>
        <form className="auto_form">
          <div className="input_form_box">
            <input type="text" placeholder="Name" />
          </div>
          <div className="input_form_box">
            <input type="text" placeholder="Phone number" />
          </div>
          <div className="input_form_box">
            <input type="password" placeholder="Password" />
          </div>
          <div className="auto_submit">
            <Button className="auto_submit_btn my_btn" type="submit">
              Register
            </Button>
          </div>
        </form>
        <div className="auto_footer">
          <p>Already have an account?</p>
          <Button
            className="auto_question_btn"
            onClick={() => {
              setIsLogin(true);
              setIsRegister(false);
            }}
          >
            Log in
          </Button>
        </div>
      </div>
    </>
  );
};

export default TopBar;
