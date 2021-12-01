import React from 'react';
import { Outlet, useNavigate, useParams } from 'react-router';
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

function AppContainer() {
  const { chat } = useParams();
  const navigate = useNavigate();

  return <div className="app-container">
    <Flex className="app-titlebar">
      <Stack spacing={4} direction="row" align="center">
        <Avatar size='sm' />
        <Heading as="h2" size="md">
          Chat: {chat}
        </Heading>
      </Stack>
      <Spacer />
      <Stack spacing={4} direction="row" align="center">
        <IconButton
          icon={<MdSettings />}
          aria-label="Settings"
          onClick={() => navigate('/settings')}
        />
        <IconButton
          icon={<MdMore />}
          aria-label="More"
          onClick={() => { }}
        />
      </Stack>
    </Flex>
    <div className="app-content">
      <Outlet />
    </div>
  </div>;
}

export default AppContainer;
