<script>
  import Main from "$lib/home-body/main.svelte";
  import Large from "$lib/navigations/large.svelte";
import MobileNavigation from "$lib/navigations/mobileNavigation.svelte";
/**
   * @type {any}
   */
 export let data;

    data = data.episodeData.reverse()
</script> 
<MobileNavigation/>
<Large/>
<Main data= {data}/>