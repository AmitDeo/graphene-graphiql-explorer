"use strict";(self.webpackChunkgraphene_django_graphiql_explorer=self.webpackChunkgraphene_django_graphiql_explorer||[]).push([[598],{9598:function(e,r,n){n.r(r),n.d(r,{c:function(){return f}});var t,a=n(4942),i=n(889),o=Object.defineProperty,s=function(e,r){return o(e,"name",{value:r,configurable:!0})};function l(e,r){return r.forEach((function(r){r&&"string"!==typeof r&&!Array.isArray(r)&&Object.keys(r).forEach((function(n){if("default"!==n&&!(n in e)){var t=Object.getOwnPropertyDescriptor(r,n);Object.defineProperty(e,n,t.get?t:{enumerable:!0,get:function(){return r[n]}})}}))})),Object.freeze(e)}s(l,"_mergeNamespaces");var c={exports:{}};!function(e){var r={pairs:"()[]{}''\"\"",closeBefore:")]}'\":;>",triples:"",explode:"[]{}"},n=e.Pos;function t(e,n){return"pairs"==n&&"string"==typeof e?e:"object"==typeof e&&null!=e[n]?e[n]:r[n]}e.defineOption("autoCloseBrackets",!1,(function(r,n,o){o&&o!=e.Init&&(r.removeKeyMap(a),r.state.closeBrackets=null),n&&(i(t(n,"pairs")),r.state.closeBrackets=n,r.addKeyMap(a))})),s(t,"getOption");var a={Backspace:c,Enter:u};function i(e){for(var r=0;r<e.length;r++){var n=e.charAt(r),t="'"+n+"'";a[t]||(a[t]=o(n))}}function o(e){return function(r){return p(r,e)}}function l(e){var r=e.state.closeBrackets;return!r||r.override?r:e.getModeAt(e.getCursor()).closeBrackets||r}function c(r){var a=l(r);if(!a||r.getOption("disableInput"))return e.Pass;for(var i=t(a,"pairs"),o=r.listSelections(),s=0;s<o.length;s++){if(!o[s].empty())return e.Pass;var c=d(r,o[s].head);if(!c||i.indexOf(c)%2!=0)return e.Pass}for(s=o.length-1;s>=0;s--){var u=o[s].head;r.replaceRange("",n(u.line,u.ch-1),n(u.line,u.ch+1),"+delete")}}function u(r){var n=l(r),a=n&&t(n,"explode");if(!a||r.getOption("disableInput"))return e.Pass;for(var i=r.listSelections(),o=0;o<i.length;o++){if(!i[o].empty())return e.Pass;var s=d(r,i[o].head);if(!s||a.indexOf(s)%2!=0)return e.Pass}r.operation((function(){var e=r.lineSeparator()||"\n";r.replaceSelection(e+e,null),f(r,-1),i=r.listSelections();for(var n=0;n<i.length;n++){var t=i[n].head.line;r.indentLine(t,null,!0),r.indentLine(t+1,null,!0)}}))}function f(e,r){for(var n=[],t=e.listSelections(),a=0,i=0;i<t.length;i++){var o=t[i];o.head==e.getCursor()&&(a=i);var s=o.head.ch||r>0?{line:o.head.line,ch:o.head.ch+r}:{line:o.head.line-1};n.push({anchor:s,head:s})}e.setSelections(n,a)}function h(r){var t=e.cmpPos(r.anchor,r.head)>0;return{anchor:new n(r.anchor.line,r.anchor.ch+(t?-1:1)),head:new n(r.head.line,r.head.ch+(t?1:-1))}}function p(r,a){var i=l(r);if(!i||r.getOption("disableInput"))return e.Pass;var o=t(i,"pairs"),s=o.indexOf(a);if(-1==s)return e.Pass;for(var c,u=t(i,"closeBefore"),p=t(i,"triples"),d=o.charAt(s+1)==a,v=r.listSelections(),b=s%2==0,k=0;k<v.length;k++){var S,y=v[k],O=y.head,P=r.getRange(O,n(O.line,O.ch+1));if(b&&!y.empty())S="surround";else if(!d&&b||P!=a)if(d&&O.ch>1&&p.indexOf(a)>=0&&r.getRange(n(O.line,O.ch-2),O)==a+a){if(O.ch>2&&/\bstring/.test(r.getTokenTypeAt(n(O.line,O.ch-2))))return e.Pass;S="addFour"}else if(d){var x=0==O.ch?" ":r.getRange(n(O.line,O.ch-1),O);if(e.isWordChar(P)||x==a||e.isWordChar(x))return e.Pass;S="both"}else{if(!b||!(0===P.length||/\s/.test(P)||u.indexOf(P)>-1))return e.Pass;S="both"}else S=d&&g(r,O)?"both":p.indexOf(a)>=0&&r.getRange(O,n(O.line,O.ch+3))==a+a+a?"skipThree":"skip";if(c){if(c!=S)return e.Pass}else c=S}var A=s%2?o.charAt(s-1):a,m=s%2?a:o.charAt(s+1);r.operation((function(){if("skip"==c)f(r,1);else if("skipThree"==c)f(r,3);else if("surround"==c){for(var e=r.getSelections(),n=0;n<e.length;n++)e[n]=A+e[n]+m;for(r.replaceSelections(e,"around"),e=r.listSelections().slice(),n=0;n<e.length;n++)e[n]=h(e[n]);r.setSelections(e)}else"both"==c?(r.replaceSelection(A+m,null),r.triggerElectric(A+m),f(r,-1)):"addFour"==c&&(r.replaceSelection(A+A+A+A,"before"),f(r,1))}))}function d(e,r){var t=e.getRange(n(r.line,r.ch-1),n(r.line,r.ch+1));return 2==t.length?t:null}function g(e,r){var t=e.getTokenAt(n(r.line,r.ch+1));return/\bstring/.test(t.type)&&t.start==r.ch&&(0==r.ch||!/\bstring/.test(e.getTokenTypeAt(r)))}s(i,"ensureBound"),i(r.pairs+"`"),s(o,"handler"),s(l,"getConfig"),s(c,"handleBackspace"),s(u,"handleEnter"),s(f,"moveSel"),s(h,"contractSelection"),s(p,"handleChar"),s(d,"charsAround"),s(g,"stringStartsAfter")}(i.a.exports);var u=c.exports,f=Object.freeze(l((t={__proto__:null},(0,a.Z)(t,Symbol.toStringTag,"Module"),(0,a.Z)(t,"default",u),t),[c.exports]))}}]);
//# sourceMappingURL=598.79c7e95e.chunk.js.map