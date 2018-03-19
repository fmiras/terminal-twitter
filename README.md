# terminal-twitter
[![Build Status](https://travis-ci.org/fmiras/terminal-twitter.svg?branch=master)](https://travis-ci.org/fmiras/terminal-twitter)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://github.com/standard/standard)
[![Greenkeeper badge](https://badges.greenkeeper.io/fmiras/terminal-twitter.svg)](https://greenkeeper.io/)

See tweets via console! (ideal for terminal addicts)

![screenshot](https://i.imgur.com/aJtWvt9.gif)

## Installation
This project use [ZEIT](https://zeit.co) [now](https://zeit.co/now) cloud hosting platform but you can use your preferred cloud option such as Heroku or AWS.

With [now](https://zeit.co/now):
- Install now with `npm i -g now` or using the [desktop client](https://zeit.co/download)
- Deploy this project by running `now fmiras/terminal-twitter`
- Create an applet on [ifttt.com](https://ifttt.com) with Twitter as trigger and use any rule you want, then use Webhooks as an action and put your now deployment URL (for example: https://terminal-twitter-aptrjiqazd.now.sh) and send the body json parameters as "username" and "tweet" as follows:
```js
{
  "username": "mirasfederico",
  "tweet": "#Blockchain technology can make things easier on the public sector in a way that we can even imagine!"
}
```
- `now logs {deployment-id} -f` at your terminal and you should start receiveng tweets!

### Try it on your computer!
Clone it and run this commands:

    npm install
    npm start

The micro app is listening for new tweets on http://localhost:3000
