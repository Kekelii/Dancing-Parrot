<script>
  import { fade } from 'svelte/transition';
    import {episode} from '../../episodeStores'
     let spotify='#'
    let apple ='#'
    let google ='#'

    episode.subscribe(data=>{
        spotify = data.spotifyLink
        apple = data.appleLink
        google = data.googleLink
    })
</script>
<hr class='pt-2 container '>
<p  in:fade="{{duration:1000}}" class="h-5 w-32 ml-5  mt-5 text-sm font-bold ">Listen Now</p>
<div in:fade="{{duration:1000,delay:310}}" class="container w-screen md:w-1/2 flex justify-around items-center h-8 mt-4">
    <a href={spotify} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/spotify.svg" alt="spotify" class='w-10'/></a>
    <a href={apple} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/apple.svg" alt="apple" class='w-10'/></a>
    <a href={google} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/google.svg" alt="spotify" class="w-10"/></a>
</div>
