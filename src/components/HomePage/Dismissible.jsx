import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Toast from "react-bootstrap/Toast";

function Dismissible() {
  const [showA, setShowA] = useState(true);
  const toggleShowA = () => setShowA(!showA);

  return (
    <Row>
      <Col md={6} className="mb-2 ">
        <Button onClick={toggleShowA} className="mb-2 ">
          Voucher 50%
        </Button>
        <Toast className="Toast-list" show={showA} onClose={toggleShowA}>
          <Toast.Header>
            <img
              src="holder.js/30x30?text=%20"
              className="rounded me-2"
              alt=""
            />
            <strong className="me-auto">Bạn là khách hàng mới</strong>
            <small>11 mins ago</small>
          </Toast.Header>
          <div className="toast-text">
            <div
              style={{
                fontSize: "17px",
                width: "250px",
                color: "#101010",
                fontFamily: "ArialHelvetica",
                fontWeight: "700",
              }}
              className="toast-body"
            >
              <Toast.Body>
                Coolmate tặng Voucher cho bạn lần đầu mua sắm
              </Toast.Body>
            </div>
            <div>
              <strong style={{ fontSize: "20px" }} className="me-auto">
                50%
              </strong>
              <p style={{ fontSize: "13px", color: "#4682B4" }}>
                giảm tối đa 100k
              </p>
            </div>
          </div>
          <p style={{ textAlign: "center" }}>Hãy nhập mã</p>
          <p
            style={{ textAlign: "center", fontSize: "20px", color: "#4682B4" }}
          >
            Chào Bạn
          </p>
          <p
            style={{ textAlign: "center", fontSize: "13px", color: "#101010" }}
          >
            Để có thể nhận ưu đãi bạn rành riêng cho bạn nha
          </p>
          <p style={{ textAlign: "center", fontSizw: "13px", color: "black" }}>
            Khách hàng mới là khách hàng lần đầu tiên trải nghiệm sản phẩm
            Coolmate trên bất kỳ kênh mua sắm nào. Chi tiết chính sách
          </p>
        </Toast>
      </Col>
    </Row>
  );
}

export default Dismissible;
