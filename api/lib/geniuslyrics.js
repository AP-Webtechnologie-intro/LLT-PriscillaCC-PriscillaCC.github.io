import { getLyrics, getSong } from 'genius-lyrics-api';

const options = {
	apiKey: '9qnhTrTvJ9d7tbNyFg87Eosn5Ahz05x5J_WHHdHMZog2ZGWl7w_kR4MNduJOmDwX',
	title: 'Headlines',
	artist: 'Drake',
	optimizeQuery: true
};

getLyrics(options).then((lyrics) => console.log(lyrics));

getSong(options).then((song) =>
	console.log(`${song.id} - ${song.title} - ${song.url} - ${song.albumArt} - ${song.lyrics}`)
);
