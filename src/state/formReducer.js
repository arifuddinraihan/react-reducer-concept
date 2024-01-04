import { actionTypes } from "./actionTypes";

// Initial state of form is declared here
export const formInitialState = {
  firstName: "",
  lastName: "",
  email: "",
  gender: "",
  education: "",
  quantity: 0,
  feedback: "",
  term: false,
};

// form reducer function to set the Initial state of form in updated state
export const formReducer = (state, action) => {
  switch (action.type) {
    // case section if input they key : value setteled for the state property
    case actionTypes.INPUT:
      return {
        ...state,
        [action.payload.name]: action.payload.value,
      };
    // case section if toggle term setteled for the state property
    case actionTypes.TOGGLE:
      return {
        ...state,
        term: !state.term,
      };
    // case section if increment then make (+ 1) to quantity in state property
    case actionTypes.INCREAMENT:
      return {
        ...state,
        quantity: state.quantity + 1,
      };
    // case section if increment then make (- 1) to quantity in state property
    case actionTypes.DECREMENT:
      return {
        ...state,
        quantity: state.quantity - 1,
      };
    default:
      return state;
  }
};
