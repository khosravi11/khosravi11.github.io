var request = require("request");
var Twitter = require('twitter');
var Spotify = require('node-spotify-api');
var fs = require('fs');

var choice = process.argv[2];
var arg = process.argv[3];
var movie = 'The Departed';
var song = 'Day N Night';

var client = new Twitter({
    consumer_key: 'a7WAEyxqYyFrpPeYQvl0V2i80',
    consumer_secret: 'htWvABynCAEJcH4l492HTaDHnM2UHlZyYocgZ4kCWQO2GmHXsn',
    access_token_key: '25032340-tnLjQq2Ll3zw4IHAlsMJ8y2qE7CfbctPpyf5SzBtn',
    access_token_secret: 'yi7dtyorM8lcRTU0PBqJwXozEdc8kMfKC2QIoHI1Qf1nB',
});

var spotify = new Spotify({
    id: 'bf528bf159ee49fa9ff2ca80da8dbd5a',
    secret: '49c6b81ed2c24757a84676d8cd5247f3'
});

function run(choice) {
    if (choice === 'my-tweets') {
        var params = {
            screen_name: 'raidersk11'
        };
        client.get('statuses/user_timeline', params, function(error, tweets, response) {
            if (!error) {
                var val = 1;
                fs.appendFile("log.txt", "{Twitter:", function(err) {
                    if (err) {
                        return console.log(err);
                    }
                });
                for (var i = 0; i < tweets.length; i++) {
                    console.log('----------------------------------------\n');
                    console.log(val + i + ": " + tweets[i].text);
                    fs.appendFile("log.txt", tweets[i].text + ',', function(err) {
                        if (err) {
                            return console.log(err);
                        }
                    });
                }
                fs.appendFile("log.txt", "}\n", function(err) {
                    if (err) {
                        return console.log(err);
                    }

                    console.log("log was updated!");
                });
            }
        });
    }
    if (choice === 'spotify-this-song') {
        var results = {};
        if (arg) {
            song = arg;
        }
        spotify.search({
            type: 'track',
            query: song,
            limit: 1
        }, function(err, data) {
            if (err) {
                return console.log('Error occurred: ' + err);
            }
            results = data;
            console.log(results.tracks.items[0].artists[0].name);
            console.log(results.tracks.items[0].name);
            console.log(results.tracks.items[0].album.name);
            console.log(results.tracks.items[0].preview_url);

            fs.appendFile("log.txt", "{Spotify:" +
                results.tracks.items[0].artists[0].name + "," +
                results.tracks.items[0].name + "," +
                results.tracks.items[0].album.name + "," +
                results.tracks.items[0].preview_url + '}\n',
                function(err) {
                    if (err) {
                        return console.log(err);
                    }
                });
        });
    }

    if (choice === 'movie-this') {
        if (arg) {
            movie = arg;
        }
        request("http://www.omdbapi.com/?t=" + movie + "&y=&plot=short&apikey=40e9cece", function(error, response, body) {
            if (!error && response.statusCode === 200) {

                var rating = '';
                var results = {};

                results = JSON.parse(body);

                console.log(results.Title);
                console.log(results.Year);
                console.log(results.imdbRating);
                if (results.Ratings.length > 0) {
                    rating = 'Rotten Tomato: ' + results.Ratings[1].Value;
                } else {
                    rating = 'Rotten Tomato: N/A';
                }
                console.log(rating);
                console.log(results.Country);
                console.log(results.Language);
                console.log(results.Plot);
                console.log(results.Actors);

                fs.appendFile("log.txt", "{Movie:" +
                    results.Title + "," +
                    results.Year + "," +
                    results.imdbRating + "," +
                    rating + "," +
                    results.County + "," +
                    results.Language + "," +
                    results.Plot + "," +
                    results.Actors +'}\n',
                    function(err) {
                        if (err) {
                            return console.log(err);
                        }
                        console.log("log was updated!");
                    });
            }
        });
    }

    if (choice === 'do-what-it-says') {
        var count = 0;
        fs.readFile("random.txt", "utf8", function(error, data) {
            if (error) {
                return console.log(error);
            }
            var dataArr = data.split(",");
            choice = dataArr[0];
            arg = dataArr[1];
            run(choice);
        });
    }
}
run(choice);