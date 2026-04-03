export function match(param: string) {
  return [
    '.md', '.csv', '.json', '',
    '/.md', '/.csv', '/.json', '/',
  ].includes(param);
}