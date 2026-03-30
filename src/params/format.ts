export function match(param: string) {
  console.log(`being asked for format ${param}`)
  return [
    '.md', '.csv', '.json', '',
    '/.md', '/.csv', '/.json', '/',
  ].includes(param);
}