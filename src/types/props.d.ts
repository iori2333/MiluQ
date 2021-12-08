export interface MessageProps {
  name: string;
  mine: boolean;
  content: string;
  avatar?: string;
  role?: string;
}

export interface ChatTileProp {
  name: string;
  message: string;
  lastUpdate: number;
  avatar: string;
  type: 'g' | 'p';
  chatId: number;
}
