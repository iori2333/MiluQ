import React from 'react';
import {
  Avatar,
  Flex,
  Heading,
  Spacer,
  Stack,
  IconButton
} from '@chakra-ui/react';
import { MdSettings, MdMore } from 'react-icons/md';
import './index.scss';
import ChatPage from '../ChatPage';

function AppContainer() {
  return <div className="app-container">
    <Flex className="app-titlebar">
      <Stack spacing={4} direction="row" align="center">
        <Avatar size='sm' />
        <Heading as="h2" size="md">
          Chat
        </Heading>
      </Stack>
      <Spacer />
      <Stack spacing={4} direction="row" align="center">
        <IconButton
          icon={<MdSettings />}
          aria-label="Settings"
          onClick={() => { }}
        />
        <IconButton
          icon={<MdMore />}
          aria-label="More"
          onClick={() => { }}
        />
      </Stack>
    </Flex>
    <div className="app-content">
      <ChatPage />
    </div>
  </div>;
}

export default AppContainer;
