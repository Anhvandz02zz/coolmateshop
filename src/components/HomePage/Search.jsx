import { useRef, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import useFetch from "../../Hook/useFetch";
import search from "../Style/search.css";
export default function Search() {
  const [keyword, setKeyWord] = useState("");
  const [ok, setok] = useState(true);
  const {
    data: productData,
    isLoading: isLoadingproductData,
    isError: loi,
  } = useFetch(`http://localhost:3004/productData/?q=${keyword}`, false);
  // const inputref = useRef(null);
  const [ishowsearchbox, setIsshowBox] = useState(false);
  function hadlefocus() {
    setIsshowBox(true);
  }
  function onChange(e) {
    setKeyWord(e.target.value);
  }

  const navigate = useNavigate();
  function handleSumit(e) {
    e.preventDefault();
    navigate(`/productSearch/${keyword}`);
    setKeyWord("");
    setIsshowBox(false);
    setok(false);
  }

  return (
    <div className="input-search">
      <form onSubmit={handleSumit}>
        <input
          placeholder="Tim kiem san pham"
          name="keyword"
          type="text"
          className="form-control"
          value={keyword}
          onChange={onChange}
          onFocus={hadlefocus}
        ></input>
      </form>
      {ishowsearchbox && (
        <div className="search">
          {keyword.length > 0 &&
          isLoadingproductData == false &&
          productData.length > 0 ? (
            productData.slice(0, 5).map((e) => {
              return (
                <div className="product-search">
                  <div className="product-search-img">
                    <img src={e.linkImg[1]} alt="" />
                  </div>
                  <div className="products-right">
                    <div className="product-search-producname">
                      <p>{e.detailproduct}</p>
                    </div>
                    <div className="product-pice">
                      <p className="price_1">{e.price_1}.000d</p>
                      <p className="main-price">{e.main_price}đ </p>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <p>không có sản phẩm</p>
          )}
        </div>
      )}
    </div>
  );
}
