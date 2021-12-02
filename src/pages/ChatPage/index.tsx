import React, { createContext, useReducer } from 'react';
import { Navigate } from 'react-router-dom';
import { Stack, Flex, Box } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

import MessageTile, { MessageProps } from '../../components/MessageTile';
import ChatInput from '../../components/ChatInput';
import ChatTitle from '../../components/ChatTitle';
import useChatInfo from '../../hooks/useChatInfo';

import './index.scss';

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
      <Flex className="chat-page">
        <Flex className="chat-title">
          <ChatTitle />
        </Flex>
        <Box className="chat-content">
          {state.messages.map(props => (
            <MessageTile key={nanoid()} {...props} />
          ))}
        </Box>
        <Stack
          className="chat-bottom"
          spacing={2}
          direction="row"
          align="center"
        >
          <ChatInput />
        </Stack>
      </Flex>
    </ChatContext.Provider>
  );
}

export default ChatPage;
