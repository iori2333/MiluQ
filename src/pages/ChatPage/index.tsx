import React, { createContext, useEffect, useReducer } from 'react';
import { Navigate } from 'react-router-dom';

import Page from './Page';
import { MessageProps } from '../../types/props';
import useChatInfo from '../../hooks/useChatInfo';
import useClient from '../../hooks/useClient';
import useEvent from '../../hooks/useEvent';
import { GroupMessage } from '../../types/messages';

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
  payload: { clean?: boolean; extras: MessageProps[] | MessageProps }
) => {
  return {
    messages: payload.clean
      ? ([] as MessageProps[]).concat(payload.extras)
      : state.messages.concat(payload.extras)
  };
};

function GroupChatPage() {
  const [, chatId] = useChatInfo();
  const [state, dispatchMessages] = useReducer(reducer, { messages: [] });
  const client = useClient();

  useEffect(() => {
    dispatchMessages({ clean: true, extras: [] });
    client.emit('miluq:messages.query', { type: 'g', chatId });
  }, [chatId, client]);

  useEvent('message.group', data => {
    if (data.group_id == chatId) {
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

  useEvent('miluq:messages.ret', data => {
    const extras = (data.messages as GroupMessage[]).map(
      value =>
        ({
          name: value.sender.card || value.sender.nickname,
          mine: false,
          content: value.message.toString(),
          role: value.sender.role
        } as MessageProps)
    );
    dispatchMessages({ clean: true, extras });
  });

  if (isNaN(chatId)) {
    return <Navigate to="/error" />;
  }
  return (
    <ChatContext.Provider
      value={{ chatType: 'p', chatId, dispatch: dispatchMessages }}
    >
      <Page messages={state.messages} />
    </ChatContext.Provider>
  );
}

function ChatPagePrivate() {
  const [, chatId] = useChatInfo();
  const [state, dispatchMessages] = useReducer(reducer, { messages: [] });
  const client = useClient();

  useEffect(() => {
    dispatchMessages({ clean: true, extras: [] });
    client.emit('miluq:messages.query', { type: 'p', chatId });
  }, [chatId, client]);

  useEvent('message.private', data => {
    if (data.user_id == chatId) {
      dispatchMessages({
        extras: {
          name: data.sender.nickname,
          mine: false,
          content: data.message.toString()
        } as MessageProps
      });
    }
  });

  if (isNaN(chatId)) {
    return <Navigate to="/error" />;
  }
  return (
    <ChatContext.Provider
      value={{ chatType: 'p', chatId, dispatch: dispatchMessages }}
    >
      <Page messages={state.messages} />
    </ChatContext.Provider>
  );
}

export default {
  Group: GroupChatPage,
  Private: ChatPagePrivate
};
