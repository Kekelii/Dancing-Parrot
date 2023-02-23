<script>
  import { fade } from "svelte/transition";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';



</script>
<div class='w-2/2 hidden md:w-1/2 md:shrink-0 md:flex md:justify-center md:items-center'>
<Splide   options={ {
    rewind: true,
    gap   : '2rem',
    autoplay:true,
    pauseOnHover:true
  } }>
    <SplideSlide>
       <a href="http://"><img src="/logo/home banner.jpeg" alt="kasaYoutube"></a> 
    </SplideSlide>
    <SplideSlide>
        <a href="http://"><img src="/banner/waakye.jpeg" alt="kasaYoutube"></a> 
     </SplideSlide> <SplideSlide>
        <a href="http://"><img src="/banner/anaansestory.jpeg" alt="kasaYoutube"></a> 
     </SplideSlide>
</Splide>
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