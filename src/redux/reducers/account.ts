import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import Client from '../../client/client';
import { ChatTileProp } from '../../components/ChatTile';

const accountSlice = createSlice({
  name: 'account',
  initialState: {
    client: new Client(),
    recent: [] as ChatTileProp[]
  },
  reducers: {
    addRecent(state, action: PayloadAction<ChatTileProp[]>) {
      state.recent.push(...action.payload);
    }
  }
});

export const { addRecent } = accountSlice.actions;
export default accountSlice.reducer;
