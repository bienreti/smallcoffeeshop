<script>
  import Contact from "./pages/Contact.svelte";
  import { Products, Footer, Header, Product, Disclaimer, Cart } from "./components";

  import About from "./pages/About.svelte";
  import Home from "./pages/Home.svelte";
  import Coffee from "./pages/Coffee.svelte";

  import { Router, Link, Route } from "svelte-routing";
  export let name = "Guest";

  import { setContext } from "svelte";

  let loggedIn;

  if (name === "Guest") {
  	loggedIn = false;
  } else {
  	loggedIn = true;
  }

  setContext('key', {loggedIn})
</script>

<style>

</style>

<Header {name}/>
<Router>
  <nav>
    <Link to="/">Home</Link>
    <Link to="/products">Shop</Link>
    <Link to="/about">Our Story</Link>
    <Link to="/coffee">Our Coffee</Link>
    <Link to="/contact">Contact Us</Link>
  </nav>
  <Disclaimer/>
  <main>
    <Route path="/"><Home/></Route>
    <Route path="products"><Products /></Route>
    <Route path="about"><About /></Route>
    <Route path="coffee"><Coffee /></Route>
    <Route path="contact"><Contact /></Route>
    <Route path="/product/:id"><Product/></Route>
  </main>
</Router>
<Footer />