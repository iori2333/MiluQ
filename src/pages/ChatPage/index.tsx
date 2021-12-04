import React, { createContext, useEffect, useReducer } from 'react';
import { Navigate } from 'react-router-dom';
import { nanoid } from 'nanoid';

import Layout from '../Layout';
import MessageTile, { MessageProps } from '../../components/MessageTile';
import ChatInput from '../../components/ChatInput';
import ChatTitle from '../../components/ChatTitle';
import useChatInfo from '../../hooks/useChatInfo';
import useClient from '../../hooks/useClient';
import useEvent from '../../hooks/useEvent';

export const ChatContext = createContext<{
  chatType: 'g' | 'p';
  chatId: number;
  dispatch: React.Dispatch<{ extras: MessageProps[] | MessageProps }>;
}>({
  chatType: 'p',
  chatId: -1,
  dispatch: () => {
    console.log('initializing');
  }
});

const reducer = (
  state: { messages: MessageProps[] },
  payload: { extras: MessageProps[] | MessageProps }
) => {
  return {
    messages: state.messages.concat(payload.extras)
  };
};

function ChatPage() {
  const [chatType, chatId] = useChatInfo();
  const [state, dispatchMessages] = useReducer(reducer, { messages: [] });
  const client = useClient();

  useEffect(() => {
    if (chatType)
      client.emit('miluq:messages.query', {
        type: chatType,
        chatId
      });
  }, [chatId, chatType, client]);

  useEvent('message.group', data => {
    if (chatType == 'g' && data.group_id == chatId) {
      dispatchMessages({
        extras: {
          name: data.sender.card || data.sender.nickname,
          mine: false,
          content: data.message.toString(),
          role: data.sender.role
        } as MessageProps
      });
    }
  });

  useEvent('message.private', data => {
    if (chatType == 'p' && data.user_id == chatId) {
      dispatchMessages({ extras: {} as MessageProps });
    }
  });

  if (!chatType) {
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
