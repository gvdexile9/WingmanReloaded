!function(e){var n="object"==typeof window&&window||"object"==typeof self&&self;"undefined"==typeof exports||exports.nodeType?n&&(n.hljs=e({}),"function"==typeof define&&define.amd&&define([],function(){return n.hljs})):e(exports)}(function(e){var n=[],t=Object.keys,r={},a={},i=/^(no-?highlight|plain|text)$/i,c=/\blang(?:uage)?-([\w-]+)\b/i,o=/((^(<[^>]+>|\t|)+|(?:\n)))/gm,u={case_insensitive:"cI",lexemes:"l",contains:"c",keywords:"k",subLanguage:"sL",className:"cN",begin:"b",beginKeywords:"bK",end:"e",endsWithParent:"eW",illegal:"i",excludeBegin:"eB",excludeEnd:"eE",returnBegin:"rB",returnEnd:"rE",relevance:"r",variants:"v",IDENT_RE:"IR",UNDERSCORE_IDENT_RE:"UIR",NUMBER_RE:"NR",C_NUMBER_RE:"CNR",BINARY_NUMBER_RE:"BNR",RE_STARTERS_RE:"RSR",BACKSLASH_ESCAPE:"BE",APOS_STRING_MODE:"ASM",QUOTE_STRING_MODE:"QSM",PHRASAL_WORDS_MODE:"PWM",C_LINE_COMMENT_MODE:"CLCM",C_BLOCK_COMMENT_MODE:"CBCM",HASH_COMMENT_MODE:"HCM",NUMBER_MODE:"NM",C_NUMBER_MODE:"CNM",BINARY_NUMBER_MODE:"BNM",CSS_NUMBER_MODE:"CSSNM",REGEXP_MODE:"RM",TITLE_MODE:"TM",UNDERSCORE_TITLE_MODE:"UTM",COMMENT:"C",beginRe:"bR",endRe:"eR",illegalRe:"iR",lexemesRe:"lR",terminators:"t",terminator_end:"tE"},s="</span>",l={classPrefix:"hljs-",tabReplace:null,useBR:!1,languages:void 0};function f(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function E(e){return e.nodeName.toLowerCase()}function g(e,n){var t=e&&e.exec(n);return t&&0===t.index}function R(e){return i.test(e)}function p(e){var n,t={},r=Array.prototype.slice.call(arguments,1);for(n in e)t[n]=e[n];return r.forEach(function(e){for(n in e)t[n]=e[n]}),t}function d(e){var n=[];return function e(t,r){for(var a=t.firstChild;a;a=a.nextSibling)3===a.nodeType?r+=a.nodeValue.length:1===a.nodeType&&(n.push({event:"start",offset:r,node:a}),r=e(a,r),E(a).match(/br|hr|img|input/)||n.push({event:"stop",offset:r,node:a}));return r}(e,0),n}function b(e){if(u&&!e.langApiRestored){for(var n in e.langApiRestored=!0,u)e[n]&&(e[u[n]]=e[n]);(e.c||[]).concat(e.v||[]).forEach(b)}}function h(e){function n(e){return e&&e.source||e}function r(t,r){return new RegExp(n(t),"m"+(e.cI?"i":"")+(r?"g":""))}!function a(i,c){if(!i.compiled){if(i.compiled=!0,i.k=i.k||i.bK,i.k){function o(n,t){e.cI&&(t=t.toLowerCase()),t.split(" ").forEach(function(e){var t=e.split("|");u[t[0]]=[n,t[1]?Number(t[1]):1]})}var u={};"string"==typeof i.k?o("keyword",i.k):t(i.k).forEach(function(e){o(e,i.k[e])}),i.k=u}i.lR=r(i.l||/\w+/,!0),c&&(i.bK&&(i.b="\\b("+i.bK.split(" ").join("|")+")\\b"),i.b||(i.b=/\B|\b/),i.bR=r(i.b),i.endSameAsBegin&&(i.e=i.b),i.e||i.eW||(i.e=/\B|\b/),i.e&&(i.eR=r(i.e)),i.tE=n(i.e)||"",i.eW&&c.tE&&(i.tE+=(i.e?"|":"")+c.tE)),i.i&&(i.iR=r(i.i)),null==i.r&&(i.r=1),i.c||(i.c=[]),i.c=Array.prototype.concat.apply([],i.c.map(function(e){return(n="self"===e?i:e).v&&!n.cached_variants&&(n.cached_variants=n.v.map(function(e){return p(n,{v:null},e)})),n.cached_variants||n.eW&&[p(n)]||[n];var n})),i.c.forEach(function(e){a(e,i)}),i.starts&&a(i.starts,c);var s=i.c.map(function(e){return e.bK?"\\.?(?:"+e.b+")\\.?":e.b}).concat([i.tE,i.i]).map(n).filter(Boolean);i.t=s.length?r(function(e,t){for(var r=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./,a=0,i="",c=0;c<e.length;c++){var o=a,u=n(e[c]);for(0<c&&(i+="|");0<u.length;){var s=r.exec(u);if(null==s){i+=u;break}i+=u.substring(0,s.index),u=u.substring(s.index+s[0].length),"\\"==s[0][0]&&s[1]?i+="\\"+String(Number(s[1])+o):(i+=s[0],"("==s[0]&&a++)}}return i}(s),!0):{exec:function(){return null}}}}(e)}function N(e,n,t,a){function i(e,n,t,r){var a='<span class="'+(r?"":l.classPrefix);return e?(a+=e+'">')+n+(t?"":s):n}function c(){b+=null!=p.sL?function(){var e="string"==typeof p.sL;if(e&&!r[p.sL])return f(_);var n=e?N(p.sL,_,!0,d[p.sL]):M(_,p.sL.length?p.sL:void 0);return 0<p.r&&(v+=n.r),e&&(d[p.sL]=n.top),i(n.language,n.value,!1,!0)}():function(){var e,n,t,r,a,c,o;if(!p.k)return f(_);for(r="",n=0,p.lR.lastIndex=0,t=p.lR.exec(_);t;)r+=f(_.substring(n,t.index)),a=p,c=t,o=E.cI?c[0].toLowerCase():c[0],(e=a.k.hasOwnProperty(o)&&a.k[o])?(v+=e[1],r+=i(e[0],f(t[0]))):r+=f(t[0]),n=p.lR.lastIndex,t=p.lR.exec(_);return r+f(_.substr(n))}(),_=""}function o(e){b+=e.cN?i(e.cN,"",!0):"",p=Object.create(e,{parent:{value:p}})}function u(e,n){if(_+=e,null==n)return c(),0;var r=function(e,n){var t,r,a;for(t=0,r=n.c.length;t<r;t++)if(g(n.c[t].bR,e))return n.c[t].endSameAsBegin&&(n.c[t].eR=(a=n.c[t].bR.exec(e)[0],new RegExp(a.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"m"))),n.c[t]}(n,p);if(r)return r.skip?_+=n:(r.eB&&(_+=n),c(),r.rB||r.eB||(_=n)),o(r),r.rB?0:n.length;var a=function e(n,t){if(g(n.eR,t)){for(;n.endsParent&&n.parent;)n=n.parent;return n}if(n.eW)return e(n.parent,t)}(p,n);if(a){var i=p;for(i.skip?_+=n:(i.rE||i.eE||(_+=n),c(),i.eE&&(_=n));p.cN&&(b+=s),p.skip||p.sL||(v+=p.r),(p=p.parent)!==a.parent;);return a.starts&&(a.endSameAsBegin&&(a.starts.eR=a.eR),o(a.starts)),i.rE?0:n.length}if(function(e,n){return!t&&g(p.iR,e)}(n))throw new Error('Illegal lexeme "'+n+'" for mode "'+(p.cN||"<unnamed>")+'"');return _+=n,n.length||1}var E=C(e);if(!E)throw new Error('Unknown language: "'+e+'"');h(E);var R,p=a||E,d={},b="";for(R=p;R!==E;R=R.parent)R.cN&&(b=i(R.cN,"",!0)+b);var _="",v=0;try{for(var m,O,B=0;p.t.lastIndex=B,m=p.t.exec(n);)O=u(n.substring(B,m.index),m[0]),B=m.index+O;for(u(n.substr(B)),R=p;R.parent;R=R.parent)R.cN&&(b+=s);return{r:v,value:b,language:e,top:p}}catch(e){if(e.message&&-1!==e.message.indexOf("Illegal"))return{r:0,value:f(n)};throw e}}function M(e,n){n=n||l.languages||t(r);var a={r:0,value:f(e)},i=a;return n.filter(C).filter(O).forEach(function(n){var t=N(n,e,!1);t.language=n,t.r>i.r&&(i=t),t.r>a.r&&(i=a,a=t)}),i.language&&(a.second_best=i),a}function _(e){return l.tabReplace||l.useBR?e.replace(o,function(e,n){return l.useBR&&"\n"===e?"<br>":l.tabReplace?n.replace(/\t/g,l.tabReplace):""}):e}function v(e){var t,r,i,o,u,s=function(e){var n,t,r,a,i=e.className+" ";if(i+=e.parentNode?e.parentNode.className:"",t=c.exec(i))return C(t[1])?t[1]:"no-highlight";for(n=0,r=(i=i.split(/\s+/)).length;n<r;n++)if(R(a=i[n])||C(a))return a}(e);R(s)||(l.useBR?(t=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=e.innerHTML.replace(/\n/g,"").replace(/<br[ \/]*>/g,"\n"):t=e,u=t.textContent,i=s?N(s,u,!0):M(u),(r=d(t)).length&&((o=document.createElementNS("http://www.w3.org/1999/xhtml","div")).innerHTML=i.value,i.value=function(e,t,r){var a=0,i="",c=[];function o(){return e.length&&t.length?e[0].offset!==t[0].offset?e[0].offset<t[0].offset?e:t:"start"===t[0].event?e:t:e.length?e:t}function u(e){i+="<"+E(e)+n.map.call(e.attributes,function(e){return" "+e.nodeName+'="'+f(e.value).replace('"',"&quot;")+'"'}).join("")+">"}function s(e){i+="</"+E(e)+">"}function l(e){("start"===e.event?u:s)(e.node)}for(;e.length||t.length;){var g=o();if(i+=f(r.substring(a,g[0].offset)),a=g[0].offset,g===e){for(c.reverse().forEach(s);l(g.splice(0,1)[0]),(g=o())===e&&g.length&&g[0].offset===a;);c.reverse().forEach(u)}else"start"===g[0].event?c.push(g[0].node):c.pop(),l(g.splice(0,1)[0])}return i+f(r.substr(a))}(r,d(o),u)),i.value=_(i.value),e.innerHTML=i.value,e.className=function(e,n,t){var r=n?a[n]:t,i=[e.trim()];return e.match(/\bhljs\b/)||i.push("hljs"),-1===e.indexOf(r)&&i.push(r),i.join(" ").trim()}(e.className,s,i.language),e.result={language:i.language,re:i.r},i.second_best&&(e.second_best={language:i.second_best.language,re:i.second_best.r}))}function m(){if(!m.called){m.called=!0;var e=document.querySelectorAll("pre code");n.forEach.call(e,v)}}function C(e){return e=(e||"").toLowerCase(),r[e]||r[a[e]]}function O(e){var n=C(e);return n&&!n.disableAutodetect}return e.highlight=N,e.highlightAuto=M,e.fixMarkup=_,e.highlightBlock=v,e.configure=function(e){l=p(l,e)},e.initHighlighting=m,e.initHighlightingOnLoad=function(){addEventListener("DOMContentLoaded",m,!1),addEventListener("load",m,!1)},e.registerLanguage=function(n,t){var i=r[n]=t(e);b(i),i.aliases&&i.aliases.forEach(function(e){a[e]=n})},e.listLanguages=function(){return t(r)},e.getLanguage=C,e.autoDetection=O,e.inherit=p,e.IR=e.IDENT_RE="[a-zA-Z]\\w*",e.UIR=e.UNDERSCORE_IDENT_RE="[a-zA-Z_]\\w*",e.NR=e.NUMBER_RE="\\b\\d+(\\.\\d+)?",e.CNR=e.C_NUMBER_RE="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",e.BNR=e.BINARY_NUMBER_RE="\\b(0b[01]+)",e.RSR=e.RE_STARTERS_RE="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",e.BE=e.BACKSLASH_ESCAPE={b:"\\\\[\\s\\S]",r:0},e.ASM=e.APOS_STRING_MODE={cN:"string",b:"'",e:"'",i:"\\n",c:[e.BE]},e.QSM=e.QUOTE_STRING_MODE={cN:"string",b:'"',e:'"',i:"\\n",c:[e.BE]},e.PWM=e.PHRASAL_WORDS_MODE={b:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},e.C=e.COMMENT=function(n,t,r){var a=e.inherit({cN:"comment",b:n,e:t,c:[]},r||{});return a.c.push(e.PWM),a.c.push({cN:"doctag",b:"(?:TODO|FIXME|NOTE|BUG|XXX):",r:0}),a},e.CLCM=e.C_LINE_COMMENT_MODE=e.C("//","$"),e.CBCM=e.C_BLOCK_COMMENT_MODE=e.C("/\\*","\\*/"),e.HCM=e.HASH_COMMENT_MODE=e.C("#","$"),e.NM=e.NUMBER_MODE={cN:"number",b:e.NR,r:0},e.CNM=e.C_NUMBER_MODE={cN:"number",b:e.CNR,r:0},e.BNM=e.BINARY_NUMBER_MODE={cN:"number",b:e.BNR,r:0},e.CSSNM=e.CSS_NUMBER_MODE={cN:"number",b:e.NR+"(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",r:0},e.RM=e.REGEXP_MODE={cN:"regexp",b:/\//,e:/\/[gimuy]*/,i:/\n/,c:[e.BE,{b:/\[/,e:/\]/,r:0,c:[e.BE]}]},e.TM=e.TITLE_MODE={cN:"title",b:e.IR,r:0},e.UTM=e.UNDERSCORE_TITLE_MODE={cN:"title",b:e.UIR,r:0},e.METHOD_GUARD={b:"\\.\\s*"+e.UIR,r:0},e}),hljs.registerLanguage("autohotkey",function(e){var n={b:"`[\\s\\S]"};return{cI:!0,aliases:["ahk"],k:{keyword:"Break Continue Critical Exit ExitApp Gosub Goto New OnExit Pause return SetBatchLines SetTimer Suspend Thread Throw Until ahk_id ahk_class ahk_pid ahk_exe ahk_group Func",literal:"true false NOT AND OR",built_in:"ComSpec Clipboard ClipboardAll ErrorLevel search"},c:[n,e.inherit(e.QSM,{c:[n]}),e.C(";","$",{r:0}),e.CBCM,{cN:"number",b:e.NR,r:0},{cN:"variable",b:"^v[a-zA-Z0-9]+"},{cN:"built_in",b:"^\\s*\\w+\\s*(,|%)"},{cN:"title",v:[{b:'^[^\\n";]+::(?!=)'},{b:'^[^\\n";]+:(?!=)',r:0}],v:[{b:"(:=)"}]},{cN:"meta",b:"^\\s*#\\w+",e:"$",r:0},{cN:"built_in",b:"A_[a-zA-Z0-9]+"},{b:",\\s*,"}]}});