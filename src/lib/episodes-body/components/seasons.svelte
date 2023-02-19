<script>
// @ts-nocheck

  import EpisodeContainer  from "./episode-container.svelte";
  export let seasonnumber = 1;
  export let data

</script>
<div class=" mt-14">
    <p class="uppercase text-4xl font-light leading-10 tracking-wide inline-block mb-5  ml-5 ">Season {seasonnumber}</p>
    <div class="ml-3 episodes flex flex-wrap gap-4 p-1 justify-start md:gap-0 md:justify-start">
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