import Footer from "../HomePage/Footer";
import NavBarFunction from "../HomePage/NavBarFunction";
import Dismissible from "../HomePage/Dismissible";

import ScrollToTops from "../HomePage/ScrollToTops";

import { Outlet } from "react-router-dom";

export default function Ui() {
  return (
    <>
      <NavBarFunction />

      <Outlet></Outlet>

      <Dismissible />
      <ScrollToTops />
      <Footer />
    </>
  );
}
