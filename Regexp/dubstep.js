'use strict';

function songDecoder(song){
	return song.replace(/(WUB)+/gi, " ").trim();
}