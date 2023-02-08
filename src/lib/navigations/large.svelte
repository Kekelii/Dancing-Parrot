<script>
    $:subscriberButton=false;
    let youtubeChannel,twitterChannel,instagramChannel;



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
<div class=" md:h-1/5 hidden md:flex md:pt-5  md:pb-5    justify-between items-center large">
    <img src="/logo/logo.png" alt="logo" class="w-14 h-14 ml-5  rounded-lg">
    <ul class='flex text-lg  justify-around items-center w-3/5'>
        <a href="/" class=''><button class="h-12 "><li>HOME</li></button></a>
        <a href="/Episodes" class=''>  <button class=""><li>EPISODES</li></button></a>
        <a href="/Tribe" class=''> <button class=""><li>THE TRIBE</li></button></a>
        <a href="About" class=''>  <button class=""><li>ABOUT</li></button></a>
        <a href="/Store" class=''>  <button class=""><li>STORE</li></button></a>
       <button class="h-12 w-28 rounded-lg subscribe " on:click={subscriberButtonClick}>SUBSCRIBE</button>
    </ul>
</div>
<div class='    flex justify-end '>
    <div class:hidden={!subscriberButton} class="h-14  w-60 absolute flex justify-around items-center mr-5">
        <a href="http://" target="_blank" rel="noopener noreferrer"  bind:this={youtubeChannel}><img src="/generalIcons/youtube.svg" alt="" srcset="" ></a>
        <a href="http://" target="_blank" rel="noopener noreferrer" bind:this={twitterChannel}><img src="/generalIcons/twitter.svg" alt="" srcset=""></a>
        <a href="http://" target="_blank" rel="noopener noreferrer"  bind:this={instagramChannel}><img src="/generalIcons/instagram.svg" alt="" srcset=""></a>
   </div>
</div>

<style>
  
 
    ul{
        font-family: Bison;
    }
    .subscribe{
            background-color: #FEDF6F;
        }
    
</style>