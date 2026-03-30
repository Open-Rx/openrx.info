export function match(param: string) {
  console.log(`being asked for lang ${param}`)
  return ['en', 'es', ''].includes(param);
}