import cartSlide from "../../Redux/cartSlide";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DetailProductcss from "../Style/DetailProductcss.css";

export default function CartDetail({ product }) {
  const [quantity, setQuantity] = useState(product.quantity);
  const [color, setColor] = useState(product.color);
  const [size, setSize] = useState(product.size);

  const dispatch = useDispatch();

  const updateQuantity = (type) => {
    if (type === "up") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const deleteProduct = () => {
    dispatch(
      cartSlide.actions.deleteProduct({
        id: product.id,
        alert: "xóa thành công",
      })
    );
  };

  useEffect(() => {
    dispatch(
      cartSlide.actions.changeProduct({
        id: product.id,
        size: size,
        color: color,
        quantity: quantity,
      })
    );
  }, [quantity, color, size]);

  return (
    product.id && (
      <div style={{ marginTop: "40px" }} className="cart-detail">
        <div className="cart-detai-img">
          <img src={product.product.linkImg[1]} className="img-detail" />
          <div className="cart-detail-product">
            <p className="detail-detailproduct">
              {product.product.detailproduct}
            </p>
            <div className="detail-size-color">
              <p className="detail-size">{product.size}</p>
              <span>/</span>
              <p className="detail-color">{product.color}</p>
            </div>
            <div className="size-product color-product">
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginLeft: "5px",
                }}
              ></div>
              <select
                value={size}
                onChange={(e) => setSize(e.target.value)}
                className="select"
              >
                {product.product.size.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div className="bill-count">
              <div className="product-quantity-change product-quantity">
                <button
                  className="quantity-down"
                  onClick={() => updateQuantity("down")}
                >
                  -
                </button>
                <span className="quantity-buy">{quantity}</span>
                <button
                  className="quantity-up"
                  onClick={() => updateQuantity("up")}
                >
                  +
                </button>
              </div>
              <div className=" bill-child">
                <p>{product.quantity * product.product.main_price}.000đ</p>
              </div>
            </div>
          </div>
          <button className="button-delete" onClick={deleteProduct}>
            X
          </button>
        </div>
      </div>
    )
  );
}
