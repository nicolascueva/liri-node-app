require("dotenv").config();
var keys = require("./keys.js");
//console.log(keys);
var moment = require('moment');

var inputString = process.argv;
var userInput1 = inputString[2];
var userInput2 = inputString.slice(3).join(' ');

var Spotify = require('node-spotify-api');







function concertSearch() {
    /////bandsintown//////
    var queryURL = "https://rest.bandsintown.com/artists/" + userInput2 + "/events?app_id=" + keys.bandsintown.api_key;

    var request = require('request');
    request(queryURL, function (error, response, body) {
        console.log('error:', error); // Print the error if one occurred
        console.log('statusCode:', response && response.statusCode);

        // Print the response status code if a response was received
        var data = JSON.parse(body);
        var date = moment(data[0].dateTime).format('MMMM Do YYYY');

        console.log("---------------------" + "\n" +
            "Venue Name: " + (data[0].venue.name) + " \n" +
            "Venue Location: " + ((data[0].venue.city)) + " \n" +
            "Date: " + ((date)) + "\n" +
            "---------------------");
    });
};

//////Spotify/////
function spotifySearch() {
    var spotify = new Spotify({
        id: process.env.SPOTIFY_ID,
        secret: process.env.SPOTIFY_SECRET
    });

    spotify.search({
        type: 'track',
        query: userInput2,
        limit: 1
    }, function (err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }

        var artistInfo = data.tracks.items;
        console.log(" " + "\n" +
            "Artist Name: " + (artistInfo[0].artists[0].name) + " \n" +
            "------------------" + "\n" +
            "Click Here For More: " + (JSON.stringify(artistInfo[0].external_urls)) + " \n" +
            "------------------" + "\n" +
            "Album Name: " + (artistInfo[0].album.name));
    });
} ////^^ Spotify ^^^////

///////OMDB///////
function movieSearch() {

    request = require('request');
    request("http://www.omdbapi.com/?apikey=" + keys.omdb.api_key + "&t=" + userInput2, function (error, response, body) {
        // console.log('error:', error); // Print the error if one occurred
        //console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
        var data = JSON.parse(body);
        console.log("" + "\n" +
            "Title: " + (data.Title) + "\n" +
            "-----------------" + "\n" +
            "Year: " + (data.Year) + "\n" +
            "-----------------" + "\n" +
            "IMBD Rating: " + (data.imdbRating) + "\n" +
            "-----------------" + "\n" +
            "Rotten Tomatoes: " + (data.Ratings[1].Value) + "\n" +
            "-----------------" + "\n" +
            "Country: " + (data.Country) + "\n" +
            "-----------------" + "\n" +
            "Language: " + (data.Language) + "\n" +
            "-----------------" + "\n" +
            "Plot: " + (data.Plot) + "\n" +
            "-----------------" + "\n" +
            "Actors: " + (data.Actors)

        );
    });
};
////^^^^///OMDB////^^^///

function doWhatItSays() {
    console.log('do what it says');
};

var search = function () {
    if (userInput1 === 'concert-this') {
        concertSearch(userInput2);
    } else if (userInput1 === 'spotify-this-song') {
        spotifySearch(userInput2);
    } else if (userInput1 === 'movie-this') {
        movieSearch(userInput2);
    } else if (userInput1 === 'do-what-it-says') {
        doWhatItSays(userInput2);
    } else { };
};

//Function call that begins script
search(userInput2);

