// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	class Product {
		id: string
		name: string
		price: number
	}
	type CartItem = {
		id: string
		quantity: number
	}
}

export {};
