import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ILoginResponse } from "../services/LoginService/ILoginResponse";

export interface UserState {
  token: string;
}

const UserInitialState:UserState = {
  token: ''
}

export const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<ILoginResponse>) => {
      state.token = action.payload.token;
    }
  }
})

export const {setUserToken} = userSlice.actions;
export default userSlice.reducer;