<script>
  import { fade } from "svelte/transition";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
</script>
<div in:fade="{{duration:2000,delay:200}}" class='w-2/2 hidden md:w-1/2 md:shrink-0 md:flex md:justify-center md:items-center'>
<Splide   options={{rewind: true,gap:'2rem',autoplay:true,pauseOnHover:true}}>
    <SplideSlide>
       <a href="https://www.youtube.com/@kasapodcast"><img src="/logo/home banner.jpeg" alt="kasaYoutube"></a> 
    </SplideSlide>
    <SplideSlide>
        <a href="https://youtu.be/udCzkkm1NMg"><img src="/banner/waakye.jpeg" alt="kasaYoutube"></a> 
     </SplideSlide> <SplideSlide>
        <a href="https://www.youtube.com/watch?v=sVgsKhyltbU"><img src="/banner/anaansestory.jpeg" alt="kasaYoutube"></a> 
     </SplideSlide>
</Splide>
</div> 
