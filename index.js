const box = require('cli-box')
const colors = require('colors')

module.exports = function (ctx, done) {

  //Make mentions and hashtags colorfouls
  const tweet = ctx.data.tweet
    .replace(/(#[a-z0-9][a-z0-9\-_]*)/ig, colors.cyan('$1'))
    .replace(/(@[a-z0-9][a-z0-9\-_]*)/ig, colors.cyan('$1'))
  const username = colors.red(`@${ctx.data.username}`)
  const item = `${username}\n\n${tweet}`

  const terminalTweet = box('0x0', {
    text: item,
    stretch: true,
    autoEOL: true,
    hAlign: 'left'
  });

  console.log(terminalTweet);
  done(null, 'Check the logs with wt logs command!')
}
