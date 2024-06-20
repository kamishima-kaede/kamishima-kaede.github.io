"use strict";(self.webpackChunkvuepress_theme_hope_template=self.webpackChunkvuepress_theme_hope_template||[]).push([[81],{81:(t,e,r)=>{r.d(e,{diagram:()=>M});var i=r(1554),a=r(9219),n=r(1460),s=r(195);const o=[];for(let t=0;t<256;++t)o.push((t+256).toString(16).slice(1));const c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i,l=function(t){if(!function(t){return"string"==typeof t&&c.test(t)}(t))throw TypeError("Invalid UUID");let e;const r=new Uint8Array(16);return r[0]=(e=parseInt(t.slice(0,8),16))>>>24,r[1]=e>>>16&255,r[2]=e>>>8&255,r[3]=255&e,r[4]=(e=parseInt(t.slice(9,13),16))>>>8,r[5]=255&e,r[6]=(e=parseInt(t.slice(14,18),16))>>>8,r[7]=255&e,r[8]=(e=parseInt(t.slice(19,23),16))>>>8,r[9]=255&e,r[10]=(e=parseInt(t.slice(24,36),16))/1099511627776&255,r[11]=e/4294967296&255,r[12]=e>>>24&255,r[13]=e>>>16&255,r[14]=e>>>8&255,r[15]=255&e,r};function h(t,e,r,i){switch(t){case 0:return e&r^~e&i;case 1:case 3:return e^r^i;case 2:return e&r^e&i^r&i}}function d(t,e){return t<<e|t>>>32-e}const y=function(t,e,r){function i(t,e,r,i){var a;if("string"==typeof t&&(t=function(t){t=unescape(encodeURIComponent(t));const e=[];for(let r=0;r<t.length;++r)e.push(t.charCodeAt(r));return e}(t)),"string"==typeof e&&(e=l(e)),16!==(null===(a=e)||void 0===a?void 0:a.length))throw TypeError("Namespace must be array-like (16 iterable integer values, 0-255)");let n=new Uint8Array(16+t.length);if(n.set(e),n.set(t,e.length),n=function(t){const e=[1518500249,1859775393,2400959708,3395469782],r=[1732584193,4023233417,2562383102,271733878,3285377520];if("string"==typeof t){const e=unescape(encodeURIComponent(t));t=[];for(let r=0;r<e.length;++r)t.push(e.charCodeAt(r))}else Array.isArray(t)||(t=Array.prototype.slice.call(t));t.push(128);const i=t.length/4+2,a=Math.ceil(i/16),n=new Array(a);for(let e=0;e<a;++e){const r=new Uint32Array(16);for(let i=0;i<16;++i)r[i]=t[64*e+4*i]<<24|t[64*e+4*i+1]<<16|t[64*e+4*i+2]<<8|t[64*e+4*i+3];n[e]=r}n[a-1][14]=8*(t.length-1)/Math.pow(2,32),n[a-1][14]=Math.floor(n[a-1][14]),n[a-1][15]=8*(t.length-1)&4294967295;for(let t=0;t<a;++t){const i=new Uint32Array(80);for(let e=0;e<16;++e)i[e]=n[t][e];for(let t=16;t<80;++t)i[t]=d(i[t-3]^i[t-8]^i[t-14]^i[t-16],1);let a=r[0],s=r[1],o=r[2],c=r[3],l=r[4];for(let t=0;t<80;++t){const r=Math.floor(t/20),n=d(a,5)+h(r,s,o,c)+l+e[r]+i[t]>>>0;l=c,c=o,o=d(s,30)>>>0,s=a,a=n}r[0]=r[0]+a>>>0,r[1]=r[1]+s>>>0,r[2]=r[2]+o>>>0,r[3]=r[3]+c>>>0,r[4]=r[4]+l>>>0}return[r[0]>>24&255,r[0]>>16&255,r[0]>>8&255,255&r[0],r[1]>>24&255,r[1]>>16&255,r[1]>>8&255,255&r[1],r[2]>>24&255,r[2]>>16&255,r[2]>>8&255,255&r[2],r[3]>>24&255,r[3]>>16&255,r[3]>>8&255,255&r[3],r[4]>>24&255,r[4]>>16&255,r[4]>>8&255,255&r[4]]}(n),n[6]=15&n[6]|80,n[8]=63&n[8]|128,r){i=i||0;for(let t=0;t<16;++t)r[i+t]=n[t];return r}return function(t,e=0){return o[t[e+0]]+o[t[e+1]]+o[t[e+2]]+o[t[e+3]]+"-"+o[t[e+4]]+o[t[e+5]]+"-"+o[t[e+6]]+o[t[e+7]]+"-"+o[t[e+8]]+o[t[e+9]]+"-"+o[t[e+10]]+o[t[e+11]]+o[t[e+12]]+o[t[e+13]]+o[t[e+14]]+o[t[e+15]]}(n)}try{i.name="v5"}catch(t){}return i.DNS="6ba7b810-9dad-11d1-80b4-00c04fd430c8",i.URL="6ba7b811-9dad-11d1-80b4-00c04fd430c8",i}();r(9173),r(8488),r(5006);var u=function(){var t=function(t,e,r,i){for(r=r||{},i=t.length;i--;r[t[i]]=e);return r},e=[6,8,10,20,22,24,26,27,28],r=[1,10],i=[1,11],a=[1,12],n=[1,13],s=[1,14],o=[1,15],c=[1,21],l=[1,22],h=[1,23],d=[1,24],y=[1,25],u=[6,8,10,13,15,18,19,20,22,24,26,27,28,41,42,43,44,45],p=[1,34],_=[27,28,46,47],f=[41,42,43,44,45],m=[17,34],E=[1,54],g=[1,53],O=[17,34,36,38],b={trace:function(){},yy:{},symbols_:{error:2,start:3,ER_DIAGRAM:4,document:5,EOF:6,line:7,SPACE:8,statement:9,NEWLINE:10,entityName:11,relSpec:12,":":13,role:14,BLOCK_START:15,attributes:16,BLOCK_STOP:17,SQS:18,SQE:19,title:20,title_value:21,acc_title:22,acc_title_value:23,acc_descr:24,acc_descr_value:25,acc_descr_multiline_value:26,ALPHANUM:27,ENTITY_NAME:28,attribute:29,attributeType:30,attributeName:31,attributeKeyTypeList:32,attributeComment:33,ATTRIBUTE_WORD:34,attributeKeyType:35,COMMA:36,ATTRIBUTE_KEY:37,COMMENT:38,cardinality:39,relType:40,ZERO_OR_ONE:41,ZERO_OR_MORE:42,ONE_OR_MORE:43,ONLY_ONE:44,MD_PARENT:45,NON_IDENTIFYING:46,IDENTIFYING:47,WORD:48,$accept:0,$end:1},terminals_:{2:"error",4:"ER_DIAGRAM",6:"EOF",8:"SPACE",10:"NEWLINE",13:":",15:"BLOCK_START",17:"BLOCK_STOP",18:"SQS",19:"SQE",20:"title",21:"title_value",22:"acc_title",23:"acc_title_value",24:"acc_descr",25:"acc_descr_value",26:"acc_descr_multiline_value",27:"ALPHANUM",28:"ENTITY_NAME",34:"ATTRIBUTE_WORD",36:"COMMA",37:"ATTRIBUTE_KEY",38:"COMMENT",41:"ZERO_OR_ONE",42:"ZERO_OR_MORE",43:"ONE_OR_MORE",44:"ONLY_ONE",45:"MD_PARENT",46:"NON_IDENTIFYING",47:"IDENTIFYING",48:"WORD"},productions_:[0,[3,3],[5,0],[5,2],[7,2],[7,1],[7,1],[7,1],[9,5],[9,4],[9,3],[9,1],[9,7],[9,6],[9,4],[9,2],[9,2],[9,2],[9,1],[11,1],[11,1],[16,1],[16,2],[29,2],[29,3],[29,3],[29,4],[30,1],[31,1],[32,1],[32,3],[35,1],[33,1],[12,3],[39,1],[39,1],[39,1],[39,1],[39,1],[40,1],[40,1],[14,1],[14,1],[14,1]],performAction:function(t,e,r,i,a,n,s){var o=n.length-1;switch(a){case 1:break;case 2:case 6:case 7:this.$=[];break;case 3:n[o-1].push(n[o]),this.$=n[o-1];break;case 4:case 5:case 19:case 43:case 27:case 28:case 31:this.$=n[o];break;case 8:i.addEntity(n[o-4]),i.addEntity(n[o-2]),i.addRelationship(n[o-4],n[o],n[o-2],n[o-3]);break;case 9:i.addEntity(n[o-3]),i.addAttributes(n[o-3],n[o-1]);break;case 10:i.addEntity(n[o-2]);break;case 11:i.addEntity(n[o]);break;case 12:i.addEntity(n[o-6],n[o-4]),i.addAttributes(n[o-6],n[o-1]);break;case 13:i.addEntity(n[o-5],n[o-3]);break;case 14:i.addEntity(n[o-3],n[o-1]);break;case 15:case 16:this.$=n[o].trim(),i.setAccTitle(this.$);break;case 17:case 18:this.$=n[o].trim(),i.setAccDescription(this.$);break;case 20:case 41:case 42:case 32:this.$=n[o].replace(/"/g,"");break;case 21:case 29:this.$=[n[o]];break;case 22:n[o].push(n[o-1]),this.$=n[o];break;case 23:this.$={attributeType:n[o-1],attributeName:n[o]};break;case 24:this.$={attributeType:n[o-2],attributeName:n[o-1],attributeKeyTypeList:n[o]};break;case 25:this.$={attributeType:n[o-2],attributeName:n[o-1],attributeComment:n[o]};break;case 26:this.$={attributeType:n[o-3],attributeName:n[o-2],attributeKeyTypeList:n[o-1],attributeComment:n[o]};break;case 30:n[o-2].push(n[o]),this.$=n[o-2];break;case 33:this.$={cardA:n[o],relType:n[o-1],cardB:n[o-2]};break;case 34:this.$=i.Cardinality.ZERO_OR_ONE;break;case 35:this.$=i.Cardinality.ZERO_OR_MORE;break;case 36:this.$=i.Cardinality.ONE_OR_MORE;break;case 37:this.$=i.Cardinality.ONLY_ONE;break;case 38:this.$=i.Cardinality.MD_PARENT;break;case 39:this.$=i.Identification.NON_IDENTIFYING;break;case 40:this.$=i.Identification.IDENTIFYING}},table:[{3:1,4:[1,2]},{1:[3]},t(e,[2,2],{5:3}),{6:[1,4],7:5,8:[1,6],9:7,10:[1,8],11:9,20:r,22:i,24:a,26:n,27:s,28:o},t(e,[2,7],{1:[2,1]}),t(e,[2,3]),{9:16,11:9,20:r,22:i,24:a,26:n,27:s,28:o},t(e,[2,5]),t(e,[2,6]),t(e,[2,11],{12:17,39:20,15:[1,18],18:[1,19],41:c,42:l,43:h,44:d,45:y}),{21:[1,26]},{23:[1,27]},{25:[1,28]},t(e,[2,18]),t(u,[2,19]),t(u,[2,20]),t(e,[2,4]),{11:29,27:s,28:o},{16:30,17:[1,31],29:32,30:33,34:p},{11:35,27:s,28:o},{40:36,46:[1,37],47:[1,38]},t(_,[2,34]),t(_,[2,35]),t(_,[2,36]),t(_,[2,37]),t(_,[2,38]),t(e,[2,15]),t(e,[2,16]),t(e,[2,17]),{13:[1,39]},{17:[1,40]},t(e,[2,10]),{16:41,17:[2,21],29:32,30:33,34:p},{31:42,34:[1,43]},{34:[2,27]},{19:[1,44]},{39:45,41:c,42:l,43:h,44:d,45:y},t(f,[2,39]),t(f,[2,40]),{14:46,27:[1,49],28:[1,48],48:[1,47]},t(e,[2,9]),{17:[2,22]},t(m,[2,23],{32:50,33:51,35:52,37:E,38:g}),t([17,34,37,38],[2,28]),t(e,[2,14],{15:[1,55]}),t([27,28],[2,33]),t(e,[2,8]),t(e,[2,41]),t(e,[2,42]),t(e,[2,43]),t(m,[2,24],{33:56,36:[1,57],38:g}),t(m,[2,25]),t(O,[2,29]),t(m,[2,32]),t(O,[2,31]),{16:58,17:[1,59],29:32,30:33,34:p},t(m,[2,26]),{35:60,37:E},{17:[1,61]},t(e,[2,13]),t(O,[2,30]),t(e,[2,12])],defaultActions:{34:[2,27],41:[2,22]},parseError:function(t,e){if(!e.recoverable){var r=new Error(t);throw r.hash=e,r}this.trace(t)},parse:function(t){var e=[0],r=[],i=[null],a=[],n=this.table,s="",o=0,c=0,l=a.slice.call(arguments,1),h=Object.create(this.lexer),d={yy:{}};for(var y in this.yy)Object.prototype.hasOwnProperty.call(this.yy,y)&&(d.yy[y]=this.yy[y]);h.setInput(t,d.yy),d.yy.lexer=h,d.yy.parser=this,void 0===h.yylloc&&(h.yylloc={});var u=h.yylloc;a.push(u);var p=h.options&&h.options.ranges;"function"==typeof d.yy.parseError?this.parseError=d.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;for(var _,f,m,E,g,O,b,k,R,N={};;){if(f=e[e.length-1],this.defaultActions[f]?m=this.defaultActions[f]:(null==_&&(R=void 0,"number"!=typeof(R=r.pop()||h.lex()||1)&&(R instanceof Array&&(R=(r=R).pop()),R=this.symbols_[R]||R),_=R),m=n[f]&&n[f][_]),void 0===m||!m.length||!m[0]){var T;for(g in k=[],n[f])this.terminals_[g]&&g>2&&k.push("'"+this.terminals_[g]+"'");T=h.showPosition?"Parse error on line "+(o+1)+":\n"+h.showPosition()+"\nExpecting "+k.join(", ")+", got '"+(this.terminals_[_]||_)+"'":"Parse error on line "+(o+1)+": Unexpected "+(1==_?"end of input":"'"+(this.terminals_[_]||_)+"'"),this.parseError(T,{text:h.match,token:this.terminals_[_]||_,line:h.yylineno,loc:u,expected:k})}if(m[0]instanceof Array&&m.length>1)throw new Error("Parse Error: multiple actions possible at state: "+f+", token: "+_);switch(m[0]){case 1:e.push(_),i.push(h.yytext),a.push(h.yylloc),e.push(m[1]),_=null,c=h.yyleng,s=h.yytext,o=h.yylineno,u=h.yylloc;break;case 2:if(O=this.productions_[m[1]][1],N.$=i[i.length-O],N._$={first_line:a[a.length-(O||1)].first_line,last_line:a[a.length-1].last_line,first_column:a[a.length-(O||1)].first_column,last_column:a[a.length-1].last_column},p&&(N._$.range=[a[a.length-(O||1)].range[0],a[a.length-1].range[1]]),void 0!==(E=this.performAction.apply(N,[s,c,o,d.yy,m[1],i,a].concat(l))))return E;O&&(e=e.slice(0,-1*O*2),i=i.slice(0,-1*O),a=a.slice(0,-1*O)),e.push(this.productions_[m[1]][0]),i.push(N.$),a.push(N._$),b=n[e[e.length-2]][e[e.length-1]],e.push(b);break;case 3:return!0}}return!0}},k={EOF:1,parseError:function(t,e){if(!this.yy.parser)throw new Error(t);this.yy.parser.parseError(t,e)},setInput:function(t,e){return this.yy=e||this.yy||{},this._input=t,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var t=this._input[0];return this.yytext+=t,this.yyleng++,this.offset++,this.match+=t,this.matched+=t,t.match(/(?:\r\n?|\n).*/g)?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),t},unput:function(t){var e=t.length,r=t.split(/(?:\r\n?|\n)/g);this._input=t+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-e),this.offset-=e;var i=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),r.length-1&&(this.yylineno-=r.length-1);var a=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:r?(r.length===i.length?this.yylloc.first_column:0)+i[i.length-r.length].length-r[0].length:this.yylloc.first_column-e},this.options.ranges&&(this.yylloc.range=[a[0],a[0]+this.yyleng-e]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){return this.options.backtrack_lexer?(this._backtrack=!0,this):this.parseError("Lexical error on line "+(this.yylineno+1)+". You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},less:function(t){this.unput(this.match.slice(t))},pastInput:function(){var t=this.matched.substr(0,this.matched.length-this.match.length);return(t.length>20?"...":"")+t.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var t=this.match;return t.length<20&&(t+=this._input.substr(0,20-t.length)),(t.substr(0,20)+(t.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var t=this.pastInput(),e=new Array(t.length+1).join("-");return t+this.upcomingInput()+"\n"+e+"^"},test_match:function(t,e){var r,i,a;if(this.options.backtrack_lexer&&(a={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(a.yylloc.range=this.yylloc.range.slice(0))),(i=t[0].match(/(?:\r\n?|\n).*/g))&&(this.yylineno+=i.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:i?i[i.length-1].length-i[i.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+t[0].length},this.yytext+=t[0],this.match+=t[0],this.matches=t,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(t[0].length),this.matched+=t[0],r=this.performAction.call(this,this.yy,this,e,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),r)return r;if(this._backtrack){for(var n in a)this[n]=a[n];return!1}return!1},next:function(){if(this.done)return this.EOF;var t,e,r,i;this._input||(this.done=!0),this._more||(this.yytext="",this.match="");for(var a=this._currentRules(),n=0;n<a.length;n++)if((r=this._input.match(this.rules[a[n]]))&&(!e||r[0].length>e[0].length)){if(e=r,i=n,this.options.backtrack_lexer){if(!1!==(t=this.test_match(r,a[n])))return t;if(this._backtrack){e=!1;continue}return!1}if(!this.options.flex)break}return e?!1!==(t=this.test_match(e,a[i]))&&t:""===this._input?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+". Unrecognized text.\n"+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){return this.next()||this.lex()},begin:function(t){this.conditionStack.push(t)},popState:function(){return this.conditionStack.length-1>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(t){return(t=this.conditionStack.length-1-Math.abs(t||0))>=0?this.conditionStack[t]:"INITIAL"},pushState:function(t){this.begin(t)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(t,e,r,i){switch(r){case 0:return this.begin("acc_title"),22;case 1:return this.popState(),"acc_title_value";case 2:return this.begin("acc_descr"),24;case 3:return this.popState(),"acc_descr_value";case 4:this.begin("acc_descr_multiline");break;case 5:this.popState();break;case 6:return"acc_descr_multiline_value";case 7:return 10;case 8:case 15:case 20:break;case 9:return 8;case 10:return 28;case 11:return 48;case 12:return 4;case 13:return this.begin("block"),15;case 14:return 36;case 16:return 37;case 17:case 18:return 34;case 19:return 38;case 21:return this.popState(),17;case 22:case 54:return e.yytext[0];case 23:return 18;case 24:return 19;case 25:case 29:case 30:case 43:return 41;case 26:case 27:case 28:case 36:case 38:case 45:return 43;case 31:case 32:case 33:case 34:case 35:case 37:case 44:return 42;case 39:case 40:case 41:case 42:return 44;case 46:return 45;case 47:case 50:case 51:case 52:return 46;case 48:case 49:return 47;case 53:return 27;case 55:return 6}},rules:[/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:[\n]+)/i,/^(?:\s+)/i,/^(?:[\s]+)/i,/^(?:"[^"%\r\n\v\b\\]+")/i,/^(?:"[^"]*")/i,/^(?:erDiagram\b)/i,/^(?:\{)/i,/^(?:,)/i,/^(?:\s+)/i,/^(?:\b((?:PK)|(?:FK)|(?:UK))\b)/i,/^(?:(.*?)[~](.*?)*[~])/i,/^(?:[\*A-Za-z_][A-Za-z0-9\-_\[\]\(\)]*)/i,/^(?:"[^"]*")/i,/^(?:[\n]+)/i,/^(?:\})/i,/^(?:.)/i,/^(?:\[)/i,/^(?:\])/i,/^(?:one or zero\b)/i,/^(?:one or more\b)/i,/^(?:one or many\b)/i,/^(?:1\+)/i,/^(?:\|o\b)/i,/^(?:zero or one\b)/i,/^(?:zero or more\b)/i,/^(?:zero or many\b)/i,/^(?:0\+)/i,/^(?:\}o\b)/i,/^(?:many\(0\))/i,/^(?:many\(1\))/i,/^(?:many\b)/i,/^(?:\}\|)/i,/^(?:one\b)/i,/^(?:only one\b)/i,/^(?:1\b)/i,/^(?:\|\|)/i,/^(?:o\|)/i,/^(?:o\{)/i,/^(?:\|\{)/i,/^(?:\s*u\b)/i,/^(?:\.\.)/i,/^(?:--)/i,/^(?:to\b)/i,/^(?:optionally to\b)/i,/^(?:\.-)/i,/^(?:-\.)/i,/^(?:[A-Za-z_][A-Za-z0-9\-_]*)/i,/^(?:.)/i,/^(?:$)/i],conditions:{acc_descr_multiline:{rules:[5,6],inclusive:!1},acc_descr:{rules:[3],inclusive:!1},acc_title:{rules:[1],inclusive:!1},block:{rules:[14,15,16,17,18,19,20,21,22],inclusive:!1},INITIAL:{rules:[0,2,4,7,8,9,10,11,12,13,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55],inclusive:!0}}};function R(){this.yy={}}return b.lexer=k,R.prototype=b,b.Parser=R,new R}();u.parser=u;const p=u;let _={},f=[];const m=function(t,e=void 0){return void 0===_[t]?(_[t]={attributes:[],alias:e},i.l.info("Added new entity :",t)):_[t]&&!_[t].alias&&e&&(_[t].alias=e,i.l.info(`Add alias '${e}' to entity '${t}'`)),_[t]},E={Cardinality:{ZERO_OR_ONE:"ZERO_OR_ONE",ZERO_OR_MORE:"ZERO_OR_MORE",ONE_OR_MORE:"ONE_OR_MORE",ONLY_ONE:"ONLY_ONE",MD_PARENT:"MD_PARENT"},Identification:{NON_IDENTIFYING:"NON_IDENTIFYING",IDENTIFYING:"IDENTIFYING"},getConfig:()=>(0,i.c)().er,addEntity:m,addAttributes:function(t,e){let r,a=m(t);for(r=e.length-1;r>=0;r--)a.attributes.push(e[r]),i.l.debug("Added attribute ",e[r].attributeName)},getEntities:()=>_,addRelationship:function(t,e,r,a){let n={entityA:t,roleA:e,entityB:r,relSpec:a};f.push(n),i.l.debug("Added new relationship :",n)},getRelationships:()=>f,clear:function(){_={},f=[],(0,i.v)()},setAccTitle:i.s,getAccTitle:i.g,setAccDescription:i.b,getAccDescription:i.a,setDiagramTitle:i.q,getDiagramTitle:i.t},g={ONLY_ONE_START:"ONLY_ONE_START",ONLY_ONE_END:"ONLY_ONE_END",ZERO_OR_ONE_START:"ZERO_OR_ONE_START",ZERO_OR_ONE_END:"ZERO_OR_ONE_END",ONE_OR_MORE_START:"ONE_OR_MORE_START",ONE_OR_MORE_END:"ONE_OR_MORE_END",ZERO_OR_MORE_START:"ZERO_OR_MORE_START",ZERO_OR_MORE_END:"ZERO_OR_MORE_END",MD_PARENT_END:"MD_PARENT_END",MD_PARENT_START:"MD_PARENT_START"},O=g,b=/[^\dA-Za-z](\W)*/g;let k={},R=new Map;const N=function(t){return(t.entityA+t.roleA+t.entityB).replace(/\s/g,"")};let T=0;const x="28e9f9db-3c8d-5aa5-9faf-44286ae5937c";function A(t=""){return t.length>0?`${t}-`:""}const M={parser:p,db:E,renderer:{setConf:function(t){const e=Object.keys(t);for(const r of e)k[r]=t[r]},draw:function(t,e,r,o){k=(0,i.c)().er,i.l.info("Drawing ER diagram");const c=(0,i.c)().securityLevel;let l;"sandbox"===c&&(l=(0,n.Ltv)("#i"+e));const h=("sandbox"===c?(0,n.Ltv)(l.nodes()[0].contentDocument.body):(0,n.Ltv)("body")).select(`[id='${e}']`);let d;(function(t,e){let r;t.append("defs").append("marker").attr("id",g.MD_PARENT_START).attr("refX",0).attr("refY",7).attr("markerWidth",190).attr("markerHeight",240).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",g.MD_PARENT_END).attr("refX",19).attr("refY",7).attr("markerWidth",20).attr("markerHeight",28).attr("orient","auto").append("path").attr("d","M 18,7 L9,13 L1,7 L9,1 Z"),t.append("defs").append("marker").attr("id",g.ONLY_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18 M15,0 L15,18"),t.append("defs").append("marker").attr("id",g.ONLY_ONE_END).attr("refX",18).attr("refY",9).attr("markerWidth",18).attr("markerHeight",18).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,0 L3,18 M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",g.ZERO_OR_ONE_START).attr("refX",0).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",21).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M9,0 L9,18"),r=t.append("defs").append("marker").attr("id",g.ZERO_OR_ONE_END).attr("refX",30).attr("refY",9).attr("markerWidth",30).attr("markerHeight",18).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",9).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,0 L21,18"),t.append("defs").append("marker").attr("id",g.ONE_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q 18,0 36,18 Q 18,36 0,18 M42,9 L42,27"),t.append("defs").append("marker").attr("id",g.ONE_OR_MORE_END).attr("refX",27).attr("refY",18).attr("markerWidth",45).attr("markerHeight",36).attr("orient","auto").append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M3,9 L3,27 M9,18 Q27,0 45,18 Q27,36 9,18"),r=t.append("defs").append("marker").attr("id",g.ZERO_OR_MORE_START).attr("refX",18).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",48).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M0,18 Q18,0 36,18 Q18,36 0,18"),r=t.append("defs").append("marker").attr("id",g.ZERO_OR_MORE_END).attr("refX",39).attr("refY",18).attr("markerWidth",57).attr("markerHeight",36).attr("orient","auto"),r.append("circle").attr("stroke",e.stroke).attr("fill","white").attr("cx",9).attr("cy",18).attr("r",6),r.append("path").attr("stroke",e.stroke).attr("fill","none").attr("d","M21,18 Q39,0 57,18 Q39,36 21,18")})(h,k),d=new a.T({multigraph:!0,directed:!0,compound:!1}).setGraph({rankdir:k.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel((function(){return{}}));const u=function(t,e,r){let a;return Object.keys(e).forEach((function(n){const s=function(t="",e=""){const r=t.replace(b,"");return`${A(e)}${A(r)}${y(t,x)}`}(n,"entity");R.set(n,s);const o=t.append("g").attr("id",s);a=void 0===a?s:a;const c="text-"+s,l=o.append("text").classed("er entityLabel",!0).attr("id",c).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","middle").style("font-family",(0,i.c)().fontFamily).style("font-size",k.fontSize+"px").text(e[n].alias??n),{width:h,height:d}=((t,e,r)=>{const a=k.entityPadding/3,n=k.entityPadding/3,s=.85*k.fontSize,o=e.node().getBBox(),c=[];let l=!1,h=!1,d=0,y=0,u=0,p=0,_=o.height+2*a,f=1;r.forEach((t=>{void 0!==t.attributeKeyTypeList&&t.attributeKeyTypeList.length>0&&(l=!0),void 0!==t.attributeComment&&(h=!0)})),r.forEach((r=>{const n=`${e.node().id}-attr-${f}`;let o=0;const m=(0,i.x)(r.attributeType),E=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-type`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(m),g=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-name`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(r.attributeName),O={};O.tn=E,O.nn=g;const b=E.node().getBBox(),k=g.node().getBBox();if(d=Math.max(d,b.width),y=Math.max(y,k.width),o=Math.max(b.height,k.height),l){const e=void 0!==r.attributeKeyTypeList?r.attributeKeyTypeList.join(","):"",a=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-key`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(e);O.kn=a;const c=a.node().getBBox();u=Math.max(u,c.width),o=Math.max(o,c.height)}if(h){const e=t.append("text").classed("er entityLabel",!0).attr("id",`${n}-comment`).attr("x",0).attr("y",0).style("dominant-baseline","middle").style("text-anchor","left").style("font-family",(0,i.c)().fontFamily).style("font-size",s+"px").text(r.attributeComment||"");O.cn=e;const a=e.node().getBBox();p=Math.max(p,a.width),o=Math.max(o,a.height)}O.height=o,c.push(O),_+=o+2*a,f+=1}));let m=4;l&&(m+=2),h&&(m+=2);const E=d+y+u+p,g={width:Math.max(k.minEntityWidth,Math.max(o.width+2*k.entityPadding,E+n*m)),height:r.length>0?_:Math.max(k.minEntityHeight,o.height+2*k.entityPadding)};if(r.length>0){const r=Math.max(0,(g.width-E-n*m)/(m/2));e.attr("transform","translate("+g.width/2+","+(a+o.height/2)+")");let i=o.height+2*a,s="attributeBoxOdd";c.forEach((e=>{const o=i+a+e.height/2;e.tn.attr("transform","translate("+n+","+o+")");const c=t.insert("rect","#"+e.tn.node().id).classed(`er ${s}`,!0).attr("x",0).attr("y",i).attr("width",d+2*n+r).attr("height",e.height+2*a),_=parseFloat(c.attr("x"))+parseFloat(c.attr("width"));e.nn.attr("transform","translate("+(_+n)+","+o+")");const f=t.insert("rect","#"+e.nn.node().id).classed(`er ${s}`,!0).attr("x",_).attr("y",i).attr("width",y+2*n+r).attr("height",e.height+2*a);let m=parseFloat(f.attr("x"))+parseFloat(f.attr("width"));if(l){e.kn.attr("transform","translate("+(m+n)+","+o+")");const c=t.insert("rect","#"+e.kn.node().id).classed(`er ${s}`,!0).attr("x",m).attr("y",i).attr("width",u+2*n+r).attr("height",e.height+2*a);m=parseFloat(c.attr("x"))+parseFloat(c.attr("width"))}h&&(e.cn.attr("transform","translate("+(m+n)+","+o+")"),t.insert("rect","#"+e.cn.node().id).classed(`er ${s}`,"true").attr("x",m).attr("y",i).attr("width",p+2*n+r).attr("height",e.height+2*a)),i+=e.height+2*a,s="attributeBoxOdd"===s?"attributeBoxEven":"attributeBoxOdd"}))}else g.height=Math.max(k.minEntityHeight,_),e.attr("transform","translate("+g.width/2+","+g.height/2+")");return g})(o,l,e[n].attributes),u=o.insert("rect","#"+c).classed("er entityBox",!0).attr("x",0).attr("y",0).attr("width",h).attr("height",d).node().getBBox();r.setNode(s,{width:u.width,height:u.height,shape:"rect",id:s})})),a}(h,o.db.getEntities(),d),p=function(t,e){return t.forEach((function(t){e.setEdge(R.get(t.entityA),R.get(t.entityB),{relationship:t},N(t))})),t}(o.db.getRelationships(),d);var _,f;(0,s.Zp)(d),_=h,(f=d).nodes().forEach((function(t){void 0!==t&&void 0!==f.node(t)&&_.select("#"+t).attr("transform","translate("+(f.node(t).x-f.node(t).width/2)+","+(f.node(t).y-f.node(t).height/2)+" )")})),p.forEach((function(t){!function(t,e,r,a,s){T++;const o=r.edge(R.get(e.entityA),R.get(e.entityB),N(e)),c=(0,n.n8j)().x((function(t){return t.x})).y((function(t){return t.y})).curve(n.qrM),l=t.insert("path","#"+a).classed("er relationshipLine",!0).attr("d",c(o.points)).style("stroke",k.stroke).style("fill","none");e.relSpec.relType===s.db.Identification.NON_IDENTIFYING&&l.attr("stroke-dasharray","8,8");let h="";switch(k.arrowMarkerAbsolute&&(h=window.location.protocol+"//"+window.location.host+window.location.pathname+window.location.search,h=h.replace(/\(/g,"\\("),h=h.replace(/\)/g,"\\)")),e.relSpec.cardA){case s.db.Cardinality.ZERO_OR_ONE:l.attr("marker-end","url("+h+"#"+O.ZERO_OR_ONE_END+")");break;case s.db.Cardinality.ZERO_OR_MORE:l.attr("marker-end","url("+h+"#"+O.ZERO_OR_MORE_END+")");break;case s.db.Cardinality.ONE_OR_MORE:l.attr("marker-end","url("+h+"#"+O.ONE_OR_MORE_END+")");break;case s.db.Cardinality.ONLY_ONE:l.attr("marker-end","url("+h+"#"+O.ONLY_ONE_END+")");break;case s.db.Cardinality.MD_PARENT:l.attr("marker-end","url("+h+"#"+O.MD_PARENT_END+")")}switch(e.relSpec.cardB){case s.db.Cardinality.ZERO_OR_ONE:l.attr("marker-start","url("+h+"#"+O.ZERO_OR_ONE_START+")");break;case s.db.Cardinality.ZERO_OR_MORE:l.attr("marker-start","url("+h+"#"+O.ZERO_OR_MORE_START+")");break;case s.db.Cardinality.ONE_OR_MORE:l.attr("marker-start","url("+h+"#"+O.ONE_OR_MORE_START+")");break;case s.db.Cardinality.ONLY_ONE:l.attr("marker-start","url("+h+"#"+O.ONLY_ONE_START+")");break;case s.db.Cardinality.MD_PARENT:l.attr("marker-start","url("+h+"#"+O.MD_PARENT_START+")")}const d=l.node().getTotalLength(),y=l.node().getPointAtLength(.5*d),u="rel"+T,p=t.append("text").classed("er relationshipLabel",!0).attr("id",u).attr("x",y.x).attr("y",y.y).style("text-anchor","middle").style("dominant-baseline","middle").style("font-family",(0,i.c)().fontFamily).style("font-size",k.fontSize+"px").text(e.roleA).node().getBBox();t.insert("rect","#"+u).classed("er relationshipLabelBox",!0).attr("x",y.x-p.width/2).attr("y",y.y-p.height/2).attr("width",p.width).attr("height",p.height)}(h,t,d,u,o)}));const m=k.diagramPadding;i.u.insertTitle(h,"entityTitleText",k.titleTopMargin,o.db.getDiagramTitle());const E=h.node().getBBox(),M=E.width+2*m,w=E.height+2*m;(0,i.i)(h,w,M,k.useMaxWidth),h.attr("viewBox",`${E.x-m} ${E.y-m} ${M} ${w}`)}},styles:t=>`\n  .entityBox {\n    fill: ${t.mainBkg};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxOdd {\n    fill: ${t.attributeBackgroundColorOdd};\n    stroke: ${t.nodeBorder};\n  }\n\n  .attributeBoxEven {\n    fill:  ${t.attributeBackgroundColorEven};\n    stroke: ${t.nodeBorder};\n  }\n\n  .relationshipLabelBox {\n    fill: ${t.tertiaryColor};\n    opacity: 0.7;\n    background-color: ${t.tertiaryColor};\n      rect {\n        opacity: 0.5;\n      }\n  }\n\n    .relationshipLine {\n      stroke: ${t.lineColor};\n    }\n\n  .entityTitleText {\n    text-anchor: middle;\n    font-size: 18px;\n    fill: ${t.textColor};\n  }    \n  #MD_PARENT_START {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  #MD_PARENT_END {\n    fill: #f5f5f5 !important;\n    stroke: ${t.lineColor} !important;\n    stroke-width: 1;\n  }\n  \n`}}}]);