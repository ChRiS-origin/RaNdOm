export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "internal",
	appPath: "RaNdOm/internal",
	assets: new Set([".nojekyll","again.svg","button-rand.png","ckeck.svg","close.svg","delete.svg","moon.svg","silverbutton-rand.png","stop.svg","sun.svg","up.svg"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png"},
	_: {
		client: {"start":"internal/immutable/entry/start.BXRrpTwR.js","app":"internal/immutable/entry/app.D47i_ZFR.js","imports":["internal/immutable/entry/start.BXRrpTwR.js","internal/immutable/chunks/entry.ki0xAS_h.js","internal/immutable/chunks/scheduler.BJmJcyhA.js","internal/immutable/chunks/paths.BpJlnmk3.js","internal/immutable/entry/app.D47i_ZFR.js","internal/immutable/chunks/scheduler.BJmJcyhA.js","internal/immutable/chunks/index.b4Fi85zp.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
