import "../styles/tip.css";
import { Types } from "../context/BillReducer";
import { useBillContext } from "../context/BillContext";

const Tip = () => {
  const { dispatch, selectedTip, setSelectedTip } = useBillContext();

  const tips = [
    { id: 1, percentage: 5 },
    { id: 2, percentage: 10 },
    { id: 3, percentage: 15 },
    { id: 4, percentage: 25 },
    { id: 5, percentage: 50 },
  ];

  const handleTipSelect = (tip) => {
    if (selectedTip === tip) {
      setSelectedTip(null);
      dispatch({ type: Types.TIP, payload: null });
    } else {
      setSelectedTip(tip);
      dispatch({ type: Types.TIP, payload: tip });
    }
  };

  const handleChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      dispatch({ type: Types.TIP, payload: value });
      setSelectedTip(null);
    } else {
      dispatch({ type: Types.TIP, payload: 0 });
    }
  };

  return (
    <div className="tip">
      <label htmlFor="tip" className="label">
        Select Tip %
      </label>
      <div className="tip-wrapper">
        {tips.map((tip) => (
          <span
            key={tip.id}
            className={`tip-box ${
              selectedTip === tip.percentage ? "selected" : ""
            }`}
            onClick={() => handleTipSelect(tip.percentage)}
          >
            {tip.percentage}%
          </span>
        ))}

        <input
          className="input"
          type="number"
          id="tip"
          placeholder="Custom"
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default Tip;
