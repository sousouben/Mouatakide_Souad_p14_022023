import { actions } from "./reducer";
import { selectEmployees } from "../redux/selector";

export function validForm() {
  return (dispatch) => {
    dispatch(actions.setFormValid());
  };
}

export function unvalidForm() {
  return (dispatch) => {
    dispatch(actions.setFormInvalid());
  };
}

export function checkValidForm() {
  return (dispatch, getState) => {
    const validForm = selectEmployees(getState()).isValidForm;
    return validForm;
  };
}
