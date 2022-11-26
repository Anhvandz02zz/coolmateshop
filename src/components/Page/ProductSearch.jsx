import { useNavigate, useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import useFetch from "../../Hook/useFetch";
export default function ProductSearch() {
  const { keyword } = useParams();
  const {
    data: productData,
    isLoading: isLoadingproductData,
    isError: loi,
  } = useFetch(`http://localhost:3004/productData/?q=${keyword}`);

  const searchid = useNavigate();
  const handleclickproductid = (id) => {
    searchid(`/Page/ProductSearch/ProductSportStuffDetail/${id}`);
  };
  return (
    <div>
      <h1>Kết quả </h1>
      <Container fluid="md">
        <Row>
          {keyword.length > 0 &&
          isLoadingproductData == false &&
          productData.length > 0
            ? productData.map((e) => {
                return (
                  <Col xs="6" md="3" key={e.id}>
                    <div className="cardd">
                      <div className="ok">
                        <img
                          className="srcimg"
                          src={e.linkImg[1]}
                          onClick={() => handleclickproductid(e.id)}
                        />{" "}
                        <div className="size">
                          {e.size.map((listsize) => {
                            return (
                              <div key={listsize} className="hover-size">
                                <button className="size-content">
                                  {listsize}
                                </button>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                      <br />
                      <div className="detaile">
                        <p className="detaile-text">{e.detaile}</p>
                      </div>
                      <div className="flex-price">
                        <div className="sale">
                          <p>{e.sale}</p>
                        </div>
                        <div className="main_price">
                          <p>{e.main_price}</p>
                        </div>
                        <div className="price_1">
                          <p>{e.price_1}</p>
                        </div>
                      </div>
                    </div>
                  </Col>
                );
              })
            : null}
        </Row>
      </Container>
    </div>
  );
}
