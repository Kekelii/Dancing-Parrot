<script>
// @ts-nocheck
  import EpisodeContainer  from "./episode-container.svelte";
  import { fly } from "svelte/transition";
  import { circIn, sineIn } from "svelte/easing";
  
  export let seasonnumber = 1;
  export let data

</script>
<div in:fly="{{y:300,duration:2000,delay:200}}"  class="mt-14 md:mt-20">
    <p class="uppercase text-4xl font-light leading-10 tracking-wide inline-block mb-5  ml-5 ">Season {seasonnumber}</p>
    <div class="ml-4 m-auto episodes flex flex-wrap gap-4 p-1 justify-start md:gap-0 md:justify-start">
        {#each data as episode }
        <EpisodeContainer season={seasonnumber} date={episode.date} title={episode.title} links={episode.links} episodeNumber={episode.episodeNumber}/>   
        {/each}
    </div>
</div>

<style>
    p{
        font-family: bison;
    }
</style>