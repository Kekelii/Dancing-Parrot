<script>
  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
    import {episode} from '../../episodeStores'
     
    
    let spotify='#'
    let apple ='#'
    let google ='#'

    const unsubscribe = episode.subscribe(n=>{
        console.log(n)
        spotify = n.links.spotify;
        apple = n.links.applePodcast;
        google = n.links.googlePodcast; 
    })

   
    onDestroy(unsubscribe)
</script>
<!-- <div class="pt-1 container md:hidden ">
    <hr class='pt-1  md:hidden '>
</div> -->
<p  in:fade="{{duration:1000}}" class="h-10 w-32 ml-5  mt-1 md:mt-0 text-sm font-bold ">Listen Now</p>
<div in:fade="{{duration:1000,delay:310}}" class=" container w-screen md:w-1/2 flex justify-around items-center h-5 mt-1">
    <a href={spotify} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/spotify.svg" alt="spotify" class='w-10 h-7'/></a>
    <a href={apple} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/apple.svg" alt="apple" class='w-10 h-7' /></a>
    <a href={google} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/google.svg" alt="spotify" class="w-10 h-7"/></a>
</div>
