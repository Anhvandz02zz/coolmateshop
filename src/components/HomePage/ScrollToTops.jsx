import { useState } from "react";
import { Button } from "reactstrap";
import uparrow from "../img/uparrow.png";
export default function ScrollToTops() {
  const [visible, setVisible] = useState(false);
  const togleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    const scrolleds = scrolled > 300 ? setVisible(true) : setVisible(false);
    // if (scrolled > 300) {
    //   setVisible(true);
    // } else if (scrolled < 300) {
    //   setVisible(false);
    // }
  };
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  };
  window.addEventListener("scroll", togleVisible);
  return (
    <>
      <Button
        className="btn-btn-scroll"
        onClick={scrollToTop}
        style={{ display: visible ? "flex" : "none" }}
      >
        <img src={uparrow} />
      </Button>
    </>
  );
}
