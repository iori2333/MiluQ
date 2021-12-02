import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  IconButton,
  Stack,
  Flex,
  Avatar,
  Heading,
  Spacer
} from '@chakra-ui/react';
import { MdMore, MdSettings } from 'react-icons/md';

import MessageTile from '../../components/MessageTile';
import ChatInput from '../../components/ChatInput';

export interface ChatPageProps {
  isGroup: boolean;
}

function ChatTitle() {
  const navigate = useNavigate();
  return (
    <>
      <Stack spacing={4} direction="row" align="center">
        <Avatar size="sm" />
        <Heading as="h2" size="md">
          Chat
        </Heading>
      </Stack>
      <Spacer />
      <Stack spacing={3} direction="row" align="center">
        <IconButton
          icon={<MdSettings />}
          aria-label="Settings"
          onClick={() => navigate('/settings')}
        />
        <IconButton
          icon={<MdMore />}
          aria-label="More"
          onClick={() => {
            console.log('More');
          }}
        />
      </Stack>
    </>
  );
}

function ChatPage({ isGroup }: ChatPageProps) {
  return (
    <div className="chat-page">
      <Flex className="chat-title">
        <ChatTitle />
      </Flex>
      <div className="chat-content">
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="114514"
          mine={false}
        />
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="1919810"
          mine={false}
        />
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="哼哼哼啊啊啊啊啊啊"
          mine={false}
        />
        <MessageTile
          role="admin"
          avatar="https://avatars.githubusercontent.com/u/81511507?v=4"
          name="Iori"
          content="呃呃呃呃啊啊啊啊啊啊啊"
          mine={true}
        />
      </div>
      <Stack className="chat-bottom" spacing={2} direction="row" align="center">
        <ChatInput />
      </Stack>
    </div>
  );
}

export default ChatPage;
