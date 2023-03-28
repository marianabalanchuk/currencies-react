import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

const Total = (props: Props) => {
  const rateStore = useAppSelector((store) => store.currencyStore);
  const total = useAppSelector((state) => state.total);
  return (
    <>
      <p>Total: {Math.round(total.total * rateStore.rate)}</p>
    </>
  );
};

export default Total;
