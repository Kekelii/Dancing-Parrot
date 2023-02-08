<script>
  import { onMount } from "svelte";




    $:state = false
    $:subscriberButton = false
    /**
   * @type {HTMLDivElement}
   */
    let dropdown;
    /**
   * @type {HTMLAnchorElement}
   */
    let instagramChannel , youtubeChannel , twitterChannel;

 
   function open(){
        if(state){
             // @ts-ignore
             gsap.to(dropdown,{x:150,duration:1})

             subscriberButton? subscriberButtonClick():""
             
            setTimeout(()=>{
                state = false
                
            },1000)
            return
        }
    
           // @ts-ignore
           gsap.fromTo(dropdown,{x:40},{x:4,duration:2,ease: "bounce.out"})
           state = true
          
    }
    function subscriberButtonClick(){
        if(!subscriberButton){
      subscriberButton = true
            // @ts-ignore
                gsap.from(instagramChannel,{
                    opacity:0.1,
                    yoyo:true,
                    ease: "elastic", 
                    duration:0.7,
                    y:20,
                    delay:0.1
                })  
                // @ts-ignore
                    gsap.from(twitterChannel,{
                    y:30,
                    yoyo:true,
                    opacity:0.1,
                    ease: "elastic",  
                    duration:0.7,
                    delay:0.2
                })
                    // @ts-ignore
                    gsap.from(youtubeChannel,{
                    y:30,
                    yoyo:true,
                    opacity:0.1,
                    ease: "elastic",  
                    duration:0.7,
                    delay:0.3
                })
            
                return
        }
         
                subscriberButton=false
    }

</script>

<div class=" md:hidden w-screen h-24 flex justify-between items-center drop">
    <img src="/logo/logo.png" alt="logo" class="w-14 h-14 ml-5 rounded-lg">
    <button on:click={open} class=" h-12 w-10"><img src="/buttonIcons/navButton.png" alt="navigation button"/></button>
</div>

<div  class:hidden={!state} bind:this={dropdown} class="dropdown md:hidden absolute ml-36 opacity-90 w-52"  >
    <ul class='flex flex-col text-lg'>
        <a href="/" class='flex justify-center'><button class="h-12 p-5"><li>HOME</li></button></a>
        <a href="/Episodes" class='flex justify-center'>  <button class="h-12 P-5"><li>EPISODES</li></button></a>
        <a href="/Tribe" class='flex justify-center'> <button class="h-12 P-5"><li>THE TRIBE</li></button></a>
        <a href="About" class='flex justify-center'>  <button class="h-12 P-5"><li>ABOUT</li></button></a>
        <a href="/Store" class='flex justify-center'>  <button class="h-12 P-5"><li>STORE</li></button></a>
        <button class="h-12 m-2 rounded-lg subscribe" on:click={subscriberButtonClick}>SUBSCRIBE</button>
        <li class:hidden={!subscriberButton} class=" w-full h-14  items-center justify-around subscribtionChannels flex">
            <a href="http://" target="_blank" rel="noopener noreferrer" class="ml-5" bind:this={youtubeChannel}><img src="/generalIcons/youtube.svg" alt="" srcset="" ></a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="ml-5" bind:this={twitterChannel}><img src="/generalIcons/twitter.svg" alt="" srcset=""></a>
            <a href="http://" target="_blank" rel="noopener noreferrer" class="ml-5" bind:this={instagramChannel}><img src="/generalIcons/instagram.svg" alt="" srcset=""></a>
        </li>
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