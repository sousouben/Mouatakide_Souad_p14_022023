import { createSlice } from "@reduxjs/toolkit";

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
