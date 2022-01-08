<script>
  import Modal from "modal-overlay";
 
  let display = true;
  const close = () => {
    display = false;
  };
  const open = () => {
    display = true;
  }
</script>

<style>
  @font-face { 
    font-family: 'black_jackregular';
    src: url('/fonts/blackjack.woff') format('woff');
    font-weight: normal; 
    font-style: normal;
    font-display: swap; 
  }
  .welcome { 
    font-family: 'black_jackregular', sans-serif;
    font-size: 30px;
    width: 50%;
  }
</style>

<section>
  <!-- image from https://www.pexels.com/photo/beans-beverage-black-coffee-breakfast-373888/ -->
  <span class="welcome">Welcome to Small Coffee Company - high quality great coffee, roasted with love in the heart of Yorkshire</span>
  <div id="banner">
    <img src="images/banner.webp" alt="banner" />
  </div>

  {#if display}
    <Modal class="modal-background" on:close={close}>
      <h1>Get 10% off your first order!</h1>
      <p>
        <span>Use code 10PERCENT at checkout</span>
        <img src="images/3.png" alt="image3"/>
      </p>
      <button on:click={close}>Close</button>
    </Modal>
  {/if}

  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed odio id nulla gravida rhoncus. Suspendisse potenti. In volutpat nibh non tellus laoreet, vitae faucibus ipsum sollicitudin. Duis viverra pulvinar tempus. Phasellus odio nunc, imperdiet vitae diam quis, sollicitudin pretium massa. Donec molestie mauris id semper sagittis.</p>

  <span class="welcome">New Arrivals</span>
  <div id="newarrivals">
    <img src="images/1.png" alt="image1" />
    <img src="images/2.png" alt="image2" />
    <img src="images/3.png" alt="image3" />
  </div>

  <p>Vivamus euismod arcu non velit pulvinar, in egestas mauris tincidunt. Vivamus eget elit non est semper elementum. Quisque turpis elit, tristique eu elit at, rhoncus ullamcorper eros. Integer efficitur efficitur libero, venenatis rhoncus sapien posuere ut. Nulla semper, magna at luctus luctus, orci lacus scelerisque erat, id consequat quam mauris sed neque.</p>
</section>