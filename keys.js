//console.log('this is loaded');

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