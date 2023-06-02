import { useState } from "react";
import { useBillContext } from "../context/BillContext";
import { Types } from "../context/BillReducer";
import "../styles/bill.css";

const Bill = () => {
  const { state, dispatch } = useBillContext();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value) && value > 0) {
      dispatch({ type: Types.BILL, payload: value });
      setError("");
    } else {
      dispatch({ type: Types.BILL, payload: 0 });
      setError("Can't be zero");
    }
  };

  return (
    <div className="bill">
      <div className="label-wrapper">
        <label htmlFor="bill" className="label">
          Bill
        </label>
        {error && <p className="error">{error}</p>}
      </div>

      <div
        className="custom-input"
        style={{
          border: error ? "2px solid var(--red)" : "",
          transition: "all .1s ease-in-out",
        }}
      >
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
