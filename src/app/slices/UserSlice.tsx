import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ILoginResponse } from "../services/LoginService/ILoginResponse"

export interface UserState {
  token: string
  id: number | null
  email: string
  name: string
  surname: string
}

const UserInitialState: UserState = {
  token: "",
  id: null,
  email: "",
  name: "",
  surname: "",
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
    setUserEmail: (state, action: PayloadAction<ILoginResponse>) => {
      state.email = action.payload.email
    },
    setUserName: (state, action: PayloadAction<ILoginResponse>) => {
      state.name = action.payload.name
    },
    setUserSurname: (state, action: PayloadAction<ILoginResponse>) => {
      state.surname = action.payload.surname
    },
  },
})

export const {
  setUserToken,
  setUserId,
  setUserEmail,
  setUserName,
  setUserSurname,
} = userSlice.actions
export default userSlice.reducer
