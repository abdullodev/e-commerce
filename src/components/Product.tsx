import React, { FC, ReactNode, useContext } from "react";
import { ProductContextType, ProductType } from "../types.products.";
import { BsFillCartPlusFill } from "react-icons/bs";
import { FaHeart } from "react-icons/fa";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import { ProductContext } from "../context/ProductContext";

type Props = {
  product: ProductType;
};

const Product: FC<Props> = ({ product }) => {
  const { description } = product;
  const { fetchProduct, addCartProducts, addLikeProducts, isProductmark } =
    useContext(ProductContext) as ProductContextType;

  let onlyTitle: string =
    description.length > 45
      ? description.slice(0, 45).concat("...")
      : description;

  return (
    <div className="product">
      <div className="product_box">
        <div
          className="product_header"
          onClick={() => fetchProduct(product.id)}
        >
          <div
            className={
              isProductmark(product.id)
                ? "product_like my_btn active"
                : "product_like my_btn"
            }
            onClick={() => addLikeProducts(product.id)}
          >
            <FaHeart className="product_like_icon" />
          </div>
          <Link to={`/product/${product.id}`}>
            <div className="product_img_container">
              <img src={product.thumbnail} alt={product.brand} />
            </div>
            <div className="product_title">{onlyTitle}</div>
          </Link>
        </div>
        <div className="product_info">
          <div className="product_price">${product.price}</div>
          <Button
            className="addCart_btn my_btn"
            onClick={() => addCartProducts(product.id)}
          >
            <BsFillCartPlusFill className="product_cart_icon" />
            ADD
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Product;
