<script>
// @ts-nocheck

  import { onDestroy } from 'svelte';
  import { fade } from 'svelte/transition';
  import {episode} from '../../episodeStores'
    
  export let writeup ="Lorem ipsum dolor sit amet, consectetur adipiscing elit  Ut ut aliquet purus. Pellentesque lorem lacus, commodo eu scelerisque a, aliquet et ligula. Aliquam ut interdum nulla.Phasellus non congue ante. Sed rhoncus a purus sit amet dictum. Vivamus et nibh neque. Aliquam feugiat quis elit ac congue."
   
    $:reveal=false
    let writeUpLength;
    const unsubscribe = episode.subscribe(n=> writeup = n.description.trim())
    onDestroy(unsubscribe)
    /**
   * @param {any} value
   */
    function writeUpTrimmer(value){
      if(typeof(value.writeup)=='string'){   
        writeUpLength= value.writeup.length
      return value.writeup.slice(0,400)
      }
    }
    function revealAll(){
      if(!reveal){
        reveal=true
      }else{
        reveal=false
      }
    }
</script>
<div in:fade="{{duration:2000,delay:600}}" class=" subpixel-antialiased scrollbar-hidden font-medium w-5/5  h-44 ml-5 mr-5 text-xs  md:text-sm  tracking-wider leading-relaxed text-left  mt-2 overflow-y-auto md:w-5/5   md:h-32 ">
    {#if !reveal}
        {writeUpTrimmer({writeup})}
           <button class:hidden={reveal} on:click={revealAll} class="readmore font-bold">... read more</button>
    {:else}
        {writeup}
           <button on:click={revealAll} class="readmore font-bold">... read less</button>
    {/if}
</div>
<style>
  @import url('https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@300&display=swap');
    div{
        /* font-family: 'Open Sans', sans-serif; */
        font-family: 'Lora', serif;
    }
</style>

