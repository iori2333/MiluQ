import { Sendable } from './elems';

interface DistinguishedEmit {
  type: 'g' | 'p';
  chatId: number;
}

interface GroupEmit {
  groupId: number;
}

export interface LoginEmit {
  uin: number;
  password: string;
}

export interface QueryMessageEmit extends DistinguishedEmit {
  count: number;
}

export interface SendMessageEmit extends DistinguishedEmit {
  data: Sendable;
}

export interface PokeEmit extends DistinguishedEmit {
  uin: number;
}

export interface RecallEmit extends DistinguishedEmit {
  message_id: string;
}

export interface BanEmit extends GroupEmit {
  uin: number;
  duration: number;
}

export interface EmitMap {
  'miluq:login': LoginEmit;
  'miluq:logout': void;
  'miluq:check': void;
  'miluq:messages.query': QueryMessageEmit;
  'miluq:messages.send': SendMessageEmit;
  'miluq:notice.poke': PokeEmit;
  'miluq:notice.recall': RecallEmit;
  'miluq:notice.ban': BanEmit;
}
