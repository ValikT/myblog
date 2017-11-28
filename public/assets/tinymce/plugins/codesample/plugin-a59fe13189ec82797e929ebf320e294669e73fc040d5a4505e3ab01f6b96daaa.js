!function(){var a={},b=function(b){for(var c=a[b],e=c.deps,f=c.defn,g=e.length,h=new Array(g),i=0;i<g;++i)h[i]=d(e[i]);var j=f.apply(null,h);if(void 0===j)throw"module ["+b+"] returned undefined";c.instance=j},c=function(b,c,d){if("string"!=typeof b)throw"module id must be a string";if(void 0===c)throw"no dependencies for "+b;if(void 0===d)throw"no definition function for "+b;a[b]={deps:c,defn:d,instance:void 0}},d=function(c){var d=a[c];if(void 0===d)throw"module ["+c+"] was undefined";return void 0===d.instance&&b(c),d.instance},e=function(a,b){for(var c=a.length,e=new Array(c),f=0;f<c;++f)e[f]=d(a[f]);b.apply(null,e)},f={};f.bolt={module:{api:{define:c,require:e,demand:d}}};var g=c,h=function(a,b){g(a,[],function(){return b})};g("1",[],function(){var a=function(b){var c=b,d=function(){return c},e=function(a){c=a},f=function(){return a(d())};return{get:d,set:e,clone:f}};return a}),h("9",tinymce.util.Tools.resolve),g("2",["9"],function(a){return a("tinymce.PluginManager")}),g("e",["9"],function(a){return a("tinymce.dom.DOMUtils")}),g("a",["e"],function(a){var b=function(a){return a.settings.codesample_content_css},c=function(a){return a.settings.codesample_languages},d=function(b){return Math.min(a.DOM.getViewPort().w,b.getParam("codesample_dialog_width",800))},e=function(b){return Math.min(a.DOM.getViewPort().w,b.getParam("codesample_dialog_height",650))};return{getContentCss:b,getLanguages:c,getDialogMinWidth:d,getDialogMinHeight:e}}),g("d",[],function(){var a={},b="undefined"!=typeof a?a:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{},c=function(){var a=/\blang(?:uage)?-(?!\*)(\w+)\b/i,c=b.Prism={util:{encode:function(a){return a instanceof d?new d(a.type,c.util.encode(a.content),a.alias):"Array"===c.util.type(a)?a.map(c.util.encode):a.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(a){return Object.prototype.toString.call(a).match(/\[object (\w+)\]/)[1]},clone:function(a){var b=c.util.type(a);switch(b){case"Object":var d={};for(var e in a)a.hasOwnProperty(e)&&(d[e]=c.util.clone(a[e]));return d;case"Array":return a.map&&a.map(function(a){return c.util.clone(a)})}return a}},languages:{extend:function(a,b){var d=c.util.clone(c.languages[a]);for(var e in b)d[e]=b[e];return d},insertBefore:function(a,b,d,e){e=e||c.languages;var f=e[a];if(2==arguments.length){d=arguments[1];for(var g in d)d.hasOwnProperty(g)&&(f[g]=d[g]);return f}var h={};for(var i in f)if(f.hasOwnProperty(i)){if(i==b)for(var g in d)d.hasOwnProperty(g)&&(h[g]=d[g]);h[i]=f[i]}return c.languages.DFS(c.languages,function(b,c){c===e[a]&&b!=a&&(this[b]=h)}),e[a]=h},DFS:function(a,b,d){for(var e in a)a.hasOwnProperty(e)&&(b.call(a,e,a[e],d||e),"Object"===c.util.type(a[e])?c.languages.DFS(a[e],b):"Array"===c.util.type(a[e])&&c.languages.DFS(a[e],b,e))}},plugins:{},highlightAll:function(a,b){for(var d,e=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),f=0;d=e[f++];)c.highlightElement(d,a===!0,b)},highlightElement:function(d,e,f){for(var g,h,i=d;i&&!a.test(i.className);)i=i.parentNode;i&&(g=(i.className.match(a)||[,""])[1],h=c.languages[g]),d.className=d.className.replace(a,"").replace(/\s+/g," ")+" language-"+g,i=d.parentNode,/pre/i.test(i.nodeName)&&(i.className=i.className.replace(a,"").replace(/\s+/g," ")+" language-"+g);var j=d.textContent,k={element:d,language:g,grammar:h,code:j};if(!j||!h)return void c.hooks.run("complete",k);if(c.hooks.run("before-highlight",k),e&&b.Worker){var l=new Worker(c.filename);l.onmessage=function(a){k.highlightedCode=a.data,c.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(k.element),c.hooks.run("after-highlight",k),c.hooks.run("complete",k)},l.postMessage(JSON.stringify({language:k.language,code:k.code,immediateClose:!0}))}else k.highlightedCode=c.highlight(k.code,k.grammar,k.language),c.hooks.run("before-insert",k),k.element.innerHTML=k.highlightedCode,f&&f.call(d),c.hooks.run("after-highlight",k),c.hooks.run("complete",k)},highlight:function(a,b,e){var f=c.tokenize(a,b);return d.stringify(c.util.encode(f),e)},tokenize:function(a,b,d){var e=c.Token,f=[a],g=b.rest;if(g){for(var h in g)b[h]=g[h];delete b.rest}a:for(var h in b)if(b.hasOwnProperty(h)&&b[h]){var i=b[h];i="Array"===c.util.type(i)?i:[i];for(var j=0;j<i.length;++j){var k=i[j],l=k.inside,m=!!k.lookbehind,n=0,o=k.alias;k=k.pattern||k;for(var p=0;p<f.length;p++){var q=f[p];if(f.length>a.length)break a;if(!(q instanceof e)){k.lastIndex=0;var r=k.exec(q);if(r){m&&(n=r[1].length);var s=r.index-1+n,r=r[0].slice(n),t=r.length,u=s+t,v=q.slice(0,s+1),w=q.slice(u+1),x=[p,1];v&&x.push(v);var y=new e(h,l?c.tokenize(r,l):r,o);x.push(y),w&&x.push(w),Array.prototype.splice.apply(f,x)}}}}}return f},hooks:{all:{},add:function(a,b){var d=c.hooks.all;d[a]=d[a]||[],d[a].push(b)},run:function(a,b){var d=c.hooks.all[a];if(d&&d.length)for(var e,f=0;e=d[f++];)e(b)}}},d=c.Token=function(a,b,c){this.type=a,this.content=b,this.alias=c};if(d.stringify=function(a,b,e){if("string"==typeof a)return a;if("Array"===c.util.type(a))return a.map(function(c){return d.stringify(c,b,a)}).join("");var f={type:a.type,content:d.stringify(a.content,b,e),tag:"span",classes:["token",a.type],attributes:{},language:b,parent:e};if("comment"==f.type&&(f.attributes.spellcheck="true"),a.alias){var g="Array"===c.util.type(a.alias)?a.alias:[a.alias];Array.prototype.push.apply(f.classes,g)}c.hooks.run("wrap",f);var h="";for(var i in f.attributes)h+=(h?" ":"")+i+'="'+(f.attributes[i]||"")+'"';return"<"+f.tag+' class="'+f.classes.join(" ")+'" '+h+">"+f.content+"</"+f.tag+">"},!b.document)return b.addEventListener?(b.addEventListener("message",function(a){var d=JSON.parse(a.data),e=d.language,f=d.code,g=d.immediateClose;b.postMessage(c.highlight(f,c.languages[e],e)),g&&b.close()},!1),b.Prism):b.Prism}();return"undefined"!=typeof module&&module.exports&&(module.exports=c),"undefined"!=typeof global&&(global.Prism=c),c.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?[\w\W]+?\?>/,doctype:/<!DOCTYPE[\w\W]+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[^\s>\/=.]+(?:\s+[^\s>\/=]+(?:=(?:("|')(?:\\\1|\\?(?!\1)[\w\W])*\1|[^\s'">=]+))?)*\s*\/?>/i,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/[=>"']/}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},c.hooks.add("wrap",function(a){"entity"===a.type&&(a.attributes.title=a.content.replace(/&amp;/,"&"))}),c.languages.xml=c.languages.markup,c.languages.html=c.languages.markup,c.languages.mathml=c.languages.markup,c.languages.svg=c.languages.markup,c.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{rule:/@[\w-]+/}},url:/url\((?:(["'])(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*?(?=\s*\{)/,string:/("|')(\\(?:\r\n|[\w\W])|(?!\1)[^\\\r\n])*\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,"function":/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:]/},c.languages.css.atrule.inside.rest=c.util.clone(c.languages.css),c.languages.markup&&(c.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:c.languages.markup.tag.inside},rest:c.languages.css},alias:"language-css"}}),c.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:c.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:c.languages.css}},alias:"language-css"}},c.languages.markup.tag)),c.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0}],string:/(["'])(\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,"class-name":{pattern:/((?:\b(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":/[a-z0-9_]+(?=\()/i,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)\b/i,operator:/--?|\+\+?|!=?=?|<=?|>=?|==?=?|&&?|\|\|?|\?|\*|\/|~|\^|%/,punctuation:/[{}[\];(),.:]/},c.languages.javascript=c.languages.extend("clike",{keyword:/\b(as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|0b[01]+|0o[0-7]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|Infinity)\b/,"function":/[_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*(?=\()/i}),c.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\\\r\n])+\/[gimyu]{0,5}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}}),c.languages.insertBefore("javascript","class-name",{"template-string":{pattern:/`(?:\\`|\\?[^`])*`/,inside:{interpolation:{pattern:/\$\{[^}]+\}/,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:c.languages.javascript}},string:/[\s\S]+/}}}),c.languages.markup&&c.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:c.languages.markup.tag.inside},rest:c.languages.javascript},alias:"language-javascript"}}),c.languages.js=c.languages.javascript,c.languages.c=c.languages.extend("clike",{keyword:/\b(asm|typeof|inline|auto|break|case|char|const|continue|default|do|double|else|enum|extern|float|for|goto|if|int|long|register|return|short|signed|sizeof|static|struct|switch|typedef|union|unsigned|void|volatile|while)\b/,operator:/\-[>-]?|\+\+?|!=?|<<?=?|>>?=?|==?|&&?|\|?\||[~^%?*\/]/,number:/\b-?(?:0x[\da-f]+|\d*\.?\d+(?:e[+-]?\d+)?)[ful]*\b/i}),c.languages.insertBefore("c","string",{macro:{pattern:/(^\s*)#\s*[a-z]+([^\r\n\\]|\\.|\\(?:\r\n?|\n))*/im,lookbehind:!0,alias:"property",inside:{string:{pattern:/(#\s*include\s*)(<.+?>|("|')(\\?.)+?\3)/,lookbehind:!0}}}}),delete c.languages.c["class-name"],delete c.languages.c["boolean"],c.languages.csharp=c.languages.extend("clike",{keyword:/\b(abstract|as|async|await|base|bool|break|byte|case|catch|char|checked|class|const|continue|decimal|default|delegate|do|double|else|enum|event|explicit|extern|false|finally|fixed|float|for|foreach|goto|if|implicit|in|int|interface|internal|is|lock|long|namespace|new|null|object|operator|out|override|params|private|protected|public|readonly|ref|return|sbyte|sealed|short|sizeof|stackalloc|static|string|struct|switch|this|throw|true|try|typeof|uint|ulong|unchecked|unsafe|ushort|using|virtual|void|volatile|while|add|alias|ascending|async|await|descending|dynamic|from|get|global|group|into|join|let|orderby|partial|remove|select|set|value|var|where|yield)\b/,string:[/@("|')(\1\1|\\\1|\\?(?!\1)[\s\S])*\1/,/("|')(\\?.)*?\1/],number:/\b-?(0x[\da-f]+|\d*\.?\d+)\b/i}),c.languages.insertBefore("csharp","keyword",{preprocessor:{pattern:/(^\s*)#.*/m,lookbehind:!0}}),c.languages.cpp=c.languages.extend("c",{keyword:/\b(alignas|alignof|asm|auto|bool|break|case|catch|char|char16_t|char32_t|class|compl|const|constexpr|const_cast|continue|decltype|default|delete|do|double|dynamic_cast|else|enum|explicit|export|extern|float|for|friend|goto|if|inline|int|long|mutable|namespace|new|noexcept|nullptr|operator|private|protected|public|register|reinterpret_cast|return|short|signed|sizeof|static|static_assert|static_cast|struct|switch|template|this|thread_local|throw|try|typedef|typeid|typename|union|unsigned|using|virtual|void|volatile|wchar_t|while)\b/,"boolean":/\b(true|false)\b/,operator:/[-+]{1,2}|!=?|<{1,2}=?|>{1,2}=?|\->|:{1,2}|={1,2}|\^|~|%|&{1,2}|\|?\||\?|\*|\/|\b(and|and_eq|bitand|bitor|not|not_eq|or|or_eq|xor|xor_eq)\b/}),c.languages.insertBefore("cpp","keyword",{"class-name":{pattern:/(class\s+)[a-z0-9_]+/i,lookbehind:!0}}),c.languages.java=c.languages.extend("clike",{keyword:/\b(abstract|continue|for|new|switch|assert|default|goto|package|synchronized|boolean|do|if|private|this|break|double|implements|protected|throw|byte|else|import|public|throws|case|enum|instanceof|return|transient|catch|extends|int|short|try|char|final|interface|static|void|class|finally|long|strictfp|volatile|const|float|native|super|while)\b/,number:/\b0b[01]+\b|\b0x[\da-f]*\.?[\da-fp\-]+\b|\b\d*\.?\d+(?:e[+-]?\d+)?[df]?\b/i,operator:{pattern:/(^|[^.])(?:\+[+=]?|-[-=]?|!=?|<<?=?|>>?>?=?|==?|&[&=]?|\|[|=]?|\*=?|\/=?|%=?|\^=?|[?:~])/m,lookbehind:!0}}),c.languages.php=c.languages.extend("clike",{keyword:/\b(and|or|xor|array|as|break|case|cfunction|class|const|continue|declare|default|die|do|else|elseif|enddeclare|endfor|endforeach|endif|endswitch|endwhile|extends|for|foreach|function|include|include_once|global|if|new|return|static|switch|use|require|require_once|var|while|abstract|interface|public|implements|private|protected|parent|throw|null|echo|print|trait|namespace|final|yield|goto|instanceof|finally|try|catch)\b/i,constant:/\b[A-Z0-9_]{2,}\b/,comment:{pattern:/(^|[^\\])(?:\/\*[\w\W]*?\*\/|\/\/.*)/,lookbehind:!0}}),c.languages.insertBefore("php","class-name",{"shell-comment":{pattern:/(^|[^\\])#.*/,lookbehind:!0,alias:"comment"}}),c.languages.insertBefore("php","keyword",{delimiter:/\?>|<\?(?:php)?/i,variable:/\$\w+\b/i,"package":{pattern:/(\\|namespace\s+|use\s+)[\w\\]+/,lookbehind:!0,inside:{punctuation:/\\/}}}),c.languages.insertBefore("php","operator",{property:{pattern:/(->)[\w]+/,lookbehind:!0}}),c.languages.markup&&(c.hooks.add("before-highlight",function(a){"php"===a.language&&(a.tokenStack=[],a.backupCode=a.code,a.code=a.code.replace(/(?:<\?php|<\?)[\w\W]*?(?:\?>)/gi,function(b){return a.tokenStack.push(b),"{{{PHP"+a.tokenStack.length+"}}}"}))}),c.hooks.add("before-insert",function(a){"php"===a.language&&(a.code=a.backupCode,delete a.backupCode)}),c.hooks.add("after-highlight",function(a){if("php"===a.language){for(var b,d=0;b=a.tokenStack[d];d++)a.highlightedCode=a.highlightedCode.replace("{{{PHP"+(d+1)+"}}}",c.highlight(b,a.grammar,"php").replace(/\$/g,"$$$$"));a.element.innerHTML=a.highlightedCode}}),c.hooks.add("wrap",function(a){"php"===a.language&&"markup"===a.type&&(a.content=a.content.replace(/(\{\{\{PHP[0-9]+\}\}\})/g,'<span class="token php">$1</span>'))}),c.languages.insertBefore("php","comment",{markup:{pattern:/<[^?]\/?(.*?)>/,inside:c.languages.markup},php:/\{\{\{PHP[0-9]+\}\}\}/})),c.languages.python={comment:{pattern:/(^|[^\\])#.*/,lookbehind:!0},string:/"""[\s\S]+?"""|'''[\s\S]+?'''|("|')(?:\\?.)*?\1/,"function":{pattern:/((?:^|\s)def[ \t]+)[a-zA-Z_][a-zA-Z0-9_]*(?=\()/g,lookbehind:!0},"class-name":{pattern:/(\bclass\s+)[a-z0-9_]+/i,lookbehind:!0},keyword:/\b(?:as|assert|async|await|break|class|continue|def|del|elif|else|except|exec|finally|for|from|global|if|import|in|is|lambda|pass|print|raise|return|try|while|with|yield)\b/,"boolean":/\b(?:True|False)\b/,number:/\b-?(?:0[bo])?(?:(?:\d|0x[\da-f])[\da-f]*\.?\d*|\.\d+)(?:e[+-]?\d+)?j?\b/i,operator:/[-+%=]=?|!=|\*\*?=?|\/\/?=?|<[<=>]?|>[=>]?|[&|^~]|\b(?:or|and|not)\b/,punctuation:/[{}[\];(),.:]/},function(a){a.languages.ruby=a.languages.extend("clike",{comment:/#(?!\{[^\r\n]*?\}).*/,keyword:/\b(alias|and|BEGIN|begin|break|case|class|def|define_method|defined|do|each|else|elsif|END|end|ensure|false|for|if|in|module|new|next|nil|not|or|raise|redo|require|rescue|retry|return|self|super|then|throw|true|undef|unless|until|when|while|yield)\b/});var b={pattern:/#\{[^}]+\}/,inside:{delimiter:{pattern:/^#\{|\}$/,alias:"tag"},rest:a.util.clone(a.languages.ruby)}};a.languages.insertBefore("ruby","keyword",{regex:[{pattern:/%r([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1[gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r\((?:[^()\\]|\\[\s\S])*\)[gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}[gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r\[(?:[^\[\]\\]|\\[\s\S])*\][gim]{0,3}/,inside:{interpolation:b}},{pattern:/%r<(?:[^<>\\]|\\[\s\S])*>[gim]{0,3}/,inside:{interpolation:b}},{pattern:/(^|[^\/])\/(?!\/)(\[.+?]|\\.|[^\/\r\n])+\/[gim]{0,3}(?=\s*($|[\r\n,.;})]))/,lookbehind:!0}],variable:/[@$]+[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/,symbol:/:[a-zA-Z_][a-zA-Z_0-9]*(?:[?!]|\b)/}),a.languages.insertBefore("ruby","number",{builtin:/\b(Array|Bignum|Binding|Class|Continuation|Dir|Exception|FalseClass|File|Stat|File|Fixnum|Fload|Hash|Integer|IO|MatchData|Method|Module|NilClass|Numeric|Object|Proc|Range|Regexp|String|Struct|TMS|Symbol|ThreadGroup|Thread|Time|TrueClass)\b/,constant:/\b[A-Z][a-zA-Z_0-9]*(?:[?!]|\b)/}),a.languages.ruby.string=[{pattern:/%[qQiIwWxs]?([^a-zA-Z0-9\s\{\(\[<])(?:[^\\]|\\[\s\S])*?\1/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?\((?:[^()\\]|\\[\s\S])*\)/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?\{(?:[^#{}\\]|#(?:\{[^}]+\})?|\\[\s\S])*\}/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?\[(?:[^\[\]\\]|\\[\s\S])*\]/,inside:{interpolation:b}},{pattern:/%[qQiIwWxs]?<(?:[^<>\\]|\\[\s\S])*>/,inside:{interpolation:b}},{pattern:/("|')(#\{[^}]+\}|\\(?:\r?\n|\r)|\\?.)*?\1/,inside:{interpolation:b}}]}(c),c}),g("8",[],function(){function a(a){return a&&"PRE"===a.nodeName&&a.className.indexOf("language-")!==-1}function b(a){return function(b,c){return a(c)}}return{isCodeSample:a,trimArg:b}}),g("b",["e","d","8"],function(a,b,c){var d=function(a){var b=a.selection.getNode();return c.isCodeSample(b)?b:null},e=function(c,e,f){c.undoManager.transact(function(){var g=d(c);f=a.DOM.encode(f),g?(c.dom.setAttrib(g,"class","language-"+e),g.innerHTML=f,b.highlightElement(g),c.selection.select(g)):(c.insertContent('<pre id="__new" class="language-'+e+'">'+f+"</pre>"),c.selection.select(c.$("#__new").removeAttr("id")[0]))})},f=function(a){var b=d(a);return b?b.textContent:""};return{getSelectedCodeSample:d,insertCodeSample:e,getCurrentCode:f}}),g("c",["a","b"],function(a,b){var c=function(b){var c=[{text:"HTML/XML",value:"markup"},{text:"JavaScript",value:"javascript"},{text:"CSS",value:"css"},{text:"PHP",value:"php"},{text:"Ruby",value:"ruby"},{text:"Python",value:"python"},{text:"Java",value:"java"},{text:"C",value:"c"},{text:"C#",value:"csharp"},{text:"C++",value:"cpp"}],d=a.getLanguages(b);return d?d:c},d=function(a){var c,d=b.getSelectedCodeSample(a);return d?(c=d.className.match(/language-(\w+)/),c?c[1]:""):""};return{getLanguages:c,getCurrentLanguage:d}}),g("7",["a","b","c"],function(a,b,c){return{open:function(d){var e=a.getDialogMinWidth(d),f=a.getDialogMinHeight(d),g=c.getCurrentLanguage(d),h=c.getLanguages(d),i=b.getCurrentCode(d);d.windowManager.open({title:"Insert/Edit code sample",minWidth:e,minHeight:f,layout:"flex",direction:"column",align:"stretch",body:[{type:"listbox",name:"language",label:"Language",maxWidth:200,value:g,values:h},{type:"textbox",name:"code",multiline:!0,spellcheck:!1,ariaLabel:"Code view",flex:1,style:"direction: ltr; text-align: left",classes:"monospace",value:i,autofocus:!0}],onSubmit:function(a){b.insertCodeSample(d,a.data.language,a.data.code)}})}}}),g("3",["7","8"],function(a,b){var c=function(c){c.addCommand("codesample",function(){var d=c.selection.getNode();c.selection.isCollapsed()||b.isCodeSample(d)?a.open(c):c.formatter.toggle("code")})};return{register:c}}),g("4",["d","8"],function(a,b){var c=function(c){var d=c.$;c.on("PreProcess",function(a){d("pre[contenteditable=false]",a.node).filter(b.trimArg(b.isCodeSample)).each(function(a,b){var c=d(b),e=b.textContent;c.attr("class",d.trim(c.attr("class"))),c.removeAttr("contentEditable"),c.empty().append(d("<code></code>").each(function(){this.textContent=e}))})}),c.on("SetContent",function(){var e=d("pre").filter(b.trimArg(b.isCodeSample)).filter(function(a,b){return"false"!==b.contentEditable});e.length&&c.undoManager.transact(function(){e.each(function(b,e){d(e).find("br").each(function(a,b){b.parentNode.replaceChild(c.getDoc().createTextNode("\n"),b)}),e.contentEditable=!1,e.innerHTML=c.dom.encode(e.textContent),a.highlightElement(e),e.className=d.trim(e.className)})})})};return{setup:c}}),g("5",["a"],function(a){var b=function(b,c,d,e){var f,g=a.getContentCss(b);b.inline&&d.get()||!b.inline&&e.get()||(b.inline?d.set(!0):e.set(!0),g!==!1&&(f=b.dom.create("link",{rel:"stylesheet",href:g?g:c+"/css/prism.css"}),b.getDoc().getElementsByTagName("head")[0].appendChild(f)))};return{loadCss:b}}),g("6",[],function(){var a=function(a){a.addButton("codesample",{cmd:"codesample",title:"Insert/Edit code sample"}),a.addMenuItem("codesample",{cmd:"codesample",text:"Code sample",icon:"codesample"})};return{register:a}}),g("0",["1","2","3","4","5","6","7","8"],function(a,b,c,d,e,f,g,h){var i=a(!1);return b.add("codesample",function(b,j){var k=a(!1);d.setup(b),f.register(b),c.register(b),b.on("init",function(){e.loadCss(b,j,i,k)}),b.on("dblclick",function(a){h.isCodeSample(a.target)&&g.open(b)})}),function(){}}),d("0")()}();
