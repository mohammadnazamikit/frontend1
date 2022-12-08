import Map from "./Map";
import Navbar1 from "./Navbar1";
import Navbar2 from "./Navbar2";

const HomePage = (props) => {
  return (
    <>
      <div>
        <Navbar1></Navbar1>
        <Navbar2></Navbar2>
      </div>
      <div>
        <Map />
      </div>
    </>
  );
};

export default HomePage;
