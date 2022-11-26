import { Link, useNavigate } from "react-router-dom";
import productlist from "../Style/productlist.css";

export default function ProductList({ list, cols = 4, save = true }) {
  const navigate = useNavigate();
  const handleclicproductItem = (id) => {
    navigate(`/Page/ProductList/ProductSportStuffDetail/${id}`);
  };
  return list ? (
    <section className="type_product">
      <div className="container">
        <div className={`row row-cols-${cols}`}>
          {list.map((product) => {
            return (
              <div
                key={product.id}
                onClick={() => handleclicproductItem(product.id)}
                className="product-item"
              >
                <div className="card">
                  <div className="ok">               
                    <img className="srcimg" src={product.linkImg[1]} />{" "}
                    <div className="evaluate">
                      <div className="evaluate-content">
                        <span className="evalue">{product.evalue}</span>
                        <span className="purchases">{product.purchases}</span>
                      </div>
                   
                      <div className="save">
                         <p className="save-content">{product.save}</p>
                      </div>
                    
                     
                    </div>
                    <div className="size">
                      {product.size.map((listsize) => {
                        return (
                          <div key={listsize} className="hover-size">
                            <button className="size-content">{listsize}</button>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  <br />
                  <div className="color">
                    {product.color &&
                      product.color.map((colorlist) => {
                        return (
                          <img
                            key={colorlist}
                            className="btn-color"
                            src={colorlist}
                          ></img>
                        );
                      })}
                  </div>
                  <div className="detailproduct">
                    <p className="detailproduct-text">
                      {product.detailproduct}
                    </p>
                  </div>
                  <div className="flex-price">
                    <div className="sale">
                      <p>{product.sale}</p>
                    </div>
                    <div className="main_price">
                      <p>{product.main_price}</p>
                    </div>
                    <div className="price_1">
                      <p>{product.price_1}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  ) : null;
}
