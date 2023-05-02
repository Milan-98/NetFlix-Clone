import { configureStore } from "@reduxjs/toolkit";
import profile from "./profile";
import watchList from "./watchList";

const store = configureStore({
  reducer: {
    ProfileData: profile,
    watchList: watchList,
  },
});

export default store;
