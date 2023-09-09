// ==UserScript==
// @name         swagmoji
// @version      1.1
// @description  client-side emojis to ever so slightly better your pxls.space experience
// @author       Nizrab and Jen
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
            'Accept': 'application/json',
        },
    })
    .then(response => response.json())  // log response to jason
    .then(data => {
        console.log("fetched data:", data);  // log fetched data
        Object.assign(emojiDB, data);

        // log each emoji's name for 2% easier debugging ahhahhahahahhahahaha
        console.log("Loaded emojis:");
        Object.keys(emojiDB).forEach(key => {
            console.log(key);
        });

        // use updated emoji db
        App.chat.markdownProcessor.use(emojiPlugin, {
            emojiDB
        });
    })
    .catch(error => {
        console.error("Error fetching emoji data: ", error);  // log any undesired happenings
    });
});
