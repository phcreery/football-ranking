(function(e){function n(n){for(var a,o,l=n[0],c=n[1],u=n[2],p=0,d=[];p<l.length;p++)o=l[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&d.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);s&&s(n);while(d.length)d.shift()();return i.push.apply(i,u||[]),t()}function t(){for(var e,n=0;n<i.length;n++){for(var t=i[n],a=!0,l=1;l<t.length;l++){var c=t[l];0!==r[c]&&(a=!1)}a&&(i.splice(n--,1),e=o(o.s=t[0]))}return e}var a={},r={app:0},i=[];function o(n){if(a[n])return a[n].exports;var t=a[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,o),t.l=!0,t.exports}o.m=e,o.c=a,o.d=function(e,n,t){o.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,n){if(1&n&&(e=o(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(o.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var a in e)o.d(t,a,function(n){return e[n]}.bind(null,a));return t},o.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(n,"a",n),n},o.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},o.p="/football-ranking/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=n,l=l.slice();for(var u=0;u<l.length;u++)n(l[u]);var s=c;i.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"1f69":function(e,n,t){},3730:function(e,n,t){},"3a2e":function(e,n,t){"use strict";t("92a4")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var a=t("7a23");function r(e,n,t,r,i,o){var l=Object(a["u"])("Homepage");return Object(a["p"])(),Object(a["f"])(l)}var i={class:"p-d-flex p-jc-between"},o={class:"p-p-3"},l=Object(a["k"])("Fetching New Game Data"),c=Object(a["k"])("Warming up flux capacitor"),u=Object(a["k"])("Computing Ranking"),s={class:"p-d-flex p-jc-between"},p={class:"p-input-icon-left"},d=Object(a["i"])("i",{class:"pi pi-search"},null,-1),f={class:"p-d-flex p-jc-between"},m={class:"p-input-icon-left"},b=Object(a["i"])("i",{class:"pi pi-search"},null,-1),g=Object(a["i"])("p",{class:"p-m-0"}," Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ",-1);function v(e,n,t,r,v,y){var j=Object(a["u"])("BlockUI"),h=Object(a["u"])("Toast"),O=Object(a["u"])("Dropdown"),_=Object(a["u"])("Button"),w=Object(a["u"])("Message"),k=Object(a["u"])("InputText"),x=Object(a["u"])("Column"),S=Object(a["u"])("DataTable"),C=Object(a["u"])("TabPanel"),M=Object(a["u"])("TabView"),R=Object(a["u"])("Dialog"),T=Object(a["v"])("tooltip");return Object(a["p"])(),Object(a["h"])("div",null,[Object(a["l"])(j,{blocked:r.page_loading,fullScreen:!0},null,8,["blocked"]),Object(a["l"])(h),Object(a["i"])("div",i,[Object(a["i"])("h1",null,Object(a["x"])(r.selectedYear1)+" Football Rankings",1),Object(a["i"])("div",o,[Object(a["l"])(O,{class:"p-m-1",modelValue:r.selectedYear1,"onUpdate:modelValue":n[0]||(n[0]=function(e){return r.selectedYear1=e}),options:r.years,optionLabel:"label",optionValue:"value",placeholder:"Select a Year"},null,8,["modelValue","options"]),Object(a["C"])(Object(a["l"])(_,{class:"p-m-1",icon:"pi pi-info-circle",onClick:n[1]||(n[1]=function(e){return r.openModal()})},null,512),[[T,"Info",void 0,{bottom:!0}]]),Object(a["C"])(Object(a["l"])(_,{class:"p-m-1",icon:r.table_loading?"pi pi-spin pi-cloud-download":"pi pi-cloud-download",onClick:n[2]||(n[2]=function(e){return r.fetchData()})},null,8,["icon"]),[[T,"Update Games",void 0,{bottom:!0}]]),Object(a["C"])(Object(a["l"])(_,{class:"p-m-1",icon:r.python_loading?"pi pi-spin pi-bolt":"pi pi-bolt",onClick:n[3]||(n[3]=function(e){return r.computeRanking()})},null,8,["icon"]),[[T,"Recompute Rankings",void 0,{bottom:!0}]])])]),Object(a["l"])(a["d"],{name:"p-message",tag:"div"},{default:Object(a["B"])((function(){return[r.table_loading?(Object(a["p"])(),Object(a["f"])(w,{key:0,severity:"info"},{default:Object(a["B"])((function(){return[l]})),_:1})):Object(a["g"])("",!0),r.python_initializing?(Object(a["p"])(),Object(a["f"])(w,{key:1,severity:"info"},{default:Object(a["B"])((function(){return[c]})),_:1})):Object(a["g"])("",!0),r.python_loading?(Object(a["p"])(),Object(a["f"])(w,{key:2,severity:"info"},{default:Object(a["B"])((function(){return[u]})),_:1})):Object(a["g"])("",!0)]})),_:1}),Object(a["l"])(M,null,{default:Object(a["B"])((function(){return[Object(a["l"])(C,{header:"All Games"},{default:Object(a["B"])((function(){return[Object(a["l"])(S,{value:r.games,responsiveLayout:"scroll",class:"p-datatable-sm p-datatable-customers",loading:r.table_loading,dataKey:"id",filters:r.filters1,"onUpdate:filters":n[6]||(n[6]=function(e){return r.filters1=e}),globalFilterFields:["home_team","away_team"]},{header:Object(a["B"])((function(){return[Object(a["i"])("div",s,[Object(a["l"])(_,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:n[4]||(n[4]=function(e){return r.initFilters1()})}),Object(a["i"])("span",p,[d,Object(a["l"])(k,{modelValue:r.filters1["global"].value,"onUpdate:modelValue":n[5]||(n[5]=function(e){return r.filters1["global"].value=e}),placeholder:"Keyword Search"},null,8,["modelValue"])])])]})),default:Object(a["B"])((function(){return[Object(a["l"])(x,{field:"home_team",header:"Home"}),Object(a["l"])(x,{field:"home_points",header:"Score"}),Object(a["l"])(x,{field:"away_points",header:"Score"}),Object(a["l"])(x,{field:"away_team",header:"Visitors"})]})),_:1},8,["value","loading","filters"])]})),_:1}),Object(a["l"])(C,{header:"Ranking"},{default:Object(a["B"])((function(){return[Object(a["l"])(S,{value:r.ranking,responsiveLayout:"scroll",class:"p-datatable-sm p-datatable-customers",loading:r.python_loading,dataKey:"id",filters:r.filters1,"onUpdate:filters":n[9]||(n[9]=function(e){return r.filters1=e}),globalFilterFields:["name"]},{header:Object(a["B"])((function(){return[Object(a["i"])("div",f,[Object(a["l"])(_,{type:"button",icon:"pi pi-filter-slash",label:"Clear",class:"p-button-outlined",onClick:n[7]||(n[7]=function(e){return r.initFilters1()})}),Object(a["i"])("span",m,[b,Object(a["l"])(k,{modelValue:r.filters1["global"].value,"onUpdate:modelValue":n[8]||(n[8]=function(e){return r.filters1["global"].value=e}),placeholder:"Keyword Search"},null,8,["modelValue"])])])]})),default:Object(a["B"])((function(){return[Object(a["l"])(x,{field:"rank",header:"Rank"}),Object(a["l"])(x,{field:"name",header:"Team"})]})),_:1},8,["value","loading","filters"])]})),_:1})]})),_:1}),Object(a["l"])(R,{header:"Header",visible:r.displayModal,"onUpdate:visible":n[11]||(n[11]=function(e){return r.displayModal=e}),style:{width:"50vw"},modal:!0},{footer:Object(a["B"])((function(){return[Object(a["l"])(_,{label:"Cool",icon:"pi pi-check",onClick:n[10]||(n[10]=function(e){return r.closeModal()}),autofocus:""})]})),default:Object(a["B"])((function(){return[g]})),_:1},8,["visible"])])}var y=t("3835"),j=t("2909"),h=t("1da1"),O=(t("96cf"),t("a630"),t("3ca3"),t("d3b7"),t("6062"),t("ddb0"),t("d81d"),t("99af"),t("159b"),t("4de4"),t("e9c4"),t("4e82"),t("fb6a"),t("5b2c")),_=t("6f85"),w=t("bb57"),k=t("8398"),x=t("eeae"),S=t("c982"),C=t("a3e0"),M=t("b3b6"),R=t("0100"),T=t("5bd2"),B=t("8b6b"),P=t("0393"),N=t("18cb");function F(e,n){var t=Object(a["r"])(!1),r=Object(a["r"])(!1);function i(n){return new Promise((function(t,a){var r=!1,i=e.querySelector('script[src="'+n+'"]');if(i){if(i.hasAttribute("data-loaded"))return void t(i)}else i=e.createElement("script"),i.type="text/javascript",i.async=!0,i.src=n,r=!0;i.addEventListener("error",a),i.addEventListener("abort",a),i.addEventListener("load",(function(){i.setAttribute("data-loaded",!0),t(i)})),r&&e.head.appendChild(i)}))}function o(){return l.apply(this,arguments)}function l(){return l=Object(h["a"])(regeneratorRuntime.mark((function e(){var a,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.value=!0,a=!1,e.prev=2,!a){e.next=10;break}return o="http://localhost:8081/",n.languagePluginUrl="".concat(o),e.next=8,i("".concat(o,"pyodide.js"));case 8:e.next=13;break;case 10:return n.languagePluginUrl="https://cdn.jsdelivr.net/pyodide/v0.18.1/full/",e.next=13,i("https://cdn.jsdelivr.net/pyodide/v0.18.1/full/pyodide.js");case 13:return e.next=15,n.languagePluginLoader;case 15:return e.next=17,n.pyodide.loadPackage(["sympy","numpy","scipy"]);case 17:r.value=!0,console.log("pyodide loaded"),e.next=24;break;case 21:e.prev=21,e.t0=e["catch"](2),console.log("pyodide error",e.t0);case 24:t.value=!1;case 25:case"end":return e.stop()}}),e,null,[[2,21]])}))),l.apply(this,arguments)}function c(e,a){t.value=!0,n.pyinput=JSON.parse(JSON.stringify(a)),n.ret=void 0,console.log("pyodide response:",n.pyodide.runPython(e));var r=n.pyret.toJs();return t.value=!1,r}return{init:o,run:c,isInit:r,isLoading:t,instance:n.pyodide}}function D(e){return L.apply(this,arguments)}function L(){return L=Object(h["a"])(regeneratorRuntime.mark((function e(n){var t,a,r,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t="https://peyton.creery.org/coors/",a="https://api.collegefootballdata.com/games?year=".concat(n,"&seasonType=regular"),e.next=4,fetch(t+a,{headers:{accept:"application/json",authorization:"Bearer NJRgktQC/FilkL37+s4ZSvckBKL/Iox5fw18DumOF+X8u2DntZqcJ44P9imkoG+t","x-requested-with":"https://peyton.creery.org/"},body:null,method:"GET"});case 4:return r=e.sent,e.next=7,r.json();case 7:return i=e.sent,console.log("res",i),e.abrupt("return",i);case 10:case"end":return e.stop()}}),e)}))),L.apply(this,arguments)}var V='import sys\nimport numpy as np\nimport scipy\nfrom scipy.linalg import svd\n# from scipy.linalg import null_space\n# import scipy.linalg.null_space\n\n# For Pyodide\nimport js\n# Import variable from js global variable (window.pyinput)\nfrom js import pyinput\n\nprint(\'Python version\', sys.version)\nprint(\'scipy version: \', scipy.__version__)\n\n# Convert JSON array to python List\ndata = pyinput.to_py()\n\n# Custom null-space equation since scipy didn\'t have it until v1.1.0\n# https://github.com/scipy/scipy/blob/c3fd6d11aa1476f8d284c205fcf585c20a9f9ac5/scipy/linalg/decomp_svd.py#L333\ndef null_space(A, rcond=None):\n    u, s, vh = svd(A, full_matrices=True)\n    M, N = u.shape[0], vh.shape[1]\n    if rcond is None:\n        rcond = np.finfo(s.dtype).eps * max(M, N)\n    tol = np.amax(s) * rcond\n    num = np.sum(s > tol, dtype=int)\n    Q = vh[num:,:].T.conj()\n    return Q\n\n\n# Generate Teams list\nteams = []\nfor game in data:\n    if game["home_team"] not in teams:\n        teams.append(game["home_team"])\n\n    if game["away_team"] not in teams:\n        teams.append(game["away_team"])\n\n# Generate game matrix\nM = np.zeros((len(teams), len(teams)), dtype=int)\nfor game in data:\n    i = teams.index(game["home_team"])\n    j = teams.index(game["away_team"])\n    M[i, j] = game["home_points"] if game["home_points"] != None else 0\n    M[j, i] = game["away_points"] if game["away_points"] != None else 0\n\n# Sum of the columns in 1D matrix\ncolsum = np.sum(M, axis=0)\n# Subtract games matrix with diagonal matrix of column sum\ndiff = M - np.diag(colsum)\n# compute null-space matrix of the difference\nranking_matrix = null_space(diff)\nprint(\'ranking matrix\', ranking_matrix)\n\n# Quick-fix for when null_space returns a matrix size of (x,>1) instead of expected (x,1)\nif (ranking_matrix.shape[1] != 1):\n    print(\'uh oh, no bueno\')\n    new_ranking_matrix = np.array([])\n    for row in ranking_matrix:\n        best_cell = 0\n        # print(row)\n        for cell in row:\n            if cell > best_cell:\n                best_cell = cell\n        new_value = np.array([best_cell])\n        print(new_value)\n        new_ranking_matrix = np.append(new_ranking_matrix, new_value, axis=0)\n    print(\'new matrix\', len(new_ranking_matrix), new_ranking_matrix)\n    ranking_matrix = new_ranking_matrix\n\n# Convert to a python List\nranking = ranking_matrix.flatten().tolist()\n# Create dict and combine values of teams and ranking\nranking_dict = {}\nprint(ranking)\nprint("adding", len(ranking),"ranks to", len(teams), "teams")\nfor i, rank in enumerate(ranking):\n    ranking_dict[teams[i]] = rank \n\nprint(ranking_dict)\n# Sent to JS variable\njs.pyret = ranking_dict\n\n',I={components:{Button:w["a"],DataTable:O["a"],Column:_["a"],InputText:k["a"],TabView:x["a"],TabPanel:S["a"],BlockUI:C["a"],Toast:M["a"],Dropdown:R["a"],Dialog:T["a"],Message:B["a"]},setup:function(){var e=Object(a["r"])(!1),n=Object(a["r"])(!1),t=Object(a["r"])(!1),r=(new Date).getFullYear(),i=Object(a["r"])(Array.from({length:20},(function(e,n){return{label:r-n,value:r-n}}))),o=Object(a["r"])((new Date).getFullYear()),l=Object(a["r"])(!1),c=Object(a["r"])(null),u=Object(a["r"])(null),s=Object(a["r"])({global:{value:null,matchMode:P["a"].CONTAINS}}),p=F(document,window),d=Object(N["b"])();Object(a["o"])(Object(h["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e.value=!0,n.next=3,v();case 3:return n.next=5,p.init();case 5:!1===p.isInit.value&&d.add({severity:"error",summary:"Pyodide Init Failed",detail:"See console log for details",life:3e3}),console.log("globale window pyodide",window.pyodide),_(),e.value=!1;case 9:case"end":return n.stop()}}),n)}))));var f=function(){s.value={global:{value:null,matchMode:P["a"].CONTAINS}}},m=function(e,n){return e.reduce((function(e,t){return t===n?e+1:e}),0)},b=function(e){return Object(j["a"])(new Set(e))};function g(e){var n=e,t=e.map((function(e){return e.away_team})),a=e.map((function(e){return e.home_team})),r=t.concat(a),i=r,o=[];return r.forEach((function(n){var t=m(r,n);t<5&&(o.push(n),e=e.filter((function(e){return e.home_team!==n})),e=e.filter((function(e){return e.away_team!==n})))})),console.log("teams initially gathered",b(i).length,b(i)),console.log("removed teams",b(o).length,b(o)),console.log("games initially",n.length),console.log("games left",e.length,e),e}function v(){return O.apply(this,arguments)}function O(){return O=Object(h["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n.value=!0,e.next=3,D(o.value);case 3:if(t=e.sent,"failed"!==t.this){e.next=7;break}return d.add({severity:"error",summary:"Network Fetch Failed",detail:t.because.message+" - See console log for details",life:3e3}),e.abrupt("return");case 7:t=g(t),c.value=JSON.parse(JSON.stringify(t)),console.log(c),n.value=!1;case 11:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}function _(){return w.apply(this,arguments)}function w(){return w=Object(h["a"])(regeneratorRuntime.mark((function e(){var n,a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:t.value=!0,n=p.run(V,c.value),a=Array.from(n,(function(e){var n=Object(y["a"])(e,2),t=n[0],a=n[1];return{name:t,value:a}})),r=a.slice().sort((function(e,n){return n.value-e.value})),r.map((function(e){e.rank=r.indexOf(e)+1})),u.value=r,console.log("Result Rankings:",u.value),t.value=!1;case 8:case"end":return e.stop()}}),e)}))),w.apply(this,arguments)}function k(){l.value=!0}var x=function(){l.value=!1};return{page_loading:e,table_loading:n,python_loading:t,python_initializing:p.isLoading,selectedYear1:o,years:i,games:c,ranking:u,filters1:s,initFilters1:f,fetchData:v,computeRanking:_,openModal:k,closeModal:x,displayModal:l}}},U=(t("3a2e"),t("d959")),J=t.n(U);const A=J()(I,[["render",v]]);var q=A,E={name:"App",components:{Homepage:q}};t("d106");const G=J()(E,[["render",r]]);var Y=G,z=t("9319"),K=t("485c"),H=t("6b8c"),Q=(t("1f69"),t("e1ae"),t("4121"),t("bddf"),Object(a["e"])(Y));Q.use(z["a"],{ripple:!0,outlined:!1}),Q.use(K["a"]),Q.directive("tooltip",H["a"]),Q.mount("#app")},"92a4":function(e,n,t){},d106:function(e,n,t){"use strict";t("3730")}});
//# sourceMappingURL=app.81f9e646.js.map