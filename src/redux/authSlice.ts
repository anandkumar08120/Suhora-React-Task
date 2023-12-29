// src/redux/authSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface userInfo {
  userData: Record<string, any>;
}

const initialState: userInfo = {
  userData: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<any>) => {
      const { userName, token } = action.payload;
      state.userData.userName = userName;
      state.userData.token = token;
    },
  },
});

export const { addUser } = userSlice.actions;
export default userSlice.reducer;
