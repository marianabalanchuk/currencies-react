import { setRate } from "redux/currencyRateReducer";
import { useAppDispatch } from "redux/hooks";
import CurrencyConstants from "utils/CurrencyConstants";

type Props = {};

const CurrencyBtns = (props: Props) => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setRate(CurrencyConstants.UAH))}>
        {CurrencyConstants.UAH}
      </button>
      <button onClick={() => dispatch(setRate(CurrencyConstants.USD))}>
        {CurrencyConstants.USD}
      </button>
      <button onClick={() => dispatch(setRate(CurrencyConstants.EUR))}>
        {CurrencyConstants.EUR}
      </button>
      <button onClick={() => dispatch(setRate(CurrencyConstants.GBP))}>
        {CurrencyConstants.GBP}
      </button>
    </div>
  );
};

export default CurrencyBtns;
