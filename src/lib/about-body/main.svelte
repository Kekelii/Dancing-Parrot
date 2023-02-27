<script>
  import Footer from "$lib/home-body/components/footer.svelte";
  import AboutLogo from "./components/about-logo.svelte";
  import Header from "./components/header.svelte";
  import Writeup from "./components/writeup.svelte";

</script>
<div class="container mx-auto p-0">
    <Header/>
<div class='md:flex md:justifty-between'>
    <Writeup/>
    <AboutLogo/>
</div>
</div>
<div class='mt-16'>
   <Footer/>
</div>