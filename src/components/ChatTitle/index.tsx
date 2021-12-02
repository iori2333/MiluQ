import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Avatar, Heading, IconButton, Spacer, Stack } from '@chakra-ui/react';
import { MdMore, MdSettings } from 'react-icons/md';

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

export default memo(ChatTitle);
