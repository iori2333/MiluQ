import React, { memo } from 'react';
import { nanoid } from 'nanoid';

import MessageTile from '../../components/MessageTile';
import ChatTitle from '../../components/ChatTitle';
import ChatInput from '../../components/ChatInput';
import Layout from '../Layout';

import { MessageProps } from '../../types/props';
import { Box, Button } from '@chakra-ui/react';

interface PageProps {
  messages: MessageProps[];
}

function Page({ messages }: PageProps) {
  return (
    <Layout.Container>
      <Layout.Title>
        <ChatTitle />
      </Layout.Title>
      <Layout.Content useBottom>
        <Box alignItems="center" padding={4}>
          <Button>Load More</Button>
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
