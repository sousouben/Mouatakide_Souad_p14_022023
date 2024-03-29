import { actions } from "./reducer";
import { selectEmployees } from "../redux/selector";

/**
 * Envoie une action pour définir le formulaire comme valide.
 * @function validForm
 * @returns {function} Une fonction qui envoie une action pour définir le formulaire comme valide.
 */
export function validForm() {
  return (dispatch) => {
    dispatch(actions.setFormValid());
  };
}

/**
 * Envoie une action pour définir le formulaire comme invalide.
 * @function unvalidForm
 * @returns {function} Une fonction qui envoie une action pour définir le formulaire comme invalide.
 */
export function unvalidForm() {
  return (dispatch) => {
    dispatch(actions.setFormInvalid());
  };
}

/**
 * Vérifie si le formulaire est valide en fonction de l'état actuel de l'application.
 * @function checkValidForm
 * @returns {function} Une fonction qui renvoie true si le formulaire est valide, sinon false.
 */
export function checkValidForm() {
  return (dispatch, getState) => {
    const validForm = selectEmployees(getState()).isValidForm;
    return validForm;
  };
}

/**
 *
 * Soumet le formulaire en ajoutant un nouvel employé si le formulaire est valide.
 * @function submitForm
 * @param {object} newEmployee - Un objet représentant un nouvel employé.
 * @returns {Promise<boolean>} Une promesse qui renvoie true si le formulaire a été soumis avec succès, sinon false.
 */
export function submitForm(newEmployee) {
  return async (dispatch, getState) => {
    const isFormCorrect = selectEmployees(getState()).isValidForm;
    const getEmployees = selectEmployees(getState()).dataEmployee;
    if (isFormCorrect) {
      dispatch(actions.setFormSubmit(newEmployee));
      dispatch(actions.addEmployee(getEmployees, newEmployee));
      return true;
    } else {
      return false;
    }
  };
}
