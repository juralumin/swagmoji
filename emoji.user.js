// ==UserScript==
// @name         swagmoji
// @version      1.7
// @description  client-side emojis to ever so slightly better your pxls.space experience
// @author       nizrab & jen
// @updateURL    https://github.com/juralumin/swagmoji/raw/main/emoji.user.js
// @downloadURL  https://github.com/juralumin/swagmoji/raw/main/emoji.user.js
// @match        https://pxls.space/
// @icon         https://pxls.space/favicon.ico
// ==/UserScript==

const emojiPlugin = pxlsMarkdown.plugins.emoji
const swagemoji_ls = localStorage.getItem("swagemoji");

// load emojis form localStorage so they show up when typing
// this will not work if swagemoji has not stored anything in the localStorage

if (swagemoji_ls != null) {
    Object.assign(emojiDB, JSON.parse(swagemoji_ls));
} else {
    console.log("could not find swagemoji in localStorage")
};

// there is premp!!!!

window.addEventListener('load', function () {
    console.log("loading...");  // log when stuff's loaded

    // timestamp for cache busting whatever big chungus mcfungus
    let url = 'https://raw.githubusercontent.com/juralumin/swagmoji/main/emojis.json';
    url += '?' + new Date().getTime();

    fetch(url, {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
    })
    .then(response => response.json())  // log response to json
    .then(data => {
        console.log("fetched data:", data);  // log fetched data

        // complete the emoji urls
        data = JSON.parse(JSON.stringify(data).replaceAll(':"', ':"https://raw.githubusercontent.com/juralumin/swagmoji/main/assets/'))

        console.log("completed emoji urls:", data)  // log new data

        Object.assign(emojiDB, data);

        // log each emoji's name for easier debugging
        console.log("loaded emojis:");
        Object.keys(emojiDB).forEach(key => {
            console.log(key);
        });

        // update swagemojis in localStorage
        App.ls.set('swagemoji', data);
        console.log('updated swagemoji in localStorage')

        // use updated emojiDB
        App.chat.markdownProcessor.use(emojiPlugin, {
            emojiDB
        });
    })
    .catch(error => {
        App.alert("Error fetching custom emoji data. Try reloading Pxls. If you have chat disabled, this is normal. -swagmoji")
        console.error("error fetching emoji data!", error);  // log any undesired happenings
    });
});

// if emojis are all funky, clear your cache.
// also DON'T add emojis with UPPERCASE characters. they should all be lowercase (weird pxls thing)
