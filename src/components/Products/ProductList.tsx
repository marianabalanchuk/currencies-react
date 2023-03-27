import { useAppDispatch } from "../../redux/hooks";
import ProductsArray from "../../utilts/ProductsArray";
import { updateTotal } from "../../redux/totalReducer";

type Props = {};

const ProductList = ({}: Props) => {
  const dispatch = useAppDispatch();
  return (
    <>
      {ProductsArray.map(({ id, title, description, price }) => {
        return (
          <div className="product" key={id}>
            <div>{title}</div>
            <div>{description}</div>
            <div>{price}</div>
            <button onClick={() => dispatch(updateTotal(price))}>Buy</button>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
