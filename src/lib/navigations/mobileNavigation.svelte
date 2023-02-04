<script>
  import { fade,fly } from "svelte/transition";


    $:state = false
    function open(){
        if(state){
            state = false
            return
        }
        state = true
    }
   
</script>

<div class="container w-screen h-24 flex justify-between items-center ">
    <img src="/logo/logo.png" alt="logo" class="w-14 h-14 ml-5 rounded-lg">
    <button on:click={open} class=" h-12 w-10"><img src="/buttonIcons/navButton.png" alt="navigation button"/></button>
</div>

<div  class:hidden={!state} class="dropdown absolute ml-36 opacity-90 w-52" transition:fly={{duration:200}} >
    <ul class='flex flex-col text-lg'>
        <a href="/" class='flex justify-center'><button class="h-12 p-5"><li>HOME</li></button></a>
        <a href="/Episodes" class='flex justify-center'>  <button class="h-12 P-5"><li>EPISODES</li></button></a>
        <a href="/Tribe" class='flex justify-center'> <button class="h-12 P-5"><li>THE TRIBE</li></button></a>
        <a href="About" class='flex justify-center'>  <button class="h-12 P-5"><li>ABOUT</li></button></a>
        <a href="/stores" class='flex justify-center'>  <button class="h-12 P-5"><li>STORE</li></button></a>
        <button class="h-12 m-2 rounded-lg subscribe">SUBSCRIBE</button>
    </ul>
</div>


    <style>
        .subscribe{
            background-color: #FEDF6F;
        }
        ul{
            font-family: Bison;
        }
        .dropdown{
        background: linear-gradient(180deg, #FFFFFF 0%, #FFFACB 100%);

        }
    </style>