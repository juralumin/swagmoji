// ==UserScript==
// @name         swagmoji
// @version      1.0
// @description  client-side emojis to ever so slightly better your pxls.space experience
// @author       Nizrab
// @match        https://pxls.space/
// @icon         https://pxls.space/favicon.ico
// ==/UserScript==
const emojiPlugin = pxlsMarkdown.plugins.emoji

window.addEventListener('load', function ()
{
    fetch('https://raw.githubusercontent.com/juralumin/swagmoji/main/emojis.json', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => Object.assign(emojiDB, response.json()));

    App.chat.markdownProcessor.use(emojiPlugin, {
        emojiDB
    });
});
