<script>
  import { cart, totalprice } from "../stores.js";  
  import InlineSVG from 'svelte-inline-svg';
  export let name;

  import { getContext } from "svelte";
  const { loggedIn } = getContext('key'); 

  $: attributes = {
    width: 50,
    height: 50,
  }    

  $: attributesCart = {
    width: 30,
    height: 30,
  }
</script>

<style>
  header { 
    background-color: black; 
    color: #fff;    
    display: flex; 
    justify-content: space-between; 
  }

  header > div { 
    min-height: 100px; 
    display: flex; 
    align-items: center;
  }

  header > div:nth-child(1) {
    flex: 1;
    float: left;
  }

  header > div:nth-child(2) {
    float: right;
  }

  header > div > span:nth-child(2) { 
    font-size: 30px; 
    padding-left: 10px;
  }

  div.basket { 
    display: flex; 
  }

  div.basket > div:nth-child(1) {
    margin-right: 10px;
  }

  div.basketcount { 
    background-color: #c59747;  
    padding: 5px 10px; 
    border-radius: 50px; 
    margin: 0 0 15px 0px; 
  }
</style>

<header>
  <div>
    <span><InlineSVG src="/images/logo.svg" {...attributes} /></span>
    <span>Small Coffee Company</span>
  </div>
  <div>
    <div class="basket">
      {#if loggedIn}
        <div>Hi, {name} | Logout</div>
      {:else}
        <div>Hi, Guest | Login</div>
      {/if}
      <div><InlineSVG src="/images/shoppingcart.svg" {...attributesCart} /></div>
    </div>
    <div class="basketcount">{$cart.reduce((sum, item) => sum + item.quantity, 0)} items: ${$cart.reduce((sum, item) => sum + item.quantity * item.price, 0)}</div>
  </div>
</header>

