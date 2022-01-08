<script>
  import { Link } from "svelte-routing";
  import {products, cart} from "../stores.js";
  import Cart from "./Cart.svelte";  
  import Button from "./Button.svelte";

  export let location;

  const addToCart = (product) => {
    console.log("Added");
    for (let item of $cart) {
        if(item.id === product.id) {
          product.quantity += 1
          $cart = $cart;
          return;
        }
    }
    $cart = [...$cart, product]
  }
</script>

<style>
  .product-list { 
    display: grid; 
    grid-template-columns: repeat(3, 1fr); 
    column-gap: 20px; 
    grid-row-gap: 20px; 
  }
  
  .product-list > div { 
    border: 1px solid #c4c4c4;   
    padding: 10px; 
  }
  
  .image { 
    height: 150px; 
    width: auto; 
    background-size: contain; 
    background-position: center; 
    background-repeat: no-repeat; 
  }

  .cta { 
    display: flex; 
    justify-content: space-between; 
  }
</style>


<div class="product-list">
  {#await products}
    <p>...loading products</p>
  {:then}
    {#each products as product}
      <div>
        <div class="image" style="background-image: url({product.image})"></div>
        <h4><Link to="product/{product.id}">{product.name}</Link></h4>
        <p>${product.price}</p>
        <div class="cta">
          <Button on:click={() => addToCart(product)}>
            Add to cart
          </Button>
        </div>
      </div>
    {/each}
  {/await}
</div>
<Cart />