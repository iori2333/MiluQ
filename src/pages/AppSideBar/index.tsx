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
import ChatTile from '../../components/ChatTile';
import useTiles from '../../hooks/useTiles';
import useEvent from '../../hooks/useEvent';
import { nanoid } from 'nanoid';

function AppSideBar() {
  const [tiles, addRecent, removeRecent] = useTiles();
  useEvent('message.group', data => {
    removeRecent({ type: 'g', chatId: data.group_id });
    addRecent({
      avatar: '',
      chatId: data.group_id,
      lastUpdate: data.time,
      message: data.message.toString(),
      name: data.group_name,
      type: 'g'
    });
  });
  useEvent('message.private', data => {
    removeRecent({ type: 'p', chatId: data.from_id });
    addRecent({
      avatar: '',
      chatId: data.from_id,
      lastUpdate: data.time,
      message: data.message.toString(),
      name: data.nickname,
      type: 'p'
    });
  });

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
            {tiles.map(props => (
              <ChatTile key={nanoid()} {...props} />
            ))}
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
