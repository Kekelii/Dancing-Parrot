<script>
    export let episodenumber=15;
    export let date= '25th november 2025'
</script>
<div class="container w-28 h-24 rounded-md shrink-0">
    <div class="info mt-12">
        <p class='uppercase text-sm font-light leading-4 tracking-wide  inline-block ml-14 '>episode {episodenumber}</p>
        <div class=" flex text-base uppercase justify-end">
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