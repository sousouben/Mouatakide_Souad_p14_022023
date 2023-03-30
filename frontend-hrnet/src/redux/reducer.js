import { createSlice } from "@reduxjs/toolkit";

const { actions, reducer } = createSlice({
  name: "form",
  initialState: {
    dataEmployee: [],
    isValidForm: false,
  },
  reducers: {
    validForm: (state, action) => {
      state.isValidForm = true;
    },
    unvalidForm: (state, action) => {
      state.isValidForm = false;
    },
    submit: (state, action) => {
      state.dataEmployee = action.payload;
    },
  },
});

export { actions };
export default reducer;
