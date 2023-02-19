<script>
  import Main from "$lib/episodes-body/main.svelte";
  import { seasonOne,seasonTwo,seasonThree } from "$lib/episodeStores";
  import Large from "$lib/navigations/large.svelte";
  import MobileNavigation from "$lib/navigations/mobileNavigation.svelte";
  import { onMount } from "svelte";
  
  /**
   * @type {string | any[]}
   */
   export let data;

  let seasonOneEpisodes=30;
  let  seasonTwoEpisodes=40;
  let test;
  /**
   * @type {any[]}
   */
  let seasonCollection=[]

  
 if(data){
 
  for(let i = 0; i < data.length ; i++){
      seasonCollection.push(data[i])
      if(i==seasonOneEpisodes){
        seasonOne.set(seasonCollection)
        console.log(seasonCollection.length)
        seasonCollection =[]
      }
      if(i=seasonTwoEpisodes){
        seasonTwo.set(seasonCollection);
        console.log(seasonCollection.length)

        seasonCollection=[]
      }
      if(i=data.length){
        seasonThree.set(seasonCollection)
        console.log(seasonCollection.length)

      }
   }

 }

</script>


  <MobileNavigation/>
  <Large/>
  <Main/>

