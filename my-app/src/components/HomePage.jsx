import { useSelector } from "react-redux";
import App from "./App";
import Footer from "./footer";
/* import GeoSearch from "./geosearch/geosearch"; */
import Items from "./Items";
import Map from "./Map";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";

const HomePage = (props) => {
  return (
    <>
      <Navbar1></Navbar1>
      <Navbar2></Navbar2>
      <Map />
      <div className="fw-bold ml-1 d-flex fs-1 ms-4 bg-secondary"> On sale</div>
      <Items />
      <Footer />
    </>
  );
};

export default HomePage;
