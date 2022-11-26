import menuheader from "../Style/menuheader.css";
import useFetch from "../../Hook/useFetch";

import { NavLink, Link, useNavigate } from "react-router-dom";
import coolmate from "../Style/coomate.css";
import { useState, useEffect } from "react";
import cartSlide from "../../Redux/cartSlide";
import { useSelector } from "react-redux";
import Collapse from "react-bootstrap/Collapse";

import Login from "./Login";
import Search from "./Search";

export default function Navbar() {
  function useSrt(str, path) {
    // Gộp nhiều dấu space thành dấu -

    if (path === true) {
      str = str.replace(/\s+/g, "-");
      str = str.trim();
      return str;
    } else {
      str = str.replace(/-/g, " ");
      return str;
    }
  }
  const {
    data: menuheader,
    isLoading: isLoadingmenuheader,
    isError: loi,
  } = useFetch(`http://localhost:3004/menuheader`, false);

  const [isshow, setisshow] = useState(false);
  const onclicklogin = () => {
    setisshow(true);
  };

  const cart = useNavigate();
  const onclickcart = () => {
    cart(`/HomePage/NavBarFunction/Cart`);
  };
  const [search, setSearch] = useState(false);
  const onclicksearch = () => {
    setSearch(true);
  };
  const datacartproduct = useSelector((state) => state.cart);
  const [totalQuantity, settotalQuantity] = useState();

  function sum(datacartproduct) {
    let totalQuantity = 0;

    for (let j = 1; j < datacartproduct.length; j++) {
      totalQuantity += datacartproduct[j].quantity;
    }
    return totalQuantity;
  }
  useEffect(() => {
    settotalQuantity(sum(datacartproduct));
  }, [datacartproduct]);

  return (
    <div className="menu">
      <p>Combo tiết kiệm ưu đãi 44%</p>
      <div className=" menu-top">
        <div className="logo-left">
          <Link to="/">
            <img src="../src/components/img/1.jpg"></img>
          </Link>
        </div>

        <div className="menu-center">
          {isLoadingmenuheader === false && menuheader.length > 0 && (
            <ul className="list-item">
              {menuheader.map((item) => {
                return (
                  <li key={item.id}>
                    <p>                     
                      {/* narbar menu header */}
                      <NavLink                     
                        style={{
                          textDecoration: "none",
                          color: "black",
                          fontWeight: "700",                         
                        }}
                        to={`${useSrt(item.title, false)}`}
                      >
                        {item.title}
                      </NavLink>
                    </p>
                    {item.child ? (
                      <div className="container product">
                        {item.title === "Sản phẩm" &&
                          item.child.length > 0 &&
                          item.child.map((child) => {
                            return (
                              <div key={child.title}>
                                <p> {child.title}</p>
                                <div className="childs">
                                  {child.childs.map((childs) => {
                                    return (
                                      <div
                                        key={childs.name}
                                        className="childs-menu"
                                      >
                                        {/*  menu child of " Nhu cầu , BST , Công Nghệ */}
                                        <NavLink
                                          className="childs-name"
                                          style={{ textDecoration: "none" }}
                                          to={`${useSrt(childs.name, true)}`}
                                        >
                                          <div className="child-name-title">
                                            <p>{childs.name}</p>
                                            {childs.attention ? (
                                              <p className="attention">
                                                {childs.attention}
                                              </p>
                                            ) : null}
                                          </div>
                                          <div className="childs-content">
                                            {childs.content}
                                          </div>
                                          {child.explain ? (
                                            <p className="child-explain">
                                              {child.explain}
                                            </p>
                                          ) : null}
                                        </NavLink>

                                        {/* product child of sản phẩm */}
                                        {childs.product ? (
                                          <div className="childs-product">
                                            {childs.product.map((pro) => {
                                              return (
                                                <p
                                                  className="product-products"
                                                  key={pro}
                                                >
                                                  <Link
                                                    to={`/collection/${useSrt(
                                                      pro,
                                                      true
                                                    )}`}
                                                    style={{
                                                      textDecoration: "none",
                                                      color: "#8e8e8e",
                                                    }}
                                                  >
                                                     {pro}
                                                  </Link>
                                                </p>
                                              );
                                            })}
                                          </div>
                                        ) : null}
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    ) : null}

                    {item.child ? (
                      <div className="collmate container">
                        {item.title === "Về Coolmate" &&
                          item.title.length > 0 &&
                          item.child.map((coolmate) => {
                          
                            return (
                              <div key={coolmate.id} className="collmate-items">
                                <div className="size-collmate">
                                  <div
                                    className="colmate-img"
                                    key={coolmate.linkImg}
                                  >
                                    <img src={coolmate.linkImg} />
                                  </div>
                                  <div
                                    className="colmate-namecoll"
                                    key={coolmate.NameCol}
                                  >
                                    <div>{coolmate.NameCol}</div>
                                  </div>
                                  <div
                                    className="colmate-content"
                                    key={coolmate.content}
                                  >
                                    <div>{coolmate.content}</div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                      </div>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        <div className="setting-right">
          {isshow && <Login setisshow={setisshow} />}
          {search && <Search setSearch={setSearch} />}
          <img src="../src/components/img/search.png" onClick={onclicksearch} />
          <img src="../src/components/img/login.png" onClick={onclicklogin} />
          <img src="../src/components/img/shopping.png" onClick={onclickcart} />
          {}
          <span className="quantityicon" onClick={() => totalQuantity}>
            {totalQuantity}
          </span>
        </div>
      </div>
    </div>
  );
}
