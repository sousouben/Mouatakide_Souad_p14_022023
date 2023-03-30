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
  },
});

export { actions };
export default reducer;
