<script>
    export let episodenumber=15;
    export let season = 3;
    export let date= '25th november 2025'
</script>
<div class="episode  md:w-48 md:h-40 md:m-5 w-44  h-32 rounded-md shrink-0">
    <span class='absolute  text-9xl ml-28 opacity-10 '>{season}</span>

    <div class="info mt-5 md:mt-12">
        <p class='text-right inline-block ml-2'>Episode Name</p>
        <p class='uppercase text-sm inline-block pl-2 w-4/5 font-light leading-4 tracking-wide'>episode {episodenumber}</p>
        <div class=" flex  text-base uppercasetext-right  pl-2 w-full md:w-4/5 md:justify-start">
            <img src="/generalIcons/calender.svg" class='w-4 h-4 mr-2' alt="calandericon"/>
            <p class="date p-0 inline-block     ">{date}</p>
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
</style>