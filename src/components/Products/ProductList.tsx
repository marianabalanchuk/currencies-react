import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import ProductsArray from "../../utilts/ProductsArray";
import { updateTotal } from "../../redux/totalReducer";
import CurrencyConstants from "../../utilts/CurrencyConstants";

type Props = {};

const ProductList = ({}: Props) => {
  const dispatch = useAppDispatch();
  const currencyStore = useAppSelector((store) => store.currencyStore);

  function propertyOf<TObj>(name: keyof TObj) {
    return name;
  }

  return (
    <>
      {ProductsArray.map(({ id, title, description, price }) => {
        return (
          <div className="product" key={id}>
            <div>{title}</div>
            <div>{description}</div>
            <div>
              {propertyOf<typeof CurrencyConstants>("UAH")}
              {Math.round(price * currencyStore.rate)}
            </div>
            <button onClick={() => dispatch(updateTotal(price))}>Buy</button>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
