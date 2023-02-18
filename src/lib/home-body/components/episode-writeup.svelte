<script>
     import {episode} from '../../episodeStores'
    
    export let writeup ="Lorem ipsum dolor sit amet, consectetur adipiscing elit  Ut ut aliquet purus. Pellentesque lorem lacus, commodo eu scelerisque a, aliquet et ligula. Aliquam ut interdum nulla.Phasellus non congue ante. Sed rhoncus a purus sit amet dictum. Vivamus et nibh neque. Aliquam feugiat quis elit ac congue."
    episode.subscribe(value=>writeup = value.description)

</script>
<div class="scrollbar-hidden  w-5/5  h-80 ml-5 text-xs font-bold tracking-wide text-left  mt-2 overflow-y-auto md:w-5/5  md:h-44 ">
    {writeup}
</div>
