<script>
// @ts-nocheck

  import Footer from "$lib/home-body/components/footer.svelte";
import EpisodesNumbers from "./components/episodes-numbers.svelte";
import Header from "./components/header.svelte";
  import Seasons from "./components/seasons.svelte";

</script>
<div class="container mx-auto mt-16 flex flex-col">
  <div class='flex flex-col  md:h-56'>
    <Header/>
    <EpisodesNumbers/>
    <img src="/banner/episodesBanner.jpeg" class='h-24 ml-64 absolute md:ml-0 opacity-70  md:h-2/5 md:absolute ' alt="">
  </div>
    
    <Seasons seasonnumber=3/>
    <Seasons seasonnumber=2/>
    <Seasons seasonnumber=1/>
</div>
<Footer/>