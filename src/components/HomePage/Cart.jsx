import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import cart from "../Style/cart.css";
import Login from "./Login";
import CartDetail from "../Page/CartDetail";
import { useEffect, useState } from "react";
import { FormGroup } from "reactstrap";
import { useSelector } from "react-redux";

// const listPayments = [
//   {
//     id: 1,
//     name: "COD",
//     content: ["COD", "Thanh toán khi nhận hàng"],
//     linkImg: "https://www.coolmate.me/images/COD.svg",
//   },
//   {
//     id: 2,
//     name: "MoMo",
//     content: ["Thanh Toán MoMo"],
//     linkImg: "https://www.coolmate.me/images/momo-icon.png",
//   },
//   {
//     id: 3,
//     name: "ZaloPay",
//     content: ["Ví điện tử ZaloPay"],
//     linkImg: "https://www.coolmate.me/images/logo-zalopay.svg",
//   },
//   {
//     id: 4,
//     name: "ShopeePay",
//     content: ["Ví điện tử ZaloPay"],
//     sale: "Giảm thêm 50k cho khách hàng lần đầu mở ví và thanh toán bằng ShopeePay",
//     linkImg:
//       "https://mcdn.coolmate.me/image/September2021/195dbf69c0ac36f26fbd_(1).png",
//   },
//   {
//     id: 5,
//     name: "VNPAY",
//     content: [
//       "Thẻ ATM / Internet Banking",
//       "Thẻ tín dụng (Credit card) / Thẻ ghi nợ (Debit card)",
//       "VNPay QR",
//     ],
//     linkImg: "https://www.coolmate.me/images/vnpay.png",
//   },
//   {
//     id: 6,
//     name: "9PAY",
//     content: ["Ví điện tử 9Pay"],
//     linkImg: "https://mcdn.coolmate.me/uploads/May2022/9pay.svg",
//   },
// ];

function Cart() {
  const datacartproduct = useSelector((state) => state.cart);

  const [summonNey, setSumMonNey] = useState("");

  function sum(datacartproduct) {
    let summonNey = 0;

    for (let j = 1; j < datacartproduct.length; j++) {
      summonNey +=
        datacartproduct[j].quantity * datacartproduct[j].product.main_price;
    }
    return summonNey;
  }
  useEffect(() => {
    setSumMonNey(sum(datacartproduct));
  }, [datacartproduct]);

  return (
    <Container fluid className="list-product">
      <Row>
        <Col xs={7}>
          <div className="cart-left">
            <div
              style={{
                display: "flex",
              }}
              className="information-staff"
            >
              <p
                onClick={() => console.log("datacartproduct", datacartproduct)}
              >
                Thông tin vận chuyển
              </p>
              <div>
                Bạn đã có tài khoản ? Đăng nhập ngay
                {/* <Login /> */}
              </div>
            </div>
            <Form>
              <Row>
                <Col>
                  <Form.Control placeholder="First name" />
                </Col>
                <Col>
                  <Form.Control placeholder="Last name" />
                </Col>
                <div style={{ marginTop: "10px" }}>
                  <Form.Group className="mb-7" controlId="formGroupEmail">
                    <Form.Control type="email" placeholder="Email" />
                  </Form.Group>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Form.Group className="mb-7" controlId="formGridAddress2">
                    <Form.Control placeholder="Address" />
                  </Form.Group>
                </div>
                <div style={{ marginTop: "10px" }}>
                  <Row className="mb-3">
                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Select defaultValue="Chọn tỉnh thành...">
                        <option>Chọn Tỉnh/Thành</option>
                        <option>Hà Nội</option>
                        <option>Hà Nam</option>
                        <option>Thái Nguyên</option>
                        <option>Nam Định</option>
                        <option>Hải Phòng</option>
                        <option>TP. HCM</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Select defaultValue="Chon Quận/Huyện...">
                        <option>Chọn Quận / Huyện</option>
                        <option>Cầu Giay</option>
                        <option>Giao Thủy</option>
                        <option>Đại Từ</option>
                        <option>Bình Lục</option>
                      </Form.Select>
                    </Form.Group>

                    <Form.Group as={Col} controlId="formGridState">
                      <Form.Select defaultValue="Chon Phường / Xã">
                        <option>Chọn Phường Xã</option>
                        <option>Xã An Ninh</option>
                        <option>Xã An Nội</option>
                        <option>Xã Nhân Thịnh</option>
                        <option>Xã Vũ Bản</option>
                        <option>Xã Bồ Đề</option>
                      </Form.Select>
                    </Form.Group>
                  </Row>
                </div>
                <Form.Group className="mb-7" controlId="formGridAddress2">
                  <Form.Control placeholder="Ghi chú thêm (Ví dụ : Giao giờ hành chính )" />
                </Form.Group>
              </Row>
            </Form>
            <FormGroup tag="fieldset">
              <legend className="title-pay">Hình thức thanh toán</legend>
            </FormGroup>
          </div>
        </Col>
        <Col xs={5}>
          <div className="title-cart"> Giỏ hàng</div>

          {datacartproduct.map((product) => {
            return (
              product.id && (
                <div>
                  <CartDetail product={product} />
                </div>
              )
            );
          })}
          <div className="bill">
            <hr />
            <div className=" bill-child">
              <p>Tính tổng </p>
              <p>{summonNey}.000đ</p>
            </div>

            <div className="bill-child">
              <p>Phí giao hàng</p>
              <p>Miễn phí</p>
            </div>
            <hr />
            <div className="bill-child">
              <p>Tổng tiền thanh toán</p>
              <p>{summonNey}.000đ</p>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Cart;
