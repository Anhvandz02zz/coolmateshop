import useFetch from "../../Hook/useFetch";
import { Button, Container, Spinner } from "reactstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useParams } from "react-router-dom";
import DetailProductcss from "../Style/DetailProductcss.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import SuportSize from "./SuportSize";
import cartSlide from "../../Redux/cartSlide";
import { v4 as uuidv4 } from "uuid";

export default function ProductSportStuffDetail({ productData }) {
  // call api sản phẩm về
  const { id } = useParams();
console.log("idok",id)
  const {
    data: dataproduct,
    isLoading,
    imgProduct,
  } = useFetch(`http://localhost:3004/productData/${id}`,  false);
  // create dispatch  event sorting
  const dispatch = useDispatch();

  const [quantity, setQuantity] = useState(1);

  const updateQuantity = (type) => {
    if (type === "up") {
      setQuantity(quantity + 1);
    } else {
      setQuantity(quantity - 1 < 1 ? 1 : quantity - 1);
    }
  };

  const [size, setSize] = useState("M");

  const [color, setColor] = useState();

  const handleAddClick = () => {
    dispatch(
      cartSlide.actions.addProduct({
        id: uuidv4(),
        size: size,
        color: color,
        product: dataproduct,
        quantity: quantity,
      })
    );
  };

  const [supPortSize, setSupPortSize] = useState(false);
  const handeclicksuportsize = () => {
    setSupPortSize(true);
  };
  const [features, setFeature] = useState(false);
  const handleClickfeature = (e) => {
    e.preventDefault();
    setFeature(true);
    Setquantity("");
  };

  const productPolicy = [
    {
      key: "1",
      icon: "https://www.coolmate.me/images/icons/icon3.svg",
      content: "Đổi trả cực dễ chỉ cần số điện thoại",
    },
    {
      key: "2",
      icon: "https://www.coolmate.me/images/icons/icon4.svg",
      content: "Miễn phí vận chuyển cho đơn hàng trên 200k",
    },
    {
      key: "3",
      icon: "https://www.coolmate.me/images/icons/icon5.svg",
      content: "60 ngày đổi trả vì bất kỳ lý do gì",
    },
    {
      key: "4",
      icon: "https://www.coolmate.me/images/icons/icon2.svg",
      content: "Hotline 1900.27.27.37 hỗ trợ từ 8h30 - 22h mỗi ngày",
    },
    {
      key: "5",
      icon: "https://www.coolmate.me/images/icons/icon1.svg",
      content: "Đến tận nơi nhận hàng trả,hoàn tiền trong 24h",
    },
    {
      key: "6",
      icon: "https://www.coolmate.me/images/icons/icon6.svg",
      content: "Giao hàng nhanh toàn quốc",
    },
  ];

  return (
    <Container className="Container">
      {isLoading === false && dataproduct != null && (
        <Row>
          <Col sm={7}>
            <div className="path">
              <p>
                <Link className="path-link-detail" to="/">
                  Trang chủ/{" "}
                </Link>
              </p>
              <p className="data-type">
                <Link className="path-link-detail" to={`/${dataproduct.type}`}>
                  {dataproduct.type}
                </Link>
              </p>
            </div>
            <div className="product-present">
              <div className="product-detail__left">
                <img src={dataproduct.linkImg[1]}></img>
              </div>
            </div>
          </Col>

          <Col sm={5}>
            <div className="product-detail__right">
              <h1 className="detailproduct">{dataproduct.detailproduct}</h1>
              <div className="purchases-sold">
                <p className="purchases">{dataproduct.purchases}</p>
                <p className="sold">{dataproduct.sold}</p>
              </div>
              <div className="mainprice-sale-price__1">
                <p style={{ color: "#D3D3D3", fontSize: "13px" }}>
                  {dataproduct.main_price}
                </p>
                <p style={{ color: "#A9A9A9", fontSize: "14px" }}>
                  {dataproduct.sale}
                </p>
                <p style={{ color: "#696969", fontSize: "15px" }}>
                  {dataproduct.price_1}
                </p>
              </div>
              {dataproduct.soldtow ? (
                <div className="sold-tow">
                  <p>{dataproduct.soldtow}</p>
                </div>
              ) : null}
              <div className="color-product">
                <p
                  style={{
                    marginTop: "10px",
                    color: "#231f20",
                    fontSize: "14px",
                    marginLeft: "10px",
                  }}
                >
                  Màu sắc :{" "}
                </p>
                
                         {dataproduct.length > 0 && dataproduct.color==true &&
                         dataproduct.color.map((colorlist) => {
                          return (
                            <img
                              key={colorlist}
                              value={color}
                              className="btn-colors"
                              onChange={(e) => e.target.value}
                              src={colorlist}
                            ></img>
                          );
                        })}
                
         
              </div>
              <div className="size-product color-product">
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginLeft: "5px",
                  }}
                >
                  <p className="size-shirt ">
                    Kich thước :<strong> {size} </strong>
                  </p>
                  <p className="suport-size" onClick={handeclicksuportsize}>
                    Hướng dẫn chọn size
                  </p>
                  {supPortSize && (
                    <SuportSize setSupPortSize={setSupPortSize} />
                  )}
                </div>
                <select
                  value={size}
                  onChange={(e) => setSize(e.target.value)}
                  className="select"
                >
                  {dataproduct.size.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </div>

              <div className="quantity">
                <div className="product-quantity-change">
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
                <Button
                  className="add-cart"
                  type="button"
                  onClick={handleAddClick}
                >
                  Thêm vào giỏ hàng
                </Button>
              </div>

              <p className="boder-bottom"></p>
              <div className="product-policy">
                {productPolicy.map((policy) => {
                  return (
                    <div className="policy-item " key={policy.key}>
                      <div className="policy-icon">
                        <img src={policy.icon} alt={policy.content} />
                      </div>
                      <span className="policy-content">{policy.content}</span>
                    </div>
                  );
                })}
              </div>
              <div className="salient-features">
                <div>
                  <p className="salient-features-text">Đặc điểm nổi bât</p>

                  {dataproduct.salientfeatures.map((salientfeatures)  => {
                   dataproduct.salientfeatures.length > 0 
                   
                    return (
                      <p
                        key={salientfeatures}
                        className="salient-features-text salient-features-text__child"
                      >
                      
                        - {salientfeatures}
                      </p>
                    );
                  })}
                </div>
                <div>
                  <i
                    style={{ float: "right", marginTop: "10px" }}
                    className="fas fa-times"
                    onClick={handleClickfeature}
                  ></i>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      )}

      {isLoading === true && (
        <div style={{ position: "relative" }} className="loading">
          <Button
            style={{ position: "absolute", top: "300px", left: "600px" }}
            color="primary"
            disabled
          >
            <Spinner size="sm">Loading...</Spinner>
            <span> Loading</span>
          </Button>
        </div>
      )}
    </Container>
  );
}
