import React, { FC, useContext, useRef, useState } from "react";
import { FaHeart } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Pagination } from "swiper";

import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import { ProductContext } from "../context/ProductContext";
import { ProductContextType } from "../types.products.";

type Props = {
  images: string[];
  id: number;
};
const SwipperImage: FC<Props> = ({ images, id }) => {
  const { addLikeProducts, isProductmark } = useContext(
    ProductContext
  ) as ProductContextType;

  return (
    <div className="swipper_content">
      <div
        className={
          isProductmark(id) ? "like_in_pt my_btn active" : "like_in_pt my_btn"
        }
        onClick={() => addLikeProducts(id)}
      >
        <FaHeart className="pt_like" />
      </div>

      <Swiper
        effect={"cube"}
        grabCursor={true}
        pagination={true}
        modules={[EffectCube, Pagination]}
        className="my_swipper"
      >
        {images?.map((img, index) => (
          <SwiperSlide key={index} className="swipper_slide">
            <img src={img} alt="image" className="swipper_img" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwipperImage;
