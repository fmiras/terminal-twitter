# terminal-twitter
See tweets via console! (ideal for terminal addicts)

## Installation
- Use [webtask.io](https://webtask.io) to create a webtask and put the code of terminal-twitter.js on a new one, here is a [useful tutorial](https://auth0.com/blog/if-this-then-node-dot-js-extending-ifttt-with-webtask-dot-io/) to do it, thanks Auth0!.
- Create an applet on ifttt.com with Twitter as trigger and use any rule you want, then use Webhooks as an action and put your webtask URL and send the parameters as "username" and "tweet" 
- `wt logs` at your terminal and have fun :)

### Try it on your computer!
Clone it and run this commands:

    npm install
    node index.js
