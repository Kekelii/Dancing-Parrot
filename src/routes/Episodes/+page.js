import { seasonThree } from '$lib/episodeStores';

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('miniDb/cleaned_Data.json');
    let item = await res.json();




    let seasonOneEpisodes = 30;
    let seasonTwoEpisodes = 40;

    /**
     * @type {any[]}
     */
    let episodeData = []
    let seasonCollection = []
    let seasonOne
    let seasonTwo
    let seasonThree
    let reversedEpisodes = item.data.reverse()
    let episodeTotal;
    let count = 1;
    // @ts-ignore
    reversedEpisodes.forEach(element => {

        element.episodeNumber = count
            // @ts-ignore
        episodeData.push(element)
        count++;
    });
    episodeTotal = reversedEpisodes.length

    for (let i = 0; i < reversedEpisodes.length; i++) {
        seasonCollection.push(reversedEpisodes[i]);
        if (i === seasonOneEpisodes - 1) {
            seasonOne = seasonCollection
            seasonOne.reverse()
            seasonCollection = [];

        }
        if (i === seasonOneEpisodes + seasonTwoEpisodes - 1) {
            seasonTwo = seasonCollection
            seasonTwo.reverse()
            seasonCollection = [];

        }
        if (i === reversedEpisodes.length - 1) {
            seasonThree = seasonCollection
            seasonThree.reverse()
        }
    }




    return { seasonOne, seasonTwo, seasonThree, episodeTotal };
}