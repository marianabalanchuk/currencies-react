import { useAppDispatch, useAppSelector } from "redux/hooks";
import { updateTotal } from "redux/totalReducer";
import ProductsArray from "utils/ProductsArray";

type Props = {};

const ProductList = (props: Props) => {
  const dispatch = useAppDispatch();
  const currencyStore = useAppSelector((store) => store.currencyStore);

  return (
    <div className="product-list">
      {ProductsArray.map(({ id, title, description, price }) => {
        return (
          <div className="product" key={id}>
            <h3>{title}</h3>
            <div className="product-description">{description}</div>
            <div className="product-price">
              <span>{currencyStore.name}</span>{" "}
              <span>
                <b>{Math.round(price * currencyStore.rate)}</b>
              </span>
            </div>
            <button
              onClick={() => dispatch(updateTotal(price))}
              className="buy-btn">
              Buy
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default ProductList;
