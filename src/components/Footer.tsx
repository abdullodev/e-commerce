import React from "react";
import { BsTelephone } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdLocationPin } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { BsFacebook } from "react-icons/bs";
import { AiOutlineYoutube } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { Button } from "@mui/material";

const Footer = () => {
  return (
    <div className="footer_container">
      <div className="footer_content">
        <div className="footer_info_container">
          <div className="footer_box">
            <div className="footer_box_header">
              <h3>Ma'lumotlar</h3>
            </div>
            <ul className="footer_box_info">
              <li>
                <a href="#">Ommaviy oferata(Foydalanuvchi bitimi)</a>
              </li>
              <li>
                <a href="#">
                  Muddatli to'lov asosida sotib olishning umumiy qoidalari
                </a>
              </li>
              <li>
                <a href="#">Muddatli to'lov shartlari</a>
              </li>
              <li>
                <a href="#">Tovarlarni yetkazib berish va to'lov turlari</a>
              </li>
              <li>
                <a href="#">Buyurtmani bekor qilish va tovarni qaytarish</a>
              </li>
              <li>
                <a href="#">Biz haqimizda</a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <div className="footer_box_header">
              <h3>Biz bilan aloqa</h3>
            </div>
            <ul className="footer_box_info">
              <li>
                <a href="#">
                  <BsTelephone className="footer_icon" />
                  +99 890 094 18 01
                </a>
              </li>
              <li>
                <a href="#">
                  <AiOutlineMail className="footer_icon" />
                  Biz haqimizda
                </a>
              </li>
              <li>
                <a href="#">
                  <MdLocationPin className="footer_icon" />
                  Biz haqimizda
                </a>
              </li>
            </ul>
          </div>

          <div className="footer_box">
            <div className="footer_box_header">
              <h3>Bizning ishtimoiy tarmoqlar:</h3>
            </div>
            <ul className="footer_box_tarmoq">
              <li>
                <Button className="footer_icon_ijtarmoq">
                  <AiOutlineInstagram className="footer_tarmoq_icon" />
                </Button>
              </li>
              <li>
                <Button className="footer_icon_ijtarmoq">
                  <BsFacebook className="footer_tarmoq_icon" />
                </Button>
              </li>
              <li>
                <Button className="footer_icon_ijtarmoq">
                  <FaTelegramPlane className="footer_tarmoq_icon" />
                </Button>
              </li>
              <li>
                <Button className="footer_icon_ijtarmoq">
                  <AiOutlineYoutube className="footer_tarmoq_icon" />
                </Button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
