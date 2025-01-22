<script lang="ts">
	import { get } from "svelte/store";
    import { cartItems, addToCart, removeFromCart } from "../cart";
    export let product : Product = {id: "", name:"", price: 0}

    let cart = get(cartItems);
    let cartItemIndex = cart.findIndex((item) => {return item.id === product.id});
    let cartProduct = cart[cartItemIndex];
    cartItems.subscribe((newCartValue) => {
        cart = newCartValue;
        cartItemIndex = cart.findIndex((item) => item.id === product.id);
        cartProduct = cart[cartItemIndex];
        console.log(cart);
    });
</script>

<div class="flex justify-center items-center">
    <div class="bg-white/20 backdrop-blur-lg border border-white/30 rounded-lg shadow-lg p-8 max-w-sm">
      <h2 class="text-white text-2xl font-bold mb-4">{product.name}</h2>
      {#if cartProduct !== undefined}
      <h4>Quantity: <strong>{cartProduct.quantity}</strong></h4>
      {/if}
      <h4>Price: {product.price}$</h4>
      <h4>Id: {product.id}</h4>
      
      <p class="text-white/70 mt-4">This is an example of a frosted glass card effect using Tailwind CSS.</p>
      <button class="btn font-bold mt-4 py-2 px-4 rounded bg-blue-500 hover:bg-blue-700" on:click={() => addToCart(product.id)}>Add</button>
      <button class="btn font-bold mt-4 py-2 px-4 rounded bg-red-500 hover:bg-red-700" on:click={() => removeFromCart(product.id)}>Remove</button>
    </div>
  </div>