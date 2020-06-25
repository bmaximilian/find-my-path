(this["webpackJsonpfind-my-path"]=this["webpackJsonpfind-my-path"]||[]).push([[0],{51:function(e,t,n){e.exports=n(63)},56:function(e,t,n){},62:function(e,t,n){},63:function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),o=n(4),c=n.n(o),a=(n(56),n(12)),l=(n(62),{map:{grid:[],isDirty:!1,isAnimating:!1},config:{algorithms:[{name:"Dijkstra",id:"1"}],selectedAlgorithmIndex:0}});function u(e){return{type:"GRID::REPLACE_GRID",grid:e}}function s(e){return{type:"GRID::SET_DIRTY",isDirty:e}}function d(e){return{type:"GRID::SET_ANIMATING",isAnimating:e}}var f,h=n(88),m=n(10),g=n(24);function p(e,t){(function(e,t){var n=[];return t.row>0&&!e[t.row-1][t.col].isVisited&&n.push(e[t.row-1][t.col]),t.row<e.length-1&&!e[t.row+1][t.col].isVisited&&n.push(e[t.row+1][t.col]),t.col>0&&!e[t.row][t.col-1].isVisited&&n.push(e[t.row][t.col-1]),t.col<e[t.row].length-1&&!e[t.row][t.col+1].isVisited&&n.push(e[t.row][t.col+1]),n})(e,t).forEach((function(e){e.distance=t.distance+1,e.prevCell=t}))}function v(e){for(var t=[],n=e.prevCell;null===(r=n)||void 0===r?void 0:r.prevCell;){var r;t.push(n),n=n.prevCell}return t}!function(e){e.OBSTACLE="obstacle",e.START="start",e.END="end",e.FREE="free"}(f||(f={}));function E(e,t){var n,r=document.getElementById("".concat(e.row,"-").concat(e.col));if(r){var i=[];r.classList.forEach((function(e){e.startsWith("cell--")&&i.push(e)})),(n=r.classList).remove.apply(n,i),r.classList.add(t)}}function w(e){return[f.OBSTACLE,f.START,f.END].includes(e.type)?"cell--".concat(e.type):e.isShortestPath?"cell--shortest-path":e.isVisited?"cell--visited":"cell--free"}var b={1:function(e){var t=e.map((function(e){return Object(g.a)(e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{distance:1/0,prevCell:void 0})})))})),n=[],r=t.reduce((function(e,t){return[].concat(Object(g.a)(e),Object(g.a)(t))}),[]),i=function(e,t){var n=t.findIndex((function(t){return t.type===e}));return-1===n?null:t[n]}(f.START,r);if(!i)throw new Error("Start point is missing");for(i.distance=0;r.length>r.length-1;){var o=r.sort((function(e,t){return e.distance-t.distance})).shift();if((null===o||void 0===o?void 0:o.type)!==f.OBSTACLE){if(o.isVisited=!0,n.push(o),o.type===f.END)break;p(t,o)}}return{visited:n,shortestPath:(null===n||void 0===n?void 0:n.length)>0?v(n[n.length-1]):[]}}};var A=Object(a.b)((function(e){return{grid:e.map.grid,isGridDirty:e.map.isDirty}}))((function(e){var t=e.grid,n=e.selectedAlgorithm,r=e.dispatch,o=e.isGridDirty,c=function(e){for(var t=function(t){setTimeout((function(){[f.START,f.END].includes(e.visited[t].type)||E(e.visited[t],"cell--visited"),t===e.visited.length-1&&function(e){for(var t=function(t){setTimeout((function(){[f.START,f.END].includes(e.shortestPath[t].type)||(E(e.shortestPath[t],"cell--shortest-path"),t===e.shortestPath.length-1&&r(d(!1)))}),10*t)},n=0;n<e.shortestPath.length;n+=1)t(n)}(e)}),5*t)},n=0;n<e.visited.length;n+=1)t(n)};return i.a.createElement(h.a,{onClick:function(){var e=b[n.id];if(!e)throw new Error("Selected algorithm is not defined");r(d(!0)),r(s(!0));var i=e(t);c(i)},color:"secondary",variant:"contained",disabled:o},"Find with ",n.name)}));var y=Object(a.b)((function(e,t){return function(e){return{cell:e.map.grid[t.row][t.col]}}}))((function(e){var t=["map__cell"];return t.push(w(e.cell)),i.a.createElement("td",{id:"".concat(e.cell.row,"-").concat(e.cell.col),className:t.join(" "),style:{width:e.cell.size,height:e.cell.size-1},onMouseDown:function(t){return e.onMouseDown(e.cell,t)},onMouseUp:function(t){return e.onMouseUp(e.cell,t)},onMouseEnter:function(t){return e.onMouseEnter(e.cell,t)},onMouseLeave:function(t){return e.onMouseLeave(e.cell,t)},onMouseMove:function(t){return e.onMouseMove(e.cell,t)}})})),T=!1;function O(e){T=e}var S=Object(a.b)((function(e){var t;return{grid:(null===(t=e.map)||void 0===t?void 0:t.grid)||l.map.grid}}))(Object(r.memo)((function(e){var t=e.grid,n=e.onSetCellAsObstacle,r=function(e){T&&"free"===e.type&&n(e)};return i.a.createElement("table",{className:"map"},i.a.createElement("tbody",null,t.map((function(e,t){return i.a.createElement("tr",{key:t},e.map((function(e){return i.a.createElement(y,{key:"".concat(e.row,"-").concat(e.col),row:e.row,col:e.col,onMouseDown:function(){return O(!0)},onMouseUp:function(){return O(!1)},onMouseLeave:function(){},onMouseEnter:function(){},onMouseMove:r})})))}))))}),(function(e,t){return!((!e.grid||0===e.grid.length)&&(null===t||void 0===t?void 0:t.grid.length)>0)}))),D=n(91),I=n(92),M=n(93),C=n(94),j=n(45),R=n(95),G=n(96),L=n(97);function k(e){var t=i.a.useState(null),n=Object(j.a)(t,2),r=n[0],o=n[1],c=function(){o(null)};return i.a.createElement(i.a.Fragment,null,i.a.createElement(h.a,{color:"inherit","aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){o(e.currentTarget)}},"Select algorithm"),i.a.createElement(R.a,{id:"simple-menu",anchorEl:r,keepMounted:!0,open:Boolean(r),onClose:c},e.algorithms.map((function(t){return i.a.createElement(G.a,{onClick:function(){return function(t){e.onSelect(t),c()}(t)},key:t.id},t.id===e.selectedAlgorithm.id&&i.a.createElement(L.a,null)," ",t.name)}))))}function _(e,t){return e=Math.ceil(e),t=Math.floor(t),Math.floor(Math.random()*(t-e))+e}var N=[f.START,f.END];var P=Object(a.b)((function(e){return{grid:e.map.grid,isGridDirty:e.map.isDirty}}))((function(e){var t=e.grid,n=e.dispatch,r=e.isGridDirty;return i.a.createElement(h.a,{onClick:function(){var e=function(e){var t=e.map((function(e){return Object(g.a)(e.map((function(e){return Object(m.a)(Object(m.a)({},e),{},{type:N.includes(e.type)?e.type:f.OBSTACLE})})))}));return function e(n){function r(t,n){n.type!==f.FREE&&(n.type=N.includes(n.type)?n.type:f.FREE,t.type=N.includes(t.type)?t.type:f.FREE,e(n))}["UP","DOWN","LEFT","RIGHT"].sort((function(){return Math.random()-.5})).forEach((function(e){switch(e){case"UP":if(n.row-2<=0)break;r(t[n.row-1][n.col],t[n.row-2][n.col]);break;case"DOWN":if(n.row+2>=t.length-1)break;r(t[n.row+1][n.col],t[n.row+2][n.col]);break;case"LEFT":if(n.col-2<=0)break;r(t[n.row][n.col-1],t[n.row][n.col-2]);break;case"RIGHT":if(n.col+2>=t[n.row].length-1)break;r(t[n.row][n.col+1],t[n.row][n.col+2])}}))}(t[_(0,t.length-1)][_(0,t[0].length-1)]),t}(t);n(u(e))},color:"inherit",disabled:r},"Generate Maze")})),x=Object(D.a)((function(){return{title:{flexGrow:1}}}));function B(e){var t=e.algorithms,n=e.selectedAlgorithmIndex,r=e.onSelectAlgorithm,o=e.onClearGrid,c=e.isAnimating,a=x(),l=t[n];return i.a.createElement(I.a,{position:"static"},i.a.createElement(M.a,null,i.a.createElement(C.a,{variant:"h6",className:a.title},"Search Visualizer"),i.a.createElement(P,null),i.a.createElement(k,{algorithms:t,selectedAlgorithm:l,onSelect:r}),i.a.createElement(A,{selectedAlgorithm:l}),i.a.createElement(h.a,{onClick:o,color:"inherit",disabled:c},"Clear")))}var F=.8*window.innerWidth,V=.8*window.innerHeight,H=Math.floor(F/15),W=Math.floor(V/15);var z=Object(a.b)((function(e){var t,n,r;return{algorithms:(null===e||void 0===e||null===(t=e.config)||void 0===t?void 0:t.algorithms)||l.config.algorithms,selectedAlgorithmIndex:(null===e||void 0===e||null===(n=e.config)||void 0===n?void 0:n.selectedAlgorithmIndex)||l.config.selectedAlgorithmIndex,isAnimating:null===e||void 0===e||null===(r=e.map)||void 0===r?void 0:r.isAnimating}}))((function(e){var t=e.dispatch,n=e.algorithms,o=e.selectedAlgorithmIndex,c=e.isAnimating,a=Object(r.useCallback)((function(){var e=Array(W).fill(0).map((function(e,t){var n=t+1===Math.floor(W/2);return Array(H).fill(0).map((function(e,r){var i=f.FREE;return n&&r+1===Math.floor(.25*H)?i=f.START:n&&r+1===Math.floor(.75*H)&&(i=f.END),{size:15,type:i,isVisited:!1,isShortestPath:!1,row:t,col:r}}))}));t(u(e)),e.forEach((function(e){return e.forEach((function(e){E(e,w(e))}))})),t(s(!1))}),[t]);return Object(r.useEffect)((function(){a()}),[a]),i.a.createElement("div",{className:"App"},i.a.createElement(B,{algorithms:n,selectedAlgorithmIndex:o,onSelectAlgorithm:function(e){t(function(e){return{type:"CONFIG::SET_SELECTED_ALGORITHM",algorithm:e}}(e))},onClearGrid:a,isAnimating:c}),i.a.createElement(S,{onSetCellAsObstacle:function(e){t(function(e){return{type:"GRID::SET_CELL_AS_OBSTACLE",cell:e}}(e))}}))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var U=n(20),J=n(38);var Y=Object(U.d)(Object(U.b)({map:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.map,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GRID::SET_CELL_AS_OBSTACLE":return Object(J.a)(e,"grid.".concat(t.cell.row,".").concat(t.cell.col,".type"),f.OBSTACLE);case"GRID::REPLACE_GRID":return Object(m.a)(Object(m.a)({},e),{},{grid:t.grid});case"GRID::SET_DIRTY":return Object(m.a)(Object(m.a)({},e),{},{isDirty:t.isDirty});case"GRID::SET_ANIMATING":return Object(m.a)(Object(m.a)({},e),{},{isAnimating:t.isAnimating});case"GRID::SET_CELL_AS_SHORTEST_PATH":return Object(J.a)(e,"grid.".concat(t.cell.row,".").concat(t.cell.col,".isShortestPath"),!0);default:return e}},config:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l.config,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CONFIG::SET_SELECTED_ALGORITHM":return Object(m.a)(Object(m.a)({},e),{},{selectedAlgorithmIndex:e.algorithms.findIndex((function(e){return e.id===t.algorithm.id}))});default:return e}}}),l,U.c.apply(void 0,[]));function $(e){return i.a.createElement(a.a,{store:Y},e.children)}c.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement($,null,i.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[51,1,2]]]);
//# sourceMappingURL=main.f150904b.chunk.js.map