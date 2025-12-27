import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILoginResponse } from "../services/LoginService/ILoginResponse"

export interface UserState {
  token: string
  id: number | null
}

const UserInitialState: UserState = {
  token: "",
  id: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState: UserInitialState,
  reducers: {
    setUserToken: (state, action: PayloadAction<ILoginResponse>) => {
      state.token = action.payload.token
    },
    setUserId: (state, action: PayloadAction<ILoginResponse>) => {
      state.id = action.payload.id
    },
  },
})

export const { setUserToken, setUserId } = userSlice.actions
export default userSlice.reducer
