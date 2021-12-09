import React, { memo, useContext, useEffect } from 'react';
import { Box, Button } from '@chakra-ui/react';
import { nanoid } from 'nanoid';

import MessageTile from '../../components/MessageTile';
import ChatTitle from '../../components/ChatTitle';
import ChatInput from '../../components/ChatInput';
import Layout from '../Layout';

import { MessageProps } from '../../types/props';

import useClient from '../../hooks/useClient';

import { ChatContext } from './index';

interface PageProps {
  messages: MessageProps[];
}

function Page({ messages }: PageProps) {
  const { chatType, chatId, dispatch } = useContext(ChatContext);
  const client = useClient();

  useEffect(() => {
    dispatch({ clean: true, extras: [] });
    client.emit('miluq:messages.query', { type: chatType, chatId, count: 50 });
  }, [chatId, chatType, client, dispatch]);

  const queryMessages = () =>
    client.emit('miluq:messages.query', {
      type: chatType,
      chatId,
      count: 20 + messages.length
    });

  return (
    <Layout.Container>
      <Layout.Title>
        <ChatTitle />
      </Layout.Title>
      <Layout.Content useBottom>
        <Box alignItems="center" padding={4}>
          <Button onClick={queryMessages}>Load More</Button>
        </Box>
        {messages.map(props => (
          <MessageTile key={nanoid()} {...props} />
        ))}
      </Layout.Content>
      <Layout.Bottom>
        <ChatInput />
      </Layout.Bottom>
    </Layout.Container>
  );
}

export default memo(Page);
