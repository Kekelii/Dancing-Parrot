<script>
  import { fade } from "svelte/transition";

   export let seasons = 3
</script>

    <p in:fade="{{duration:2000}}" class="text-5xl font-light md:text-right md:pr-10 tracking-wider uppercase inline-block pl-7">{seasons} seasons</p>
<style>
    p{
        font-family: bison;  
    }
</style>