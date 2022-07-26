import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";
function CheckOut() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://www.disruptivestatic.com/wp-content/uploads/2018/10/Screen-Shot-2018-10-29-at-11.50.03-AM-450x96.png"
          alt=""
        />
      </div>

      <div className="checkout_right">
        <Subtotal></Subtotal>
      </div>
    </div>
  );
}

export default CheckOut;
