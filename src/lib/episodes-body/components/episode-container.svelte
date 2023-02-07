<script>
    export let episodenumber=15;
    export let date= '25th november 2025'
</script>
<div class="container p-0 md:w-48 md:h-40 md:m-5 w-28 h-24 rounded-md shrink-0">
    <div class="info mt-5 md:mt-12">
        <p class='text-right w-4/5'>Episode Name</p>
        <p class='uppercase text-sm text-right w-4/5 font-light leading-4 tracking-wide  inline-block '>episode {episodenumber}</p>
        <div class=" flex text-base uppercasetext-right  w-full justify-around md:w-4/5 md:justify-end">
            <img src="/generalIcons/calender.svg" class='w-4 h-4 mr-2' alt="calandericon"/>
            <p class="date p-0">{date}</p>
        </div>
    </div>
</div>
<style>
    .container{
        background: #FFF59F;
        font-family: bison;
    }
    .date{
        font-size: 10px;
    }
</style>