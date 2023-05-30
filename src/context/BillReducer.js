const BillReducer = (state, action) => {
  switch (action.type) {
    case Types.BILL: {
      return {
        ...state,
        billAmount: action.payload,
      };
    }
    case Types.TIP: {
      return {
        ...state,
        tipAmount: action.payload,
      };
    }
    case Types.PERSONS: {
      return {
        ...state,
        numberOfPersons: action.payload,
      };
    }
    case Types.RESET:
      return {
        billAmount: 0,
        tipAmount: 0,
        numberOfPersons: 1,
      };
    default:
      return state;
  }
};

export default BillReducer;

export const Types = {
  BILL: "SET_BILL_AMOUNT",
  TIP: "SET_TIP_AMOUNT",
  PERSONS: "SET_NUMBER_OF_PERSONS",
  RESET: "SET_RESET_BILL",
};
