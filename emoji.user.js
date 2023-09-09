// ==UserScript==
// @name         swag emojis
// @version      1.0
// @description  A client side UserScript that Adds some swag emojis to pxls.space chat.
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