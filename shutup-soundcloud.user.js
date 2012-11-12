// ==UserScript==
// @name       Shutup Soundcloud
// @namespace  https://github.com/int3h
// @version    1.0
// @description  Disable comments on Soundcloud by default
// @match      http://soundcloud.com/*
// @copyright  2012+, Matthew Torok
// ==/UserScript==

//    This program is free software: you can redistribute it and/or modify
//    it under the terms of the GNU General Public License as published by
//    the Free Software Foundation, either version 3 of the License, or
//    (at your option) any later version.
//
//    This program is distributed in the hope that it will be useful,
//    but WITHOUT ANY WARRANTY; without even the implied warranty of
//    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//    GNU General Public License for more details.
//
//    You should have received a copy of the GNU General Public License
//    along with this program.	If not, see <http://www.gnu.org/licenses/>.


// Checks to see if the 'toggle comments' buttons will turn off comments and, if so, clicks it
function clickDisableComments() {
    var nodeList = document.querySelectorAll(".comments-toggle");
    if(!nodeList || nodeList.length < 1) {
    	console.error("[Shutup Soundcloud UserScript] Fatal error: Could not find the 'toggle comments' button on the page in order to disable comments");
    	return;
    }

    for(var i = 0; i < nodeList.length; i++) {
        var elToggle = nodeList[i];

        // Check if comments are already disabled
        if(elToggle.textContent.indexOf("Hide") === -1) {
            console.debug("[Shutup Soundcloud UserScript] Comments are already disabled");
            return;
        }

        // Disable comments by sending a click event to the 'Toggle Comments' button
        elToggle.click();
    }
}

// Disable comments on window load
if(document.readyState === "complete") {
    clickDisableComments();
} else {
    window.addEventListener("load", clickDisableComments, false);
}
