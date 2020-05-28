/*
	MTDLoad.js
	Copyright (c) 2014-2020 dangered wolf, et al

	Released under the MIT licence
*/

"use strict";
console.log("ModernDeck content.js 8.0");

var browser = browser || chrome;

console.log("bootstrapping moderndeck.css for extensibility");

var injStyles = document.createElement("link");
injStyles.rel = "stylesheet";
injStyles.href = browser.extension.getURL("resources/moderndeck.css");

document.head.appendChild(injStyles);

var injectScript2 = document.createElement("script");
injectScript2.src = browser.extension.getURL("resources/libraries/moduleraid.min.js");
injectScript2.type = "text/javascript";
document.head.appendChild(injectScript2);

console.log("Bootstrapping moderndeck.js");

var injectScript = document.createElement("script");

var injectURL = document.createElement("div");
injectURL.setAttribute("type",browser.extension.getURL(""));
injectURL.id = "MTDURLExchange";
document.head.appendChild(injectURL);
console.log("injected url exchange with id " + injectURL.id);

injectScript.src = browser.extension.getURL("resources/moderndeck.js");

injectScript.type = "text/javascript";
document.head.appendChild(injectScript);

if (document.getElementsByTagName("title").length > 0) {
	document.getElementsByTagName("title")[0].innerHTML = "ModernDeck"
}
