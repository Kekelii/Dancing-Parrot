/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('miniDb/cleaned_Data.json');
    let item = await res.json();
    /**
     * @type {never[]}
     */
    let episodeData = []
    let reversedEpisodes = item.data.reverse()
    let count = 1;
    // @ts-ignore
    reversedEpisodes.forEach(element => {

        element.episodeNumber = count
            // @ts-ignore
        episodeData.push(element)
        count++;
    });

    return { episodeData };
}