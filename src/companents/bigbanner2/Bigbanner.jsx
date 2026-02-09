import React from 'react';
import "./Bigbanner.css";
import banner from "../../assets/fontbanner.png";
import { ImPhone } from 'react-icons/im';
import { FaApple } from 'react-icons/fa';

const Bigbanner = () => {
  return (
    <div
      className="bigbanner"
      style={{
        width: "100%",
        height: "829px",
        backgroundImage: `url(${banner})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        position: "relative" 
      }}
    >




      <div className="banner_content">
        <span className="collection_label">New Collection 2023</span>
        <h1 className="product_title">Apple Watch Series 8 <FaApple/></h1>
        <p className="product_desc">
          Fine workmanship is waterproof and dustproof. <br />
          The watch is improved with many features to <br />
          ensure accuracy when monitoring users' health.
        </p>

        <div className="price_boxes">
          <div className="sale_box">
            Sale up to <br /> <strong>60%</strong>
          </div>
          <div className="price_box"> 
            <span className="current_price">$259.00</span>
          </div>
        </div>

        <button className="shop_btn">Shop Now</button>
      </div>
    </div>
  );
};

export default Bigbanner;