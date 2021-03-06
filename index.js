const box = require('cli-box')
const colors = require('colors')
const { json } = require('micro')

module.exports = async (req) => {
  const data = await json(req)

  // Make mentions and hashtags colorfouls
  const tweet = data.tweet
    .replace(/(#[a-z0-9][a-z0-9\-_]*)/ig, colors.cyan('$1'))
    .replace(/(@[a-z0-9][a-z0-9\-_]*)/ig, colors.cyan('$1'))
  const username = colors.cyan(`@${data.username}`)
  const item = `${username}\n\n${tweet}`

  const terminalTweet = box('0x0', {
    text: item,
    stretch: true,
    autoEOL: true,
    hAlign: 'left'
  })

  console.log(terminalTweet)
  return 'success'
}
