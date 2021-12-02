import React, { memo } from 'react';
import {
  IconButton,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react';
import { MdSend, MdMoreHoriz } from 'react-icons/md';

function ChatInput() {
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
          console.log('send');
        }}
        aria-label="send"
      />
    </>
  );
}

export default memo(ChatInput);
