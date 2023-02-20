<script>
  import { fade } from 'svelte/transition';
     import {episode} from '../../episodeStores'

     let date = '25th november 2025'
     episode.subscribe(value=>date = value.date)

</script>

<div class="container pl-6 flex  text-base w-4/5 mt-3 uppercase">
<img in:fade="{{duration:1000}}"   src="/generalIcons/calender.svg" class='w-6 h-6' alt="calandericon"/>
<span in:fade="{{duration:1000,delay:20}}" class="ml-4 tracking-widest">{date}</span>
</div>

<style>
    span{
        color: #F1CD0C;
        font-family: bison;
    }
</style>