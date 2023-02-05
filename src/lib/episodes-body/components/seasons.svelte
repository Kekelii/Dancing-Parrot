<script>
  import EpisodeContainer from "./episode-container.svelte";
  export let seasonnumber = 1;

</script>
<div class="container mt-14 border">
    <p class="uppercase text-4xl font-light ml-5 leading-10 tracking-wide inline-block ">Season {seasonnumber}</p>
    <div class="episodes mt-5 flex justify-around flex-wrap gap-1 p-1">
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