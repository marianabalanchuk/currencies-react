import ProductList from "../../components/Products/ProductList";
import Total from "../../components/Total/Total";

type Props = {};

const App = (props: Props) => {
  return (
    <div>
      <ProductList />
      <Total />
    </div>
  );
};

export default App;
