//Selector's for getting elements on the page.

const container = document.querySelector('.container');
const artistImage = document.querySelector('.artist');
const media = document.querySelector('.media');
const overlay = document.querySelector('.overlay');
const searchElem = document.querySelector('#search');

//Retrieve data from iTunes
const getContent = (search) => {
	const url = new URL('https://itunes.apple.com/search');
	const params = { term: search, media: 'musicVideo' };
	url.search = new URLSearchParams(params);
	fetch(url, { method: 'POST' }).then((results) => results.json()).then((data) => {});
};

getContent('beyonce');
