# Twitter Favorite Bot
This NodeJS application allows you to favourite specific tweets  
## Warning 
Twitter's API only allows for 100 connections within an hour, per account (not the application), hence the reason for the 5 minute interval.  
This application wasn't built for spam, just to engage with specific posts.

## Installation
1. Clone the repository `git clone https://github.com/aarogrammer/favouritebot.git`  
2. CD in to the directory `CD favouritebot`  
3. Install dependencies `npm install`  
4. Create a Twitter app (https://apps.twitter.com)
5. Edit Twitter authentication credentials in `auth.js`  
6. Start application: `npm start` or `node app`  

### Optional
To edit the the search, simply edit the values of `TWITTER_SEARCH_PHRASE`

## Contributing
1. Fork it!
2. Create your feature branch: `git checkout -b branch-name`  
3. Add files to staging `git add .`  
4. Commit your changes: `git commit -m 'Here are my changes'`  
5. Push to the branch: `git push origin branch-name`  
6. Submit a pull request and I will look at it ASAP.  

## Credit
This application is based off Debashis Barman Retweet bot that I came across when bored, and decided to cure my boredom by doing this application.  
Check out his article here: https://medium.com/@DebashisBarman/creating-a-twitter-bot-with-node-js-bea760b80bd5#.bylwy87fw  
Twitter API Client: https://github.com/ttezel/twit

## Author
Aaron Welsh  
http://aaron-welsh.co.uk

## License
https://creativecommons.org/licenses/by-sa/3.0/
