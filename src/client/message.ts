import { Sendable } from '../types/elems';

export function deserializeMessage(message: Sendable): string {
  if (typeof message == 'string') {
    return message;
  }
  if (Array.isArray(message)) {
    return message.map(v => deserializeMessage(v)).join(' ');
  }

  if (message.type == 'text') {
    return message.text;
  }
  return '';
}
