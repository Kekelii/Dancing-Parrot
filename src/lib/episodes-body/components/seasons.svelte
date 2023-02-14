<script>
// @ts-nocheck

  import EpisodeContainer  from "./episode-container.svelte";
  export let seasonnumber = 1;

</script>
<div class=" mt-14">
    <p class="uppercase text-4xl font-light leading-10 tracking-wide inline-block mb-5  ml-5 ">Season {seasonnumber}</p>
    <div class="episodes flex flex-wrap gap-2 p-1 justify-evenly md:gap-0 md:justify-evenly">
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
         <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>
        <EpisodeContainer season={seasonnumber}/>

    </div>
</div>

<style>
    p{
        font-family: bison;
    }
</style>