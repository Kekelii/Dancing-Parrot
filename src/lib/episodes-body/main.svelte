<script>
// @ts-nocheck

  import Footer from "$lib/home-body/components/footer.svelte";
import EpisodesNumbers from "./components/episodes-numbers.svelte";
import Header from "./components/header.svelte";
  import Seasons from "./components/seasons.svelte";

</script>
<div class="container mx-auto mt-16 flex flex-col">
    <Header/>
    <EpisodesNumbers/>
    <Seasons seasonnumber=3/>
    <Seasons seasonnumber=2/>
    <Seasons seasonnumber=1/>
</div>
<Footer/>