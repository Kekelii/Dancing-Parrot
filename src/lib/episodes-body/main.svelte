<script>
// @ts-nocheck

  import Footer from "$lib/home-body/components/footer.svelte";
  import EpisodesNumbers from "./components/episodes-numbers.svelte";
  import Header from "./components/header.svelte";
  import EpisodeTitle from "./components/episode-title.svelte";
  import EpisodeWriteup from "./components/episode-writeup.svelte";
  import EpisodeDate from "./components/episode-date.svelte";
  import StreamPlatforms from "./components/stream-platforms.svelte";
  import Seasons from "./components/seasons.svelte";
  import { episode } from "$lib/episodeStores";
  import { onDestroy } from "svelte";

  export let data

   const unsubscribe = episode.set(
    {
      number:data.seasonThree[0].episodeNumber,
      title:data.seasonThree[0].title,
      description:data.seasonThree[0].descriptions,
      date:data.seasonThree[0].date,
      links:data.seasonThree[0].links
    }
   )
 


</script>

<div class="container mx-auto flex-col p-0 md:h-3/5 flex mt-5 md:flex-row justify-around items-center">
  <div class='flex flex-col md:flex-col p-3 items-start md:w-1/2 md:h-full'>   
     <EpisodesNumbers/> 
    <EpisodeTitle />      
  
    <EpisodeDate/>
    <EpisodeWriteup/>
    <StreamPlatforms/>
  </div>
  <hr class='pt-2 container md:hidden'>
  <div id="episode" class='md:h-4/5 md:w-1/2 overflow-y-auto  p-1 container mx-a\ h-32 w-full'>
        <Seasons seasonnumber=3 data={data.seasonThree}/>
        <Seasons seasonnumber=2 data= {data.seasonTwo}/>
        <Seasons seasonnumber=1 data= {data.seasonOne}/> 
  </div>
</div>
<Footer/>