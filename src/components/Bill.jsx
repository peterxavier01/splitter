import { useBillContext } from "../context/BillContext";
import { Types } from "../context/BillReducer";
import "../styles/bill.css";

const Bill = () => {
  const { state, dispatch } = useBillContext();

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      dispatch({ type: Types.BILL, payload: value });
    } else {
      dispatch({ type: Types.BILL, payload: 0 });
    }
  };

  return (
    <div className="bill">
      <label htmlFor="bill" className="label">
        Bill
      </label>

      <div className="custom-input">
        <span>$</span>
        <input
          className="input"
          type="number"
          id="bill"
          value={state.billAmount || ""}
          placeholder={0}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Bill;
