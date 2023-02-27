<script>
  import { fade } from 'svelte/transition';
  import { onDestroy } from 'svelte';
  import {episode} from '../../episodeStores'
    /**
   * @type {any}
   */
    export let title = 'test'; 
    const unsubscribe = episode.subscribe(n=> title = n.title)
     onDestroy(unsubscribe)
</script>
<div in:fade="{{duration:1000}}" class=" w-full pl-7 text-3xl h-32  md:text-2xl uppercase tracking-wide pt-1 md:shrink-0  md:h-20">{title}</div>
<style>
    div{
        font-family: bison;
    }
</style>