<script>
  import { fade } from "svelte/transition";



</script>
<div in:fade="{{duration:1000, delay:200}}"  class="text-5xl    hidden md:w-1/2 md:shrink-0 font-light tracking-wider uppercase pl-7 md:flex justify-center items-center md:mt-0">
    <div class=" shadow  flex justify-center border   banner  md:w-full md:h-4/5 rounded">
        <img src="/logo/home banner.jpeg" alt="" class="z-10  md:w-5/5 md:h-5/5 ">
    </div>
</div>

<style>
  
    /* p{
        font-family: bison;
        color: #F1CD0C;
    } */
    .banner{
        background: linear-gradient(180deg, #ffffff 0%, #e2dfb1 100%);
        box-shadow: 5px 5px 5px 5px rgb(119, 117, 117) inset;
    }
</style>