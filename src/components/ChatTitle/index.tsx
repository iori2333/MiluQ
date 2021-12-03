import React, { memo } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Avatar,
  ButtonGroup,
  Heading,
  IconButton,
  Spacer,
  Stack
} from '@chakra-ui/react';
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
      <ButtonGroup alignItems="center">
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
      </ButtonGroup>
    </>
  );
}

export default memo(ChatTitle);
