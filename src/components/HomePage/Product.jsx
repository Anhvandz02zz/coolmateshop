import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import { useEffect } from "react";
import useFetch from "../../Hook/useFetch";
import ProductList from "../Page/ProductList";
import { useState } from "react";
import axios from "axios";

const Product = () => {
  const {
    data: dataproduct,
    isLoading: isLoadingdataproduct,
    isError: loi,
  } = useFetch(`http://localhost:3004/productData`, false);

  const [Wemadetoomuch, setWemadetoomuch] = useState(null);
  const [quanlotnam, setquanlotnam] = useState(null);
  const [DoTheThao, setDoTheThao] = useState(null);

  useEffect(() => {
    if (
      isLoadingdataproduct === false &&
      dataproduct.length > 0 &&
      !Wemadetoomuch &&
      !quanlotnam &&
      !DoTheThao
    ) {
      setWemadetoomuch(
        dataproduct.filter((item) => item.type === "We made too much")
      );
      setquanlotnam(dataproduct.filter((item) => item.type === "Quần lót nam"));
      setDoTheThao(dataproduct.filter((item) => item.type === "Đồ thể thao"));
    }
  }, [dataproduct]);
  return (
    isLoadingdataproduct === false &&
    dataproduct.length > 0 &&
    Wemadetoomuch &&
    quanlotnam &&
    DoTheThao && (
      <>
        <h1 className="text">Mặc Ngay , Yêu luôn</h1>
        <nav className="narbar">
          <Tabs
            defaultActiveKey="profile"
            id="fill-tab-example"
            className="mb-3"
            fill
          >
            <Tab eventKey="we made too much" title="We made too much">
              <ProductList list={Wemadetoomuch} />
            </Tab>
            <Tab eventKey="quần lót nam" title="Quần lót nam">
              <ProductList list={quanlotnam} />
            </Tab>
            <Tab eventKey="đồ thể thao" title="Đồ thể thao">
              <ProductList list={DoTheThao.slice(0, 4)} />
            </Tab>
          </Tabs>
        </nav>
      </>
    )
  );
};
export default Product;
