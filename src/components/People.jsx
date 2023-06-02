import { MdPerson } from "react-icons/md";
import { Types } from "../context/BillReducer";
import { useBillContext } from "../context/BillContext";
import { useState } from "react";

const People = () => {
  const { state, dispatch } = useBillContext();
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      dispatch({ type: Types.PERSONS, payload: value });
      setError("");
    } else {
      dispatch({ type: Types.PERSONS, payload: 1 });
      setError("Can't be zero");
    }
  };

  return (
    <div className="people">
      <div className="label-wrapper">
        <label htmlFor="people" className="label">
          Number of People
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
        <span>{<MdPerson />}</span>
        <input
          className="input"
          type="number"
          id="people"
          value={state.numberOfPersons}
          placeholder={0}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default People;
