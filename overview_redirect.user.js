// ==UserScript==
// @name         Overview Redirect
// @name:en      Overview Redirect
// @version      3
// @description  Change all username urls to point to overviews instead of profiles
// @namespace    Overview Redirect
// @author       https://github.com/kimpeek
// @include      https://www.reddit.com*
// ==/UserScript==

var user_link = new RegExp("(\/u\/|\/user\/)[A-Za-z0-9_-]+$");
var anchors = document.getElementsByTagName("a");

for (var i = 0; i < anchors.length; i++) {
    if (user_link.test(anchors[i].href)){
        var user = anchors[i].href.match(user_link)[0];
        var overview = "https://www.reddit.com" + user + "/overview";
        anchors[i].href = overview;
    }
}
