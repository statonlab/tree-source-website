webpackJsonp([13],{"0KNA":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n("GiK3"),a=n.n(r),i=n("EFqf"),s=n.n(i),o=n("cabM"),l=n("TIMf"),c=n("ePhh"),u=n("saAw"),p=n("KSGD"),h=n.n(p),f=n("FJHE"),m=n("DakW"),g=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var d=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={content:"",loading:!0},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,m["a"]),g(t,[{key:"componentDidMount",value:function(){var e=this;window.fixHeight(),axios.get(this.props.docPath).then(function(t){e.setState({content:t.data.data})}).catch(function(e){console.log(e)}).then(function(){e.setState({loading:!1}),window.fixHeight()});var t=this.props.title||"About Us";document.title=t+" - TreeSnap"}},{key:"render",value:function(){return a.a.createElement("div",{className:"document"},a.a.createElement(o.a,null),a.a.createElement(u.a,{visible:this.state.loading}),a.a.createElement("div",{className:"home-section short-content"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"columns"},a.a.createElement("div",{className:"column is-3"},a.a.createElement(c.a,{links:f.a,title:"Knowledge Base"})),a.a.createElement("div",{className:"column"},a.a.createElement("div",{className:"box body"},a.a.createElement("div",{dangerouslySetInnerHTML:{__html:s()(this.state.content)}}),a.a.createElement(u.a,{visible:this.state.loading,inline:!0})))))),a.a.createElement(l.a,null))}}]),t}();t.default=d,d.propTypes={docPath:h.a.string.isRequired,title:h.a.string},f.a.defaultProps={title:!1}},DakW:function(e,t,n){"use strict";var r=n("GiK3");n.n(r);var a=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return window.ga&&setTimeout(function(){return window.ga("send","pageview")},2500),n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),t}();t.a=a},EFqf:function(e,t,n){(function(t){!function(t){"use strict";var n={newline:/^\n+/,code:/^( {4}[^\n]+\n*)+/,fences:g,hr:/^ {0,3}((?:- *){3,}|(?:_ *){3,}|(?:\* *){3,})(?:\n+|$)/,heading:/^ *(#{1,6}) *([^\n]+?) *#* *(?:\n+|$)/,nptable:g,blockquote:/^( {0,3}> ?(paragraph|[^\n]*)(?:\n|$))+/,list:/^( *)(bull) [\s\S]+?(?:hr|def|\n{2,}(?! )(?!\1bull )\n*|\s*$)/,html:/^ *(?:comment *(?:\n|\s*$)|closed *(?:\n{2,}|\s*$)|closing *(?:\n{2,}|\s*$))/,def:/^ {0,3}\[(label)\]: *\n? *<?([^\s>]+)>?(?:(?: +\n? *| *\n *)(title))? *(?:\n+|$)/,table:g,lheading:/^([^\n]+)\n *(=|-){2,} *(?:\n+|$)/,paragraph:/^([^\n]+(?:\n?(?!hr|heading|lheading| {0,3}>|tag)[^\n]+)+)/,text:/^[^\n]+/};function r(e){this.tokens=[],this.tokens.links={},this.options=e||b.defaults,this.rules=n.normal,this.options.gfm&&(this.options.tables?this.rules=n.tables:this.rules=n.gfm)}n._label=/(?:\\[\[\]]|[^\[\]])+/,n._title=/(?:"(?:\\"|[^"]|"[^"\n]*")*"|'\n?(?:[^'\n]+\n?)*'|\([^()]*\))/,n.def=p(n.def).replace("label",n._label).replace("title",n._title).getRegex(),n.bullet=/(?:[*+-]|\d+\.)/,n.item=/^( *)(bull) [^\n]*(?:\n(?!\1bull )[^\n]*)*/,n.item=p(n.item,"gm").replace(/bull/g,n.bullet).getRegex(),n.list=p(n.list).replace(/bull/g,n.bullet).replace("hr","\\n+(?=\\1?(?:(?:- *){3,}|(?:_ *){3,}|(?:\\* *){3,})(?:\\n+|$))").replace("def","\\n+(?="+n.def.source+")").getRegex(),n._tag="(?!(?:a|em|strong|small|s|cite|q|dfn|abbr|data|time|code|var|samp|kbd|sub|sup|i|b|u|mark|ruby|rt|rp|bdi|bdo|span|br|wbr|ins|del|img)\\b)\\w+(?!:|[^\\w\\s@]*@)\\b",n.html=p(n.html).replace("comment",/<!--[\s\S]*?-->/).replace("closed",/<(tag)[\s\S]+?<\/\1>/).replace("closing",/<tag(?:"[^"]*"|'[^']*'|\s[^'"\/>\s]*)*?\/?>/).replace(/tag/g,n._tag).getRegex(),n.paragraph=p(n.paragraph).replace("hr",n.hr).replace("heading",n.heading).replace("lheading",n.lheading).replace("tag","<"+n._tag).getRegex(),n.blockquote=p(n.blockquote).replace("paragraph",n.paragraph).getRegex(),n.normal=d({},n),n.gfm=d({},n.normal,{fences:/^ *(`{3,}|~{3,})[ \.]*(\S+)? *\n([\s\S]*?)\n? *\1 *(?:\n+|$)/,paragraph:/^/,heading:/^ *(#{1,6}) +([^\n]+?) *#* *(?:\n+|$)/}),n.gfm.paragraph=p(n.paragraph).replace("(?!","(?!"+n.gfm.fences.source.replace("\\1","\\2")+"|"+n.list.source.replace("\\1","\\3")+"|").getRegex(),n.tables=d({},n.gfm,{nptable:/^ *(\S.*\|.*)\n *([-:]+ *\|[-| :]*)\n((?:.*\|.*(?:\n|$))*)\n*/,table:/^ *\|(.+)\n *\|( *[-:]+[-| :]*)\n((?: *\|.*(?:\n|$))*)\n*/}),r.rules=n,r.lex=function(e,t){return new r(t).lex(e)},r.prototype.lex=function(e){return e=e.replace(/\r\n|\r/g,"\n").replace(/\t/g,"    ").replace(/\u00a0/g," ").replace(/\u2424/g,"\n"),this.token(e,!0)},r.prototype.token=function(e,t){var r,a,i,s,o,l,c,u,p,h,f;for(e=e.replace(/^ +$/gm,"");e;)if((i=this.rules.newline.exec(e))&&(e=e.substring(i[0].length),i[0].length>1&&this.tokens.push({type:"space"})),i=this.rules.code.exec(e))e=e.substring(i[0].length),i=i[0].replace(/^ {4}/gm,""),this.tokens.push({type:"code",text:this.options.pedantic?i:i.replace(/\n+$/,"")});else if(i=this.rules.fences.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"code",lang:i[2],text:i[3]||""});else if(i=this.rules.heading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:i[1].length,text:i[2]});else if(t&&(i=this.rules.nptable.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/\n$/,"").split("\n")},u=0;u<l.align.length;u++)/^ *-+: *$/.test(l.align[u])?l.align[u]="right":/^ *:-+: *$/.test(l.align[u])?l.align[u]="center":/^ *:-+ *$/.test(l.align[u])?l.align[u]="left":l.align[u]=null;for(u=0;u<l.cells.length;u++)l.cells[u]=l.cells[u].split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.hr.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"hr"});else if(i=this.rules.blockquote.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"blockquote_start"}),i=i[0].replace(/^ *> ?/gm,""),this.token(i,t),this.tokens.push({type:"blockquote_end"});else if(i=this.rules.list.exec(e)){for(e=e.substring(i[0].length),f=(s=i[2]).length>1,this.tokens.push({type:"list_start",ordered:f,start:f?+s:""}),r=!1,h=(i=i[0].match(this.rules.item)).length,u=0;u<h;u++)c=(l=i[u]).length,~(l=l.replace(/^ *([*+-]|\d+\.) +/,"")).indexOf("\n ")&&(c-=l.length,l=this.options.pedantic?l.replace(/^ {1,4}/gm,""):l.replace(new RegExp("^ {1,"+c+"}","gm"),"")),this.options.smartLists&&u!==h-1&&(s===(o=n.bullet.exec(i[u+1])[0])||s.length>1&&o.length>1||(e=i.slice(u+1).join("\n")+e,u=h-1)),a=r||/\n\n(?!\s*$)/.test(l),u!==h-1&&(r="\n"===l.charAt(l.length-1),a||(a=r)),this.tokens.push({type:a?"loose_item_start":"list_item_start"}),this.token(l,!1),this.tokens.push({type:"list_item_end"});this.tokens.push({type:"list_end"})}else if(i=this.rules.html.exec(e))e=e.substring(i[0].length),this.tokens.push({type:this.options.sanitize?"paragraph":"html",pre:!this.options.sanitizer&&("pre"===i[1]||"script"===i[1]||"style"===i[1]),text:i[0]});else if(t&&(i=this.rules.def.exec(e)))e=e.substring(i[0].length),i[3]&&(i[3]=i[3].substring(1,i[3].length-1)),p=i[1].toLowerCase(),this.tokens.links[p]||(this.tokens.links[p]={href:i[2],title:i[3]});else if(t&&(i=this.rules.table.exec(e))){for(e=e.substring(i[0].length),l={type:"table",header:i[1].replace(/^ *| *\| *$/g,"").split(/ *\| */),align:i[2].replace(/^ *|\| *$/g,"").split(/ *\| */),cells:i[3].replace(/(?: *\| *)?\n$/,"").split("\n")},u=0;u<l.align.length;u++)/^ *-+: *$/.test(l.align[u])?l.align[u]="right":/^ *:-+: *$/.test(l.align[u])?l.align[u]="center":/^ *:-+ *$/.test(l.align[u])?l.align[u]="left":l.align[u]=null;for(u=0;u<l.cells.length;u++)l.cells[u]=l.cells[u].replace(/^ *\| *| *\| *$/g,"").split(/ *\| */);this.tokens.push(l)}else if(i=this.rules.lheading.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"heading",depth:"="===i[2]?1:2,text:i[1]});else if(t&&(i=this.rules.paragraph.exec(e)))e=e.substring(i[0].length),this.tokens.push({type:"paragraph",text:"\n"===i[1].charAt(i[1].length-1)?i[1].slice(0,-1):i[1]});else if(i=this.rules.text.exec(e))e=e.substring(i[0].length),this.tokens.push({type:"text",text:i[0]});else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0));return this.tokens};var a={escape:/^\\([\\`*{}\[\]()#+\-.!_>])/,autolink:/^<(scheme:[^\s\x00-\x1f<>]*|email)>/,url:g,tag:/^<!--[\s\S]*?-->|^<\/?[a-zA-Z0-9\-]+(?:"[^"]*"|'[^']*'|\s[^<'">\/\s]*)*?\/?>/,link:/^!?\[(inside)\]\(href\)/,reflink:/^!?\[(inside)\]\s*\[([^\]]*)\]/,nolink:/^!?\[((?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]])*)\]/,strong:/^__([\s\S]+?)__(?!_)|^\*\*([\s\S]+?)\*\*(?!\*)/,em:/^_([^\s_](?:[^_]|__)+?[^\s_])_\b|^\*((?:\*\*|[^*])+?)\*(?!\*)/,code:/^(`+)\s*([\s\S]*?[^`]?)\s*\1(?!`)/,br:/^ {2,}\n(?!\s*$)/,del:g,text:/^[\s\S]+?(?=[\\<!\[`*]|\b_| {2,}\n|$)/};function i(e,t){if(this.options=t||b.defaults,this.links=e,this.rules=a.normal,this.renderer=this.options.renderer||new s,this.renderer.options=this.options,!this.links)throw new Error("Tokens array requires a `links` property.");this.options.gfm?this.options.breaks?this.rules=a.breaks:this.rules=a.gfm:this.options.pedantic&&(this.rules=a.pedantic)}function s(e){this.options=e||{}}function o(){}function l(e){this.tokens=[],this.token=null,this.options=e||b.defaults,this.options.renderer=this.options.renderer||new s,this.renderer=this.options.renderer,this.renderer.options=this.options}function c(e,t){return e.replace(t?/&/g:/&(?!#?\w+;)/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#39;")}function u(e){return e.replace(/&(#(?:\d+)|(?:#x[0-9A-Fa-f]+)|(?:\w+));?/gi,function(e,t){return"colon"===(t=t.toLowerCase())?":":"#"===t.charAt(0)?"x"===t.charAt(1)?String.fromCharCode(parseInt(t.substring(2),16)):String.fromCharCode(+t.substring(1)):""})}function p(e,t){return e=e.source,t=t||"",{replace:function(t,n){return n=(n=n.source||n).replace(/(^|[^\[])\^/g,"$1"),e=e.replace(t,n),this},getRegex:function(){return new RegExp(e,t)}}}function h(e,t){return f[" "+e]||(/^[^:]+:\/*[^/]*$/.test(e)?f[" "+e]=e+"/":f[" "+e]=e.replace(/[^/]*$/,"")),e=f[" "+e],"//"===t.slice(0,2)?e.replace(/:[\s\S]*/,":")+t:"/"===t.charAt(0)?e.replace(/(:\/*[^/]*)[\s\S]*/,"$1")+t:e+t}a._scheme=/[a-zA-Z][a-zA-Z0-9+.-]{1,31}/,a._email=/[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+(@)[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+(?![-_])/,a.autolink=p(a.autolink).replace("scheme",a._scheme).replace("email",a._email).getRegex(),a._inside=/(?:\[[^\[\]]*\]|\\[\[\]]|[^\[\]]|\](?=[^\[]*\]))*/,a._href=/\s*<?([\s\S]*?)>?(?:\s+['"]([\s\S]*?)['"])?\s*/,a.link=p(a.link).replace("inside",a._inside).replace("href",a._href).getRegex(),a.reflink=p(a.reflink).replace("inside",a._inside).getRegex(),a.normal=d({},a),a.pedantic=d({},a.normal,{strong:/^__(?=\S)([\s\S]*?\S)__(?!_)|^\*\*(?=\S)([\s\S]*?\S)\*\*(?!\*)/,em:/^_(?=\S)([\s\S]*?\S)_(?!_)|^\*(?=\S)([\s\S]*?\S)\*(?!\*)/}),a.gfm=d({},a.normal,{escape:p(a.escape).replace("])","~|])").getRegex(),url:p(/^((?:ftp|https?):\/\/|www\.)(?:[a-zA-Z0-9\-]+\.?)+[^\s<]*|^email/).replace("email",a._email).getRegex(),_backpedal:/(?:[^?!.,:;*_~()&]+|\([^)]*\)|&(?![a-zA-Z0-9]+;$)|[?!.,:;*_~)]+(?!$))+/,del:/^~~(?=\S)([\s\S]*?\S)~~/,text:p(a.text).replace("]|","~]|").replace("|","|https?://|ftp://|www\\.|[a-zA-Z0-9.!#$%&'*+/=?^_`{\\|}~-]+@|").getRegex()}),a.breaks=d({},a.gfm,{br:p(a.br).replace("{2,}","*").getRegex(),text:p(a.gfm.text).replace("{2,}","*").getRegex()}),i.rules=a,i.output=function(e,t,n){return new i(t,n).output(e)},i.prototype.output=function(e){for(var t,n,r,a,i="";e;)if(a=this.rules.escape.exec(e))e=e.substring(a[0].length),i+=a[1];else if(a=this.rules.autolink.exec(e))e=e.substring(a[0].length),r="@"===a[2]?"mailto:"+(n=c(this.mangle(a[1]))):n=c(a[1]),i+=this.renderer.link(r,null,n);else if(this.inLink||!(a=this.rules.url.exec(e))){if(a=this.rules.tag.exec(e))!this.inLink&&/^<a /i.test(a[0])?this.inLink=!0:this.inLink&&/^<\/a>/i.test(a[0])&&(this.inLink=!1),e=e.substring(a[0].length),i+=this.options.sanitize?this.options.sanitizer?this.options.sanitizer(a[0]):c(a[0]):a[0];else if(a=this.rules.link.exec(e))e=e.substring(a[0].length),this.inLink=!0,i+=this.outputLink(a,{href:a[2],title:a[3]}),this.inLink=!1;else if((a=this.rules.reflink.exec(e))||(a=this.rules.nolink.exec(e))){if(e=e.substring(a[0].length),t=(a[2]||a[1]).replace(/\s+/g," "),!(t=this.links[t.toLowerCase()])||!t.href){i+=a[0].charAt(0),e=a[0].substring(1)+e;continue}this.inLink=!0,i+=this.outputLink(a,t),this.inLink=!1}else if(a=this.rules.strong.exec(e))e=e.substring(a[0].length),i+=this.renderer.strong(this.output(a[2]||a[1]));else if(a=this.rules.em.exec(e))e=e.substring(a[0].length),i+=this.renderer.em(this.output(a[2]||a[1]));else if(a=this.rules.code.exec(e))e=e.substring(a[0].length),i+=this.renderer.codespan(c(a[2].trim(),!0));else if(a=this.rules.br.exec(e))e=e.substring(a[0].length),i+=this.renderer.br();else if(a=this.rules.del.exec(e))e=e.substring(a[0].length),i+=this.renderer.del(this.output(a[1]));else if(a=this.rules.text.exec(e))e=e.substring(a[0].length),i+=this.renderer.text(c(this.smartypants(a[0])));else if(e)throw new Error("Infinite loop on byte: "+e.charCodeAt(0))}else a[0]=this.rules._backpedal.exec(a[0])[0],e=e.substring(a[0].length),"@"===a[2]?r="mailto:"+(n=c(a[0])):(n=c(a[0]),r="www."===a[1]?"http://"+n:n),i+=this.renderer.link(r,null,n);return i},i.prototype.outputLink=function(e,t){var n=c(t.href),r=t.title?c(t.title):null;return"!"!==e[0].charAt(0)?this.renderer.link(n,r,this.output(e[1])):this.renderer.image(n,r,c(e[1]))},i.prototype.smartypants=function(e){return this.options.smartypants?e.replace(/---/g,"—").replace(/--/g,"–").replace(/(^|[-\u2014/(\[{"\s])'/g,"$1‘").replace(/'/g,"’").replace(/(^|[-\u2014/(\[{\u2018\s])"/g,"$1“").replace(/"/g,"”").replace(/\.{3}/g,"…"):e},i.prototype.mangle=function(e){if(!this.options.mangle)return e;for(var t,n="",r=e.length,a=0;a<r;a++)t=e.charCodeAt(a),Math.random()>.5&&(t="x"+t.toString(16)),n+="&#"+t+";";return n},s.prototype.code=function(e,t,n){if(this.options.highlight){var r=this.options.highlight(e,t);null!=r&&r!==e&&(n=!0,e=r)}return t?'<pre><code class="'+this.options.langPrefix+c(t,!0)+'">'+(n?e:c(e,!0))+"\n</code></pre>\n":"<pre><code>"+(n?e:c(e,!0))+"\n</code></pre>"},s.prototype.blockquote=function(e){return"<blockquote>\n"+e+"</blockquote>\n"},s.prototype.html=function(e){return e},s.prototype.heading=function(e,t,n){return"<h"+t+' id="'+this.options.headerPrefix+n.toLowerCase().replace(/[^\w]+/g,"-")+'">'+e+"</h"+t+">\n"},s.prototype.hr=function(){return this.options.xhtml?"<hr/>\n":"<hr>\n"},s.prototype.list=function(e,t,n){var r=t?"ol":"ul";return"<"+r+(t&&1!==n?' start="'+n+'"':"")+">\n"+e+"</"+r+">\n"},s.prototype.listitem=function(e){return"<li>"+e+"</li>\n"},s.prototype.paragraph=function(e){return"<p>"+e+"</p>\n"},s.prototype.table=function(e,t){return"<table>\n<thead>\n"+e+"</thead>\n<tbody>\n"+t+"</tbody>\n</table>\n"},s.prototype.tablerow=function(e){return"<tr>\n"+e+"</tr>\n"},s.prototype.tablecell=function(e,t){var n=t.header?"th":"td";return(t.align?"<"+n+' style="text-align:'+t.align+'">':"<"+n+">")+e+"</"+n+">\n"},s.prototype.strong=function(e){return"<strong>"+e+"</strong>"},s.prototype.em=function(e){return"<em>"+e+"</em>"},s.prototype.codespan=function(e){return"<code>"+e+"</code>"},s.prototype.br=function(){return this.options.xhtml?"<br/>":"<br>"},s.prototype.del=function(e){return"<del>"+e+"</del>"},s.prototype.link=function(e,t,n){if(this.options.sanitize){try{var r=decodeURIComponent(u(e)).replace(/[^\w:]/g,"").toLowerCase()}catch(e){return n}if(0===r.indexOf("javascript:")||0===r.indexOf("vbscript:")||0===r.indexOf("data:"))return n}this.options.baseUrl&&!m.test(e)&&(e=h(this.options.baseUrl,e));var a='<a href="'+e+'"';return t&&(a+=' title="'+t+'"'),a+=">"+n+"</a>"},s.prototype.image=function(e,t,n){this.options.baseUrl&&!m.test(e)&&(e=h(this.options.baseUrl,e));var r='<img src="'+e+'" alt="'+n+'"';return t&&(r+=' title="'+t+'"'),r+=this.options.xhtml?"/>":">"},s.prototype.text=function(e){return e},o.prototype.strong=o.prototype.em=o.prototype.codespan=o.prototype.del=o.prototype.text=function(e){return e},o.prototype.link=o.prototype.image=function(e,t,n){return""+n},o.prototype.br=function(){return""},l.parse=function(e,t){return new l(t).parse(e)},l.prototype.parse=function(e){this.inline=new i(e.links,this.options),this.inlineText=new i(e.links,d({},this.options,{renderer:new o})),this.tokens=e.reverse();for(var t="";this.next();)t+=this.tok();return t},l.prototype.next=function(){return this.token=this.tokens.pop()},l.prototype.peek=function(){return this.tokens[this.tokens.length-1]||0},l.prototype.parseText=function(){for(var e=this.token.text;"text"===this.peek().type;)e+="\n"+this.next().text;return this.inline.output(e)},l.prototype.tok=function(){switch(this.token.type){case"space":return"";case"hr":return this.renderer.hr();case"heading":return this.renderer.heading(this.inline.output(this.token.text),this.token.depth,u(this.inlineText.output(this.token.text)));case"code":return this.renderer.code(this.token.text,this.token.lang,this.token.escaped);case"table":var e,t,n,r,a="",i="";for(n="",e=0;e<this.token.header.length;e++)n+=this.renderer.tablecell(this.inline.output(this.token.header[e]),{header:!0,align:this.token.align[e]});for(a+=this.renderer.tablerow(n),e=0;e<this.token.cells.length;e++){for(t=this.token.cells[e],n="",r=0;r<t.length;r++)n+=this.renderer.tablecell(this.inline.output(t[r]),{header:!1,align:this.token.align[r]});i+=this.renderer.tablerow(n)}return this.renderer.table(a,i);case"blockquote_start":for(i="";"blockquote_end"!==this.next().type;)i+=this.tok();return this.renderer.blockquote(i);case"list_start":i="";for(var s=this.token.ordered,o=this.token.start;"list_end"!==this.next().type;)i+=this.tok();return this.renderer.list(i,s,o);case"list_item_start":for(i="";"list_item_end"!==this.next().type;)i+="text"===this.token.type?this.parseText():this.tok();return this.renderer.listitem(i);case"loose_item_start":for(i="";"list_item_end"!==this.next().type;)i+=this.tok();return this.renderer.listitem(i);case"html":var l=this.token.pre||this.options.pedantic?this.token.text:this.inline.output(this.token.text);return this.renderer.html(l);case"paragraph":return this.renderer.paragraph(this.inline.output(this.token.text));case"text":return this.renderer.paragraph(this.parseText())}};var f={},m=/^$|^[a-z][a-z0-9+.-]*:|^[?#]/i;function g(){}function d(e){for(var t,n,r=1;r<arguments.length;r++)for(n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}function b(e,t,n){if(void 0===e||null===e)throw new Error("marked(): input parameter is undefined or null");if("string"!=typeof e)throw new Error("marked(): input parameter is of type "+Object.prototype.toString.call(e)+", string expected");if(n||"function"==typeof t){n||(n=t,t=null);var a,i,s=(t=d({},b.defaults,t||{})).highlight,o=0;try{a=r.lex(e,t)}catch(e){return n(e)}i=a.length;var u=function(e){if(e)return t.highlight=s,n(e);var r;try{r=l.parse(a,t)}catch(t){e=t}return t.highlight=s,e?n(e):n(null,r)};if(!s||s.length<3)return u();if(delete t.highlight,!i)return u();for(;o<a.length;o++)!function(e){"code"!==e.type?--i||u():s(e.text,e.lang,function(t,n){return t?u(t):null==n||n===e.text?--i||u():(e.text=n,e.escaped=!0,void(--i||u()))})}(a[o])}else try{return t&&(t=d({},b.defaults,t)),l.parse(r.lex(e,t),t)}catch(e){if(e.message+="\nPlease report this to https://github.com/markedjs/marked.",(t||b.defaults).silent)return"<p>An error occurred:</p><pre>"+c(e.message+"",!0)+"</pre>";throw e}}g.exec=g,b.options=b.setOptions=function(e){return d(b.defaults,e),b},b.defaults={gfm:!0,tables:!0,breaks:!1,pedantic:!1,sanitize:!1,sanitizer:null,mangle:!0,smartLists:!1,silent:!1,highlight:null,langPrefix:"lang-",smartypants:!1,headerPrefix:"",renderer:new s,xhtml:!1,baseUrl:null},b.Parser=l,b.parser=l.parse,b.Renderer=s,b.TextRenderer=o,b.Lexer=r,b.lexer=r.lex,b.InlineLexer=i,b.inlineLexer=i.output,b.parse=b,e.exports=b}(this||"undefined"!=typeof window&&window)}).call(t,n("DuR2"))},FJHE:function(e,t,n){"use strict";t.a=[{to:"/about",icon:"fa-address-card-o",label:"About"},{to:"/trees",icon:"fa-tree",label:"Trees"},{to:"/partners",icon:"fa-handshake-o",label:"Partners"},{to:"/faq",icon:"fa-question-circle-o",label:"FAQ"},{to:"/privacy-policy",icon:"fa-eye-slash",label:"Privacy Policy"},{to:"/terms-of-use",icon:"fa-file-text-o",label:"Terms of Use"},{to:"/contact",icon:"fa-envelope-o",label:"Contact Us"}]},IFrJ:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.setPath()}return r(e,[{key:"setPath",value:function(){this.path=window.location.pathname,"/"!==this.path&&this.path.replace(/\/$/g,"")}},{key:"isActive",value:function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"is-active";return this.setPath(),t&&this.path===e?n:!t&&this.path.indexOf(e)>=0?n:null}},{key:"parseUrl",value:function(e){var t={};return(e=e.substr(1)).split("&").forEach(function(e){if(e){var n=(e=e.split("+").join(" ")).indexOf("="),r=n>-1?e.substr(0,n):e,a=n>-1?decodeURIComponent(e.substr(n+1)):"",i=r.indexOf("[");if(-1===i)t[decodeURIComponent(r)]=a;else{var s=r.indexOf("]",i),o=decodeURIComponent(r.substring(i+1,s));r=decodeURIComponent(r.substring(0,i)),t[r]||(t[r]=[]),o?t[r][o]=a:t[r].push(a)}}}),t}}]),e}();t.a=new a},"OE/d":function(e,t,n){"use strict";var r=n("t4LX"),a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var s=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),void 0===t&&(t=JSON.parse(JSON.stringify(window.TreeSnap))),this._role=null!==t.role?t.role.toLowerCase():null,this._isLoggedIn=t.loggedIn,this._isAdmin="admin"===this._role,this._isScientist="scientist"===this._role,this._user=t.user,this._groups=[],this._abilities={member:[],owner:[],admin:[]},this._role&&(this._role=this._role.toLowerCase()),this.initAbilities(),this.loadGroups(),r.a.listen("user.groups.updated",this.loadGroups.bind(this))}return i(e,[{key:"initAbilities",value:function(){this._abilities.user=["create notes","create collections","flag observations"],this._abilities.scientist=["contact users","confirm species","access admin pages","view accurate location"].concat(this._abilities.user),this._abilities.admin=["manage users","delete observations","manage events"].concat(this._abilities.scientist)}},{key:"loadGroups",value:function(){var e=this;this.authenticated()&&axios.get("/web/groups?with_users=1").then(function(t){e._groups=t.data.data.map(function(e){return{id:e.id,users:e.users.map(function(e){return e.id})}})}).catch(function(e){console.log(e)})}},{key:"can",value:function(e){return!(!this.authenticated()||null===this._role)&&this._abilities[this._role].indexOf(e)>-1}},{key:"owns",value:function(e,t){return void 0===t&&(t="user_id"),"object"===(void 0===e?"undefined":a(e))?Array.isArray(e)?e.every(this.owns.bind(this)):void 0!==e[t]&&e[t]===this._user.id:"number"==typeof e&&this._user.id===e}},{key:"inGroupWith",value:function(e){for(var t in this._groups)if(this._groups[t].users.indexOf(e)>-1)return!0;return!1}},{key:"inGroup",value:function(e){for(var t in this._groups)if(this._groups[t].id===e)return!0;return!1}},{key:"authenticated",value:function(){return this._isLoggedIn}},{key:"admin",value:function(){return this._isAdmin}},{key:"scientist",value:function(){return this._isScientist}},{key:"role",value:function(){return this._role}},{key:"user",value:function(){return this._user}}]),e}();t.a=new s},TIMf:function(e,t,n){"use strict";var r=n("GiK3"),a=n.n(r),i=n("OE/d"),s=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var o=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),s(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"home-footer"},a.a.createElement("div",{className:"container"},a.a.createElement("div",{className:"columns has-text-centered"},a.a.createElement("div",{className:"column is-4"},a.a.createElement("p",null,a.a.createElement("b",null,"Site Map")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/map"},"Observations Map")),i.a.authenticated()?a.a.createElement("li",null,a.a.createElement("a",{href:"/account"},"Your Account")):null,i.a.authenticated()?null:a.a.createElement("li",null,a.a.createElement("a",{href:"/register"},"Registration")),i.a.authenticated()?null:a.a.createElement("li",null,a.a.createElement("a",{href:"/login"},"Login")),a.a.createElement("li",null,a.a.createElement("a",{href:"/developer"},"Developer")))),a.a.createElement("div",{className:"column is-4"},a.a.createElement("p",null,a.a.createElement("b",null,"Resources")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/partners"},"About Us")),a.a.createElement("li",null,a.a.createElement("a",{href:"/contact"},"Contact US")),a.a.createElement("li",null,a.a.createElement("a",{href:"/about"},"Scientific Partners")),a.a.createElement("li",null,a.a.createElement("a",{href:"/trees"},"The Trees of TreeSnap")),a.a.createElement("li",null,a.a.createElement("a",{href:"/faq"},"Frequently Asked Questions")))),a.a.createElement("div",{className:"column is-4"},a.a.createElement("p",{className:"mb-1"},a.a.createElement("b",null,"Legal")),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("a",{href:"/privacy-policy"},"Privacy Policy")),a.a.createElement("li",null,a.a.createElement("a",{href:"/terms-of-use"},"Terms of Use"))))),a.a.createElement("div",{className:"columns logos"},a.a.createElement("div",{className:"column has-text-centered"},a.a.createElement("a",{href:"https://www.utk.edu/"},a.a.createElement("img",{src:"/images/ut3.png",alt:"University of Tennessee Logo"}))),a.a.createElement("div",{className:"column has-text-centered"},a.a.createElement("a",{href:"https://uky.edu"},a.a.createElement("img",{src:"/images/uky3.png",alt:"University of Kentucky Logo"}))),a.a.createElement("div",{className:"column has-text-centered"},a.a.createElement("a",{href:"https://www.nsf.gov/"},a.a.createElement("img",{src:"/images/nsf1.png",alt:"NSF Logo"})))),a.a.createElement("p",{className:"has-text-centered"},"Copyright © ",(new Date).getFullYear()," University of Tennessee Knoxville and University of Kentucky.")))}}]),t}();t.a=o},cabM:function(e,t,n){"use strict";var r=n("GiK3"),a=n.n(r),i=n("KSGD"),s=n.n(i),o=n("IFrJ"),l=n("F8kA"),c=n("OE/d"),u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var p=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var n=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return n.state={isActive:!1},n}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),u(t,[{key:"toggle",value:function(){this.setState({isActive:!this.state.isActive})}},{key:"render",value:function(){return a.a.createElement("nav",{className:"navbar"+(this.props.home?" home-nav":"")},a.a.createElement("div",{className:this.props.container?"container is-fluid":"container"},a.a.createElement("div",{className:"navbar-brand"},a.a.createElement(l.c,{to:"/",className:"navbar-item"},a.a.createElement("img",{src:"/logo/ts-logo-"+(this.props.home?"48":"32")+".png",alt:"Logo",className:"logo-img"}),a.a.createElement("span",{className:"logo-text"},a.a.createElement("b",null,"Tree"),a.a.createElement("span",{style:{fontWeight:300}},"Snap"))),a.a.createElement("div",{className:"navbar-burger",onClick:this.toggle.bind(this)},a.a.createElement("span",null),a.a.createElement("span",null),a.a.createElement("span",null))),a.a.createElement("div",{className:"navbar-menu"+(this.state.isActive?" is-active":"")},a.a.createElement("div",{className:"navbar-end"},a.a.createElement("a",{href:"https://www.facebook.com/treesnapapp/",className:"navbar-item"},a.a.createElement("span",{className:"icon"},a.a.createElement("i",{className:"fa fa-facebook"}))),a.a.createElement("a",{href:"https://twitter.com/Treesnapapp",className:"navbar-item"},a.a.createElement("span",{className:"icon"},a.a.createElement("i",{className:"fa fa-twitter"})))),a.a.createElement("div",{className:"navbar-end"},a.a.createElement(l.c,{exact:!0,to:"/",className:"navbar-item",activeClassName:"is-active"},"Home"),a.a.createElement(l.c,{to:"/map",className:"navbar-item",activeClassName:"is-active"},"Map"),a.a.createElement(l.c,{to:"/partners",className:"navbar-item",activeClassName:"is-active"},"Scientific Partners"),a.a.createElement(l.c,{to:"/about",className:"navbar-item",activeClassName:"is-active"},"About"),c.a.authenticated()?a.a.createElement("div",{className:"navbar-item"},a.a.createElement(l.c,{to:"/scientific-sampling",className:"navbar-item",activeClassName:"is-active"},"Scientific Sampling"),a.a.createElement("div",{className:"has-dropdown is-hoverable"},a.a.createElement(l.c,{to:"/account",className:"navbar-link",activeClassName:"is-active"},"Account"),a.a.createElement("div",{className:"navbar-dropdown"},a.a.createElement(l.c,{to:"/account/observations",className:"navbar-item",activeClassName:"is-active"},"My Observations"),a.a.createElement(l.c,{to:"/account/groups",className:"navbar-item",activeClassName:"is-active"},"Groups"),a.a.createElement(l.c,{to:"/account/collections",className:"navbar-item",activeClassName:"is-active"},"Collections"),a.a.createElement(l.c,{to:"/account/filters",className:"navbar-item",activeClassName:"is-active"},"Filters"),a.a.createElement("hr",{className:"navbar-divider"}),a.a.createElement(l.c,{to:"/account",className:"navbar-item",activeClassName:"is-active"},"Settings"),a.a.createElement("a",{href:"/logout",className:"navbar-item"},"Logout")))):null,c.a.authenticated()?null:a.a.createElement("a",{href:"/login",className:"navbar-item "+o.a.isActive("/login")},"Login"),c.a.authenticated()?null:a.a.createElement("a",{href:"/register",className:"navbar-item "+o.a.isActive("/register")},"Register"),c.a.can("access admin pages")?a.a.createElement("a",{href:"/admin",className:"navbar-item "+o.a.isActive("/admin",!1)},"Admin"):null))))}}]),t}();t.a=p,p.propTypes={container:s.a.bool,home:s.a.bool},p.defaultProps={container:!1,home:!1}},ePhh:function(e,t,n){"use strict";var r=n("GiK3"),a=n.n(r),i=n("KSGD"),s=n.n(i),o=n("F8kA"),l=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var c=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),l(t,[{key:"render",value:function(){return a.a.createElement("div",null,a.a.createElement("aside",{className:"menu admin-sidebar is-hidden-mobile",role:"navigation"},""!==this.props.title?a.a.createElement("p",{className:"menu-heading"},this.props.title):null,a.a.createElement("ul",{className:"menu-list"},this.props.links.map(function(e,t){return a.a.createElement("li",{key:"sidebar_"+t},a.a.createElement(o.c,{to:e.to,activeClassName:"is-active",exact:!0},a.a.createElement("i",{className:"fa "+e.icon})," ",e.label))}))),a.a.createElement("aside",{className:"tabs is-hidden-tablet home-tabs"},this.props.links.map(function(e,t){return a.a.createElement("li",{key:"sidebar_tab_"+t},a.a.createElement(o.c,{to:e.to,activeClassName:"is-active",exact:!0},a.a.createElement("span",{className:"icon is-small"},a.a.createElement("i",{className:"fa "+e.icon})),a.a.createElement("span",null,e.label)))})))}}]),t}();t.a=c,c.propTypes={links:s.a.array.isRequired,title:s.a.string},c.defaultProps={title:""}},saAw:function(e,t,n){"use strict";var r=n("GiK3"),a=n.n(r),i=n("KSGD"),s=n.n(i),o=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var l=function(e){function t(e){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,r["Component"]),o(t,[{key:"render",value:function(){return this.props.visible?this.props.inline?a.a.createElement("div",{className:"mt-1",style:this.props.containerStyle},a.a.createElement("i",{className:"fa fa-refresh fa-spin fa-2x"})):a.a.createElement("div",{className:"spinner-overlay",style:this.props.containerStyle},a.a.createElement("div",{className:"overlay-blur"}),a.a.createElement("span",{className:"spinner-container"},a.a.createElement("i",{className:"is-loading"}))):null}}]),t}();t.a=l,l.propTypes={visible:s.a.bool.isRequired,containerStyle:s.a.object,inline:s.a.bool},l.defaultProps={containerStyle:{},inline:!1}},t4LX:function(e,t,n){"use strict";var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}();var a=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}return r(e,[{key:"emit",value:function(e){var t=void 0;document.createEvent?(t=new Event(e),document.dispatchEvent(t)):(t=document.createEventObject(),document.fireEvent("on"+e,t))}},{key:"listen",value:function(e,t){document.addEventListener(e,t)}},{key:"remove",value:function(e,t){document.removeEventListener(e,t)}}]),e}();t.a=new a}});