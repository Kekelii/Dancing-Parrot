<script>
    export let memberData = {
        name:"",
        facebook:'',
        twitter:'',
        instagram:'',
        linkedIn:'',
        image:''
    }

   
   
</script>

<div class="flex flex-col justify-between  h-72 w-1/2 p-3 md:w-72 md:h-96 md:p-5 md:mt-10 uppercase mb-3  md:shadow-lg">
   
    <div class=" h-4/5  shrink-0">
        <img src="tribemembers/{memberData.image}" alt="{memberData.name}'s' profile" class="object-center h-full w-full">
    </div>
    <div class="info ">
        <p class=" ml-2 text-base md:text-xl antialiased  text-center">{memberData.name}</p>
    </div>
    <div class="socials mt-2 flex justify-start gap-5   items-center md:mt-5 ">
       <a  href={memberData.instagram} class:hidden={memberData.instagram ==='false'}><img src="/generalIcons/instagram.svg" alt="instagram"></a> 
       <a href={memberData.twitter} class:hidden={memberData.twitter ==='false'}><img src="/generalIcons/twitter.svg" alt="twitter"></a>
        <a href={memberData.facebook} class:hidden={memberData.facebook ==='false'}><img src="/generalIcons/facebook.svg" alt="facebook"></a>
        <a href={memberData.linkedIn} class:hidden={memberData.linkedIn=='false'}><img src="/generalIcons/linkedin.svg" alt="linkedIn"></a>
    </div>
</div>

<style>
   p{
        font-family: bison;
        
    }
</style>