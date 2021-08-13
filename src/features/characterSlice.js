import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  character: {},
};

const characterSlice = createSlice({
  name: "character",
  initialState,
  reducers: {
    setCharacter: (state, action) => {
      state.character = action.payload;
    },
  },
});

export const { setCharacter } = characterSlice.actions;
export const selectCharacter = (state) => state.character;
export default characterSlice.reducer;
