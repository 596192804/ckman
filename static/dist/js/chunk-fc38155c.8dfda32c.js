(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fc38155c"],{"102f":function(t,e,n){"use strict";n("7358")},"1b26":function(t,e,n){"use strict";n("5943")},"1b88":function(t,e,n){"use strict";n("e07c")},3411:function(t,e,n){"use strict";n("a046")},"43e4":function(t,e,n){},5943:function(t,e,n){},7358:function(t,e,n){},8486:function(t,e,n){},"8aa5f":function(t,e,n){"use strict";n("d740")},"8cbb":function(t,e,n){"use strict";var a=n("9ac7"),i=n("0148");function r(t,e){var n=null==t?0:t.length;return!!n&&Object(i["a"])(t,e,0)>-1}var s=r;function l(t,e,n){var a=-1,i=null==t?0:t.length;while(++a<i)if(n(e,t[a]))return!0;return!1}var o=l,c=n("6568"),u=n("a55c");function f(){}var d=f,m=n("1989"),p=1/0,h=u["a"]&&1/Object(m["a"])(new u["a"]([,-0]))[1]==p?function(t){return new u["a"](t)}:d,y=h,v=200;function b(t,e,n){var i=-1,r=s,l=t.length,u=!0,f=[],d=f;if(n)u=!1,r=o;else if(l>=v){var p=e?null:y(t);if(p)return Object(m["a"])(p);u=!1,r=c["a"],d=new a["a"]}else d=e?[]:f;t:while(++i<l){var h=t[i],b=e?e(h):h;if(h=n||0!==h?h:0,u&&b===b){var g=d.length;while(g--)if(d[g]===b)continue t;e&&d.push(b),f.push(h)}else r(d,b,n)||(d!==f&&d.push(b),f.push(h))}return f}e["a"]=b},"9c72":function(t,e,n){"use strict";n("43e4")},a046:function(t,e,n){},d3fa:function(t,e,n){"use strict";n("8486")},d740:function(t,e,n){},e07c:function(t,e,n){},f204:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"query flex flex-column height-full pb-20"},[n("breadcrumb",{attrs:{data:["Clusters",t.$route.params.id,"query-execution"]}}),n("SqlSelectTool",{staticClass:"flex-1"})],1)},i=[];function r(t){return null===t}var s=r,l=n("7f2c"),o=n("8cbb");function c(t,e){return t&&t.length?Object(o["a"])(t,Object(l["a"])(e,2)):[]}var u=c,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("multipane",{staticClass:"vertical-panes sql-select-tool custom-resizer ",staticStyle:{border:"none"},attrs:{layout:"vertical"}},[n("div",{staticClass:"pane",style:{minWidth:"100px",width:"280px",maxWidth:"400px"}},[n("el-tabs",{staticClass:"custom-tab db-tree-tabs",attrs:{value:"table"}},[n("el-tab-pane",{attrs:{label:t.$t("queryExecution.Database"),name:"table"}},[n("dbTree")],1)],1)],1),n("multipane-resizer"),n("div",{staticClass:"pane",style:{flexGrow:1,flex:1}},[n("multipane",{staticClass:"horizontal-panes custom-resizer",attrs:{layout:"horizontal"}},[n("div",{staticClass:"pane",style:{minWidth:"100%",width:"100%",maxWidth:"100%",height:"50%",minHeight:"20%",maxHeight:"90%"}},[n("el-tabs",{staticClass:"custom-tab custom-tab-flex",attrs:{value:"console"}},[n("el-tab-pane",{attrs:{label:t.$t("queryExecution.SQL Console"),name:"console"}},[n("sql-editor",{on:{startRun:function(e){t.bottomActiveTab="result"}}})],1)],1)],1),n("multipane-resizer"),n("div",{staticClass:"pane",style:{flexGrow:1,flex:1,width:"100%"}},[n("el-tabs",{staticClass:"custom-tab-flex custom-tab-bottom",on:{"tab-click":t.handleClick},model:{value:t.bottomActiveTab,callback:function(e){t.bottomActiveTab=e},expression:"bottomActiveTab"}},[n("el-tab-pane",{attrs:{label:t.$t("queryExecution.Query History"),name:"history"}},[n("run-history")],1),n("el-tab-pane",{attrs:{label:t.$t("queryExecution.Result"),name:"result"}},[n("sql-result")],1)],1)],1)],1)],1)],1)},d=[],m="horizontal",p="vertical",h={name:"multipane",props:{layout:{type:String,default:p}},data:function(){return{isResizing:!1}},computed:{classnames:function(){return["multipane","layout-"+this.layout.slice(0,1),this.isResizing?"is-resizing":""]},cursor:function(){return this.isResizing?this.layout==p?"col-resize":"row-resize":""},userSelect:function(){return this.isResizing?"none":""}},methods:{onMouseDown:function(t){var e=t.target,n=t.pageX,a=t.pageY;if(e.className&&e.className.match("multipane-resizer")){var i=this,r=i.$el,s=i.layout,l=e.previousElementSibling,o=l.offsetWidth,c=l.offsetHeight,u=!!(l.style.width+"").match("%"),f=window.addEventListener,d=window.removeEventListener,h=function(t,e){if(void 0===e&&(e=0),s==p){var n=r.clientWidth,a=t+e;return l.style.width=u?a/n*100+"%":a+"px"}if(s==m){var i=r.clientHeight,o=t+e;return l.style.height=u?o/i*100+"%":o+"px"}};i.isResizing=!0;var y=h();i.$emit("paneResizeStart",l,e,y);var v=function(t){var r=t.pageX,u=t.pageY;y=s==p?h(o,r-n):h(c,u-a),i.$emit("paneResize",l,e,y)},b=function t(){y=h(s==p?l.clientWidth:l.clientHeight),i.isResizing=!1,d("mousemove",v),d("mouseup",t),i.$emit("paneResizeStop",l,e,y)};f("mousemove",v),f("mouseup",b)}}}};!function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style"),n=".multipane { display: flex; } .multipane.layout-h { flex-direction: column; } .multipane.layout-v { flex-direction: row; } .multipane > div { position: relative; z-index: 1; } .multipane-resizer { display: block; position: relative; z-index: 2; } .layout-h > .multipane-resizer { width: 100%; height: 10px; margin-top: -10px; top: 5px; cursor: row-resize; } .layout-v > .multipane-resizer { width: 10px; height: 100%; margin-left: -10px; left: 5px; cursor: col-resize; } ";e.type="text/css",e.styleSheet?e.styleSheet.cssText=n:e.appendChild(document.createTextNode(n)),t.appendChild(e)}}();var y=Object.assign(h,{render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{class:t.classnames,style:{cursor:t.cursor,userSelect:t.userSelect},on:{mousedown:t.onMouseDown}},[t._t("default")],2)},staticRenderFns:[]});y.prototype=h.prototype,function(){if("undefined"!=typeof document){var t=document.head||document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText="":e.appendChild(document.createTextNode("")),t.appendChild(e)}}();var v={render:function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"multipane-resizer"},[t._t("default")],2)},staticRenderFns:[]};"undefined"!=typeof window&&window.Vue&&(window.Vue.component("multipane",y),window.Vue.component("multipane-resizer",v));var b=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex flex-column height-full pl-5 pr-5"},[n("el-input",{attrs:{size:"mini",placeholder:t.$t("common.keyword search"),clearable:""},model:{value:t.filterText,callback:function(e){t.filterText=e},expression:"filterText"}}),n("el-tree",{ref:"tree",staticClass:"filter-tree flex-1 mt-5",attrs:{data:t.data,props:t.defaultProps,"filter-node-method":t.filterNode},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.node,i=e.data;return n("span",{staticClass:"custom-tree-node"},[n("i",{class:i.icon}),n("span",{staticClass:"ml-5"},[t._v(t._s(a.label))])])}}])})],1)},g=[],x=n("a34a"),w=n.n(x),S=n("c949");function q(t,e,n,a,i,r,s){try{var l=t[r](s),o=l.value}catch(c){return void n(c)}l.done?e(o):Promise.resolve(o).then(a,i)}function C(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function s(t){q(r,a,i,s,l,"next",t)}function l(t){q(r,a,i,s,l,"throw",t)}s(void 0)}))}}var _={watch:{filterText:function(t){this.$refs.tree.filter(t)}},data:function(){return{filterText:"",data:[],defaultProps:{children:"children",label:"label"}}},created:function(){this.getTableList()},methods:{filterNode:function(t,e){return!t||-1!==e.label.indexOf(t)},getTableList:function(){var t=this;return C(w.a.mark((function e(){var n,a,i,r;return w.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.$route.params.id,e.next=3,S["f"].getTableLists(n);case 3:a=e.sent,i=a.data.entity,r=Object.keys(i).map((function(t){var e={id:t,label:t,icon:"fa fa-database",children:Object.keys(i[t]).map((function(e){var n={id:e,label:e,icon:"fa fa-table",children:i[t][e].map((function(t){return{id:t,label:t,icon:"fa fa-columns"}}))};return n}))};return e})),t.data=r;case 7:case"end":return e.stop()}}),e)})))()}}},z=_,E=(n("1b88"),n("2877")),$=Object(E["a"])(z,b,g,!1,null,null,null),k=$.exports,T=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"sql-editor pl-5 pr-5 height-full flex flex-column"},[n("div",{staticClass:"sql-editor-toolbar mb-5"},[n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.run()}}},[t._v(t._s(t.$t("queryExecution.Execute Query"))+"( F8 )")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:function(e){return t.run("schedule")}}},[t._v(t._s(t.$t("queryExecution.Execute Explain"))+"( F9 )")]),n("el-button",{attrs:{size:"mini",type:"primary"},on:{click:t.format}},[t._v(t._s(t.$t("queryExecution.Format"))+"( F10 )")])],1),n("div",{staticClass:"sql-editor-main flex-1"},[n("sql-code-mirror",{ref:"sqlCodeEditor",staticStyle:{height:"100%"},attrs:{"read-only":!1},model:{value:t.sql,callback:function(e){t.sql=e},expression:"sql"}})],1)])},N=[],O=n("3617"),R=n("4360"),D=n("c1df"),H=n.n(D),P=n("08ba");function j(t,e,n,a,i,r,s){try{var l=t[r](s),o=l.value}catch(c){return void n(c)}l.done?e(o):Promise.resolve(o).then(a,i)}function L(t){return function(){var e=this,n=arguments;return new Promise((function(a,i){var r=t.apply(e,n);function s(t){j(r,a,i,s,l,"next",t)}function l(t){j(r,a,i,s,l,"throw",t)}s(void 0)}))}}var F={components:{SqlCodeMirror:O["b"]},data:function(){return{sql:""}},created:function(){},mounted:function(){window.addEventListener("keydown",this.handleKeydown)},beforeDestroy:function(){window.removeEventListener("keydown",this.handleKeydown)},methods:{run:function(t){var e=this;return L(w.a.mark((function n(){var a,i,r,s,l;return w.a.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(a=e.$refs.sqlCodeEditor.sqlEditor.getSelection(),i=e.$route.params.id,r=e.sql,a||r){n.next=6;break}return P["c"].warning(e.$t("queryExecution.No Sql")),n.abrupt("return");case 6:return e.$emit("startRun"),R["a"].commit("sqlSelect/setStatus","loading"),R["a"].commit("sqlSelect/addHistory",{createTime:H()().format("YYYY-MM-DD HH:mm:ss"),sql:a||r,clusterName:i}),n.next=11,S["f"]["schedule"===t?"queryExplain":"query"]({clusterName:i,query:a||r})["finally"]((function(){R["a"].commit("sqlSelect/setStatus","")}));case 11:s=n.sent,l=s.data.entity,R["a"].commit("sqlSelect/setResult",l);case 14:case"end":return n.stop()}}),n)})))()},format:function(){var t;null===(t=this.$refs.sqlCodeEditor)||void 0===t||t.format()},handleKeydown:function(t){switch(t.key){case"F8":this.run();break;case"F9":this.run("schedule");break;case"F10":this.format();break}}}},I=F,J=(n("8aa5f"),Object(E["a"])(I,T,N,!1,null,null,null)),A=J.exports,M=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"height-full flex flex-column"},[n("div",{staticClass:"flex flex-reverse flex-1"},[n("vxe-toolbar",{staticClass:"pull-right fs-0 vxe-toolbar-custom",attrs:{zoom:"",custom:"",size:"mini"}}),n("vxe-table",t._b({directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"flex-1 vxe-table-custom",attrs:{border:"",size:"mini","show-overflow":"","empty-text":t.$t("queryExecution.No Data"),data:t.currentPageData,height:"100%"},on:{"sort-change":t.sortChangeEvent}},"vxe-table",t.gridOptions,!1),t._l(t.columns,(function(e,a){return n("vxe-column",{key:a,attrs:{field:e.prop,title:e.label,"min-width":180,sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){var a=e.row,i=e.column;return[n("span",{staticClass:"text-ellipsis"},[t._v(t._s(a[i.property]))])]}}],null,!0)})})),1)],1),n("vxe-pager",{attrs:{"current-page":t.pagination.currentPage,"page-size":t.pagination.pageSize,"page-sizes":t.pagination.pageSizes,total:t.pagination.total,layouts:["PrevPage","JumpNumber","NextPage","FullJump","Sizes","Total"]},on:{"update:pageSize":function(e){return t.$set(t.pagination,"pageSize",e)},"update:page-size":function(e){return t.$set(t.pagination,"pageSize",e)},"page-change":t.handlePageChange}})],1)},W=[];function Y(t){return Y="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Y(t)}var Q={data:function(){return{loading:!1,sort:{},gridOptions:{border:!0,resizable:!0,showHeaderOverflow:!0,showOverflow:!0,highlightHoverRow:!0,rowId:"tableName",sortConfig:{trigger:"cell"},filterConfig:{}}}},computed:{columns:function(){return R["a"].getters["sqlSelect/getResultColumn"]},datas:function(){var t=R["a"].getters["sqlSelect/getResultData"],e=this.sort,n=e.property,a=e.order;return t.sort((function(t,e){var i=Y(t[n]);if("number"===i){var r=t[n]-e[n];if("asc"===a)return r;if("desc"===a)return-r}else if("string"===i){var s;if(s=t[n].length===e[n].length?t[n].localeCompare(e[n]):t[n].length-e[n].length,"asc"===a)return s;if("desc"===a)return-s}}))},currentPageData:function(){var t=this.pagination,e=t.currentPage,n=t.pageSize;return this.datas.slice((e-1)*n,e*n)},pagination:function(){return R["a"].state.sqlSelect.pagination},status:function(){return R["a"].state.sqlSelect.status}},watch:{status:function(t){this.loading="loading"===t}},methods:{handleSizeChange:function(t){R["a"].commit("sqlSelect/changePageSize",t)},handleCurrentChange:function(t){R["a"].commit("sqlSelect/changeCurrentPage",t)},handlePageChange:function(t){var e=t.currentPage;this.pagination.currentPage=e},sortChangeEvent:function(t){var e=t.property,n=t.order;this.sort={property:e,order:n}}}},K=Q,V=(n("d3fa"),Object(E["a"])(K,M,W,!1,null,null,null)),B=V.exports,G=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-table",{staticClass:"history-list",staticStyle:{width:"100%"},attrs:{border:"","empty-text":t.$t("queryExecution.No Data"),size:"mini",data:t.historyList,height:"100%"}},[t._l(t.columns,(function(e,a){return n("el-table-column",{key:a,attrs:{prop:e.prop,label:e.label,width:e.width},scopedSlots:t._u([{key:"default",fn:function(a){return[n("span",{staticClass:"text-ellipsis"},[t._v(t._s(a.row[e.prop]))])]}}],null,!0)})})),n("el-table-column",{attrs:{label:t.$t("common.Action"),width:"100"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(n){return t.copyItem(e.row)}}},[t._v(t._s(t.$t("queryExecution.Copy")))]),n("el-button",{attrs:{type:"text",size:"mini"},on:{click:function(n){return t.deleteItem(e.$index)}}},[t._v(t._s(t.$t("common.Delete")))])]}}])})],2)},X=[],U={computed:{historyList:function(){return R["a"].state.sqlSelect.history},columns:function(){return[{prop:"clusterName",label:this.$t("home.Cluster Name"),width:100},{prop:"sql",label:this.$t("queryExecution.SQL")},{prop:"createTime",label:this.$t("queryExecution.CreateTime"),width:150}]}},methods:{copyItem:function(t){try{var e=document.createElement("textarea");e.value=t.sql,e.style.border="0",e.style.padding="0",e.style.margin="0",e.style.right="999999em",e.style.position="absolute",document.body.appendChild(e),e.select(),document.execCommand("copy"),P["c"].success(this.$t("queryExecution.Copy Success")),e=null}catch(n){}},deleteItem:function(t){R["a"].commit("sqlSelect/deleteHistory",t)}}},Z=U,tt=(n("1b26"),Object(E["a"])(Z,G,X,!1,null,null,null)),et=tt.exports,nt={name:"sqlSelectTool",components:{Multipane:y,MultipaneResizer:v,dbTree:k,sqlEditor:A,sqlResult:B,runHistory:et},data:function(){return{leftActiveTab:"table",bottomActiveTab:"result"}},mounted:function(){window.addEventListener("beforeunload",this.persistHistory);try{var t=JSON.parse(localStorage.getItem("__ckman__sql_history__"));t&&R["a"].commit("sqlSelect/setHistory",t)}catch(e){}},beforeDestroy:function(){this.persistHistory(),R["a"].commit("sqlSelect/clear")},methods:{handleClick:function(){},persistHistory:function(){localStorage.setItem("__ckman__sql_history__",JSON.stringify(R["a"].state.sqlSelect.history))}}},at=nt,it=(n("3411"),n("102f"),Object(E["a"])(at,f,d,!1,null,null,null)),rt=it.exports,st={components:{SqlSelectTool:rt},data:function(){return{list:[],selectedSql:{}}},created:function(){this.fetchData()},methods:{fetchData:function(){var t=localStorage.getItem("sqlHisToryData");this.list="undefined"===t||s(t)?[]:JSON.parse(t)},selectSql:function(t){this.selectedSql=t},updateData:function(t){this.list.unshift(t),this.list=u(this.list,"value"),localStorage.setItem("sqlHisToryData",JSON.stringify(this.list.slice(0,20))),this.fetchData()}}},lt=st,ot=(n("9c72"),Object(E["a"])(lt,a,i,!1,null,"a0e03126",null));e["default"]=ot.exports}}]);