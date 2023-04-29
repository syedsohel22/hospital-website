import {
  DOCTOR_REQUEST_FAILURE,
  DOCTOR_REQUEST_PENDING,
  DOCTOR_REQUEST_SUCCESS,
} from "./actionTypes";

const initalstate = {
  isLoading: false,
  isError: false,
  doctors: [],
};

export const reducer = (state = initalstate, { type, payload }) => {
  switch (type) {
    case DOCTOR_REQUEST_PENDING:
      return { ...state, isLoading: true };
    case DOCTOR_REQUEST_SUCCESS:
      return { ...state, isLoading: false, doctors: payload };
    case DOCTOR_REQUEST_FAILURE:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
