import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import coolxprint from "../Style/coolxprint.css";
import { Card } from "reactstrap";

export default function Coolxprint() {
  const dataimg = [
    {
      id: 1,
      nameproduct: "Áo polo in logo",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_do.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 190,
    },
    {
      id: 2,
      nameproduct: "Áo polo in logo",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct: "https://mcdn.coolmate.me/uploads/November2021/den.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Group_724.png",
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 150.0,
    },
    {
      id: 3,
      nameproduct: "Quần lót in",
      quantityproduct: "Số lượng tối thiểu: 5 chiếc",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/Bamboo_trunk_xanh_navy.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 55.0,
    },
    {
      id: 4,
      nameproduct: "Mũ (nón) lưỡi trai / Bucket hat",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct: "https://mcdn.coolmate.me/uploads/November2021/den_45.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/Polo_trang.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_723.png",
      ],
      price: 110.0,
    },
    {
      id: 5,
      nameproduct: "Khẩu trang",
      quantityproduct: "Số lượng tối thiểu: 2 chiếc",
      linkproduct: "https://mcdn.coolmate.me/uploads/April2022/xanh.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/April2022/xanh.png",
        "hhttps://mcdn.coolmate.me/uploads/November2021/trang_89.png",
      ],
      price: 20.0,
    },
    {
      id: 6,
      nameproduct: "Tất (vớ",
      quantityproduct: "Số lượng tối thiểu: 200 đôi",
      linkproduct:
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_den.png",
      linkColor: [
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_den.png",
        "https://mcdn.coolmate.me/uploads/November2021/Group_725.png",
        "https://mcdn.coolmate.me/uploads/November2021/tat_co_cao_xanh_navy.png",
      ],
      price: 20.0,
    },
  ];

  return (
    <>
      <div className="pod-banner__thumbnail">
        <div className="pod-banner__image pod-banner__image--left">
          <img
            src="https://mcdn.coolmate.me/uploads/January2022/CoolXprint_Back.png"
            alt=""
          ></img>
        </div>
        <div className="pod-banner__content">
          <h1 className="pod-banner__heading">Cool Xprint</h1>
          <p className="pod-banner__description">
            Đặt sản xuất chưa bao giờ <br></br>
            đơn giản đến thế
          </p>
          <div className="pod-banner__policy">
            <span className="pod-banner__item">Số lượng ít</span>|
            <span className="pod-banner__item">Giá cạnh tranh</span>|
            <span className="pod-banner__item">Bảo hành 60 ngày</span>
          </div>{" "}
          <a href="#mockup" className="pod-banner__button scroll-to-step">
            Nhận báo giá
          </a>
        </div>
        <div className="pod-banner__image pod-banner__image--right">
          <img
            src="https://mcdn.coolmate.me/uploads/January2022/CoolXprint_Banner.png"
            alt=""
          ></img>
        </div>
      </div>

      <section className="pod-why">
        <div className="container container--medium">
          <div className="pod-why__cart">
            <div className="pod-why__item">
              <div className="pod-why__inner">
                <div className="pod-why__content">
                  <div className="pod-why__tittle">Chất lượng đảm bảo</div>
                  <p className="pod-why__description">
                    Các sản phẩm thuộc dự án CoolXPrint được sản xuất theo tiêu
                    chuẩn như các sản phẩm tương tự của Coolmate
                  </p>
                </div>
                <div className="pod-why__content">
                  <div className="pod-why__tittle">
                    <div className="pod-why__title">In với số lượng ít</div>
                  </div>
                  <p className="pod-why__description">
                    CoolXPrint sẵn sàng hỗ trợ bạn in, kể cả số lượng từ 1 chiếc
                  </p>
                </div>
              </div>
            </div>

            <div className="pod-why__item">
              <div className="pod-why__inner">
                <div className="pod-why__content">
                  <div className="pod-why__tittle">Dịch vụ tận tâm</div>
                  <p className="pod-why__description">
                    Cam kết đem đến trải nghiệm 100% hài lòng với mọi khách hàng
                  </p>
                </div>
                <div className="pod-why__content">
                  <div className="pod-why__tittle">
                    <div className="pod-why__title">Xử lý nhanh chóng</div>
                  </div>
                  <p className="pod-why__description">
                    Chủ động sản xuất và in với số lượng ít chỉ trong 24h, nhận
                    hàng sau 48h{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="pod-why__heading">
              <span>
                Vì sao
                <br />
                lựa chọn
                <br />
                CoolXPrint?
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="pod-active">
        <div className="container container--medium">
          <h2 className="pod-activite__heading">
            COOLXPRINT hoạt động như thế nào ?
          </h2>
          <div className="pod-active__wrapper">
            <a href="#product" className="pod-active__inner sroll-to-step">
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-1.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Tiếp nhận yêu cầu</div>
                <div className="pod-active__description">
                  "Qua From"
                  <br />
                  "Email: anhandz02@gmail.com"
                  <br />
                  "Hotline: 190874835"
                </div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-2.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Gửi báo giá</div>
                <div className="pod-active__description">
                  Tối đa 24h Coolmate
                  <br />
                  sẽ phản hồi
                </div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-3.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Sản xuất & hoàn thiện</div>
                <div className="pod-active__description">Bảo hành 60 ngày</div>
              </div>
              <div className="pod-active__item">
                <div className="pod-active__icon">
                  <img
                    src="https://www.coolmate.me/images/coolxprint/icon-4.svg"
                    alt="Tiếp nhận yêu cầu"
                  ></img>
                </div>
                <div className="pod-active__title">Giao hàng</div>
                <div className="pod-active__description">
                  Giao hàng toàn quốc
                </div>
              </div>
            </a>
          </div>
        </div>
      </section>

      <section id="product" className="pod-product">
        <div className="container container--medium">
          <h2 className="pod-products__heading">
            {" "}
            Các sản phẩm của COOLXPRINT
          </h2>
          <Container>
            <Row className="ok">
              {dataimg.map((list) => {
                return (
                  <Col key={list.id} xs="6" md="4">
                    <Card className="cart-coolxprint">
                      <div key={list.id} className="pod-grid__inner">
                        <div className="pod-grid__tabline">
                          <span className="nameproduct">
                            {list.nameproduct}
                          </span>
                          <p className="quantityproduct">
                            {" "}
                            {list.quantityproduct}{" "}
                          </p>
                        </div>
                        <div className="pod-grid__thumbnail">
                          <div className="pod-grid__image">
                            <img src={list.linkproduct}></img>
                          </div>
                        </div>
                        <div className="btn-price__price">
                          <button className="btn-price">
                            Gía từ {list.price}.000 đ
                          </button>
                        </div>
                      </div>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Container>
        </div>
      </section>

      <section className="pod-customer">
        {/* <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider> */}
      </section>
    </>
  );
}
