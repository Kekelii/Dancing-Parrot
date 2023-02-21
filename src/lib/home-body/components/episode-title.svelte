<script>
  import { fade } from 'svelte/transition';
    import {episode} from '../../episodeStores'

  
    /**
   * @type {any}
   */
    let title; 
     episode.subscribe(value=>title = value.title)
</script>

<div in:fade="{{duration:1000}}" class=" pl-7 text-3xl h-32  md:text-2xl uppercase tracking-wide pt-1 md:shrink-0  md:h-20">{title}</div>

<style>
    div{
        font-family: bison; 
    }
</style>