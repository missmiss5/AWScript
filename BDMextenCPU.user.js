// ==UserScript==
// @name         BDMextenCPU
// @namespace    https://gist.github.com/missmiss5
// @homepage     https://github.com/missmiss5/AWScript
// @downloadURL  https://github.com/missmiss5/AWScript/raw/main/BDMextenCPU.user.js
// @updateURL    https://github.com/missmiss5/AWScript/raw/main/BDMextenCPU.user.js
// @version      0.1
// @description  try to take over the world!
// @author       turin#8657
// @match        http://localhost:6336/
// @icon         https://img-premium.flaticon.com/png/512/1839/1839000.png?token=exp=1621404256~hmac=cb453e629dc4316af7103ea360ade6c1
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    var _0x40b8 = [
    "\x20[\x20RAM\x20]\x20:\x20",
    "error",
    "152958wZWHAv",
    "https://all-access.wax.io/cloud-wallet/login/",
    "POST",
    "\x20[\x20Block\x20]\x20",
    "1513251GJtttd",
    "Wax\x20Account\x20=\x20",
    "cpu_limit",
    "http://localhost:6336/",
    "round",
    "log",
    "ram_quota",
    "singleNodeValue",
    "Mine",
    "max",
    "410133rfHwgP",
    "Block",
    "location",
    "---------------------------------",
    "60HJfXhm",
    "length",
    "[Mine]",
    "Approve",
    "google-social-btn",
    "stringify",
    "\x20[\x20CPU\x20MAX\x20",
    "3LtBAQd",
    "substr",
    "FIRST_ORDERED_NODE_TYPE",
    "1213247XcnwdD",
    "application/json",
    "used",
    "append",
    "%\x20]",
    "click",
    "manual",
    "\x20[Block]\x20",
    "getElementsByTagName",
    "123533YnjkAY",
    "input",
    "toLocaleString",
    "href",
    "textContent",
    "17458FmTErJ",
    "https://api.waxsweden.org/v1/chain/get_account",
    "value",
    "350237mjQLzo",
    "//*[@id=\x22root\x22]/section[1]/div/div[1]/button",
    "Please\x20login",
    "\x20[\x20CPU\x20]\x20:\x20",
    "json",
    ".wam",
    "\x20[CPU\x20MAX]\x20",
    "Now\x20cpu\x20",
    "remember",
    "button",
    "evaluate",
    "OK\x20:\x20200!",
    "\x20[\x20Check\x20CPU\x20RUN\x20]",
    "title",
    "disabled",
    "[Google]",
    "split",
    "Looks\x20like\x20there\x20was\x20a\x20problem.\x20Status\x20Code:\x20",
    "1ZVibLS",
    "status",
    "\x20[\x20NET\x20]\x20:\x20",
    "\x20[Mine]\x20",
    "Content-Type",
];
(function(_0x2c89b2, _0x352f02) {
    var _0x4eece2 = _0x1f4c;
    while (!![]) {
        try {
            var _0x270e64 =
                parseInt(_0x4eece2(0x14b)) * -parseInt(_0x4eece2(0x128)) +
                parseInt(_0x4eece2(0x154)) +
                parseInt(_0x4eece2(0x141)) * -parseInt(_0x4eece2(0x159)) +
                parseInt(_0x4eece2(0x15c)) +
                -parseInt(_0x4eece2(0x12f)) +
                -parseInt(_0x4eece2(0x13d)) * -parseInt(_0x4eece2(0x148)) +
                parseInt(_0x4eece2(0x133));
            if (_0x270e64 === _0x352f02) break;
            else _0x2c89b2["push"](_0x2c89b2["shift"]());
        } catch (_0x58a22d) {
            _0x2c89b2["push"](_0x2c89b2["shift"]());
        }
    }
})(_0x40b8, 0xc4397);
var CPU = 0x64,
    NET,
    RAM,
    account,
    url,
    aray,
    CpuStop = 0x5f;
setInterval(main, 0x1388);

function main() {
    var _0x9716f2 = _0x1f4c;
    url = window[_0x9716f2(0x13f)][_0x9716f2(0x157)];
    if (url === _0x9716f2(0x130)) {
        var _0x37794a = document[_0x9716f2(0x153)](_0x9716f2(0x11f));
        console[_0x9716f2(0x138)](url);
        for (
            var _0x21192c = 0x0; _0x21192c < _0x37794a[_0x9716f2(0x142)]; _0x21192c++
        ) {
            if (
                _0x37794a[_0x21192c][_0x9716f2(0x158)] == _0x9716f2(0x144) &&
                !_0x37794a[_0x21192c][_0x9716f2(0x124)]
            ) {
                var _0x3dc157 = document[_0x9716f2(0x153)]("input");
                for (
                    var _0xba9fb0 = 0x0; _0xba9fb0 < _0x3dc157[_0x9716f2(0x142)]; _0xba9fb0++
                ) {
                    if (_0x3dc157[_0xba9fb0][_0x9716f2(0x15b)] == _0x9716f2(0x11e)) {
                        _0x3dc157[_0xba9fb0][_0x9716f2(0x150)](), sleep(0x7d0);
                        break;
                    }
                }
                _0x37794a[_0x21192c][_0x9716f2(0x150)]();
                break;
            }
        }
    }
    if (url === "https://all-access.wax.io/cloud-wallet/signing/") {
        var _0xb47e09 = document[_0x9716f2(0x153)]("button");
        console[_0x9716f2(0x138)](url);
        for (
            var _0x21192c = 0x0; _0x21192c < _0xb47e09[_0x9716f2(0x142)]; _0x21192c++
        ) {
            if (
                _0xb47e09[_0x21192c][_0x9716f2(0x158)] == "Approve" &&
                !_0xb47e09[_0x21192c][_0x9716f2(0x124)]
            ) {
                var _0x199eac = document["getElementsByTagName"](_0x9716f2(0x155));
                for (
                    var _0xba9fb0 = 0x0; _0xba9fb0 < _0x199eac[_0x9716f2(0x142)]; _0xba9fb0++
                ) {
                    if (_0x199eac[_0xba9fb0][_0x9716f2(0x15b)] == "remember") {
                        _0x199eac[_0xba9fb0][_0x9716f2(0x150)](), sleep(0x7d0);
                        break;
                    }
                }
                _0xb47e09[_0x21192c][_0x9716f2(0x150)]();
                break;
            }
        }
    }
    if (url === "https://all-access.wax.io/") {
        var _0x2d6478 = document[_0x9716f2(0x153)](_0x9716f2(0x11f));
        console[_0x9716f2(0x138)](url);
        for (
            var _0x21192c = 0x0; _0x21192c < _0x2d6478[_0x9716f2(0x142)]; _0x21192c++
        ) {
            console[_0x9716f2(0x138)](_0x2d6478[_0x21192c][_0x9716f2(0x158)]);
            if (_0x2d6478[_0x21192c]["id"] == _0x9716f2(0x145)) {
                document[_0x9716f2(0x123)] = _0x9716f2(0x125);
                var _0x2f9916 = "//*[@id=\x22google-social-btn\x22]",
                    _0xaf14cc = document[_0x9716f2(0x120)](
                        _0x2f9916,
                        document,
                        null,
                        XPathResult[_0x9716f2(0x14a)],
                        null
                    );
                console["log"](_0xaf14cc),
                    _0xaf14cc[_0x9716f2(0x13a)][_0x9716f2(0x150)]();
                break;
            }
        }
    }
    if (url === _0x9716f2(0x136)) {
        (aray = 0x0), (document[_0x9716f2(0x123)] = _0x9716f2(0x122));
        var _0x38a8d1 = document[_0x9716f2(0x153)](_0x9716f2(0x11f));
        try {
            account =
                _0x38a8d1[aray][_0x9716f2(0x158)][_0x9716f2(0x126)]("\x20")[0x1];
            if (account[_0x9716f2(0x149)](-0x4) !== _0x9716f2(0x11b)) {
                console[_0x9716f2(0x138)](_0x9716f2(0x118)),
                    console[_0x9716f2(0x138)](url);
                return;
            }
            Data();
            if (account != "") {
                document[_0x9716f2(0x123)] =
                    "\x20[\x20" + account + "\x20:\x20CPU\x20" + CPU + _0x9716f2(0x14f);
                if (_0x38a8d1[aray + 0x3][_0x9716f2(0x158)] == _0x9716f2(0x13e)) {
                    (date = new Date()),
                    console[_0x9716f2(0x138)](
                            date["toLocaleString"](),
                            _0x9716f2(0x152)
                        ),
                        (document[_0x9716f2(0x123)] = _0x9716f2(0x132));
                    return;
                }
                CPU <= CpuStop ?
                    Mine(_0x38a8d1, aray, CPU) :
                    ((date = new Date()),
                        console["log"](
                            date["toLocaleString"](),
                            _0x9716f2(0x11c),
                            _0x9716f2(0x11d) + CPU
                        ),
                        (document[_0x9716f2(0x123)] =
                            _0x9716f2(0x147) + CPU + _0x9716f2(0x14f)));
            }
        } catch (_0x131605) {
            console[_0x9716f2(0x138)](_0x9716f2(0x12e), _0x131605);
        }
    }
}

function Mine(_0x1512d8, _0x50c976, _0x3bd687) {
    var _0x2ac24d = _0x1f4c;
    if (_0x1512d8[_0x50c976 + 0x3]["textContent"] == _0x2ac24d(0x13b)) {
        (date = new Date()),
        console[_0x2ac24d(0x138)](
                date["toLocaleString"](),
                _0x2ac24d(0x12b),
                _0x2ac24d(0x11d) + _0x3bd687
            ),
            (document[_0x2ac24d(0x123)] = _0x2ac24d(0x143));
        var _0x386696 = _0x2ac24d(0x15d),
            _0x3ac468 = document["evaluate"](
                _0x386696,
                document,
                null,
                XPathResult[_0x2ac24d(0x14a)],
                null
            );
        console[_0x2ac24d(0x138)](_0x3ac468),
            _0x3ac468[_0x2ac24d(0x13a)][_0x2ac24d(0x150)]();
    }
}

function _0x1f4c(_0x45dd80, _0x30ed7a) {
    _0x45dd80 = _0x45dd80 - 0x118;
    var _0x40b820 = _0x40b8[_0x45dd80];
    return _0x40b820;
}
async function Data() {
    var _0x3704e5 = _0x1f4c;
    console["log"](_0x3704e5(0x134) + account);
    var _0x144717 = new Headers();
    _0x144717[_0x3704e5(0x14e)](_0x3704e5(0x12c), _0x3704e5(0x14c));
    var _0x4ee6ec = JSON[_0x3704e5(0x146)]({ account_name: account }),
        _0xe20382 = {
            method: _0x3704e5(0x131),
            headers: _0x144717,
            body: _0x4ee6ec,
            redirect: _0x3704e5(0x151),
        };
    try {
        const _0x27425f = await fetch(_0x3704e5(0x15a), _0xe20382);
        if (_0x27425f["status"] !== 0xc8) {
            console["log"](_0x3704e5(0x127) + _0x27425f[_0x3704e5(0x129)]);
            return;
        } else console["log"](_0x3704e5(0x121));
        const _0x195b71 = await _0x27425f[_0x3704e5(0x11a)]();
        (CPU =
            (_0x195b71[_0x3704e5(0x135)]["used"] /
                _0x195b71[_0x3704e5(0x135)][_0x3704e5(0x13c)]) *
            0x64),
        (CPU = Math[_0x3704e5(0x137)](CPU)),
        (RAM = (_0x195b71["ram_usage"] / _0x195b71[_0x3704e5(0x139)]) * 0x64),
        (RAM = Math[_0x3704e5(0x137)](RAM)),
        (NET =
            (_0x195b71["net_limit"][_0x3704e5(0x14d)] /
                _0x195b71["net_limit"][_0x3704e5(0x13c)]) *
            0x64),
        (NET = Math["round"](NET));
        var _0xe7da0e = new Date();
        console["log"](_0x3704e5(0x140)),
            console[_0x3704e5(0x138)](
                _0xe7da0e["toLocaleString"](),
                _0x3704e5(0x119) + CPU + "%"
            ),
            console[_0x3704e5(0x138)](
                _0xe7da0e[_0x3704e5(0x156)](),
                _0x3704e5(0x12a) + NET + "%"
            ),
            console[_0x3704e5(0x138)](
                _0xe7da0e[_0x3704e5(0x156)](),
                _0x3704e5(0x12d) + RAM + "%"
            ),
            console["log"](_0x3704e5(0x140));
    } catch (_0x1c17ef) {
        console["log"](_0x3704e5(0x12e), _0x1c17ef);
    }
}

function sleep(_0xb76966) {
    return (delay = (_0x4b9f52) =>
        new Promise((_0x5149a7) =>
            setTimeout((_0x532193) => _0x5149a7(), _0x4b9f52)
        ));
}
})();
