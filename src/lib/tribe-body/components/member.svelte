<script>
    export let memberData = {
        name:"",
        facebook:'',
        twitter:'',
        instagram:'',
        linkedIn:'',
        image:''
    }

    console.log(
        memberData.linkedIn 
    )
   
</script>

<div class="flex flex-col justify-between  h-48 w-40 md:w-64 md:h-80 md:mt-10  p-3 uppercase mb-3">
    <div class="image h-4/5  border"><img src="tribemembers/{memberData.image}" alt="{memberData.name} profile" class="w-full h-full"></div>
    <div class="info">
        <p class=" ml-2 text-sm md:text-xl antialiased md:mt-5 text-center">{memberData.name}</p>
    </div>
    <div class="socials mt-2 md:mt-5 flex justify-around items-center">
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