<script>
// @ts-nocheck
    $:mobileNavigationState = false
    $:subscriberButtonState = false
   
    let mobileNavigation;
    let instagramFollowing , youtubeSubscription , twitterFollowing;

    function navigationStateController(){
        if(mobileNavigationState){
             // @ts-ignore
             gsap.to(mobileNavigation,{x:150,duration:0.3})
             subscriberButtonState? subscriberButtonStateController():""
             setTimeout(()=>{
                mobileNavigationState = false
                
             },100)
            return
        }
           // @ts-ignore
           gsap.fromTo(mobileNavigation,{x:40},{x:4,duration:1,ease: "bounce.out"})
           mobileNavigationState = true   
    }
    function subscriberButtonStateController(){
        if(!subscriberButtonState){
      subscriberButtonState = true
            // @ts-ignore
                gsap.from(instagramFollowing,{
                    opacity:0.1,
                    yoyo:true,
                    ease: "elastic", 
                    duration:0.7,
                    y:20,
                    delay:0.1
                })  
                // @ts-ignore
                    gsap.from(twitterFollowing,{
                    y:30,
                    yoyo:true,
                    opacity:0.1,
                    ease: "elastic",  
                    duration:0.7,
                    delay:0.2
                })
                    // @ts-ignore
                    gsap.from(youtubeSubscription,{
                    y:30,
                    yoyo:true,
                    opacity:0.1,
                    ease: "elastic",  
                    duration:0.7,
                    delay:0.3
                })
            
                return
        }
                subscriberButtonState=false
    }
</script>
<div class="container mx-auto md:hidden w-screen h-24 flex justify-between items-center drop">
    <img src="/logo/logo.png" alt="logo" class="w-14 h-14 ml-5 rounded-lg">
    <button on:click={navigationStateController} class=" h-12 w-10"><img src="/buttonIcons/navButton.png" alt="navigation button"/></button>
</div>
<div  class:hidden={!mobileNavigationState} bind:this={mobileNavigation} class="mobileNavigation md:hidden absolute ml-36 opacity-90 w-52"  >
    <ul class='flex flex-col text-lg'>
        <a href="/" class='flex justify-center'><button class="h-12 p-5"><li>HOME</li></button></a>
        <a href="/Episodes" class='flex justify-center'>  <button class="h-12 P-5"><li>EPISODES</li></button></a>
        <a href="/Tribe" class='flex justify-center'> <button class="h-12 P-5"><li>THE TRIBE</li></button></a>
        <a href="About" class='flex justify-center'>  <button class="h-12 P-5"><li>ABOUT</li></button></a>
        <!-- <a href="/Store" class='flex justify-center'>  <button class="h-12 P-5"><li>STORE</li></button></a> -->
        <button class="h-12 m-2 rounded-lg subscribe" on:click={subscriberButtonStateController}>SUBSCRIBE</button>
        <li class:hidden={!subscriberButtonState} class=" w-full h-14  items-center justify-around subscribtionChannels flex">
            <a href="https://www.youtube.com/channel/UCGFnofILLEcUTy2s6hc1xCA/?sub_confirmation=1" target="_blank" rel="noopener noreferrer" class="ml-5" bind:this={youtubeSubscription}><img src="/generalIcons/youtube.svg" alt="youtubesubscribe"  ></a>
            <a href="https://twitter.com/kasa_theTribe" target="_blank" rel="noopener noreferrer" class="ml-5" bind:this={twitterFollowing}><img src="/generalIcons/twitter.svg" alt="twitter" srcset=""></a>
            <a href="https://www.instagram.com/kasa_thetribe/" target="_blank" rel="noopener noreferrer" class="ml-5" bind:this={instagramFollowing}><img src="/generalIcons/instagram.svg" alt="instagram" srcset=""></a>
        </li>
    </ul>
</div>
    <style>
        .subscribe{
            background-color: #c08e0b;
        }
        ul{
            font-family: Bison;
        }
        .mobileNavigation{
        background: linear-gradient(180deg, #FFFFFF 0%, #FFFACB 100%);

        }
    </style>