import React, { createContext, useContext, useReducer } from 'react';
import { Navigate } from 'react-router-dom';

import Page from './Page';

import useChatInfo from '../../hooks/useChatInfo';
import useEvent from '../../hooks/useEvent';

import { GroupMessage } from '../../types/messages';
import { MessageProps } from '../../types/props';
import { AppContext } from '../AppContainer';
import { deserializeMessage } from '../../client/message';

export const ChatContext = createContext<{
  chatType: 'g' | 'p';
  chatId: number;
  dispatch: React.Dispatch<{
    clean?: boolean;
    extras: MessageProps[] | MessageProps;
  }>;
}>({
  chatId: 0,
  chatType: 'p',
  dispatch() {
    console.log('Loading context');
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
  const { scrollTop } = useContext(AppContext);

  useEvent('message.group', data => {
    if (data.group_id == chatId) {
      dispatchMessages({
        extras: {
          name: data.sender.card || data.sender.nickname,
          mine: false,
          content: deserializeMessage(data.message),
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
          content: deserializeMessage(value.message),
          role: value.sender.role
        } as MessageProps)
    );
    dispatchMessages({ clean: true, extras });
    scrollTop();
  });

  if (isNaN(chatId)) {
    return <Navigate to="/error" />;
  }
  return (
    <ChatContext.Provider
      value={{ chatType: 'g', chatId, dispatch: dispatchMessages }}
    >
      <Page messages={state.messages} />
    </ChatContext.Provider>
  );
}

function ChatPagePrivate() {
  const [, chatId] = useChatInfo();
  const [state, dispatchMessages] = useReducer(reducer, { messages: [] });

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
