import { createSlice } from "@reduxjs/toolkit";

/**
 * @typedef {Object} EmployeeData
 * @property {Array<Object>} data - Les données des employés
 * @property {boolean} isValidForm - Indique si le formulaire est valide ou non
 */

/**
 * @typedef {Object} FormState
 * @property {Array<EmployeeData>} dataEmployee - Les données de tous les employés
 * @property {boolean} isValidForm - Indique si le formulaire est valide ou non
 */

/**
 * Les actions du formulaire
 * @namespace
 * @property {Function} setFormValid - Met le formulaire en valide
 * @property {Function} setFormInvalid - Met le formulaire en invalide
 * @property {Function} setFormSubmit - Envoie les données du formulaire
 * @property {Function} addEmployee - Ajoute un nouvel employé
 */

const { actions, reducer } = createSlice({
  name: "form",
  initialState: {
    dataEmployee: [],
    isValidForm: false,
  },
  reducers: {
    setFormValid: (state) => {
      state.isValidForm = true;
    },
    setFormInvalid: (state) => {
      state.isValidForm = false;
    },
    setFormSubmit: (state, action) => {
      state.dataEmployee = action.payload;
    },
    addEmployee: {
      prepare: (data, newEmployee) => ({ payload: { data, newEmployee } }),
      reducer: (state, action) => {
        state.dataEmployee = [
          ...action.payload.data,
          action.payload.newEmployee,
        ];
      },
    },
  },
});

export { actions };
export default reducer;
