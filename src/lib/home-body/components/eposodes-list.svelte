<script>
// @ts-nocheck
import { onMount } from "svelte";
import { tweened,} from 'svelte/motion';
import { cubicInOut, cubicOut} from 'svelte/easing';
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
<div class="w-screen  h-20 mt-5 md:mt-0 md:justify-around flex items-center ">
   <!-- svelte-ignore a11y-click-events-have-key-events -->
   <!-- <div on:click={snapleft} class="left-arrow w-8 h-8 bg-white absolute rounded-full flex items-center justify-center" ><img src="/generalIcons/left arrow.png" alt="arrow"></div> -->
   <ul bind:this={list}  class='w-full md:w-4/5 h-20 flex uppercase items-center overflow-x-auto scroll-smooth' >
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e17</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
    <li class="h-16 shrink-0 rounded-md w-24 flex  ml-2 mr-2 justify-center items-center text-xl">e15</li>
   
</ul>
<!-- svelte-ignore a11y-click-events-have-key-events -->
<div  on:click={snap} class="left-arrow  w-8 h-8 bg-white  rounded-full flex items-center justify-center"><img src="/generalIcons/right arrow.png" alt="arrow"></div>

</div>
<style>
    li{
        background-color: #FEDF6F;
    }
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