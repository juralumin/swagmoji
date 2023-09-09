// ==UserScript==
// @name         swagmoji
// @version      1.2
// @description  client-side emojis to ever so slightly better your pxls.space experience
// @author       nizrab & jen
// @match        https://pxls.space/
// @icon         https://pxls.space/favicon.ico
// ==/UserScript==

const emojiPlugin = pxlsMarkdown.plugins.emoji

// WHERE IS PREMP

window.addEventListener('load', function () {
    console.log("loading...");  // log when stuff's loaded

    fetch('https://raw.githubusercontent.com/juralumin/swagmoji/main/emojis.json', {
        method: 'GET',
        headers: {
            'accept': 'application/json',
        },
    })
    .then(response => response.json())  // log response to jason
    .then(data => {
        console.log("fetched data:", data);  // log fetched data
        Object.assign(emojiDB, data);

        // log each emoji's name for 2% easier debugging ahhahhahahahhahahaha
        console.log("loaded emojis:");
        Object.keys(emojiDB).forEach(key => {
            console.log(key);
        });

        // use updated emoji db
        App.chat.markdownProcessor.use(emojiPlugin, {
            emojiDB
        });
    })
    .catch(error => {
        console.error("error fetching emoji data!", error);  // log any undesired happenings
    });
});

// if emojis are all funky, clear your cache.
// also DON'T add emojis with UPPERCASE characters. they should all be lowercase
