// ** Redux Imports
import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  isLoading: false
}

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setLoading: (state, action)=>{
      state.isLoading = action.payload;
    }
  }
})

export const { setLoading } = generalSlice.actions

export default generalSlice.reducer
