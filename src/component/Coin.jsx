import { useContext } from "react";
import { MyContex } from "../contexApi/Api";

const Coin = () => {
  const coinData = useContext(MyContex);
  console.log(coinData);
  return <div>Coin</div>;
};

export default Coin;
