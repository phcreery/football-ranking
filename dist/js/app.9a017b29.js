(function(e){function n(n){for(var r,i,l=n[0],c=n[1],s=n[2],p=0,d=[];p<l.length;p++)i=l[p],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);u&&u(n);while(d.length)d.shift()();return o.push.apply(o,s||[]),t()}function t(){for(var e,n=0;n<o.length;n++){for(var t=o[n],r=!0,l=1;l<t.length;l++){var c=t[l];0!==a[c]&&(r=!1)}r&&(o.splice(n--,1),e=i(i.s=t[0]))}return e}var r={},a={app:0},o=[];function i(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,i),t.l=!0,t.exports}i.m=e,i.c=r,i.d=function(e,n,t){i.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,n){if(1&n&&(e=i(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(i.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)i.d(t,r,function(n){return e[n]}.bind(null,r));return t},i.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(n,"a",n),n},i.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var s=0;s<l.length;s++)n(l[s]);var u=c;o.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"3c5a":function(e,n,t){},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23");function a(e,n,t,a,o,i){var l=Object(r["t"])("Homepage");return Object(r["o"])(),Object(r["e"])(l)}var o={class:"p-d-flex p-jc-between"},i=Object(r["h"])("h1",null,"Football Ranking",-1),l={class:"p-p-3"},c={class:"p-d-flex p-jc-between"},s={class:"p-input-icon-left"},u=Object(r["h"])("i",{class:"pi pi-search"},null,-1),p={class:"p-d-flex p-jc-between"},d={class:"p-input-icon-left"},f=Object(r["h"])("i",{class:"pi pi-search"},null,-1);function m(e,n,t,a,m,b){var g=Object(r["t"])("BlockUI"),h=Object(r["t"])("Button"),v=Object(r["t"])("InputText"),y=Object(r["t"])("Column"),j=Object(r["t"])("DataTable"),O=Object(r["t"])("TabPanel"),k=Object(r["t"])("TabView");return Object(r["o"])(),Object(r["g"])("div",null,[Object(r["k"])(g,{blocked:a.page_loading,fullScreen:!0},null,8,["blocked"]),Object(r["h"])("div",o,[i,Object(r["h"])("div",l,[Object(r["k"])(h,{label:"Refresh",onClick:n[0]||(n[0]=function(e){return a.refreshData()})})])]),Object(r["k"])(k,null,{default:Object(r["A"])((function(){return[Object(r["k"])(O,{header:"Ranking"},{default:Object(r["A"])((function(){return[Object(r["k"])(j,{value:a.ranking,responsiveLayout:"scroll",class:"p-datatable-sm p-datatable-customers",loading:a.python_loading,dataKey:"id",filters:a.filters1,"onUpdate:filters":n[3]||(n[3]=function(e){return a.filters1=e}),globalFilterFields:["name"]},{header:Object(r["A"])((function(){return[Object(r["h"])("div",c,[Object(r["k"])(h,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:n[1]||(n[1]=function(e){return a.initFilters1()})}),Object(r["h"])("span",s,[u,Object(r["k"])(v,{modelValue:a.filters1["global"].value,"onUpdate:modelValue":n[2]||(n[2]=function(e){return a.filters1["global"].value=e}),placeholder:"Keyword Search"},null,8,["modelValue"])])])]})),default:Object(r["A"])((function(){return[Object(r["k"])(y,{field:"rank",header:"Rank"}),Object(r["k"])(y,{field:"name",header:"Team"})]})),_:1},8,["value","loading","filters"])]})),_:1}),Object(r["k"])(O,{header:"All Games"},{default:Object(r["A"])((function(){return[Object(r["k"])(j,{value:a.games,responsiveLayout:"scroll",class:"p-datatable-sm p-datatable-customers",loading:a.table_loading,dataKey:"id",filters:a.filters1,"onUpdate:filters":n[6]||(n[6]=function(e){return a.filters1=e}),globalFilterFields:["home_team","away_team"]},{header:Object(r["A"])((function(){return[Object(r["h"])("div",p,[Object(r["k"])(h,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:n[4]||(n[4]=function(e){return a.initFilters1()})}),Object(r["h"])("span",d,[f,Object(r["k"])(v,{modelValue:a.filters1["global"].value,"onUpdate:modelValue":n[5]||(n[5]=function(e){return a.filters1["global"].value=e}),placeholder:"Keyword Search"},null,8,["modelValue"])])])]})),default:Object(r["A"])((function(){return[Object(r["k"])(y,{field:"home_team",header:"Home"}),Object(r["k"])(y,{field:"home_points",header:"Score"}),Object(r["k"])(y,{field:"away_points",header:"Score"}),Object(r["k"])(y,{field:"away_team",header:"Visitors"})]})),_:1},8,["value","loading","filters"])]})),_:1})]})),_:1})])}var b=t("3835"),g=t("1da1"),h=(t("d3b7"),t("e9c4"),t("a630"),t("3ca3"),t("4e82"),t("fb6a"),t("d81d"),t("96cf"),t("5b2c")),v=t("6f85"),y=t("bb57"),j=t("8398"),O=t("eeae"),k=t("c982"),w=t("a3e0"),_=t("0393");function x(){return S.apply(this,arguments)}function S(){return S=Object(g["a"])(regeneratorRuntime.mark((function e(){var n,t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://thingproxy.freeboard.io/fetch/https://api.collegefootballdata.com/games?year=2021&seasonType=regular",{headers:{accept:"application/json",authorization:"Bearer NJRgktQC/FilkL37+s4ZSvckBKL/Iox5fw18DumOF+X8u2DntZqcJ44P9imkoG+t"},body:null,method:"GET",mode:"cors"});case 2:return n=e.sent,e.next=5,n.json();case 5:return t=e.sent,console.log("res",t),e.abrupt("return",t);case 8:case"end":return e.stop()}}),e)}))),S.apply(this,arguments)}var P='import sys\r\nimport numpy as np\r\nimport scipy\r\nfrom scipy.linalg import svd\r\n# from scipy.linalg import null_space\r\n# import scipy.linalg.null_space\r\n\r\n# For Pyodide\r\nimport js\r\nfrom js import data\r\n\r\nprint(\'Python version\', sys.version)\r\nprint(\'scipy version: \', scipy.__version__)\r\n\r\n# Convert JSON array to python List\r\ndata = data.to_py()\r\n# print(data)\r\n\r\n# Custom null-space equation since scipy didn\'t have it until v1.1.0\r\n# https://github.com/scipy/scipy/blob/c3fd6d11aa1476f8d284c205fcf585c20a9f9ac5/scipy/linalg/decomp_svd.py#L333\r\ndef null_space(A, rcond=None):\r\n    u, s, vh = svd(A, full_matrices=True)\r\n    M, N = u.shape[0], vh.shape[1]\r\n    if rcond is None:\r\n        rcond = np.finfo(s.dtype).eps * max(M, N)\r\n    tol = np.amax(s) * rcond\r\n    num = np.sum(s > tol, dtype=int)\r\n    Q = vh[num:,:].T.conj()\r\n    return Q\r\n\r\n\r\n# Generate Teams list\r\nteams = []\r\nfor game in data:\r\n    if game["home_team"] not in teams:\r\n        teams.append(game["home_team"])\r\n\r\n    if game["away_team"] not in teams:\r\n        teams.append(game["away_team"])\r\n\r\nprint("Length", len(teams))\r\n\r\n# Generate game matrix\r\nM = np.zeros((len(teams), len(teams)), dtype=int)\r\nfor game in data:\r\n    i = teams.index(game["home_team"])\r\n    j = teams.index(game["away_team"])\r\n    M[i, j] = game["home_points"] if game["home_points"] != None else 0\r\n    M[j, i] = game["away_points"] if game["away_points"] != None else 0\r\n\r\n# Sum of the columns in 1D matrix\r\ncolsum = np.sum(M, axis=0)\r\n# Subtract games matrix with diagonal matrix of column sum\r\ndiff = M - np.diag(colsum)\r\n# compute null-space matrix of the difference\r\nranking_matrix = null_space(diff)\r\n# Convert to a python List\r\nranking = ranking_matrix.flatten().tolist()\r\n# Create dict and combine values of teams and ranking\r\nranking_dict = {}\r\nfor i, rank in enumerate(ranking):\r\n    ranking_dict[teams[i]] = rank \r\n\r\nprint(ranking_dict)\r\n# Sent to JS variable\r\njs.ranking = ranking_dict\r\n\r\n',T={components:{Button:y["a"],DataTable:h["a"],Column:v["a"],InputText:j["a"],TabView:O["a"],TabPanel:k["a"],BlockUI:w["a"]},setup:function(){var e=Object(r["q"])(!1),n=Object(r["q"])(!1),t=Object(r["q"])(!1),a=Object(r["q"])(null),o=Object(r["q"])(null),i=Object(r["q"])({global:{value:null,matchMode:_["a"].CONTAINS}});Object(r["n"])(Object(g["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.value=!0,console.log("asdf"),e.next=4,s();case 4:return e.next=6,p();case 6:f(),t.value=!1;case 8:case"end":return e.stop()}}),e)}))));var l=function(){i.value={global:{value:null,matchMode:_["a"].CONTAINS}}};function c(e){return new Promise((function(n,t){var r=!1,a=document.querySelector('script[src="'+e+'"]');if(a){if(a.hasAttribute("data-loaded"))return void n(a)}else a=document.createElement("script"),a.type="text/javascript",a.async=!0,a.src=e,r=!0;a.addEventListener("error",t),a.addEventListener("abort",t),a.addEventListener("load",(function(){a.setAttribute("data-loaded",!0),n(a)})),r&&document.head.appendChild(a)}))}function s(){return u.apply(this,arguments)}function u(){return u=Object(g["a"])(regeneratorRuntime.mark((function n(){var t;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=!0,n.next=3,x();case 3:t=n.sent,a.value=JSON.parse(JSON.stringify(t)),console.log(a),e.value=!1;case 7:case"end":return n.stop()}}),n)}))),u.apply(this,arguments)}function p(){return d.apply(this,arguments)}function d(){return d=Object(g["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(n.value=!0,t=!1,e.prev=2,!t){e.next=10;break}return r="http://localhost:8081/",window.languagePluginUrl="".concat(r),e.next=8,c("".concat(r,"pyodide.js"));case 8:e.next=13;break;case 10:return window.languagePluginUrl="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",e.next=13,c("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js");case 13:return e.next=15,window.languagePluginLoader;case 15:return e.next=17,window.pyodide.loadPackage(["sympy","numpy","scipy"]);case 17:console.log("pyodide loaded"),e.next=23;break;case 20:e.prev=20,e.t0=e["catch"](2),console.log("error",e.t0);case 23:n.value=!1;case 24:case"end":return e.stop()}}),e,null,[[2,20]])}))),d.apply(this,arguments)}function f(){n.value=!0,window.data=JSON.parse(JSON.stringify(a.value)),window.ranking=[],console.log("py:",window.pyodide.runPython(P));var e=window.ranking.toJs(),t=Array.from(e,(function(e){var n=Object(b["a"])(e,2),t=n[0],r=n[1];return{name:t,value:r}})),r=t.slice().sort((function(e,n){return n.value-e.value}));r.map((function(e){e.rank=r.indexOf(e)+1})),o.value=r,console.log(o.value),n.value=!1}return{table_loading:e,python_loading:n,page_loading:t,games:a,ranking:o,filters1:i,initFilters1:l,refreshData:s,initializePyodide:p,computeRanking:f}}},A=t("6b0d"),N=t.n(A);const C=N()(T,[["render",m]]);var R=C,M={name:"App",components:{Homepage:R}};t("6006");const L=N()(M,[["render",a]]);var F=L,J=t("9319"),q=(t("7aee"),t("e1ae"),t("4121"),t("bddf"),Object(r["d"])(F));q.use(J["a"],{ripple:!0,outlined:!1}),q.mount("#app")},6006:function(e,n,t){"use strict";t("3c5a")}});
//# sourceMappingURL=app.9a017b29.js.map