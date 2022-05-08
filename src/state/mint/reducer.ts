import { createSlice } from '@reduxjs/toolkit'

interface IState {
  signature: string
}

export const initialState: IState = {
  signature: '',
}

const mintSlice = createSlice({
  name: 'mint',
  initialState,
  reducers: {
    setSignature(state, action) {
      if (action.payload) state.signature = action.payload
    },
  },
})

export const { setSignature } = mintSlice.actions
export default mintSlice.reducer
