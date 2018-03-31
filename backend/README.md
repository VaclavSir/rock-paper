# Rock Paper

An attempt to make an online game of [rock-paper-scissors](https://en.wikipedia.org/wiki/Rock%E2%80%93paper%E2%80%93scissors) using Firebase Realtime Database.

## Database rules

Rules in `database.rules.json` are generated from `database.rules.bolt` using [Firebase Bolt Compiler](https://github.com/firebase/bolt). After editing the rules, run `npm run bolt` to regenerate the JSON.

Test of these rules are located in `database.rules.test.js`.
