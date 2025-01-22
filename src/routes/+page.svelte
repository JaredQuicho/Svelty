<script lang="ts">
    import ProductCard from "$lib/productCard.svelte";

    const products: Product[] = [
        {
            id: "1",
            name: "Coffee",
            price: 100
        },
        {
            id: "2",
            name: "Tea",
            price: 200
        },
        {
            id: "3",
            name: "Milk",
            price: 300
        },
        {
            id: "4",
            name: "Juice",
            price: 400
        },
        {
            id: "5",
            name: "Water",
            price: 500
        }
    ]
</script>

<main class="bg-gradient-to-r from-blue-700 via-green-700 to-purple-700 h-screen text-white">
    <div class="container flex justify-center items-center h-full mx-auto ">
        <div class="grid grid-cols-4 gap-4">
            <div class="col-span-4 text-8xl m-4">
                <h1>Svelte | Tailwind</h1>
            </div>
                {#each products as product}
                <ProductCard product={product}/>
                {/each} 
            <div class="col-span-4">
                <button class="col-span-3 btn bg-orange-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">Check out</button>
            </div>
            
        </div>
    </div>
</main>
