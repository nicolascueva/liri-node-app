//console.log('this is loaded');
// ^ check to make sure keys.js is linked to liri.js
exports.spotify = {
    id: process.env.SPOTIFY_ID,
    secret: process.env.SPOTIFY_SECRET
};

exports.omdb = {
    api_key: process.env.API_KEY
};

exports.bandsintown = {
    api_key: process.env.API_ID
};