parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"TWuZ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.WorkerManager=void 0;var t=function(t,e,r,n){return new(r||(r=Promise))(function(i,o){function s(t){try{u(n.next(t))}catch(e){o(e)}}function a(t){try{u(n.throw(t))}catch(e){o(e)}}function u(t){var e;t.done?i(t.value):(e=t.value,e instanceof r?e:new r(function(t){t(e)})).then(s,a)}u((n=n.apply(t,e||[])).next())})},e=function(t,e){var r,n,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function a(o){return function(a){return function(o){if(r)throw new TypeError("Generator is already executing.");for(;s;)try{if(r=1,n&&(i=2&o[0]?n.return:o[0]?n.throw||((i=n.return)&&i.call(n),0):n.next)&&!(i=i.call(n,o[1])).done)return i;switch(n=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,n=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(a){o=[6,a],n=0}finally{r=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,a])}}},r=function(){function r(t,e){var r=this;this._modeId=t,this._defaults=e,this._worker=null,this._idleCheckInterval=setInterval(function(){return r._checkIfIdle()},3e4),this._lastUsedTime=0,this._configChangeListener=this._defaults.onDidChange(function(){return r._stopWorker()}),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange(function(){return r._updateExtraLibs()})}return r.prototype._stopWorker=function(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null},r.prototype.dispose=function(){clearInterval(this._idleCheckInterval),this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()},r.prototype._updateExtraLibs=function(){return t(this,void 0,void 0,function(){var t,r;return e(this,function(e){switch(e.label){case 0:return this._worker?(t=++this._updateExtraLibsToken,[4,this._worker.getProxy()]):[2];case 1:return r=e.sent(),this._updateExtraLibsToken!==t?[2]:(r.updateExtraLibs(this._defaults.getExtraLibs()),[2])}})})},r.prototype._checkIfIdle=function(){if(this._worker){var t=this._defaults.getWorkerMaxIdleTime(),e=Date.now()-this._lastUsedTime;t>0&&e>t&&this._stopWorker()}},r.prototype._getClient=function(){var t=this;if(this._lastUsedTime=Date.now(),!this._client){this._worker=monaco.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs()}});var e=this._worker.getProxy();this._defaults.getEagerModelSync()&&(e=e.then(function(e){return t._worker.withSyncedResources(monaco.editor.getModels().filter(function(e){return e.getModeId()===t._modeId}).map(function(t){return t.uri}))})),this._client=e}return this._client},r.prototype.getLanguageServiceWorker=function(){for(var t,e=this,r=[],n=0;n<arguments.length;n++)r[n]=arguments[n];return this._getClient().then(function(e){t=e}).then(function(t){return e._worker.withSyncedResources(r)}).then(function(e){return t})},r}();exports.WorkerManager=r;
},{}],"PKyG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.flattenDiagnosticMessageText=a,exports.RenameAdapter=exports.FormatOnTypeAdapter=exports.FormatAdapter=exports.FormatHelper=exports.Kind=exports.OutlineAdapter=exports.ReferenceAdapter=exports.DefinitionAdapter=exports.OccurrencesAdapter=exports.QuickInfoAdapter=exports.SignatureHelpAdapter=exports.SuggestAdapter=exports.DiagnostcsAdapter=exports.Adapter=void 0;var e,t=function(){var e=function(t,n){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(t,n)};return function(t,n){function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}}(),n=function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function s(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,s)}u((r=r.apply(e,t||[])).next())})},r=function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function s(i){return function(s){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;a;)try{if(n=1,r&&(o=2&i[0]?r.return:i[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,i[1])).done)return o;switch(r=0,o&&(i=[2&i[0],o.value]),i[0]){case 0:case 1:o=i;break;case 4:return a.label++,{value:i[1],done:!1};case 5:a.label++,r=i[1],i=[0];continue;case 7:i=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===i[0]||2===i[0])){a=0;continue}if(3===i[0]&&(!o||i[1]>o[0]&&i[1]<o[3])){a.label=i[1];break}if(6===i[0]&&a.label<o[1]){a.label=o[1],o=i;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(i);break}o[2]&&a.ops.pop(),a.trys.pop();continue}i=t.call(e,a)}catch(s){i=[6,s],r=0}finally{n=o=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}},o=monaco.Uri,i=monaco.Range;function a(e,t,n){if(void 0===n&&(n=0),"string"==typeof e)return e;if(void 0===e)return"";var r="";if(n){r+=t;for(var o=0;o<n;o++)r+="  "}if(r+=e.messageText,n++,e.next)for(var i=0,s=e.next;i<s.length;i++){r+=a(s[i],t,n)}return r}function s(e){return e?e.map(function(e){return e.text}).join(""):""}!function(e){e[e.None=0]="None",e[e.Block=1]="Block",e[e.Smart=2]="Smart"}(e||(e={}));var u=function(){function e(e){this._worker=e}return e.prototype._positionToOffset=function(e,t){return monaco.editor.getModel(e).getOffsetAt(t)},e.prototype._offsetToPosition=function(e,t){return monaco.editor.getModel(e).getPositionAt(t)},e.prototype._textSpanToRange=function(e,t){var n=this._offsetToPosition(e,t.start),r=this._offsetToPosition(e,t.start+t.length);return{startLineNumber:n.lineNumber,startColumn:n.column,endLineNumber:r.lineNumber,endColumn:r.column}},e}();exports.Adapter=u;var c=function(e){function n(t,n,r){var o=e.call(this,r)||this;o._defaults=t,o._selector=n,o._disposables=[],o._listener=Object.create(null);var i=function(e){if(e.getModeId()===n){var t,r=e.onDidChangeContent(function(){clearTimeout(t),t=setTimeout(function(){return o._doValidate(e.uri)},500)});o._listener[e.uri.toString()]={dispose:function(){r.dispose(),clearTimeout(t)}},o._doValidate(e.uri)}},a=function(e){monaco.editor.setModelMarkers(e,o._selector,[]);var t=e.uri.toString();o._listener[t]&&(o._listener[t].dispose(),delete o._listener[t])};o._disposables.push(monaco.editor.onDidCreateModel(i)),o._disposables.push(monaco.editor.onWillDisposeModel(a)),o._disposables.push(monaco.editor.onDidChangeModelLanguage(function(e){a(e.model),i(e.model)})),o._disposables.push({dispose:function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n)}}});var s=function(){for(var e=0,t=monaco.editor.getModels();e<t.length;e++){var n=t[e];a(n),i(n)}};return o._disposables.push(o._defaults.onDidChange(s)),o._disposables.push(o._defaults.onDidExtraLibsChange(s)),monaco.editor.getModels().forEach(i),o}return t(n,e),n.prototype.dispose=function(){this._disposables.forEach(function(e){return e&&e.dispose()}),this._disposables=[]},n.prototype._doValidate=function(e){var t=this;this._worker(e).then(function(n){if(!monaco.editor.getModel(e))return null;var r=[],o=t._defaults.getDiagnosticsOptions(),i=o.noSyntaxValidation,a=o.noSemanticValidation;return i||r.push(n.getSyntacticDiagnostics(e.toString())),a||r.push(n.getSemanticDiagnostics(e.toString())),Promise.all(r)}).then(function(n){if(!n||!monaco.editor.getModel(e))return null;var r=n.reduce(function(e,t){return t.concat(e)},[]).map(function(n){return t._convertDiagnostics(e,n)});monaco.editor.setModelMarkers(monaco.editor.getModel(e),t._selector,r)}).then(void 0,function(e){console.error(e)})},n.prototype._convertDiagnostics=function(e,t){var n=this._offsetToPosition(e,t.start),r=n.lineNumber,o=n.column,i=this._offsetToPosition(e,t.start+t.length),s=i.lineNumber,u=i.column;return{severity:monaco.MarkerSeverity.Error,startLineNumber:r,startColumn:o,endLineNumber:s,endColumn:u,message:a(t.messageText,"\n")}},n}(u);exports.DiagnostcsAdapter=c;var l=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),Object.defineProperty(n.prototype,"triggerCharacters",{get:function(){return["."]},enumerable:!0,configurable:!0}),n.prototype.provideCompletionItems=function(e,t,r,o){var a=e.getWordUntilPosition(t),s=new i(t.lineNumber,a.startColumn,t.lineNumber,a.endColumn),u=e.uri,c=this._positionToOffset(u,t);return this._worker(u).then(function(e){return e.getCompletionsAtPosition(u.toString(),c)}).then(function(r){if(r)return{suggestions:r.entries.map(function(r){var o=s;if(r.replacementSpan){var a=e.getPositionAt(r.replacementSpan.start),c=e.getPositionAt(r.replacementSpan.start+r.replacementSpan.length);o=new i(a.lineNumber,a.column,c.lineNumber,c.column)}return{uri:u,position:t,range:o,label:r.name,insertText:r.name,sortText:r.sortText,kind:n.convertKind(r.kind)}})}})},n.prototype.resolveCompletionItem=function(e,t,r,o){var i=this,a=r,u=a.uri,c=a.position;return this._worker(u).then(function(e){return e.getCompletionEntryDetails(u.toString(),i._positionToOffset(u,c),a.label)}).then(function(e){return e?{uri:u,position:c,label:e.name,kind:n.convertKind(e.kind),detail:s(e.displayParts),documentation:{value:s(e.documentation)}}:a})},n.convertKind=function(e){switch(e){case v.primitiveType:case v.keyword:return monaco.languages.CompletionItemKind.Keyword;case v.variable:case v.localVariable:return monaco.languages.CompletionItemKind.Variable;case v.memberVariable:case v.memberGetAccessor:case v.memberSetAccessor:return monaco.languages.CompletionItemKind.Field;case v.function:case v.memberFunction:case v.constructSignature:case v.callSignature:case v.indexSignature:return monaco.languages.CompletionItemKind.Function;case v.enum:return monaco.languages.CompletionItemKind.Enum;case v.module:return monaco.languages.CompletionItemKind.Module;case v.class:return monaco.languages.CompletionItemKind.Class;case v.interface:return monaco.languages.CompletionItemKind.Interface;case v.warning:return monaco.languages.CompletionItemKind.File}return monaco.languages.CompletionItemKind.Property},n}(u);exports.SuggestAdapter=l;var p=function(e){function n(){var t=null!==e&&e.apply(this,arguments)||this;return t.signatureHelpTriggerCharacters=["(",","],t}return t(n,e),n.prototype.provideSignatureHelp=function(e,t,n){var r=this,o=e.uri;return this._worker(o).then(function(e){return e.getSignatureHelpItems(o.toString(),r._positionToOffset(o,t))}).then(function(e){if(e){var t={activeSignature:e.selectedItemIndex,activeParameter:e.argumentIndex,signatures:[]};return e.items.forEach(function(e){var n={label:"",parameters:[]};n.label+=s(e.prefixDisplayParts),e.parameters.forEach(function(t,r,o){var i=s(t.displayParts),a={label:i,documentation:s(t.documentation)};n.label+=i,n.parameters.push(a),r<o.length-1&&(n.label+=s(e.separatorDisplayParts))}),n.label+=s(e.suffixDisplayParts),t.signatures.push(n)}),{value:t,dispose:function(){}}}})},n}(u);exports.SignatureHelpAdapter=p;var f=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideHover=function(e,t,n){var r=this,o=e.uri;return this._worker(o).then(function(e){return e.getQuickInfoAtPosition(o.toString(),r._positionToOffset(o,t))}).then(function(e){if(e){var t=s(e.documentation),n=e.tags?e.tags.map(function(e){var t="*@"+e.name+"*";return e.text?t+(e.text.match(/\r\n|\n/g)?" \n"+e.text:" - "+e.text):t}).join("  \n\n"):"",i=s(e.displayParts);return{range:r._textSpanToRange(o,e.textSpan),contents:[{value:"```js\n"+i+"\n```\n"},{value:t+(n?"\n\n"+n:"")}]}}})},n}(u);exports.QuickInfoAdapter=f;var m=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideDocumentHighlights=function(e,t,n){var r=this,o=e.uri;return this._worker(o).then(function(e){return e.getOccurrencesAtPosition(o.toString(),r._positionToOffset(o,t))}).then(function(e){if(e)return e.map(function(e){return{range:r._textSpanToRange(o,e.textSpan),kind:e.isWriteAccess?monaco.languages.DocumentHighlightKind.Write:monaco.languages.DocumentHighlightKind.Text}})})},n}(u);exports.OccurrencesAdapter=m;var d=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideDefinition=function(e,t,n){var r=this,i=e.uri;return this._worker(i).then(function(e){return e.getDefinitionAtPosition(i.toString(),r._positionToOffset(i,t))}).then(function(e){if(e){for(var t=[],n=0,i=e;n<i.length;n++){var a=i[n],s=o.parse(a.fileName);monaco.editor.getModel(s)&&t.push({uri:s,range:r._textSpanToRange(s,a.textSpan)})}return t}})},n}(u);exports.DefinitionAdapter=d;var g=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideReferences=function(e,t,n,r){var i=this,a=e.uri;return this._worker(a).then(function(e){return e.getReferencesAtPosition(a.toString(),i._positionToOffset(a,t))}).then(function(e){if(e){for(var t=[],n=0,r=e;n<r.length;n++){var a=r[n],s=o.parse(a.fileName);monaco.editor.getModel(s)&&t.push({uri:s,range:i._textSpanToRange(s,a.textSpan)})}return t}})},n}(u);exports.ReferenceAdapter=g;var h=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideDocumentSymbols=function(e,t){var n=this,r=e.uri;return this._worker(r).then(function(e){return e.getNavigationBarItems(r.toString())}).then(function(e){if(e){var t=function(e,o,i){var a={name:o.text,detail:"",kind:b[o.kind]||monaco.languages.SymbolKind.Variable,range:n._textSpanToRange(r,o.spans[0]),selectionRange:n._textSpanToRange(r,o.spans[0]),tags:[],containerName:i};if(o.childItems&&o.childItems.length>0)for(var s=0,u=o.childItems;s<u.length;s++){var c=u[s];t(e,c,a.name)}e.push(a)},o=[];return e.forEach(function(e){return t(o,e)}),o}})},n}(u);exports.OutlineAdapter=h;var v=function(){function e(){}return e.unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e}();exports.Kind=v;var b=Object.create(null);b[v.module]=monaco.languages.SymbolKind.Module,b[v.class]=monaco.languages.SymbolKind.Class,b[v.enum]=monaco.languages.SymbolKind.Enum,b[v.interface]=monaco.languages.SymbolKind.Interface,b[v.memberFunction]=monaco.languages.SymbolKind.Method,b[v.memberVariable]=monaco.languages.SymbolKind.Property,b[v.memberGetAccessor]=monaco.languages.SymbolKind.Property,b[v.memberSetAccessor]=monaco.languages.SymbolKind.Property,b[v.variable]=monaco.languages.SymbolKind.Variable,b[v.const]=monaco.languages.SymbolKind.Variable,b[v.localVariable]=monaco.languages.SymbolKind.Variable,b[v.variable]=monaco.languages.SymbolKind.Variable,b[v.function]=monaco.languages.SymbolKind.Function,b[v.localFunction]=monaco.languages.SymbolKind.Function;var y=function(n){function r(){return null!==n&&n.apply(this,arguments)||this}return t(r,n),r._convertOptions=function(t){return{ConvertTabsToSpaces:t.insertSpaces,TabSize:t.tabSize,IndentSize:t.tabSize,IndentStyle:e.Smart,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}},r.prototype._convertTextChanges=function(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}},r}(u);exports.FormatHelper=y;var S=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),n.prototype.provideDocumentRangeFormattingEdits=function(e,t,n,r){var o=this,i=e.uri;return this._worker(i).then(function(e){return e.getFormattingEditsForRange(i.toString(),o._positionToOffset(i,{lineNumber:t.startLineNumber,column:t.startColumn}),o._positionToOffset(i,{lineNumber:t.endLineNumber,column:t.endColumn}),y._convertOptions(n))}).then(function(e){if(e)return e.map(function(e){return o._convertTextChanges(i,e)})})},n}(y);exports.FormatAdapter=S;var _=function(e){function n(){return null!==e&&e.apply(this,arguments)||this}return t(n,e),Object.defineProperty(n.prototype,"autoFormatTriggerCharacters",{get:function(){return[";","}","\n"]},enumerable:!0,configurable:!0}),n.prototype.provideOnTypeFormattingEdits=function(e,t,n,r,o){var i=this,a=e.uri;return this._worker(a).then(function(e){return e.getFormattingEditsAfterKeystroke(a.toString(),i._positionToOffset(a,t),n,y._convertOptions(r))}).then(function(e){if(e)return e.map(function(e){return i._convertTextChanges(a,e)})})},n}(y);exports.FormatOnTypeAdapter=_;var x=function(e){function o(){return null!==e&&e.apply(this,arguments)||this}return t(o,e),o.prototype.provideRenameEdits=function(e,t,o,i){return n(this,void 0,void 0,function(){var n,i,a,s,u,c,l,p,f,m,d,g;return r(this,function(r){switch(r.label){case 0:return n=e.uri,i=n.toString(),a=this._positionToOffset(n,t),[4,this._worker(n)];case 1:return[4,(s=r.sent()).getRenameInfo(i,a,{allowRenameOfImportPath:!1})];case 2:if(!1===(u=r.sent()).canRename)return[2,{edits:[],rejectReason:u.localizedErrorMessage}];if(void 0!==u.fileToRename)throw new Error("Renaming files is not supported.");return[4,s.findRenameLocations(i,a,!1,!1,!1)];case 3:for(c=r.sent(),l={},p=[],f=0,m=c;f<m.length;f++)(d=m[f]).fileName in l||(g={edits:[],resource:monaco.Uri.parse(d.fileName)},l[d.fileName]=g,p.push(g)),l[d.fileName].edits.push({range:this._textSpanToRange(n,d.textSpan),text:o});return[2,{edits:p}]}})})},o}(u);exports.RenameAdapter=x;
},{}],"wBzX":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setupTypeScript=i,exports.setupJavaScript=u,exports.getJavaScriptWorker=g,exports.getTypeScriptWorker=c;var e,r,t=require("./workerManager.js"),n=a(require("./languageFeatures.js"));function o(){if("function"!=typeof WeakMap)return null;var e=new WeakMap;return o=function(){return e},e}function a(e){if(e&&e.__esModule)return e;if(null===e||"object"!=typeof e&&"function"!=typeof e)return{default:e};var r=o();if(r&&r.has(e))return r.get(e);var t={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=n?Object.getOwnPropertyDescriptor(e,a):null;i&&(i.get||i.set)?Object.defineProperty(t,a,i):t[a]=e[a]}return t.default=e,r&&r.set(e,t),t}function i(e){r=p(e,"typescript")}function u(r){e=p(r,"javascript")}function g(){return new Promise(function(r,t){if(!e)return t("JavaScript not registered!");r(e)})}function c(){return new Promise(function(e,t){if(!r)return t("TypeScript not registered!");e(r)})}function p(e,r){var o=new t.WorkerManager(r,e),a=function(e){for(var r=[],t=1;t<arguments.length;t++)r[t-1]=arguments[t];return o.getLanguageServiceWorker.apply(o,[e].concat(r))};return monaco.languages.registerCompletionItemProvider(r,new n.SuggestAdapter(a)),monaco.languages.registerSignatureHelpProvider(r,new n.SignatureHelpAdapter(a)),monaco.languages.registerHoverProvider(r,new n.QuickInfoAdapter(a)),monaco.languages.registerDocumentHighlightProvider(r,new n.OccurrencesAdapter(a)),monaco.languages.registerDefinitionProvider(r,new n.DefinitionAdapter(a)),monaco.languages.registerReferenceProvider(r,new n.ReferenceAdapter(a)),monaco.languages.registerDocumentSymbolProvider(r,new n.OutlineAdapter(a)),monaco.languages.registerDocumentRangeFormattingEditProvider(r,new n.FormatAdapter(a)),monaco.languages.registerOnTypeFormattingEditProvider(r,new n.FormatOnTypeAdapter(a)),monaco.languages.registerRenameProvider(r,new n.RenameAdapter(a)),new n.DiagnostcsAdapter(e,r,a),a}
},{"./workerManager.js":"TWuZ","./languageFeatures.js":"PKyG"}]},{},["wBzX"], null)
//# sourceMappingURL=/tsMode.296e2d0e.js.map