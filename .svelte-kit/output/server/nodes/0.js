import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["internal/immutable/nodes/0.DKnPK4iB.js","internal/immutable/chunks/scheduler.BJmJcyhA.js","internal/immutable/chunks/index.b4Fi85zp.js"];
export const stylesheets = ["internal/immutable/assets/0.DmCNUUMj.css"];
export const fonts = [];
