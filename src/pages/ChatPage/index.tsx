import React from 'react';
import ChatPage from './ChatPage';
import './index.scss';

export default {
  Private: () => <ChatPage isGroup={false} />,
  Group: () => <ChatPage isGroup={true} />
};
