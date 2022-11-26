import company from "../img/company.jpg";
import aboutcart from "../img/aboutcart.jpg";
import homepademin from "../Style/homepademin.css";
import companyapso1 from "../img/companyapso1.jfif";

export default function HomepageDemin() {
  return (
    <section>
      <>
        <div className="container-fluid HomepadeDemin">
          <div className="company">
            <img className="company-img" src={company}></img>
            <img className="companyapso1" src={companyapso1}></img>
            <div className="homape-choice">
              <div className="Clean-demin">
                <h1>
                  Coolmate’s
                  <br />
                  CLEAN DENIM
                </h1>
              </div>
              <div className="demin-contain">
                <p>
                  Một chiếc quần Jeans đầu tiên tại Coolmate được sử dụng chất
                  liệu là Cotton Tái sinh (Regenerative Cotton) - loại Cotton
                  chất lượng và trồng bằng quy trình sạch, bền vững. Chiếc quần
                  với vải Denim được dệt toàn bộ tại nhà máy Nhơn Trạch, Đồng
                  Nai của Saitex - nhà máy với nhiều trang máy móc, thiết bị
                  hiện đại với quy trình sản xuất khép kín, giảm thiểu CO2 và
                  nước thải ra môi trường.
                </p>
              </div>
              <div className="demin-btn">
                <a href="#">Tìm hiểu thêm</a>
              </div>
            </div>
          </div>
        </div>

        <div className="container-fluid">
          <div className="about-cart">
            <div className="about-cart__content">
              <h2 className="about-card__heading">
                Dòng sản phẩm công nghệ EXCOOL
              </h2>
              <div className="about-card__description">
                <p>
                  Công nghệ Việt cho người Việt.
                  <br />
                  Với hơn <b>100.000</b> sản phẩm đã được gửi đến tay khách hàng
                  sử dụng và hài lòng
                </p>
              </div>
              <div className="about-card__button">
                <a href="" className="btn btn--white">
                  Tìm hiểu thêm
                </a>
              </div>
            </div>
            <div className="about-cart__image">
              <img src={aboutcart}></img>
            </div>
          </div>
        </div>
      </>
    </section>
  );
}
