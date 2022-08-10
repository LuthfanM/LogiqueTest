// ** Redux Imports
import { createSlice} from '@reduxjs/toolkit'

const initialState = {
  dataMusic: [],
  search: "",
}

export const musicSlice = createSlice({
  name: 'music',
  initialState,
  reducers: {
    setMusicName: (state, action)=>{
      state.search = action.payload;
    },
    setDataMusic: (state, action) => {
      console.log(action.payload);
      state.dataMusic = action.payload
    },
  }
})

export const { setDataMusic, setMusicName } = musicSlice.actions

export default musicSlice.reducer
