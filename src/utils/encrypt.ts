import md5 from 'md5';

export function convertMd5(text: string) {
  return md5(text);
}
