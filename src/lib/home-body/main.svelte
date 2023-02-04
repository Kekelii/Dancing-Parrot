<script>
  import EoisodeDate from "./components/eoisode-date.svelte";
  import EpisodeAttendantContainer from "./components/episode-attendant-container.svelte";
import EpisodeNumber from "./components/episode-number.svelte";
import EpisodeTitle from "./components/episode-title.svelte";
  import EpisodeWriteup from "./components/episode-writeup.svelte";
  import EposodesList from "./components/eposodes-list.svelte";
  import Footer from "./components/footer.svelte";
  import StreamPlatforms from "./components/stream-platforms.svelte";

</script>


<div class="container mt-16 flex flex-col">
    <EpisodeTitle/>
    <EpisodeNumber/>
    <EoisodeDate/>
    <EpisodeWriteup/>
    <EpisodeAttendantContainer/>
    <StreamPlatforms/>
    <EposodesList/>
    <Footer/>
</div>