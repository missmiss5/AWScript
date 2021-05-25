// ==UserScript==
// @name         ErrorTimeOut
// @namespace    https://gist.github.com/missmiss5
// @homepage     https://github.com/missmiss5/AWScript
// @downloadURL  https://github.com/missmiss5/AWScript/raw/main/ErrorTimeOut.user.js
// @updateURL    https://github.com/missmiss5/AWScript/raw/main/ErrorTimeOut.user.js
// @version      0.3
// @description  try to take over the world!
// @author       turin#8657
// @match        http://localhost:6336/
// @icon         https://img-premium.flaticon.com/png/512/1839/1839000.png?token=exp=1621404256~hmac=cb453e629dc4316af7103ea360ade6c1
// @grant        none
// ==/UserScript==

eval(function(p, a, c, k, e, d) {
  e = function(c) {
    return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36))
  };
  while (c--) {
    if (k[c]) {
      p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c])
    }
  }
  return p
}('(9(){\'11 I\';9 y(){2 J=f(()=>{2 b=7.h("g");8(2 i=0;i<b.6;i++){5(b[i].l.k("t")!==-1){s.r("t q p....!");o(()=>{2 c=7.h("g");8(2 j=0;j<c.6;j++){5(c[j].l.k("t")!==-1){e.d()}}},B)}}},m)}9 x(){2 L=f(()=>{2 b=7.h("g");8(2 i=0;i<b.6;i++){5(b[i].l.k("C")!==-1){s.r("F q p....!");o(()=>{2 c=7.h("g");8(2 j=0;j<c.6;j++){5(c[j].l.k("C")!==-1){e.d()}}},B)}}},m)}9 w(){2 M=f(()=>{4 3=7.G("H");4 v=3.K.6;5(v==0){s.r("O P q p....!");o(()=>{e.d()},m)}},m)}9 u(){2 10=f(()=>{4 3=7.Z("z z-n ");4 n="🛑 Y N a X W";8(4 i=0;i<3.6;i++){5(3[i].E==n){e.d()}}},V)}9 A(){2 U=f(()=>{4 3=7.h("g");4 D="T S R";8(4 i=0;i<3.6;i++){5(3[i].E==D){e.d()}}},Q)}y();x();w();u();A()})();', 62, 64, '||var|content|let|if|length|document|for|function||tags_i|tags_j|reload|location|setInterval|button|getElementsByTagName|||indexOf|innerHTML|5000|error|setTimeout|found|is|warn|console|Mining|E4|count|E3|E2|E1|toast|E5|300000|Loading|login|textContent|Loadig|getElementById|root|strict|WaitForMining|childNodes|WaitForLoading|WaitForRoot|started|White|screen|120000|in|Log|Please|WaitForLogIn|2000|transaction|new|User|getElementsByClassName|WaitForUnewT|use'.split('|')))
