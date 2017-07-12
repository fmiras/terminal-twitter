const webtask = require('./terminal-twitter')

// Stub the tweet
const ctx = {
  data: {
    username: 'AwesomeGuy',
    tweet: 'Lorem #ipsum dolor sit amet, @consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque'
  }
}

// Run the webstack with a useless 'done' function
webtask(ctx, () => undefined)
