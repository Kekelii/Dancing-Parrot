<script>
  import StreamPlatforms from "$lib/home-body/components/stream-platforms.svelte";


    export let season = 3;
    export let date= '25th november 2025'
    export let links={spotify:'',googlePodcast:'',applePodcast:''}
    export let title='test';
    export let episodeNumber=5;
</script>
<div class="episode md:w-72 md:h-56 md:m-2 w-44  h-56 rounded-md shrink-0">
    <span class='absolute  text-9xl ml-28 md:ml-56 opacity-10 '>{season}</span>

    <div class="info h-full">
        <div class='title ml-2 h-3/5 md:h-3/5 p-1   text-slate-900  flex items-center md:mt-3 font-semibold text-xs md:text-sm'>{title}</div>
        <p class='uppercase text-sm inline-block pl-2 w-4/5 font-light leading-4 tracking-wide'>episode {episodeNumber}</p>
        <div class=" flex  text-base uppercasetext-right  pl-2 w-full md:w-4/5 md:justify-start">
            <img src="/generalIcons/calender.svg" class='w-4 h-4 mr-2' alt="calandericon"/>
            <p class="date p-0 inline-block">{date}</p>
        </div>
        <div class='flex justify-around items-center p-1'>
    <a href={links.spotify} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/spotify.svg" class="md:h-5 h-4 " alt="spotify"/></a>
    <a href={links.applePodcast} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/apple.svg" class="md:h-5 h-4" alt="spotify"/></a>
    <a href={links.googlePodcast} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/google.svg" class="md:h-5 h-4" alt="spotify"/></a>
    <!-- <a href={spotify} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/pocketcast.png" class="md:h-5 h-4" alt="spotify"/></a>
    <a href={spotify} target="_blank" class='inline' rel="noopener noreferrer"><img src="/generalIcons/radiopublic.png" class="md:h-5 h-4" alt="spotify"/></a> -->
     
        </div>
    </div>
</div>
<style>
    .episode{
        background: #f5e981;
        font-family: bison;
    }

    .date{
        font-size: 10px;
    }
    .title{
        font-family: 'Lora', serif;
    }
</style>