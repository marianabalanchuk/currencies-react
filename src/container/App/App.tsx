import axios from "axios";
import CurrencyBtns from "../../components/CurrencyBtns/CurrencyBtns";
import ProductList from "../../components/Products/ProductList";
import Total from "../../components/Total/Total";

type Props = {};

const handleResponse = (response: any) => {
  console.log(response);
  // console.log(
  //   response.data.find((obj: any) => {
  //     return obj.currencyCodeA === 980 && obj.currencyCodeB === 840;
  //   })
  // );
};

const App = (props: Props) => {
  const apiURL = `https://api.monobank.ua/bank/currency`;
  axios.get(apiURL).then(handleResponse);
  return (
    <div>
      <CurrencyBtns />
      <ProductList />
      <Total />
    </div>
  );
};

export default App;
