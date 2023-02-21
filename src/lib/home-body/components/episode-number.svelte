<script>
  import { fade,fly } from 'svelte/transition';
     import {episode} from '../../episodeStores'

     let EpisodeNumber = 0;
     episode.subscribe(value=>EpisodeNumber = value.number)
</script>
<p in:fly='{{x:200,duration:900}}' class="pl-7 text-2xl uppercase text-red-600">Hottest</p>
<p in:fade="{{duration:1000}}" class=" md:shrink-0 inline-block pl-7 text-2xl uppercase tracking-wide pt-1">EPISODE {EpisodeNumber}</p>


<style>
    p{
        font-family: bison;
      
    }
</style>