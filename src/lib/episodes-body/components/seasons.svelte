<script>
  import EpisodeContainer from "./episode-container.svelte";
  export let seasonnumber = 1;

</script>
<div class=" mt-14">
    <p class="uppercase text-4xl font-light ml-5 leading-10 tracking-wide inline-block ">Season {seasonnumber}</p>
    <div class="episodes mt-5 flex flex-wrap  md:gap-0 gap-2 p-1 justify-around md:justify-start">
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/> <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>
        <EpisodeContainer/>

    </div>
</div>

<style>
    p{
        font-family: bison;
    }
</style>