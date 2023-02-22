<script>

  import { fade } from "svelte/transition";

</script>

<div in:fade="{{duration:2000 ,delay:100}}" class="container w-full">
<p class=" w-full  p-1 md:w-full mt-14 text-base font-bold tracking-wide break-words text-left">
    Welcome to the Kasa Podcast, where The Tribe comes together 
    to discuss social issues and explore the issues that matter most 
    to our community. Our unscripted conversations cover a wide range of topics,
     from politics and culture to personal growth and beyond. Tune in for a weekly 
     dose of insightful commentary, thoughtful discussion, and good vibes.
   </p>
   <p class=" w-full p-1 md:w-full  text-base font-bold tracking-wide text-left break-words">
    Our hosts are a diverse group of individuals with different backgrounds and 
    perspectives, but we share a passion for social justice and creating positive change in 
    the world. Join us on our journey to promote empathy, understanding, and dialogue.   
   </p >
   <p class=" w-full p-1 md:w-full text-base font-bold tracking-wide text-left break-words">
    Follow us on social media for updates on our latest episodes, behind-the-scenes footage,
    and exclusive content. Don't forget to subscribe to our podcast on your favorite platform to stay up-to-date on our latest discussions.
   </p>
</div>
<style>
    p{
        font-family: 'Lora', serif;
        
    }
</style>