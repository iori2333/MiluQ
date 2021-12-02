import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export function formatDate(time: number, format = 'M.D') {
  return dayjs.unix(time).format(format);
}

export function fromNow(time: number) {
  return dayjs.unix(time).fromNow();
}
