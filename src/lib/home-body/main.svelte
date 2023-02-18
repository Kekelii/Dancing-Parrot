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
  import {episode} from '../episodeStores'
/**
   * @type {any}
   */
 export let data;
let firstLoad = data[0]

episode.set({
  title:firstLoad.title,
  number:firstLoad.episodeNumber,
  date:firstLoad.date,
  description:firstLoad.descriptions,
  appleLink:firstLoad.links.applePodcast,
  googleLink:firstLoad.links.googlePodcast,
  spotifyLink:firstLoad.links.spotify
})

</script>
<div class="container h-4/5 mx-auto mt-12 p-0 flex flex-col md:flex-row md:mt-0 md:h-4/5 md:pb-2">
    <Banner/>
    <div class="container mx-auto  second md:w-1/2   md:mt-10  ">
    <EpisodeTitle/>
    <EpisodeNumber/>
    <EoisodeDate/>
    <EpisodeWriteup/> 
    <!-- <EpisodeAttendantContainer/> -->
    <StreamPlatforms/>
   </div>
</div>
<EposodesList episodes={data}/>
<Footer/>