<script>
// @ts-nocheck

  import Footer from "$lib/home-body/components/footer.svelte";
import EpisodesNumbers from "./components/episodes-numbers.svelte";
import Header from "./components/header.svelte";
  import Seasons from "./components/seasons.svelte";
  import { fade } from "svelte/transition";

export let data

</script>
<div class="container mx-auto mt-16 flex flex-col">
  <div class='flex flex-col  md:h-56'>
    <Header/>
    <EpisodesNumbers data={data.episodeTotal}/>
    <img in:fade="{{duration:200}}"  src="/banner/episodesBanner.jpeg" class='h-24 ml-56 absolute md:ml-0 opacity-70 md:w-2/5 md:h-60 ' alt="episodes banner">
  </div>
    <Seasons seasonnumber=3 data={data.seasonThree}/>
    <Seasons seasonnumber=2 data={data.seasonTwo}/>
    <Seasons seasonnumber=1 data={data.seasonOne}/>
</div>
<Footer/>