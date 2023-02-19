import { writable, derived } from "svelte/store";

let seasonOneEpisodes = 30;
let seasonTwoEpisodes = 40;


export const episode = writable()
export const seasonOne = writable()
export const seasonTwo = writable()
export const seasonThree = writable()