import { useAppSelector } from "redux/hooks";

type Props = {};

const Total = (props: Props) => {
  const currencyStore = useAppSelector((store) => store.currencyStore);
  const total = useAppSelector((state) => state.total);
  return (
    <>
      <p>
        Total: {Math.round(total.total * currencyStore.rate)}{" "}
        {currencyStore.name}
      </p>
    </>
  );
};

export default Total;
