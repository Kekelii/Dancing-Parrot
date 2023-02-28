<script>
  import Banner from "./components/banner.svelte";
  import EpisodeNumber from "./components/episode-number.svelte";
  import EpisodeTitle from "./components/episode-title.svelte";
  import EpisodeWriteup from "./components/episode-writeup.svelte";
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
  spotifyLink:firstLoad.links.spotify,
  youtubeLink:firstLoad.links.youtube
})

</script>
<div class="container  h-4/5 mx-auto mt-12 p-3 flex flex-col md:flex-row md:mt-0  md:pb-2 ">
  <Banner/>
    <div class="container mx-auto  second md:w-1/2   md:mt-10 ">
    <EpisodeNumber/> 
    <EpisodeTitle/>
    <EpisodeWriteup/> 
    <StreamPlatforms/>
   </div>
</div>
    <Footer/>
