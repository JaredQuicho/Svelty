import { writable, get } from "svelte/store";

export const cartItems = writable<CartItem[]>([]);


// add to cart
export const addToCart = (id: string) => {

    // cart items is writable, not a value
    const items = get(cartItems);
    // find if the id is currently existing
    const itemPosition = items.findIndex(
        (item) => { return item.id == id}
    )

    if(itemPosition !== -1){
        // Item is already in cart, add quantity to item
        
        cartItems.update(() => {
            // items
            // update the items from quantity of 5 to 6
            const updatedItems = items.map( (item) => {
                if(item.id === id) {
                    return { ...item, quantity: item.quantity + 1};
                }
                return item;
            });
            return updatedItems;
        });
    } else {
        // Item is not in the cart, add the item to cart
        cartItems.update(() => {
            return [ ...items, {id: id, quantity: 1 }]
        })
    }
}


// remove to cart
export const removeFromCart = (id: string) => {

    // cart items is writable, not a value
    const items = get(cartItems);
    // find if the id is currently existing
    const itemPosition = items.findIndex(
        (item) => { return item.id == id}
    )

    // [ {id: 1, quantity: 1} ]
    if(items[itemPosition]?.quantity - 1 === 0){
        items.splice(itemPosition, 1);
    }
    // [ ]


    cartItems.update(() => {
        // items
        // update the items from quantity of 6 to 5
        const updatedItems = items.map( (item) => {
            if(item.id === id) {
                return { ...item, quantity: item.quantity - 1};
            }
            return item;
        });
        return updatedItems;
    });

}