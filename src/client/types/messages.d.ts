import { GroupRole } from './common';
import { MessageElem, Sendable } from './elems';

export interface Anonymous {
  /** 是否可以匿名发言 */
  enable: boolean;
  flag: string;
  id: number;
  id2: number;
  name: string;
  expire_time: number;
  color: string;
}

export interface Message {
  user_id: number;
  message: Sendable;
  nickname: string;
  time: number;
  message_id: string;
  sender: { [k: string]: unknown };
}

export interface PrivateMessage extends Message {
  message_type: 'private';
  sub_type: 'group' | 'friend' | 'other' | 'self';
  from_id: number;
  to_id: number;
  auto_reply: boolean;
  sender: {
    user_id: number;
    nickname: string;
    group_id: number | undefined;
    discuss_id: number | undefined;
  };
}

export interface GroupMessage extends Message {
  message_type: 'group';
  sub_type: 'normal' | 'anonymous';
  group_id: number;
  group_name: string;
  anonymous: Anonymous | null;
  block: boolean;
  atme: boolean;
  atall: boolean;
  sender: {
    user_id: number;
    nickname: string;
    card: string;
    level: number;
    role: GroupRole;
    title: string;
  };
}

export interface ForwardMessage extends Message {
  user_id: number;
  nickname: string;
  time: number;
  message: MessageElem[];
  raw_message: string;
}
