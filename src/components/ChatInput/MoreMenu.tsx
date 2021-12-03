import {
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList
} from '@chakra-ui/react';
import {
  MdArrowBack,
  MdFileUpload,
  MdImage,
  MdMoreHoriz
} from 'react-icons/md';
import { IoMdAt } from 'react-icons/io';
import React, { memo } from 'react';

function MoreMenu() {
  return (
    <Menu>
      <MenuButton h="1.75rem" icon={<MdMoreHoriz />} as={IconButton} />
      <MenuList>
        <MenuItem icon={<MdImage />}>Image</MenuItem>
        <MenuItem icon={<MdFileUpload />}>File</MenuItem>
        <MenuItem icon={<MdArrowBack />}>Recall</MenuItem>
        <MenuItem icon={<IoMdAt />}>At</MenuItem>
      </MenuList>
    </Menu>
  );
}

export default memo(MoreMenu);
