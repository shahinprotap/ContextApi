import { createContext, useEffect, useState } from "react";

export const MyContex = createContext();

const MyApi = ({ children }) => {
  const [data, setData] = useState();
  const apiUrl = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=250&page=1&sparkline=false&price_change_percentage=1h%2C24h%2C7d&locale=en`;

  const fetchApi = async () => {
    try {
      const res = await fetch(apiUrl);
      const resTojson = await res.json();
      setData(resTojson);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchApi();
  }, []);

  const datas = {
    data,
  };
  return <MyContex.Provider value={datas}>{children} </MyContex.Provider>;
};

export default MyApi;
