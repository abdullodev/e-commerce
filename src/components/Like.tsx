import React, { useContext } from "react";
import { Button } from "@mui/material";
import { BsFillCartPlusFill } from "react-icons/bs";
import { AiTwotoneDelete } from "react-icons/ai";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types.products.";
import { BsArrowLeftCircle } from "react-icons/bs";
import { Link } from "react-router-dom";

const Like = () => {
  const { addCartProducts, deleteLikeProduct, fetchProduct, likeItems } =
    useContext(ProductContext) as ProductContextType;

  return (
    <div className="likes">
      <div className="likes_content">
        <div className="likes_title">
          <h3>Likes</h3>
        </div>
        <div className="like_box">
          {likeItems.length === 0 ? (
            <div className="empty_like">
              <h3>There is no like product!</h3>
              <Link to="/" className="link_like_back">
                <Button className="like_back_btn">
                  <BsArrowLeftCircle className="like_back_icon" />
                  Home
                </Button>
              </Link>
            </div>
          ) : (
            likeItems?.map((c: any) => (
              <div className="like" key={c.id}>
                <div className="like_img">
                  <img src={c?.thumbnail} alt={c.category} />
                </div>
                <div className="like_pt_title">
                  <Link to={`/product/${c.id}`}>
                    <p onClick={() => fetchProduct(c.id)}>{c.title}</p>
                  </Link>
                </div>
                <div className="like_price">
                  <p>${c.price}</p>
                </div>
                <div className="like_event_btns">
                  <Button
                    className="like_event_btn my_btn"
                    onClick={() => addCartProducts(c.id)}
                  >
                    <BsFillCartPlusFill className="like_pt_delete" />
                    Add to Cart
                  </Button>
                  <Button
                    className="like_event_btn my_btn"
                    onClick={() => deleteLikeProduct(c.id)}
                  >
                    <AiTwotoneDelete className="like_pt_delete" />
                    Delete
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Like;
