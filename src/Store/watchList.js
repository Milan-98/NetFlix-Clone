import { createSlice } from "@reduxjs/toolkit";

const watchList = createSlice({
  name: "watchList",
  initialState: [],
  reducers: {
    addId(state, action) {
      state.push(action.payload);
    },
    deleteItem(state, action) {
      state = state.filter((item) => item.id !== action.payload);
      return state;
    },
  },
});

export default watchList.reducer;
export const { addId } = watchList.actions;
export const { deleteItem } = watchList.actions;
