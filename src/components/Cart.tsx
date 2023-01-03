import React, { useContext } from "react";
import { Button } from "@mui/material";
import { AiTwotoneDelete } from "react-icons/ai";
import { ProductContextType } from "../types.products.";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { BsArrowLeftCircle } from "react-icons/bs";
import { IoMdAdd } from "react-icons/io";
import { AiOutlineMinus } from "react-icons/ai";

const Cart = () => {
  const {
    deleteCartProduct,
    cartItems,
    fetchProduct,
    totalAmount,
    increseCount,
    decreseCount,
  } = useContext(ProductContext) as ProductContextType;

  return (
    <div className="cart_container">
      <div className="cart_title">
        <h2>Cart</h2>
      </div>
      <div className="cart_bolim">
        <div className="cart_content">
          {cartItems.length === 0 ? (
            <div className="empty_cart">
              <h3>There is no product in your cart!</h3>
              <Link to="/" className="link_cart_back">
                <Button className="cart_back_btn">
                  <BsArrowLeftCircle className="cart_back_icon" />
                  Home
                </Button>
              </Link>
            </div>
          ) : (
            cartItems.map((c: any) => (
              <div className="cart" key={c.id}>
                <div className="cart_img">
                  <img src={c.thumbnail} alt={c.category} />
                </div>
                <div className="cart_pt_title">
                  <Link to={`/product/${c.id}`}>
                    <div
                      className="cart_sarlavha"
                      onClick={() => fetchProduct(c.id)}
                    >
                      <p>{c.title}</p>
                    </div>
                  </Link>
                </div>
                <div className="cart_btns">
                  <Button
                    className="cart_event_btn my_btn"
                    onClick={() => decreseCount(c.id)}
                  >
                    <AiOutlineMinus />
                  </Button>
                  <span className="cart_pt_count">{c.count}</span>
                  <Button
                    className="cart_event_btn my_btn"
                    onClick={() => increseCount(c.id)}
                  >
                    <IoMdAdd />
                  </Button>
                </div>
                <div className="cart_price">
                  <p>
                    ${c.price}
                    <span>{c.count > 1 ? `(${c.count})` : ""}</span>
                  </p>
                </div>
                <div className="cart_delete">
                  <AiTwotoneDelete
                    className="cart_pt_delete"
                    onClick={() => deleteCartProduct(c.id)}
                  />
                </div>
              </div>
            ))
          )}
        </div>

        <div className="cart_calc_content">
          <div className="calc_header">
            <div className="cart_calc_title">
              <h3>Product Count: {cartItems.length}</h3>
            </div>
            <div className="all_amount">
              <h2>Total Amount:</h2>
              <h2>${totalAmount}</h2>
            </div>
          </div>
          <div className="calc_btn_box">
            <Button className="calc_btn my_btn">Buy</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
