import{c as Te,s as Ce,g as Fe,b as Me,a as De,l as Ne,A as Pe,h as oe,i as Ye,j as ke}from"./mermaid.core-AWWGHCz6.js";import{G as Ue}from"./graph-B5_14tOK.js";import{l as Be}from"./layout-B0Mlteil.js";import{l as Qe}from"./line-BUbfiVCi.js";import"./app-DeZCnSkw.js";import"./commonjsHelpers-Cpj98o6Y.js";import"./array-BKyUJesY.js";import"./path-CbwjOpE9.js";var ce=function(){var e=function(V,i,n,a){for(n=n||{},a=V.length;a--;n[V[a]]=i);return n},t=[1,3],l=[1,4],c=[1,5],u=[1,6],d=[5,6,8,9,11,13,31,32,33,34,35,36,44,62,63],p=[1,18],h=[2,7],o=[1,22],g=[1,23],R=[1,24],A=[1,25],T=[1,26],N=[1,27],v=[1,20],k=[1,28],x=[1,29],F=[62,63],de=[5,8,9,11,13,31,32,33,34,35,36,44,51,53,62,63],pe=[1,47],fe=[1,48],ye=[1,49],_e=[1,50],ge=[1,51],Ee=[1,52],Re=[1,53],O=[53,54],M=[1,64],D=[1,60],P=[1,61],Y=[1,62],U=[1,63],B=[1,65],j=[1,69],z=[1,70],X=[1,67],J=[1,68],m=[5,8,9,11,13,31,32,33,34,35,36,44,62,63],ie={trace:function(){},yy:{},symbols_:{error:2,start:3,directive:4,NEWLINE:5,RD:6,diagram:7,EOF:8,acc_title:9,acc_title_value:10,acc_descr:11,acc_descr_value:12,acc_descr_multiline_value:13,requirementDef:14,elementDef:15,relationshipDef:16,requirementType:17,requirementName:18,STRUCT_START:19,requirementBody:20,ID:21,COLONSEP:22,id:23,TEXT:24,text:25,RISK:26,riskLevel:27,VERIFYMTHD:28,verifyType:29,STRUCT_STOP:30,REQUIREMENT:31,FUNCTIONAL_REQUIREMENT:32,INTERFACE_REQUIREMENT:33,PERFORMANCE_REQUIREMENT:34,PHYSICAL_REQUIREMENT:35,DESIGN_CONSTRAINT:36,LOW_RISK:37,MED_RISK:38,HIGH_RISK:39,VERIFY_ANALYSIS:40,VERIFY_DEMONSTRATION:41,VERIFY_INSPECTION:42,VERIFY_TEST:43,ELEMENT:44,elementName:45,elementBody:46,TYPE:47,type:48,DOCREF:49,ref:50,END_ARROW_L:51,relationship:52,LINE:53,END_ARROW_R:54,CONTAINS:55,COPIES:56,DERIVES:57,SATISFIES:58,VERIFIES:59,REFINES:60,TRACES:61,unqString:62,qString:63,$accept:0,$end:1},terminals_:{2:"error",5:"NEWLINE",6:"RD",8:"EOF",9:"acc_title",10:"acc_title_value",11:"acc_descr",12:"acc_descr_value",13:"acc_descr_multiline_value",19:"STRUCT_START",21:"ID",22:"COLONSEP",24:"TEXT",26:"RISK",28:"VERIFYMTHD",30:"STRUCT_STOP",31:"REQUIREMENT",32:"FUNCTIONAL_REQUIREMENT",33:"INTERFACE_REQUIREMENT",34:"PERFORMANCE_REQUIREMENT",35:"PHYSICAL_REQUIREMENT",36:"DESIGN_CONSTRAINT",37:"LOW_RISK",38:"MED_RISK",39:"HIGH_RISK",40:"VERIFY_ANALYSIS",41:"VERIFY_DEMONSTRATION",42:"VERIFY_INSPECTION",43:"VERIFY_TEST",44:"ELEMENT",47:"TYPE",49:"DOCREF",51:"END_ARROW_L",53:"LINE",54:"END_ARROW_R",55:"CONTAINS",56:"COPIES",57:"DERIVES",58:"SATISFIES",59:"VERIFIES",60:"REFINES",61:"TRACES",62:"unqString",63:"qString"},productions_:[0,[3,3],[3,2],[3,4],[4,2],[4,2],[4,1],[7,0],[7,2],[7,2],[7,2],[7,2],[7,2],[14,5],[20,5],[20,5],[20,5],[20,5],[20,2],[20,1],[17,1],[17,1],[17,1],[17,1],[17,1],[17,1],[27,1],[27,1],[27,1],[29,1],[29,1],[29,1],[29,1],[15,5],[46,5],[46,5],[46,2],[46,1],[16,5],[16,5],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[52,1],[18,1],[18,1],[23,1],[23,1],[25,1],[25,1],[45,1],[45,1],[48,1],[48,1],[50,1],[50,1]],performAction:function(i,n,a,r,f,s,W){var _=s.length-1;switch(f){case 4:this.$=s[_].trim(),r.setAccTitle(this.$);break;case 5:case 6:this.$=s[_].trim(),r.setAccDescription(this.$);break;case 7:this.$=[];break;case 13:r.addRequirement(s[_-3],s[_-4]);break;case 14:r.setNewReqId(s[_-2]);break;case 15:r.setNewReqText(s[_-2]);break;case 16:r.setNewReqRisk(s[_-2]);break;case 17:r.setNewReqVerifyMethod(s[_-2]);break;case 20:this.$=r.RequirementType.REQUIREMENT;break;case 21:this.$=r.RequirementType.FUNCTIONAL_REQUIREMENT;break;case 22:this.$=r.RequirementType.INTERFACE_REQUIREMENT;break;case 23:this.$=r.RequirementType.PERFORMANCE_REQUIREMENT;break;case 24:this.$=r.RequirementType.PHYSICAL_REQUIREMENT;break;case 25:this.$=r.RequirementType.DESIGN_CONSTRAINT;break;case 26:this.$=r.RiskLevel.LOW_RISK;break;case 27:this.$=r.RiskLevel.MED_RISK;break;case 28:this.$=r.RiskLevel.HIGH_RISK;break;case 29:this.$=r.VerifyType.VERIFY_ANALYSIS;break;case 30:this.$=r.VerifyType.VERIFY_DEMONSTRATION;break;case 31:this.$=r.VerifyType.VERIFY_INSPECTION;break;case 32:this.$=r.VerifyType.VERIFY_TEST;break;case 33:r.addElement(s[_-3]);break;case 34:r.setNewElementType(s[_-2]);break;case 35:r.setNewElementDocRef(s[_-2]);break;case 38:r.addRelationship(s[_-2],s[_],s[_-4]);break;case 39:r.addRelationship(s[_-2],s[_-4],s[_]);break;case 40:this.$=r.Relationships.CONTAINS;break;case 41:this.$=r.Relationships.COPIES;break;case 42:this.$=r.Relationships.DERIVES;break;case 43:this.$=r.Relationships.SATISFIES;break;case 44:this.$=r.Relationships.VERIFIES;break;case 45:this.$=r.Relationships.REFINES;break;case 46:this.$=r.Relationships.TRACES;break}},table:[{3:1,4:2,6:t,9:l,11:c,13:u},{1:[3]},{3:8,4:2,5:[1,7],6:t,9:l,11:c,13:u},{5:[1,9]},{10:[1,10]},{12:[1,11]},e(d,[2,6]),{3:12,4:2,6:t,9:l,11:c,13:u},{1:[2,2]},{4:17,5:p,7:13,8:h,9:l,11:c,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:g,33:R,34:A,35:T,36:N,44:v,62:k,63:x},e(d,[2,4]),e(d,[2,5]),{1:[2,1]},{8:[1,30]},{4:17,5:p,7:31,8:h,9:l,11:c,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:g,33:R,34:A,35:T,36:N,44:v,62:k,63:x},{4:17,5:p,7:32,8:h,9:l,11:c,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:g,33:R,34:A,35:T,36:N,44:v,62:k,63:x},{4:17,5:p,7:33,8:h,9:l,11:c,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:g,33:R,34:A,35:T,36:N,44:v,62:k,63:x},{4:17,5:p,7:34,8:h,9:l,11:c,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:g,33:R,34:A,35:T,36:N,44:v,62:k,63:x},{4:17,5:p,7:35,8:h,9:l,11:c,13:u,14:14,15:15,16:16,17:19,23:21,31:o,32:g,33:R,34:A,35:T,36:N,44:v,62:k,63:x},{18:36,62:[1,37],63:[1,38]},{45:39,62:[1,40],63:[1,41]},{51:[1,42],53:[1,43]},e(F,[2,20]),e(F,[2,21]),e(F,[2,22]),e(F,[2,23]),e(F,[2,24]),e(F,[2,25]),e(de,[2,49]),e(de,[2,50]),{1:[2,3]},{8:[2,8]},{8:[2,9]},{8:[2,10]},{8:[2,11]},{8:[2,12]},{19:[1,44]},{19:[2,47]},{19:[2,48]},{19:[1,45]},{19:[2,53]},{19:[2,54]},{52:46,55:pe,56:fe,57:ye,58:_e,59:ge,60:Ee,61:Re},{52:54,55:pe,56:fe,57:ye,58:_e,59:ge,60:Ee,61:Re},{5:[1,55]},{5:[1,56]},{53:[1,57]},e(O,[2,40]),e(O,[2,41]),e(O,[2,42]),e(O,[2,43]),e(O,[2,44]),e(O,[2,45]),e(O,[2,46]),{54:[1,58]},{5:M,20:59,21:D,24:P,26:Y,28:U,30:B},{5:j,30:z,46:66,47:X,49:J},{23:71,62:k,63:x},{23:72,62:k,63:x},e(m,[2,13]),{22:[1,73]},{22:[1,74]},{22:[1,75]},{22:[1,76]},{5:M,20:77,21:D,24:P,26:Y,28:U,30:B},e(m,[2,19]),e(m,[2,33]),{22:[1,78]},{22:[1,79]},{5:j,30:z,46:80,47:X,49:J},e(m,[2,37]),e(m,[2,38]),e(m,[2,39]),{23:81,62:k,63:x},{25:82,62:[1,83],63:[1,84]},{27:85,37:[1,86],38:[1,87],39:[1,88]},{29:89,40:[1,90],41:[1,91],42:[1,92],43:[1,93]},e(m,[2,18]),{48:94,62:[1,95],63:[1,96]},{50:97,62:[1,98],63:[1,99]},e(m,[2,36]),{5:[1,100]},{5:[1,101]},{5:[2,51]},{5:[2,52]},{5:[1,102]},{5:[2,26]},{5:[2,27]},{5:[2,28]},{5:[1,103]},{5:[2,29]},{5:[2,30]},{5:[2,31]},{5:[2,32]},{5:[1,104]},{5:[2,55]},{5:[2,56]},{5:[1,105]},{5:[2,57]},{5:[2,58]},{5:M,20:106,21:D,24:P,26:Y,28:U,30:B},{5:M,20:107,21:D,24:P,26:Y,28:U,30:B},{5:M,20:108,21:D,24:P,26:Y,28:U,30:B},{5:M,20:109,21:D,24:P,26:Y,28:U,30:B},{5:j,30:z,46:110,47:X,49:J},{5:j,30:z,46:111,47:X,49:J},e(m,[2,14]),e(m,[2,15]),e(m,[2,16]),e(m,[2,17]),e(m,[2,34]),e(m,[2,35])],defaultActions:{8:[2,2],12:[2,1],30:[2,3],31:[2,8],32:[2,9],33:[2,10],34:[2,11],35:[2,12],37:[2,47],38:[2,48],40:[2,53],41:[2,54],83:[2,51],84:[2,52],86:[2,26],87:[2,27],88:[2,28],90:[2,29],91:[2,30],92:[2,31],93:[2,32],95:[2,55],96:[2,56],98:[2,57],99:[2,58]},parseError:function(i,n){if(n.recoverable)this.trace(i);else{var a=new Error(i);throw a.hash=n,a}},parse:function(i){var n=this,a=[0],r=[],f=[null],s=[],W=this.table,_="",Z=0,me=0,Ve=2,Ie=1,qe=s.slice.call(arguments,1),E=Object.create(this.lexer),L={yy:{}};for(var ne in this.yy)Object.prototype.hasOwnProperty.call(this.yy,ne)&&(L.yy[ne]=this.yy[ne]);E.setInput(i,L.yy),L.yy.lexer=E,L.yy.parser=this,typeof E.yylloc>"u"&&(E.yylloc={});var se=E.yylloc;s.push(se);var Oe=E.options&&E.options.ranges;typeof L.yy.parseError=="function"?this.parseError=L.yy.parseError:this.parseError=Object.getPrototypeOf(this).parseError;function Le(){var $;return $=r.pop()||E.lex()||Ie,typeof $!="number"&&($ instanceof Array&&(r=$,$=r.pop()),$=n.symbols_[$]||$),$}for(var I,C,S,ae,Q={},ee,w,be,te;;){if(C=a[a.length-1],this.defaultActions[C]?S=this.defaultActions[C]:((I===null||typeof I>"u")&&(I=Le()),S=W[C]&&W[C][I]),typeof S>"u"||!S.length||!S[0]){var le="";te=[];for(ee in W[C])this.terminals_[ee]&&ee>Ve&&te.push("'"+this.terminals_[ee]+"'");E.showPosition?le="Parse error on line "+(Z+1)+`:
`+E.showPosition()+`
Expecting `+te.join(", ")+", got '"+(this.terminals_[I]||I)+"'":le="Parse error on line "+(Z+1)+": Unexpected "+(I==Ie?"end of input":"'"+(this.terminals_[I]||I)+"'"),this.parseError(le,{text:E.match,token:this.terminals_[I]||I,line:E.yylineno,loc:se,expected:te})}if(S[0]instanceof Array&&S.length>1)throw new Error("Parse Error: multiple actions possible at state: "+C+", token: "+I);switch(S[0]){case 1:a.push(I),f.push(E.yytext),s.push(E.yylloc),a.push(S[1]),I=null,me=E.yyleng,_=E.yytext,Z=E.yylineno,se=E.yylloc;break;case 2:if(w=this.productions_[S[1]][1],Q.$=f[f.length-w],Q._$={first_line:s[s.length-(w||1)].first_line,last_line:s[s.length-1].last_line,first_column:s[s.length-(w||1)].first_column,last_column:s[s.length-1].last_column},Oe&&(Q._$.range=[s[s.length-(w||1)].range[0],s[s.length-1].range[1]]),ae=this.performAction.apply(Q,[_,me,Z,L.yy,S[1],f,s].concat(qe)),typeof ae<"u")return ae;w&&(a=a.slice(0,-1*w*2),f=f.slice(0,-1*w),s=s.slice(0,-1*w)),a.push(this.productions_[S[1]][0]),f.push(Q.$),s.push(Q._$),be=W[a[a.length-2]][a[a.length-1]],a.push(be);break;case 3:return!0}}return!0}},$e=function(){var V={EOF:1,parseError:function(n,a){if(this.yy.parser)this.yy.parser.parseError(n,a);else throw new Error(n)},setInput:function(i,n){return this.yy=n||this.yy||{},this._input=i,this._more=this._backtrack=this.done=!1,this.yylineno=this.yyleng=0,this.yytext=this.matched=this.match="",this.conditionStack=["INITIAL"],this.yylloc={first_line:1,first_column:0,last_line:1,last_column:0},this.options.ranges&&(this.yylloc.range=[0,0]),this.offset=0,this},input:function(){var i=this._input[0];this.yytext+=i,this.yyleng++,this.offset++,this.match+=i,this.matched+=i;var n=i.match(/(?:\r\n?|\n).*/g);return n?(this.yylineno++,this.yylloc.last_line++):this.yylloc.last_column++,this.options.ranges&&this.yylloc.range[1]++,this._input=this._input.slice(1),i},unput:function(i){var n=i.length,a=i.split(/(?:\r\n?|\n)/g);this._input=i+this._input,this.yytext=this.yytext.substr(0,this.yytext.length-n),this.offset-=n;var r=this.match.split(/(?:\r\n?|\n)/g);this.match=this.match.substr(0,this.match.length-1),this.matched=this.matched.substr(0,this.matched.length-1),a.length-1&&(this.yylineno-=a.length-1);var f=this.yylloc.range;return this.yylloc={first_line:this.yylloc.first_line,last_line:this.yylineno+1,first_column:this.yylloc.first_column,last_column:a?(a.length===r.length?this.yylloc.first_column:0)+r[r.length-a.length].length-a[0].length:this.yylloc.first_column-n},this.options.ranges&&(this.yylloc.range=[f[0],f[0]+this.yyleng-n]),this.yyleng=this.yytext.length,this},more:function(){return this._more=!0,this},reject:function(){if(this.options.backtrack_lexer)this._backtrack=!0;else return this.parseError("Lexical error on line "+(this.yylineno+1)+`. You can only invoke reject() in the lexer when the lexer is of the backtracking persuasion (options.backtrack_lexer = true).
`+this.showPosition(),{text:"",token:null,line:this.yylineno});return this},less:function(i){this.unput(this.match.slice(i))},pastInput:function(){var i=this.matched.substr(0,this.matched.length-this.match.length);return(i.length>20?"...":"")+i.substr(-20).replace(/\n/g,"")},upcomingInput:function(){var i=this.match;return i.length<20&&(i+=this._input.substr(0,20-i.length)),(i.substr(0,20)+(i.length>20?"...":"")).replace(/\n/g,"")},showPosition:function(){var i=this.pastInput(),n=new Array(i.length+1).join("-");return i+this.upcomingInput()+`
`+n+"^"},test_match:function(i,n){var a,r,f;if(this.options.backtrack_lexer&&(f={yylineno:this.yylineno,yylloc:{first_line:this.yylloc.first_line,last_line:this.last_line,first_column:this.yylloc.first_column,last_column:this.yylloc.last_column},yytext:this.yytext,match:this.match,matches:this.matches,matched:this.matched,yyleng:this.yyleng,offset:this.offset,_more:this._more,_input:this._input,yy:this.yy,conditionStack:this.conditionStack.slice(0),done:this.done},this.options.ranges&&(f.yylloc.range=this.yylloc.range.slice(0))),r=i[0].match(/(?:\r\n?|\n).*/g),r&&(this.yylineno+=r.length),this.yylloc={first_line:this.yylloc.last_line,last_line:this.yylineno+1,first_column:this.yylloc.last_column,last_column:r?r[r.length-1].length-r[r.length-1].match(/\r?\n?/)[0].length:this.yylloc.last_column+i[0].length},this.yytext+=i[0],this.match+=i[0],this.matches=i,this.yyleng=this.yytext.length,this.options.ranges&&(this.yylloc.range=[this.offset,this.offset+=this.yyleng]),this._more=!1,this._backtrack=!1,this._input=this._input.slice(i[0].length),this.matched+=i[0],a=this.performAction.call(this,this.yy,this,n,this.conditionStack[this.conditionStack.length-1]),this.done&&this._input&&(this.done=!1),a)return a;if(this._backtrack){for(var s in f)this[s]=f[s];return!1}return!1},next:function(){if(this.done)return this.EOF;this._input||(this.done=!0);var i,n,a,r;this._more||(this.yytext="",this.match="");for(var f=this._currentRules(),s=0;s<f.length;s++)if(a=this._input.match(this.rules[f[s]]),a&&(!n||a[0].length>n[0].length)){if(n=a,r=s,this.options.backtrack_lexer){if(i=this.test_match(a,f[s]),i!==!1)return i;if(this._backtrack){n=!1;continue}else return!1}else if(!this.options.flex)break}return n?(i=this.test_match(n,f[r]),i!==!1?i:!1):this._input===""?this.EOF:this.parseError("Lexical error on line "+(this.yylineno+1)+`. Unrecognized text.
`+this.showPosition(),{text:"",token:null,line:this.yylineno})},lex:function(){var n=this.next();return n||this.lex()},begin:function(n){this.conditionStack.push(n)},popState:function(){var n=this.conditionStack.length-1;return n>0?this.conditionStack.pop():this.conditionStack[0]},_currentRules:function(){return this.conditionStack.length&&this.conditionStack[this.conditionStack.length-1]?this.conditions[this.conditionStack[this.conditionStack.length-1]].rules:this.conditions.INITIAL.rules},topState:function(n){return n=this.conditionStack.length-1-Math.abs(n||0),n>=0?this.conditionStack[n]:"INITIAL"},pushState:function(n){this.begin(n)},stateStackSize:function(){return this.conditionStack.length},options:{"case-insensitive":!0},performAction:function(n,a,r,f){switch(r){case 0:return"title";case 1:return this.begin("acc_title"),9;case 2:return this.popState(),"acc_title_value";case 3:return this.begin("acc_descr"),11;case 4:return this.popState(),"acc_descr_value";case 5:this.begin("acc_descr_multiline");break;case 6:this.popState();break;case 7:return"acc_descr_multiline_value";case 8:return 5;case 9:break;case 10:break;case 11:break;case 12:return 8;case 13:return 6;case 14:return 19;case 15:return 30;case 16:return 22;case 17:return 21;case 18:return 24;case 19:return 26;case 20:return 28;case 21:return 31;case 22:return 32;case 23:return 33;case 24:return 34;case 25:return 35;case 26:return 36;case 27:return 37;case 28:return 38;case 29:return 39;case 30:return 40;case 31:return 41;case 32:return 42;case 33:return 43;case 34:return 44;case 35:return 55;case 36:return 56;case 37:return 57;case 38:return 58;case 39:return 59;case 40:return 60;case 41:return 61;case 42:return 47;case 43:return 49;case 44:return 51;case 45:return 54;case 46:return 53;case 47:this.begin("string");break;case 48:this.popState();break;case 49:return"qString";case 50:return a.yytext=a.yytext.trim(),62}},rules:[/^(?:title\s[^#\n;]+)/i,/^(?:accTitle\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*:\s*)/i,/^(?:(?!\n||)*[^\n]*)/i,/^(?:accDescr\s*\{\s*)/i,/^(?:[\}])/i,/^(?:[^\}]*)/i,/^(?:(\r?\n)+)/i,/^(?:\s+)/i,/^(?:#[^\n]*)/i,/^(?:%[^\n]*)/i,/^(?:$)/i,/^(?:requirementDiagram\b)/i,/^(?:\{)/i,/^(?:\})/i,/^(?::)/i,/^(?:id\b)/i,/^(?:text\b)/i,/^(?:risk\b)/i,/^(?:verifyMethod\b)/i,/^(?:requirement\b)/i,/^(?:functionalRequirement\b)/i,/^(?:interfaceRequirement\b)/i,/^(?:performanceRequirement\b)/i,/^(?:physicalRequirement\b)/i,/^(?:designConstraint\b)/i,/^(?:low\b)/i,/^(?:medium\b)/i,/^(?:high\b)/i,/^(?:analysis\b)/i,/^(?:demonstration\b)/i,/^(?:inspection\b)/i,/^(?:test\b)/i,/^(?:element\b)/i,/^(?:contains\b)/i,/^(?:copies\b)/i,/^(?:derives\b)/i,/^(?:satisfies\b)/i,/^(?:verifies\b)/i,/^(?:refines\b)/i,/^(?:traces\b)/i,/^(?:type\b)/i,/^(?:docref\b)/i,/^(?:<-)/i,/^(?:->)/i,/^(?:-)/i,/^(?:["])/i,/^(?:["])/i,/^(?:[^"]*)/i,/^(?:[\w][^\r\n\{\<\>\-\=]*)/i],conditions:{acc_descr_multiline:{rules:[6,7],inclusive:!1},acc_descr:{rules:[4],inclusive:!1},acc_title:{rules:[2],inclusive:!1},unqString:{rules:[],inclusive:!1},token:{rules:[],inclusive:!1},string:{rules:[48,49],inclusive:!1},INITIAL:{rules:[0,1,3,5,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,50],inclusive:!0}}};return V}();ie.lexer=$e;function re(){this.yy={}}return re.prototype=ie,ie.Parser=re,new re}();ce.parser=ce;const He=ce;let ue=[],b={},K={},q={},G={};const We={REQUIREMENT:"Requirement",FUNCTIONAL_REQUIREMENT:"Functional Requirement",INTERFACE_REQUIREMENT:"Interface Requirement",PERFORMANCE_REQUIREMENT:"Performance Requirement",PHYSICAL_REQUIREMENT:"Physical Requirement",DESIGN_CONSTRAINT:"Design Constraint"},Ke={LOW_RISK:"Low",MED_RISK:"Medium",HIGH_RISK:"High"},Ge={VERIFY_ANALYSIS:"Analysis",VERIFY_DEMONSTRATION:"Demonstration",VERIFY_INSPECTION:"Inspection",VERIFY_TEST:"Test"},je={CONTAINS:"contains",COPIES:"copies",DERIVES:"derives",SATISFIES:"satisfies",VERIFIES:"verifies",REFINES:"refines",TRACES:"traces"},ze=(e,t)=>(K[e]===void 0&&(K[e]={name:e,type:t,id:b.id,text:b.text,risk:b.risk,verifyMethod:b.verifyMethod}),b={},K[e]),Xe=()=>K,Je=e=>{b!==void 0&&(b.id=e)},Ze=e=>{b!==void 0&&(b.text=e)},et=e=>{b!==void 0&&(b.risk=e)},tt=e=>{b!==void 0&&(b.verifyMethod=e)},it=e=>(G[e]===void 0&&(G[e]={name:e,type:q.type,docRef:q.docRef},Ne.info("Added new requirement: ",e)),q={},G[e]),rt=()=>G,nt=e=>{q!==void 0&&(q.type=e)},st=e=>{q!==void 0&&(q.docRef=e)},at=(e,t,l)=>{ue.push({type:e,src:t,dst:l})},lt=()=>ue,ot=()=>{ue=[],b={},K={},q={},G={},Pe()},ct={RequirementType:We,RiskLevel:Ke,VerifyType:Ge,Relationships:je,getConfig:()=>Te().req,addRequirement:ze,getRequirements:Xe,setNewReqId:Je,setNewReqText:Ze,setNewReqRisk:et,setNewReqVerifyMethod:tt,setAccTitle:Ce,getAccTitle:Fe,setAccDescription:Me,getAccDescription:De,addElement:it,getElements:rt,setNewElementType:nt,setNewElementDocRef:st,addRelationship:at,getRelationships:lt,clear:ot},ht=e=>`

  marker {
    fill: ${e.relationColor};
    stroke: ${e.relationColor};
  }

  marker.cross {
    stroke: ${e.lineColor};
  }

  svg {
    font-family: ${e.fontFamily};
    font-size: ${e.fontSize};
  }

  .reqBox {
    fill: ${e.requirementBackground};
    fill-opacity: 1.0;
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  
  .reqTitle, .reqLabel{
    fill:  ${e.requirementTextColor};
  }
  .reqLabelBox {
    fill: ${e.relationLabelBackground};
    fill-opacity: 1.0;
  }

  .req-title-line {
    stroke: ${e.requirementBorderColor};
    stroke-width: ${e.requirementBorderSize};
  }
  .relationshipLine {
    stroke: ${e.relationColor};
    stroke-width: 1;
  }
  .relationshipLabel {
    fill: ${e.relationLabelColor};
  }

`,ut=ht,he={CONTAINS:"contains",ARROW:"arrow"},dt=(e,t)=>{let l=e.append("defs").append("marker").attr("id",he.CONTAINS+"_line_ending").attr("refX",0).attr("refY",t.line_height/2).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("g");l.append("circle").attr("cx",t.line_height/2).attr("cy",t.line_height/2).attr("r",t.line_height/2).attr("fill","none"),l.append("line").attr("x1",0).attr("x2",t.line_height).attr("y1",t.line_height/2).attr("y2",t.line_height/2).attr("stroke-width",1),l.append("line").attr("y1",0).attr("y2",t.line_height).attr("x1",t.line_height/2).attr("x2",t.line_height/2).attr("stroke-width",1),e.append("defs").append("marker").attr("id",he.ARROW+"_line_ending").attr("refX",t.line_height).attr("refY",.5*t.line_height).attr("markerWidth",t.line_height).attr("markerHeight",t.line_height).attr("orient","auto").append("path").attr("d",`M0,0
      L${t.line_height},${t.line_height/2}
      M${t.line_height},${t.line_height/2}
      L0,${t.line_height}`).attr("stroke-width",1)},xe={ReqMarkers:he,insertLineEndings:dt};let y={},Se=0;const Ae=(e,t)=>e.insert("rect","#"+t).attr("class","req reqBox").attr("x",0).attr("y",0).attr("width",y.rect_min_width+"px").attr("height",y.rect_min_height+"px"),ve=(e,t,l)=>{let c=y.rect_min_width/2,u=e.append("text").attr("class","req reqLabel reqTitle").attr("id",t).attr("x",c).attr("y",y.rect_padding).attr("dominant-baseline","hanging"),d=0;l.forEach(g=>{d==0?u.append("tspan").attr("text-anchor","middle").attr("x",y.rect_min_width/2).attr("dy",0).text(g):u.append("tspan").attr("text-anchor","middle").attr("x",y.rect_min_width/2).attr("dy",y.line_height*.75).text(g),d++});let p=1.5*y.rect_padding,h=d*y.line_height*.75,o=p+h;return e.append("line").attr("class","req-title-line").attr("x1","0").attr("x2",y.rect_min_width).attr("y1",o).attr("y2",o),{titleNode:u,y:o}},we=(e,t,l,c)=>{let u=e.append("text").attr("class","req reqLabel").attr("id",t).attr("x",y.rect_padding).attr("y",c).attr("dominant-baseline","hanging"),d=0;const p=30;let h=[];return l.forEach(o=>{let g=o.length;for(;g>p&&d<3;){let R=o.substring(0,p);o=o.substring(p,o.length),g=o.length,h[h.length]=R,d++}if(d==3){let R=h[h.length-1];h[h.length-1]=R.substring(0,R.length-4)+"..."}else h[h.length]=o;d=0}),h.forEach(o=>{u.append("tspan").attr("x",y.rect_padding).attr("dy",y.line_height).text(o)}),u},pt=(e,t,l,c)=>{const u=t.node().getTotalLength(),d=t.node().getPointAtLength(u*.5),p="rel"+Se;Se++;const o=e.append("text").attr("class","req relationshipLabel").attr("id",p).attr("x",d.x).attr("y",d.y).attr("text-anchor","middle").attr("dominant-baseline","middle").text(c).node().getBBox();e.insert("rect","#"+p).attr("class","req reqLabelBox").attr("x",d.x-o.width/2).attr("y",d.y-o.height/2).attr("width",o.width).attr("height",o.height).attr("fill","white").attr("fill-opacity","85%")},ft=function(e,t,l,c,u){const d=l.edge(H(t.src),H(t.dst)),p=Qe().x(function(o){return o.x}).y(function(o){return o.y}),h=e.insert("path","#"+c).attr("class","er relationshipLine").attr("d",p(d.points)).attr("fill","none");t.type==u.db.Relationships.CONTAINS?h.attr("marker-start","url("+ke.getUrl(y.arrowMarkerAbsolute)+"#"+t.type+"_line_ending)"):(h.attr("stroke-dasharray","10,7"),h.attr("marker-end","url("+ke.getUrl(y.arrowMarkerAbsolute)+"#"+xe.ReqMarkers.ARROW+"_line_ending)")),pt(e,h,y,`<<${t.type}>>`)},yt=(e,t,l)=>{Object.keys(e).forEach(c=>{let u=e[c];c=H(c),Ne.info("Added new requirement: ",c);const d=l.append("g").attr("id",c),p="req-"+c,h=Ae(d,p);let o=ve(d,c+"_title",[`<<${u.type}>>`,`${u.name}`]);we(d,c+"_body",[`Id: ${u.id}`,`Text: ${u.text}`,`Risk: ${u.risk}`,`Verification: ${u.verifyMethod}`],o.y);const g=h.node().getBBox();t.setNode(c,{width:g.width,height:g.height,shape:"rect",id:c})})},_t=(e,t,l)=>{Object.keys(e).forEach(c=>{let u=e[c];const d=H(c),p=l.append("g").attr("id",d),h="element-"+d,o=Ae(p,h);let g=ve(p,h+"_title",["<<Element>>",`${c}`]);we(p,h+"_body",[`Type: ${u.type||"Not Specified"}`,`Doc Ref: ${u.docRef||"None"}`],g.y);const R=o.node().getBBox();t.setNode(d,{width:R.width,height:R.height,shape:"rect",id:d})})},gt=(e,t)=>(e.forEach(function(l){let c=H(l.src),u=H(l.dst);t.setEdge(c,u,{relationship:l})}),e),Et=function(e,t){t.nodes().forEach(function(l){l!==void 0&&t.node(l)!==void 0&&(e.select("#"+l),e.select("#"+l).attr("transform","translate("+(t.node(l).x-t.node(l).width/2)+","+(t.node(l).y-t.node(l).height/2)+" )"))})},H=e=>e.replace(/\s/g,"").replace(/\./g,"_"),Rt=(e,t,l,c)=>{y=Te().requirement;const u=y.securityLevel;let d;u==="sandbox"&&(d=oe("#i"+t));const h=(u==="sandbox"?oe(d.nodes()[0].contentDocument.body):oe("body")).select(`[id='${t}']`);xe.insertLineEndings(h,y);const o=new Ue({multigraph:!1,compound:!1,directed:!0}).setGraph({rankdir:y.layoutDirection,marginx:20,marginy:20,nodesep:100,edgesep:100,ranksep:100}).setDefaultEdgeLabel(function(){return{}});let g=c.db.getRequirements(),R=c.db.getElements(),A=c.db.getRelationships();yt(g,o,h),_t(R,o,h),gt(A,o),Be(o),Et(h,o),A.forEach(function(x){ft(h,x,o,t,c)});const T=y.rect_padding,N=h.node().getBBox(),v=N.width+T*2,k=N.height+T*2;Ye(h,k,v,y.useMaxWidth),h.attr("viewBox",`${N.x-T} ${N.y-T} ${v} ${k}`)},mt={draw:Rt},vt={parser:He,db:ct,renderer:mt,styles:ut};export{vt as diagram};