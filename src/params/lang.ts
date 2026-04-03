import { langs } from '$lib/manifest-plugin/langs.generated';

export function match(param: string) {
  return (langs as readonly string[]).includes(param);
}
