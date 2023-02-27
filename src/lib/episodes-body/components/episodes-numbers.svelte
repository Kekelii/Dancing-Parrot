<script>
  import { episode } from "$lib/episodeStores";
  import { onDestroy } from "svelte";
  import { fly } from "svelte/transition";

    export let episodenumber=0;
    const unsubscribe = episode.subscribe(n=>episodenumber=n.number )
    onDestroy(unsubscribe)
</script>
<p in:fly="{{x:2000}}"  class=" pl-7 text-3xl md:text-right md:pr-10 uppercase tracking-wide pt-3"> EPISODE {episodenumber} </p>
<style>
    p{
        font-family: bison;
        color:#c08e0b;
    }
</style>