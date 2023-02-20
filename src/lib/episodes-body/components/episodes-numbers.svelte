<script>
  import { fly } from "svelte/transition";


    export let data=0;

    
</script>

<p in:fly="{{x:2000}}"  class="inline-block pl-7 text-3xl md:text-right md:pr-10 uppercase tracking-wide pt-3">{data} EPISODE </p>


<style>
    p{
        font-family: bison;
      
    }
</style>