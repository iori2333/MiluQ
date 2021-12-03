import React, { memo, useContext } from 'react';
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
  IconButton
} from '@chakra-ui/react';
import { MdEmojiEmotions } from 'react-icons/md';
import { InputContext } from './index';

function EmojiPanel() {
  const context = useContext(InputContext);
  return (
    <Popover>
      <PopoverTrigger>
        <IconButton h="1.75rem" icon={<MdEmojiEmotions />} aria-label="emoji" />
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        <PopoverHeader>Emoji</PopoverHeader>
        <PopoverBody>Some Emojis</PopoverBody>
      </PopoverContent>
    </Popover>
  );
}

export default memo(EmojiPanel);
