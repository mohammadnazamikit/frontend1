import Footer from "./footer";
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
      <div className="fw-bold ml-1 d-flex fs-1 ms-4"> On sale</div>
      <Items />
      <Footer />
    </>
  );
};

export default HomePage;
