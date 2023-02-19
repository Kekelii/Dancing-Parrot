<script>
  import Main from "$lib/episodes-body/main.svelte";
  import { episode,seasonOne,seasonTwo,seasonThree } from "$lib/episodeStores";
  import Large from "$lib/navigations/large.svelte";
  import MobileNavigation from "$lib/navigations/mobileNavigation.svelte";
  import { onMount } from "svelte";
  
  /**
   * @type {any}
   */
   export let data
  /**
   * @type {string | any[]}
   */
  let collection;

  let seasonOneEpisodes=30;
  let  seasonTwoEpisodes=40;
 

  
  /**
   * @type {any[]}
   */
  let seasonCollection=[]


episode.subscribe(n=>{
  // collection = n
})


  

function episodeSort(){ 

     if (collection && collection.length >= seasonOneEpisodes + seasonTwoEpisodes) {
    
      for (let i = 0; i < collection.length; i++) {
        seasonCollection.push(collection[i]);
        if (i === seasonOneEpisodes) {
          seasonOne.set(seasonCollection);
        
          seasonCollection = [];
        }
        if (i === seasonTwoEpisodes) {
          seasonTwo.set(seasonCollection);
  
          seasonCollection = [];
        }
        if (i === collection.length - 1) {
          seasonThree.set(seasonCollection);
        }
      }
    }

}

</script>


  <MobileNavigation/>
  <Large/>
  <Main data={data}/>

