# Milione — Web Native Photo Gallery

[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://github.com/fission-suite/blob/master/LICENSE)
[![Maintainability](https://api.codeclimate.com/v1/badges/c74db4c1b6013145068f/maintainability)](https://codeclimate.com/github/fission-suite/ipfs-photo-gallery/maintainability)
[![Built by FISSION](https://img.shields.io/badge/⌘-Built_by_FISSION-purple.svg)](https://fission.codes)
[![Discord](https://img.shields.io/discord/478735028319158273.svg)](https://discord.gg/zAQBDEq)


Install dependencies:
`yarn install`

Run app:
`yarn start`

---------------------------------

## update 10-7-2021

```
$ npm i
$ npm start
```

Starting results in

```
WebSocket connection to 'wss://webrtc.runfission.com/socket.io/?EIO=3&transport=websocket' failed
```

```
Error: Transport (WebRTCStar) could not listen on any available address
    at c.listen (cdnjs.cloudflare.com/ajax/libs/ipfs/0.51.0/index.min.js:2)
    at async M._onStarting (cdnjs.cloudflare.com/ajax/libs/ipfs/0.51.0/index.min.js:2)
    at async M.start (cdnjs.cloudflare.com/ajax/libs/ipfs/0.51.0/index.min.js:2)
    at async cdnjs.cloudflare.com/ajax/libs/ipfs/0.51.0/index.min.js:2
    at async Object.create (cdnjs.cloudflare.com/ajax/libs/ipfs/0.51.0/index.min.js:2)
```

## 10-8-2021

What is going on here?

* try to establish a websocket with 'wss://webrtc.runfission.com/socket.io/'
* what is `React.FC`?

The `start` script is `"react-scripts start"`. What does this do?

### reeact-scripts
From https://create-react-app.dev/docs/getting-started/ --

> You don’t need to install or configure tools like webpack or Babel. They are preconfigured and hidden so that you can focus on the code.

