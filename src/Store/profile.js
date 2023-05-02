import { createSlice } from "@reduxjs/toolkit";

const Profile = createSlice({
  name: "profile",
  initialState: "User1",
  reducers: {
    setProfile(state, action) {
      return (state = action.payload);
    },
  },
});

export default Profile.reducer;
export const { setProfile } = Profile.actions;
