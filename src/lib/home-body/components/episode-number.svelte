<script>
     import {episode} from '../../episodeStores'

     let EpisodeNumber =0;
     episode.subscribe(value=>EpisodeNumber = value.number)
</script>

<p class=" md:shrink-0 inline-block pl-7 text-2xl uppercase tracking-wide pt-1">EPISODE {EpisodeNumber}</p>


<style>
    p{
        font-family: bison;
      
    }
</style>