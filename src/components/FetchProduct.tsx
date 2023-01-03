import React, { useContext, useEffect } from "react";
import { Button } from "@mui/material";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types.products.";
import { AiOutlineStar } from "react-icons/ai";
import SwipperImage from "./SwipperImage";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

const FetchProduct = () => {
  const { id } = useParams();

  const { singleProduct, fetchProduct, addCartProducts, err, isProductCome } =
    useContext(ProductContext) as ProductContextType;

  let idItem = Number(id);

  useEffect(() => {
    fetchProduct(idItem);
  }, []);

  return (
    <div className="fetch_product" id="product_link_id">
      {isProductCome && !err && (
        <div className="pt_loading">
          <Loading height="60" width="90" radius="6" />
        </div>
      )}
      {!isProductCome && err && (
        <div className="pt_err">
          <h3>Oops Something went wrong:)</h3>
        </div>
      )}
      {!isProductCome && !err && singleProduct !== undefined && (
        <div className="single_pt_container">
          <div className="single_pt_imgs">
            <SwipperImage images={singleProduct?.images} id={idItem} />
          </div>

          <div className="single_pt_content">
            <div className="pt_title">
              <h3>{singleProduct?.title}</h3>
              <p>{singleProduct?.description}</p>
            </div>
            <div className="pt_price">
              <h3>$ {singleProduct?.price}</h3>
              <div className="pt_icons_box">
                <div className="pt_icons">
                  <AiOutlineStar className="pt_star_icon" />
                  <AiOutlineStar className="pt_star_icon" />
                  <AiOutlineStar className="pt_star_icon" />
                  <AiOutlineStar className="pt_star_icon" />
                  <AiOutlineStar className="pt_star_icon" />
                </div>
                <div className="pt_rating">{singleProduct?.rating}</div>
              </div>
            </div>
            <div className="pt_brand">
              <h3>Brand: {singleProduct?.brand}</h3>
            </div>
            <div className="pt_event">
              <h3>Omborda mavjud: {singleProduct?.stock} dona</h3>
            </div>
            <div className="pt_btns">
              <Button className="pt_btn my_btn">Term payment</Button>
              <Button
                className="pt_btn my_btn"
                onClick={() => addCartProducts(singleProduct?.id)}
              >
                Add to Cart
              </Button>
              <Button className="pt_btn pt_btn_buy my_btn">Buy</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FetchProduct;
