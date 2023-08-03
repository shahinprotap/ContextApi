import Navbar from "./component/Navbar";
import MyApi from "./contexApi/Api";
import Coin from "./component/Coin";

const App = () => {
  return (
    <>
      <MyApi>
        <Navbar />
        <Coin />
      </MyApi>
    </>
  );
};

export default App;
