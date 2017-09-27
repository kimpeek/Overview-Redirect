// ==UserScript==
// @name         Overview Redirect
// @name:en      Overview Redirect
// @version      4.0
// @description  Change all username urls to point to overviews instead of profiles
// @namespace    Overview Redirect
// @author       https://github.com/kimpeek
// @include      https://www.reddit.com*
// ==/UserScript==

// Define the regex for a username link
var username_link = new RegExp("(\/u\/|\/user\/)[A-Za-z0-9_-]+\/?$");
// Gather all the links on the page
var anchors = document.getElementsByTagName("a");
// Transform the HTML Collection to an array
var list = Array.from(anchors);

// Find all links that point to a username
// and add 'overview' to the end
function find_username_links(item, index){
    if (item.href.match(username_link)){
        item.href = change_username_link(item.href);
    }
}

// Conditionally add 'overview' to the link
function change_username_link(link){
    if (link.endsWith("/")){
        link = link + "overview";
    }
    else {
        link = link + "/overview";
    }
    return link
}

// Execute the primary functionality
list.forEach(find_username_links);
