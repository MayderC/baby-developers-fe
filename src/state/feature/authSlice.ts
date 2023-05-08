import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store'
import { IAuth } from '../../common/Interfaces/IAuth.interface'
import type { PayloadAction } from '@reduxjs/toolkit'


const initialState: IAuth = {
  isAuthenticated: false,
  refreshToken: "",
  token: ""
}

export const authSlice = createSlice({

  name: 'auth',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAuthSucces: (state, action: PayloadAction<IAuth>) => {
      state.isAuthenticated = action.payload.isAuthenticated
    },

  },

})


// Other code such as selectors can use the imported `RootState` type
export const select = (state: RootState) => state.auth

export const {reducer} = authSlice;