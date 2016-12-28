/**
 * @version 1.0.0
 * @description Main application - Twitter favourite Bot based from https://medium.com/@DebashisBarman/creating-a-twitter-bot-with-node-js-bea760b80bd5#.bylwy87fw
 * @author Aaron Welsh <contact@aaron-welsh.co.uk>
 * 
 */
// Require Twitter API 
const twit = require("twit");
// Require our file that has our Twitter app authentication
const auth = require("./auth");
// Phrase we want to search on Twitter
const TWITTER_SEARCH_PHRASE = "#NodeJS OR #programming OR #JavaScript";

//Init twit, bring in our credentials
const Bot = new twit({
	consumer_key: auth.TWITTER_CONSUMER_KEY,
	consumer_secret: auth.TWITTER_CONSUMER_SECRET,
	access_token: auth.TWITTER_ACCESS_TOKEN, 
	access_token_secret: auth.TWITTER_ACCESS_TOKEN_SECRET
});

console.log("Beep Boop, I am looking for my favourite Tweet...");

Bot.post("statuses/update", {status: "@_aaronwelsh What is my purpose?"});

// Search the phrase tweet, favourite it.
function favouriteTweet() {

	let query = {
		q: TWITTER_SEARCH_PHRASE,
		result_type: "recent",
		count: 10
	}

	// Search Tweets
	function findTweet() {
		Bot.get("search/tweets", query, BotGotLatestTweet);
	}

	// Search done, now get the ID of the Tweet and favourite it.
	function BotGotLatestTweet(err, data, response) {
		// Check if error
		if (err) {
			console.log("Bot could not find latest tweet, : " + err);
		}
		// Else get the ID of the Tweet.
		else {
			let id = {
				id : data.statuses[0].id_str
			}

			// Let's log feedback to the console.
			function favourited(err, response) {
				if (err) {
					console.log("Bot could not Favourite, : " + err + ". I'll look for my next favourite in a few minutes...");
				}
				else {
					console.log("Favourited " + response.user.screen_name + " Tweet: " + response.text);
				}
			}
			// Finally we favourite the Tweet.
			Bot.post("favorites/create", id, favourited);			
			
		}
	}
	
	// Calling this function here to make sure we favourite a tweet straight away, and then wait.
	findTweet();	
	
	// Run functions every 5 minutes.
	setInterval(function(){
		favouriteTweet();
		findTweet();
	}, 5*60*1000); 
	
}
// Call our main function
favouriteTweet();

