import React from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              총액(0 items) :<strong> 0 원</strong>
            </p>

            <small className="subtotal_gift">
              <input type="checkbox" />
              체크박스 입니다.
            </small>
          </>
        )}
        decimalScale={2}
        value={0}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"W"}
      />

      <button>결제하기</button>
    </div>
  );
}

export default Subtotal;
