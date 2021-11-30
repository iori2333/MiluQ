import { createSlice, PayloadAction } from '@reduxjs/toolkit';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    on: false
  },
  reducers: {
    update(state, action: PayloadAction<boolean>) {
      state.on = action.payload;
    }
  }
});

export const { update } = accountSlice.actions;
export default accountSlice.reducer;
