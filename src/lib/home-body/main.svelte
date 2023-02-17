<script>
  import Banner from "./components/banner.svelte";
import EoisodeDate from "./components/eoisode-date.svelte";
  import EpisodeAttendantContainer from "./components/episode-attendant-container.svelte";
import EpisodeNumber from "./components/episode-number.svelte";
import EpisodeTitle from "./components/episode-title.svelte";
  import EpisodeWriteup from "./components/episode-writeup.svelte";
  import EposodesList from "./components/eposodes-list.svelte";
  import Footer from "./components/footer.svelte";
  import StreamPlatforms from "./components/stream-platforms.svelte";

</script>
<div class="container  mx-auto mt-20 p-0 flex flex-col md:flex-row md:flex-wrap md:mt-5">
    <Banner/>
    <div class="container mx-auto  second md:w-1/2  md:shrink-0 md:mb-20 md:mt-10  ">
      <EpisodeTitle/>
      <EpisodeNumber/>
    <EoisodeDate/>
    <EpisodeWriteup/>
    <EpisodeAttendantContainer/>
    <StreamPlatforms/>
   </div>
    <EposodesList/>
</div>
<Footer/>