export { matchers } from './matchers.js';

export const nodes = [() => import('./nodes/0'),
	() => import('./nodes/1'),
	() => import('./nodes/2'),
	() => import('./nodes/3'),
	() => import('./nodes/4'),
	() => import('./nodes/5'),
	() => import('./nodes/6'),
	() => import('./nodes/7'),
	() => import('./nodes/8'),
	() => import('./nodes/9'),
	() => import('./nodes/10')];

export const server_loads = [];

export const dictionary = {
	"/": [6],
	"/About": [7,[2]],
	"/Episodes": [8,[3]],
	"/Store": [9,[4]],
	"/Tribe": [10,[5]]
};

export const hooks = {
	handleError: (({ error }) => { console.error(error) }),
};