<script>
// @ts-nocheck
   import { fly } from "svelte/transition";
  import EposodesList from "$lib/home-body/components/eposodes-list.svelte";

  
  export let seasonnumber = 1;
  export let data=[]

</script>
<div in:fly="{{y:300,duration:2000,delay:200}}"  class="   md:mt-20">
    <p class="uppercase md:text-4xl  font-light leading-10 tracking-wide inline-block md:mb-5 m ml-5 ">Season {seasonnumber}</p>
    <EposodesList episodes={data}/>
</div>

<style>
    p{
        font-family: bison;
    }
</style>