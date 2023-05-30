import "../styles/calculator.css";
import { useBillContext } from "../context/BillContext";
import { Types } from "../context/BillReducer";

const Calculator = () => {
  const { state, dispatch, setSelectedTip } = useBillContext();

  const tipAmount = (state.tipAmount / 100) * state.billAmount;
  const tipPerPerson = tipAmount / state.numberOfPersons;
  const totalBillPerPerson =
    state.billAmount / state.numberOfPersons + tipPerPerson;

  const handleReset = () => {
    dispatch({ type: Types.RESET });
    setSelectedTip(null);
  };

  return (
    <div className="calculator">
      <div className="row-one">
        <div className="col-one">
          <span>Tip Amount</span>
          <span>/ person</span>
        </div>
        <div className="col-two">
          <span>$</span>
          <span>{tipPerPerson.toFixed(2)}</span>
        </div>
      </div>

      <div className="row-two">
        <div className="col-one">
          <span>Total</span>
          <span>/ person</span>
        </div>
        <div className="col-two">
          <span>$</span>
          <span>{totalBillPerPerson.toFixed(2)}</span>
        </div>
      </div>
      <button
        disabled={!tipPerPerson && !totalBillPerPerson}
        onClick={handleReset}
      >
        Reset
      </button>
    </div>
  );
};

export default Calculator;
