import { readable, writable, derived } from "svelte/store";
import * as myjson from "../public/stock.json";
export const username = writable('Guest');

let products = myjson.default;
let cart = writable([])
let totalprice = derived(
  cart,
  ($cart) => {
    let price = 0
    $cart.forEach(e => price = price + e.price)
    return price
  }
);


export { cart, products, totalprice }