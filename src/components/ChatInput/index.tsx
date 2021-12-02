import React, { memo, useContext } from 'react';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { MdSend, MdMoreHoriz } from 'react-icons/md';
import { ChatContext } from '../../pages/ChatPage';
import { AppContext } from '../../pages/AppContainer';

function ChatInput() {
  const { dispatch } = useContext(ChatContext);
  const { scrollTop } = useContext(AppContext);
  const payload = {
    avatar: '',
    content: 'abcd',
    role: 'admin',
    name: 'Iori',
    mine: true
  };
  return (
    <>
      <InputGroup size="md">
        <Input variant="filled" pr="4.5rem" type="text" />
        <InputRightElement width="4.5rem">
          <IconButton h="1.75rem" icon={<MdMoreHoriz />} aria-label="more" />
        </InputRightElement>
      </InputGroup>
      <IconButton
        icon={<MdSend />}
        onClick={() => {
          scrollTop();
          dispatch({ message: payload });
        }}
        aria-label="send"
      />
    </>
  );
}

export default memo(ChatInput);
