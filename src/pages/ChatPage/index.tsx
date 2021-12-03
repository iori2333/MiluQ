import React, { createContext, useReducer } from 'react';
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Layout from '../Layout';
import MessageTile, { MessageProps } from '../../components/MessageTile';
import ChatInput from '../../components/ChatInput';
import ChatTitle from '../../components/ChatTitle';
import useChatInfo from '../../hooks/useChatInfo';

export const ChatContext = createContext<{
  chatType: 'g' | 'p';
  chatId: number;
  dispatch: React.Dispatch<{ message: MessageProps }>;
}>({
  chatType: 'p',
  chatId: -1,
  dispatch: () => {}
});

const reducer = (
  state: { messages: MessageProps[] },
  payload: { message: MessageProps }
) => {
  // send message to server and then add to state
  return {
    messages: [...state.messages, payload.message]
  };
};

function ChatPage() {
  const [chatType, chatId] = useChatInfo();
  const [state, dispatchMessages] = useReducer(reducer, { messages: [] });

  if (chatType == undefined) {
    return <Navigate to="/error" />;
  }

  return (
    <ChatContext.Provider
      value={{ chatType, chatId, dispatch: dispatchMessages }}
    >
      <Layout.Container>
        <Layout.Title>
          <ChatTitle />
        </Layout.Title>
        <Layout.Content useBottom>
          {state.messages.map(props => (
            <MessageTile key={nanoid()} {...props} />
          ))}
        </Layout.Content>
        <Layout.Bottom>
          <ChatInput />
        </Layout.Bottom>
      </Layout.Container>
    </ChatContext.Provider>
  );
}

export default ChatPage;
