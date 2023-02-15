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

<div class="flex flex-col justify-around rounded-sm shadow-lg h-72 w-2/5  pb-2  md:w-72 md:h-96 md:p-5 md:mt-10 uppercase mb-3  md:shadow-lg md:rounded-xl"> 
    <div class=" h-4/5  shrink-0">
        <img src="tribemembers/{memberData.image}" alt="{memberData.name}'s' profile" class="object-center h-full w-full">
    </div>
   
        <span class="w-full  p-0 text-sm md:text-xl  md:text-center text-center">{memberData.name}</span>
  
    <div class="socials mt-2 flex justify-start gap-5   items-center md:mt-5 ">
       <a  href={memberData.instagram} class:hidden={memberData.instagram ==='false'}><img src="/generalIcons/instagram.svg" alt="instagram"></a> 
       <a href={memberData.twitter} class:hidden={memberData.twitter ==='false'}><img src="/generalIcons/twitter.svg" alt="twitter"></a>
        <a href={memberData.facebook} class:hidden={memberData.facebook ==='false'}><img src="/generalIcons/facebook.svg" alt="facebook"></a>
        <a href={memberData.linkedIn} class:hidden={memberData.linkedIn=='false'}><img src="/generalIcons/linkedin.svg" alt="linkedIn"></a>
    </div>
</div>

<style>
   span{
    font-family: 'Bison', sans-serif;
                                                
       }
</style>