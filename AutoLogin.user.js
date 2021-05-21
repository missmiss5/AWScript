// ==UserScript==
// @name         AutoLogin
// @namespace    https://gist.github.com/missmiss5
// @homepage     https://github.com/missmiss5/AWScript
// @downloadURL  https://github.com/missmiss5/AWScript/raw/main/MiningTimeOut.user.js
// @updateURL    https://github.com/missmiss5/AWScript/raw/main/MiningTimeOut.user.js
// @version      0.1
// @description  try to take over the world!
// @author       turin#8657
// @match        http://localhost:6336/
// @icon         https://img-premium.flaticon.com/png/512/1828/1828499.png?token=exp=1621408527~hmac=adc574ef1d1c9f5536cb46781cfd2b11
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    function A1() {
    var WaitForLogin = setTimeout(() => {
        var tags_i = document.getElementsByTagName("button");
        for (var i = 0; i < tags_i.length; i++) {
            if(tags_i[i].innerHTML.indexOf("Log In") !== -1)
        	{
                tags_i[i].click();
        	}
        }
    }, 5000);
}

A1();

})();
