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
    fetch('uhhhhhh', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    },
})
   .then(response => Object.assign(emojiDB, emojis));

    App.chat.markdownProcessor.use(emojiPlugin, {
        emojiDB
    });
});