<script>
  import { fade } from "svelte/transition";
  import { Splide, SplideSlide } from '@splidejs/svelte-splide';
  import '@splidejs/svelte-splide/css';
</script>

<div in:fade="{{duration:2000,delay:200}}" class='w-2/2  md:w-1/2 md:shrink-0 md:flex md:flex-col md:items-center'>
<p class="w-4/5 m-auto  text-sm md:text-lg md:w-full md:m-0">A livestream podcast where very little is 'off topic'. #unscripted #the_Tribe #vibes</p> 
<p class="w-4/5 m-auto text-xs md:text-sm mt-2 md:mt-0  mb-2 md:m-0 md:w-full bannerwriteup">Tune in to our weekly livestreams on Facebook and Youtube on Sundays at 7pm GMT.<br>
 <span class="text-black italic cursor-pointer"><a href="https://anchor.fm/kasathetribe">And find</a> </span> us in all podcast directories 
</p>
  <Splide class="hidden md:block"  options={{rewind: true,gap:'2rem',autoplay:true,pauseOnHover:true}}>
    <SplideSlide>
       <a href="https://www.youtube.com/@kasapodcast"><img src="/logo/home banner.jpeg" alt="kasaYoutube"></a> 
    </SplideSlide>
    <SplideSlide>
     <a href="https://www.youtube.com/watch?v=JJffM59fFPw"><img src="/banner/anaansestory.jpeg" alt="kasaYoutube"></a> 
    </SplideSlide>
   <SplideSlide>
       <a href="https://youtu.be/udCzkkm1NMg"><img src="/banner/waakye.jpeg" alt="kasaYoutube"></a> 
       </SplideSlide>
</Splide>
</div> 
<style>
  .bannerwriteup{
    color:#C08E0B
  }
</style>