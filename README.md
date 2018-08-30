# liri-node-app

*A command line node app that takes in parameters and gives you back data.*
*LIRI is a _Language_ Interpretation and Recognition Interface*

**Technologies Used**

-Node.JS
-terminal/gitbash
-JSON
-Spotify API NPM
-Bands in Town API NPM
-OMDB API NPM
-Request NPM
-Moment NPM
-DotEnv NPM
-FS NPM

**To run this app you will have to install all the NPM packages, and supply your own .env file with your API keys**

liri.js can take in one of the following commands:

-`concert-this`
-`spotify-this-song`
-`movie-this`
-`do-what-it-says`

**node liri.js concert-this < artist or band name here >**
This will search the Bands in Town Artist Events API for an artist and render the following information about the upcoming event to the terminal:
Name of Venue
Venue Location
Date of the Event

**node liri.js spotify-this-song < song name here >**
This will show the following information about the song in your terminal/bash window from the Spotify API:
Artist(s)
A Preview link to the song on Spotify
The Album the Song is from

**node liri.js movie-this < movie name here >**
This will output the following information to your terminal/bash window from the OMDB API:
* Title of the movie.
       * Year the movie came out.
       * IMDB Rating of the movie.
       * Rotten Tomatoes Rating of the movie.
       * Country where the movie was produced.
       * Language of the movie.
       * Plot of the movie.
       * Actors in the movie.

**node liri.js do-what-it-says**
Using the fs Node package, LIRI will take the text inside of our random.txt file and push it to the terminal/bash
