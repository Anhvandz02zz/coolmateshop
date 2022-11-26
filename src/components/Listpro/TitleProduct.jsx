import useFetch from "../../Hook/useFetch";
import { useState } from "react";
import titleproduct from "../Style/titleproduct.css";
import ProductList from "../Page/ProductList";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

export default function TitleProduct() {
  function useSrt(str) {
 

    // if (path === true) {
    //   str = str.replace(/\s+/g, "-");
    //   str = str.trim();
    //   return str;
    // } else {
      str = str.replace(/-/g, " ");
      return str;
    }
  


  const { title } = useParams();
  console.log("tihle",title)
  const listFilter = [
    "Mới nhất",
    "Bán chạy",
    "Giá thấp đến cao",
    "Giá cao đến thấp",
  ];

  const [filter, setFilter] = useState(listFilter[0]);

  // const cartproduct = useSelector((state) => state.cart);
 
  const {
    data: productData,
    isLoading: isLoadingproductData,
    isError: loi,
  } = useFetch(
    `http://localhost:3004/productData/?q=${useSrt(title)}`,
    false
  );

  return (
    isLoadingproductData === false &&
    productData != null && (
      <div className="title-product">
        <div className="title-products">
          <div className="title-product-name">
            <p>Sản phẩm </p>
          </div>

          <div className="seletion">
            <select value={filter} onChange={(e) => setFilter(e.target.value)}>
              {listFilter.map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>
        </div>
        <h1
          style={{
            margin: "20px",
            color: "#231f20",
            fontSize: "24px",
            fontWeight: "700",
          }}
        >
          {useSrt(title, false)}
        </h1>
        <div
          style={{ display: "flex", marginTop: "20px" }}
          className="list-title-product"
        >
          {<ProductList list={productData} cols={5} />}
        </div>
      </div>
    )
  );
}
