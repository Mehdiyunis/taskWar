import { createSlice } from "@reduxjs/toolkit"
import type { PayloadAction } from "@reduxjs/toolkit"

export interface OpenPopup {
  value: boolean
}

const initialState: OpenPopup = {
  value: false,
}

export const addListPopupSlice = createSlice({
  name: "openPopup",
  initialState,
  reducers: {
    changePopupStatus: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { changePopupStatus } = addListPopupSlice.actions

export default addListPopupSlice.reducer