import { createSlice } from '@reduxjs/toolkit'

export const postSlice = createSlice({
  name: 'post',
  initialState: {
    shared: false,
    submitted: false,
  },
  reducers: {
    setShared: (state, action) => {
      state.shared = action.payload
    },
    setSubmitted: (state, action) => {
      state.submitted = action.payload
    },
  },
})

export const { setShared, setSubmitted } = postSlice.actions
export default postSlice.reducer
