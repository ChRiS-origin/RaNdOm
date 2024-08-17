

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["internal/immutable/nodes/2.D0Zhlgzl.js","internal/immutable/chunks/scheduler.BJmJcyhA.js","internal/immutable/chunks/index.b4Fi85zp.js","internal/immutable/chunks/paths.BpJlnmk3.js"];
export const stylesheets = ["internal/immutable/assets/2.CHwY-OrB.css"];
export const fonts = [];
