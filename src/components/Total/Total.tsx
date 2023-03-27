import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";

type Props = {};

const Total = (props: Props) => {
  const total = useAppSelector((state) => state.total);
  return (
    <>
      <p>Total: {total.total}</p>
    </>
  );
};

export default Total;
