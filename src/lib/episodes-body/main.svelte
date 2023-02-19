<script>
// @ts-nocheck

  import Footer from "$lib/home-body/components/footer.svelte";
import EpisodesNumbers from "./components/episodes-numbers.svelte";
import Header from "./components/header.svelte";
  import Seasons from "./components/seasons.svelte";
export let data

</script>
<div class="container mx-auto mt-16 flex flex-col">
  <div class='flex flex-col  md:h-56'>
    <Header/>
    <EpisodesNumbers data={data.episodeTotal}/>
    <img src="/banner/episodesBanner.jpeg" class='h-24 ml-64 absolute md:ml-0 opacity-70  md:h-2/5 md:absolute ' alt="">
  </div>
    
    <Seasons seasonnumber=3 data={data.seasonThree}/>
    <Seasons seasonnumber=2 data={data.seasonTwo}/>
    <Seasons seasonnumber=1 data={data.seasonOne}/>
</div>
<Footer/>