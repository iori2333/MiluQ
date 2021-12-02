import React from 'react';
import {
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Input,
  Avatar,
  AvatarBadge,
  Stack
} from '@chakra-ui/react';
import './index.scss';
import ChatTile, { ChatTileProp } from '../../components/ChatTile';

function AppSideBar() {
  const prop: ChatTileProp = {
    name: 'Iori',
    message: '呃呃呃呃啊啊啊啊啊啊',
    lastUpdate: 1638373032,
    avatar: 'https://avatars.githubusercontent.com/u/81511507?v=4',
    type: 'p',
    chatId: 114514
  };

  const prop2: ChatTileProp = {
    name: 'Inori',
    message: 'pong!',
    lastUpdate: 1638373832,
    avatar: '',
    type: 'p',
    chatId: 1919810
  };

  return (
    <div className="app-sidebar">
      <Stack className="side-title" direction="row" spacing={4} align="center">
        <Avatar size="sm">
          <AvatarBadge boxSize="1.25em" bg="green.500" />
        </Avatar>
        <Input variant="filled" placeholder="Search dialogs" />
      </Stack>
      <Tabs
        className="side-panel"
        variant="soft-rounded"
        colorScheme="green"
        isFitted
      >
        <TabList>
          <Tab>Recent</Tab>
          <Tab>Friends</Tab>
          <Tab>Groups</Tab>
        </TabList>
        <TabPanels>
          <TabPanel pl={2} pr={2}>
            <ChatTile {...prop} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
            <ChatTile {...prop2} />
          </TabPanel>
          <TabPanel>
            <p>Friends</p>
          </TabPanel>
          <TabPanel>
            <p>Groups</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
}

export default AppSideBar;
