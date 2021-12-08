import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ChatTileProp } from '../../types/props';

export const accountSlice = createSlice({
  name: 'account',
  initialState: {
    recent: [] as ChatTileProp[]
  },
  reducers: {
    addRecent(state, action: PayloadAction<ChatTileProp>) {
      state.recent.unshift(action.payload);
    },
    removeRecent(
      state,
      action: PayloadAction<{ type: 'g' | 'p'; chatId: number }>
    ) {
      const { type, chatId } = action.payload;
      state.recent = state.recent.filter(
        value => value.type != type || value.chatId != chatId
      );
    }
  }
});

export const { addRecent, removeRecent } = accountSlice.actions;
export default accountSlice.reducer;
