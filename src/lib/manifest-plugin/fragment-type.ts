// eslint-disable-next-line @typescript-eslint/no-unused-vars
const _all = import.meta.glob("/locale/en/**/*.md");
type RawKey = keyof typeof _all;
export type FragmentKey = RawKey extends `/locale/en/${infer K}.md` ? K : never;