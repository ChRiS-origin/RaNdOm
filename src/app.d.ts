// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
		interface PageState {
			showOverlay: boolean;
			toggleOverlay: boolean;
			// add as many as you'd like...
		}
	}
}

export {};
