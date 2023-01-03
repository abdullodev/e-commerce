import React, { FC, SyntheticEvent, useContext, useState } from "react";
import { Button } from "@mui/material";
import Badge from "@mui/material/Badge";
import { IoIosSearch } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types.products.";
import logo from "../images/abdullo.png";
import { AiTwotoneDelete } from "react-icons/ai";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { AiOutlineLogin, AiOutlineLogout } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";

type Props = {
  isLogin: boolean;
  setIsLogin: React.Dispatch<React.SetStateAction<boolean>>;
  isRegister: boolean;
  isMenuOpen: boolean;
  setIsRegister: React.Dispatch<React.SetStateAction<boolean>>;
  setIsMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavHeader: FC<Props> = ({
  isLogin,
  setIsLogin,
  isRegister,
  setIsRegister,
  isMenuOpen,
  setIsMenuOpen,
}) => {
  const {
    fetchData,
    setTitle,
    setProducts,
    setCategory,
    fetchCategory,
    fetchProduct,
    deleteCartProduct,
    cartItems,
    likeItems,
    totalAmount,
  } = useContext(ProductContext) as ProductContextType;

  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    let logo = document.querySelector(".logo");
    let li = document.querySelectorAll(".shoping_box");

    if (window.pageYOffset >= 42) {
      header?.classList.add("active");
      logo?.classList.add("active");
      li.forEach((l) => {
        l.classList.add("active");
      });
    } else {
      header?.classList.remove("active");
      logo?.classList.remove("active");
      li.forEach((l) => {
        l.classList.remove("active");
      });
    }
  });

  const fethAllProduct = () => {
    setCategory([]);
    setProducts([]);
    fetchData();
    fetchCategory();
    setTitle("All Products");
  };

  const getProduct = (id: number) => {
    fetchProduct(id);
  };

  return (
    <>
      <div className="header">
        <div className="header_logo">
          <Link to="/">
            <div className="logo" onClick={fethAllProduct}>
              {/* <img src={logo} alt="logo" height="65" /> */}
              <h3>Logo</h3>
            </div>
          </Link>
        </div>

        <div className="header_search_bar">
          <form className="search_box">
            <input type="text" placeholder="Search for products..." />
            <Button className="header_submit my_btn">
              <IoIosSearch className="search_icon" />
            </Button>
          </form>
        </div>

        <div className="header_shopping_info">
          <ul className="header_nav_list">
            <li>
              <Link to="like">
                <Button className="shoping_box">
                  <Badge
                    badgeContent={likeItems.length}
                    sx={{
                      "& .MuiBadge-badge": {
                        color: "#ffffff",
                        backgroundColor: "#158abc",
                        top: "4px",
                        left: "7px",
                      },
                    }}
                    className="badge_header"
                  >
                    <FaHeart className="header_shop_icons" />
                  </Badge>
                  <div>Like</div>
                </Button>
              </Link>
            </li>

            <li>
              <Button className="shoping_box">
                <Badge
                  badgeContent={cartItems.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "#ffffff",
                      backgroundColor: "#158abc",
                      padding: ".2rem",
                      top: "4px",
                      left: "7px",
                    },
                  }}
                  className="badge_header"
                >
                  <BsFillCartPlusFill className="header_shop_icons" />
                </Badge>
                <div>Cart</div>
              </Button>

              <div className="header_shopped_items">
                <div className="shopped_items_three">
                  {cartItems?.slice(0, 3).map((item: any) => (
                    <div key={item.id} className="shopped_item">
                      <div className="header_cart_img">
                        <img src={item.thumbnail} alt={item.category} />
                      </div>
                      <Link to={`/product/${item.id}`}>
                        <div
                          className="header_cart_title"
                          onClick={() => getProduct(item.id)}
                        >
                          <p>{item.title}</p>
                        </div>
                      </Link>
                      <div className="header_cart_box">
                        <div className="header_cart_amount">
                          ${item.price}
                          <span>{item.count > 1 ? `(${item.count})` : ""}</span>
                        </div>
                        <div className="remove_header_cart">
                          <AiTwotoneDelete
                            className="remove_header_cart_icon"
                            onClick={() => deleteCartProduct(item.id)}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="shopped_event_box">
                  <div className="shopped_amount">
                    <span>Total</span>
                    <span>${totalAmount}</span>
                  </div>
                  <div className="header_shopped_btns">
                    <Button className="header_shop_btn my_btn">Buy</Button>
                    <Link to="cart" className="header_shop_btn">
                      <Button className="header_to_cart_btn my_btn">
                        To Cart
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>

        <div className="menu_box">
          <IconButton onClick={() => setIsMenuOpen(true)}>
            <MenuIcon className="menu_icon" />
          </IconButton>
        </div>
      </div>

      <div
        className={
          isMenuOpen ? "navbar_responsive active" : "navbar_responsive"
        }
      >
        <div className="nav_menu_header">
          <h3>Menu</h3>
          <IconButton onClick={() => setIsMenuOpen(false)}>
            <CloseIcon className="nav_close_icon" />
          </IconButton>
        </div>

        <ul className="respons_list">
          <li>
            <Link to="like">
              <Button
                className="response_nav_btn my_btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <Badge
                  badgeContent={likeItems.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "#ffffff",
                      backgroundColor: "#9c0245",
                      top: "4px",
                      right: "-10px",
                    },
                  }}
                  className="badge_header"
                >
                  <div className="response_icon_box">
                    <FaHeart className="header_shop_icons" />
                  </div>
                </Badge>
                <div className="response_link_text">Like</div>
              </Button>
            </Link>
          </li>

          <li>
            <Link to="cart">
              <Button
                className="response_nav_btn my_btn"
                onClick={() => setIsMenuOpen(false)}
              >
                <Badge
                  badgeContent={cartItems.length}
                  sx={{
                    "& .MuiBadge-badge": {
                      color: "#ffffff",
                      backgroundColor: "#9c0245",
                      padding: ".2rem",
                      top: "4px",
                      right: "-10px",
                    },
                  }}
                  className="badge_header"
                >
                  <div className="response_icon_box">
                    <BsFillCartPlusFill className="header_shop_icons" />
                  </div>
                </Badge>
                <div className="response_link_text">Cart</div>
              </Button>
            </Link>
          </li>

          <li>
            <Button
              className="response_nav_btn my_btn"
              onClick={() => {
                setIsMenuOpen(false);
                setIsLogin(true);
              }}
            >
              <div className="response_icon_box">
                <AiOutlineLogin className="header_shop_icons" />
              </div>
              <div className="response_link_text">Login</div>
            </Button>
          </li>

          <li>
            <Button
              className="response_nav_btn my_btn"
              onClick={() => {
                setIsRegister(true);
                setIsMenuOpen(false);
              }}
            >
              <div className="response_icon_box">
                <AiOutlineLogout className="header_shop_icons" />
              </div>
              <div className="response_link_text">Register</div>
            </Button>
          </li>
          <li>
            <Button
              className="response_nav_btn my_btn"
              onClick={() => setIsMenuOpen(false)}
            >
              <div className="response_icon_box">
                <MdLocationPin className="header_shop_icons" />
              </div>
              <div className="response_link_text">Location</div>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavHeader;
