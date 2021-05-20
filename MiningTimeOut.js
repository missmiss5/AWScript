// ==UserScript==
// @name         MiningTimeOut
// @namespace    https://gist.github.com/missmiss5
// @homepage     https://gist.github.com/missmiss5/8032ac4d84d6496c62dde0cb0b7ab492
// @downloadURL  https://gist.githubusercontent.com/missmiss5/8032ac4d84d6496c62dde0cb0b7ab492/raw/facf8db8c16f206d33506e56aca08f186766f847/MiningTimeOut.js
// @updateURL    https://gist.githubusercontent.com/missmiss5/8032ac4d84d6496c62dde0cb0b7ab492/raw/facf8db8c16f206d33506e56aca08f186766f847/MiningTimeOut.js
// @version      0.2
// @description  try to take over the world!
// @author       turin#8657
// @match        http://localhost:6336/
// @icon         https://img-premium.flaticon.com/png/512/1839/1839000.png?token=exp=1621404256~hmac=cb453e629dc4316af7103ea360ade6c1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function E1() {
    var WaitForMining = setInterval(() => {
        var tags_i = document.getElementsByTagName("button");
        for (var i = 0; i < tags_i.length; i++) {
            if(tags_i[i].innerHTML.indexOf("Mining") !== -1)
        	{
                console.warn("Mining is found....!");
        		setTimeout(() => {
                    var tags_j = document.getElementsByTagName("button");
                    for (var j = 0; j < tags_j.length; j++) {
                        if(tags_j[j].innerHTML.indexOf("Mining") !== -1) {
                            location.reload();
                        }
                    }
                },300000)
        	}
        }
    }, 5000);
}

function E2() {
    var WaitForMining = setInterval(() => {
        var tags_i = document.getElementsByTagName("button");
        for (var i = 0; i < tags_i.length; i++) {
            if(tags_i[i].innerHTML.indexOf("Loading") !== -1)
        	{
                console.warn("Loadig is found....!");
        		setTimeout(() => {
                    var tags_j = document.getElementsByTagName("button");
                    for (var j = 0; j < tags_j.length; j++) {
                        if(tags_j[j].innerHTML.indexOf("Loading") !== -1) {
                            location.reload();
                        }
                    }
                },300000)
        	}
        }
    }, 5000);
}
E1()
E2()
})();
