<script>
     import {episode} from '../../episodeStores'

   /**
   * @type {any}
   */
    export let data;
  
    function stage(){
         episode.set({
            title:data.title,
            number:data.episodeNumber,
            date:data.date,
            description:data.descriptions,
            appleLink:data.links.applePodcast,
            googleLink:data.links.googlePodcast,
            spotifyLink:data.links.spotify
         })
    }
 
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<li on:click={stage} class="cursor-pointer h-12 md:h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">E{data.episodeNumber}</li>
   <style>
     li{
        background-color: #c08e0b;
    }
   </style>