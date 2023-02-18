<script>
// @ts-nocheck
import { onMount } from "svelte";
import { tweened,} from 'svelte/motion';
import { cubicInOut, cubicOut} from 'svelte/easing';
  import EpisodeListTile from "./episode-list-tile.svelte";
  import { each } from "svelte/internal";

export let episodes
        

  /**
   * @type {HTMLUListElement}
   */
  let list
  
    let progress = tweened(1000,{
        duration:900,
        easing:cubicInOut
    })
    



    //snap function
    function snap(){
        list.scrollLeft+=$progress
       progress.set(900)
    }

</script>

<!-- svelte-ignore non-top-level-reactive-declaration -->
<div class="container mx-auto  h-20 mt-5 md:mt-5 md:justify-around flex items-center ">
   <!-- svelte-ignore a11y-click-events-have-key-events -->
   <!-- <div on:click={snapleft} class="left-arrow w-8 h-8 bg-white absolute rounded-full flex items-center justify-center" ><img src="/generalIcons/left arrow.png" alt="arrow"></div> -->
   <ul bind:this={list}  class='w-full md:w-4/5 h-20 flex uppercase items-center overflow-x-auto scroll-smooth' >
   {#each episodes as episode }
    <EpisodeListTile data= {episode}/>
   {/each}
   </ul>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div  on:click={snap} class="left-arrow  w-8 h-8 bg-white  rounded-full flex items-center justify-center"><img src="/generalIcons/right arrow.png" alt="arrow"></div>

</div>
<style>
   
    /* Hide scrollbar for Chrome, Safari and Opera */
ul::-webkit-scrollbar {
    display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
ul {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
}
</style>