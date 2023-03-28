import "./App.scss";
import CurrencyBtns from "components/CurrencyBtns/CurrencyBtns";
import ProductList from "components/Products/ProductList";
import Total from "components/Total/Total";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="main-container">
      <h1>Our Shop Page</h1>
      <CurrencyBtns />
      <ProductList />
      <Total />
    </div>
  );
};

export default App;
