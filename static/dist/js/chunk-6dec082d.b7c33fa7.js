(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6dec082d"],{"0148":function(t,e,a){"use strict";function n(t,e,a,n){var r=t.length,l=a+(n?1:-1);while(n?l--:++l<r)if(e(t[l],l,t))return l;return-1}var r=n;function l(t){return t!==t}var c=l;function i(t,e,a){var n=a-1,r=t.length;while(++n<r)if(t[n]===e)return n;return-1}var o=i;function u(t,e,a){return e===e?o(t,e,a):r(t,c,a)}e["a"]=u},4349:function(t,e,a){"use strict";var n=a("9fd3"),r=a.n(n);r.a},"8cbb":function(t,e,a){"use strict";var n=a("9ac7"),r=a("0148");function l(t,e){var a=null==t?0:t.length;return!!a&&Object(r["a"])(t,e,0)>-1}var c=l;function i(t,e,a){var n=-1,r=null==t?0:t.length;while(++n<r)if(a(e,t[n]))return!0;return!1}var o=i,u=a("6568"),s=a("a55c");function f(){}var h=f,p=a("1989"),b=1/0,v=s["a"]&&1/Object(p["a"])(new s["a"]([,-0]))[1]==b?function(t){return new s["a"](t)}:h,d=v,m=200;function g(t,e,a){var r=-1,l=c,i=t.length,s=!0,f=[],h=f;if(a)s=!1,l=o;else if(i>=m){var b=e?null:d(t);if(b)return Object(p["a"])(b);s=!1,l=u["a"],h=new n["a"]}else h=e?[]:f;t:while(++r<i){var v=t[r],g=e?e(v):v;if(v=a||0!==v?v:0,s&&g===g){var y=h.length;while(y--)if(h[y]===g)continue t;e&&h.push(g),f.push(v)}else l(h,g,a)||(h!==f&&h.push(g),f.push(v))}return f}e["a"]=g},"8d70":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"settings"},[a("breadcrumb",{attrs:{data:["Clusters",t.$route.params.id,"tables"]}}),a("section",[a("table-metric"),a("replication-table"),a("zk-table")],1)],1)},r=[],l=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"zkTable"},[a("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[a("span",{staticClass:"fs-20 font-bold"},[t._v(t._s(t.$t("tables.Zookeeper Status")))])]),a("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:""}},t._l(t.cols,(function(e,n){return a("el-table-column",{key:n,attrs:{label:e,align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){var n=e.column;return[a("span",[t._v(t._s(n.label))])]}},{key:"default",fn:function(e){var r=e.row,l=e.column;return[a("span",0===n?[t._v(t._s(Object.keys(r)[0]))]:[t._v(t._s(Object.values(r)[0][l.label]))])]}}],null,!0)})})),1)],1)},c=[],i=a("a34a"),o=a.n(i),u=a("f976");function s(t,e,a){switch(a.length){case 0:return t.call(e);case 1:return t.call(e,a[0]);case 2:return t.call(e,a[0],a[1]);case 3:return t.call(e,a[0],a[1],a[2])}return t.apply(e,a)}var f=s,h=Math.max;function p(t,e,a){return e=h(void 0===e?t.length-1:e,0),function(){var n=arguments,r=-1,l=h(n.length-e,0),c=Array(l);while(++r<l)c[r]=n[e+r];r=-1;var i=Array(e+1);while(++r<e)i[r]=n[r];return i[e]=a(c),f(t,this,i)}}var b=p;function v(t){return function(){return t}}var d=v,m=a("0305"),g=m["a"]?function(t,e){return Object(m["a"])(t,"toString",{configurable:!0,enumerable:!1,value:d(e),writable:!0})}:u["a"],y=g,w=800,_=16,x=Date.now;function C(t){var e=0,a=0;return function(){var n=x(),r=_-(n-a);if(a=n,r>0){if(++e>=w)return arguments[0]}else e=0;return t.apply(void 0,arguments)}}var S=C,D=S(y),$=D;function j(t,e){return $(b(t,e,u["a"]),t+"")}var k=j,O=a("b703"),z=a("0148");function T(t,e,a,n){var r=a-1,l=t.length;while(++r<l)if(n(t[r],e))return r;return-1}var P=T,A=a("a2fb"),E=a("7804"),I=Array.prototype,N=I.splice;function F(t,e,a,n){var r=n?P:z["a"],l=-1,c=e.length,i=t;t===e&&(e=Object(E["a"])(e)),a&&(i=Object(O["a"])(t,Object(A["a"])(a)));while(++l<c){var o=0,u=e[l],s=a?a(u):u;while((o=r(i,s,o,n))>-1)i!==t&&N.call(i,o,1),N.call(t,o,1)}return t}var q=F;function Q(t,e){return t&&t.length&&e&&e.length?q(t,e):t}var M=Q,R=k(M),B=R,H=a("8cbb");function J(t){return t&&t.length?Object(H["a"])(t):[]}var L=J,U=a("c949");function Z(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function W(t,e,a,n,r,l,c){try{var i=t[l](c),o=i.value}catch(u){return void a(u)}i.done?e(o):Promise.resolve(o).then(n,r)}function G(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var l=t.apply(e,a);function c(t){W(l,n,r,c,i,"next",t)}function i(t){W(l,n,r,c,i,"throw",t)}c(void 0)}))}}var K={data:function(){return{cols:[""],keys:[""],tableData:[],timeFilter:null,refresh:null}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return G(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U["g"].zkStatus(t.$route.params.id);case 2:a=e.sent,n=a.data.entity,t.cols=[""],t.keys=[""],t.tableData=[],n.forEach((function(e){t.cols.push(e.host),t.keys=B(Object.keys(e),"host")})),t.keys.forEach((function(e){var a=Z({},e,{});n.forEach((function(n){a[e][n["host"]]=n[e],t.tableData.push(a)})),t.tableData=L(t.tableData)}));case 9:case"end":return e.stop()}}),e)})))()},timeFilterChange:function(){this.fetchData()},timeFilterRefresh:function(){this.fetchData()}}},V=K,X=a("2877"),Y=Object(X["a"])(V,l,c,!1,null,"3885750b",null),tt=Y.exports,et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"replication-status pb-20"},[a("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[a("span",{staticClass:"fs-20 font-bold"},[t._v(t._s(t.$t("tables.Table Replication Status")))])]),a("el-table",{staticClass:"tb-edit",staticStyle:{width:"100%"},attrs:{data:t.tableData.slice((t.currentPage-1)*t.pageSize,t.currentPage*t.pageSize),"header-cell-style":t.mergeTableHeader,border:""}},t._l(t.cols,(function(e,n){return a("el-table-column",{key:n,ref:"tableColumn",refInFor:!0,attrs:{label:e.label,prop:e.prop,width:"auto",align:"center"},scopedSlots:t._u([{key:"header",fn:function(e){var n=e.column;return[a("span",[t._v(t._s(n.label))])]}},{key:"default",fn:function(e){var r=e.row,l=e.column;return[0===n?a("span",[t._v(t._s("Table Name"===Object.keys(r)[0]?t.$t("common."+Object.keys(r)[0]):Object.keys(r)[0]))]):a("div",{class:t.getClassName(r,l.property)},[t._v(t._s(Object.values(r)[0][l.property]))])]}}],null,!0)})})),1),a("div",{staticClass:"text-center"},[t.tableData.length>0?a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20,40],"page-size":t.pageSize,layout:"sizes, prev, pager, next, jumper",total:t.tableData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)],1)},at=[],nt=a("5c8a");function rt(t,e){return e="function"==typeof e?e:void 0,t&&t.length?Object(H["a"])(t,void 0,e):[]}var lt=rt,ct=a("12a1");function it(t,e){return Object(ct["a"])(t,e)}var ot=it;function ut(t,e){return bt(t)||pt(t,e)||ft(t,e)||st()}function st(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function ft(t,e){if(t){if("string"===typeof t)return ht(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?ht(t,e):void 0}}function ht(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function pt(t,e){var a=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(t);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),e&&l.length===e)break}catch(o){i=!0,r=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(i)throw r}}return l}}function bt(t){if(Array.isArray(t))return t}function vt(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function dt(t,e,a,n,r,l,c){try{var i=t[l](c),o=i.value}catch(u){return void a(u)}i.done?e(o):Promise.resolve(o).then(n,r)}function mt(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var l=t.apply(e,a);function c(t){dt(l,n,r,c,i,"next",t)}function i(t){dt(l,n,r,c,i,"throw",t)}c(void 0)}))}}var gt={data:function(){return{cols:[],tableData:[],headerData:[],timeFilter:null,refresh:null,currentPage:1,pageSize:10}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return mt(o.a.mark((function e(){var a,n,r,l,c,i,u;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U["g"].replicationStatus(t.$route.params.id);case 2:a=e.sent,n=a.data.entity,r=n.header,l=void 0===r?[]:r,c=n.tables,i=void 0===c?[]:c,t.cols=[{prop:"",label:""}],t.headerData=Object(nt["a"])(l),t.tableData=[],u={},l.forEach((function(e,a){var n="shard".concat(a+1);e.forEach((function(e,a){u["".concat(n,"_").concat(a)]=e,t.cols.push({prop:"".concat(n,"_").concat(a),label:n})}))})),t.tableData.push(vt({},"Table Name",u)),i.forEach((function(e){var a=e.name,n=e.values,r={};n.forEach((function(t,e){var a="shard".concat(e+1);t.forEach((function(t,e){r["".concat(a,"_").concat(e)]=t}))})),t.tableData.push(vt({},a,r)),t.tableData=lt(t.tableData,ot)}));case 15:case"end":return e.stop()}}),e)})))()},mergeTableHeader:function(t){t.row,t.column;var e=t.rowIndex,a=t.columnIndex,n=new Set(this.headerData.map((function(t){return t.length}))),r=ut(n,1),l=r[0];if(0===e&&0!=a){if(a%l===0)return{display:"none"};this.$nextTick((function(){var t=document.querySelector(".replication-status thead>tr").children;t[a]&&(t[a].colSpan=2)}))}},timeFilterChange:function(){this.fetchData()},timeFilterRefresh:function(){this.fetchData()},handleSizeChange:function(t){this.pageSize=t},handleCurrentChange:function(t){this.currentPage=t},getClassName:function(t,e){var a=e.split("_"),n=ut(a,2),r=n[0],l=n[1],c=Object.values(t)[0],i=c[e],o="0"===l?"1":"0",u=c[r+"_"+o];if(u&&"-1"!==r.indexOf("F")){var s=parseInt(i.replace("F",""),10);if(u){var f=parseInt(u.replace("L",""),10);return s<f?"yellow":void 0}}}}},yt=gt,wt=(a("4349"),Object(X["a"])(yt,et,at,!1,null,"299ef473",null)),_t=wt.exports,xt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"table-metric pb-20"},[a("div",{staticClass:"title flex flex-between flex-vcenter ptb-10"},[a("span",{staticClass:"fs-20 font-bold"},[t._v(t._s(t.$t("tables.Table Metrics")))])]),a("el-table",{attrs:{data:t.tableData.slice((t.currentPage-1)*t.pageSize,t.currentPage*t.pageSize),center:"",border:""}},[t._l(t.columns,(function(t){var e=t.prop,n=t.label;return[a("el-table-column",{key:e,attrs:{prop:e,label:n,"show-overflow-tooltip":""}})]})),a("el-table-column",{attrs:{fixed:"right",label:t.$t("tables.Action"),width:"140"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.viewSql(e.row.tableName)}}},[t._v(t._s(t.$t("tables.Schema")))]),a("el-button",{attrs:{type:"text",size:"small"},on:{click:function(a){return t.onDelete(e.row.tableName)}}},[t._v(t._s(t.$t("tables.Delete")))])]}}])})],2),a("div",{staticClass:"text-center"},[t.tableData.length>0?a("el-pagination",{attrs:{"current-page":t.currentPage,"page-sizes":[5,10,20,40],"page-size":t.pageSize,layout:"sizes, prev, pager, next, jumper",total:t.tableData.length},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}}):t._e()],1)],1)},Ct=[],St=a("08ba"),Dt=a("3617");function $t(t,e){return Tt(t)||zt(t,e)||kt(t,e)||jt()}function jt(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function kt(t,e){if(t){if("string"===typeof t)return Ot(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?Ot(t,e):void 0}}function Ot(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,n=new Array(e);a<e;a++)n[a]=t[a];return n}function zt(t,e){var a=t&&("undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"]);if(null!=a){var n,r,l=[],c=!0,i=!1;try{for(a=a.call(t);!(c=(n=a.next()).done);c=!0)if(l.push(n.value),e&&l.length===e)break}catch(o){i=!0,r=o}finally{try{c||null==a["return"]||a["return"]()}finally{if(i)throw r}}return l}}function Tt(t){if(Array.isArray(t))return t}function Pt(t,e,a,n,r,l,c){try{var i=t[l](c),o=i.value}catch(u){return void a(u)}i.done?e(o):Promise.resolve(o).then(n,r)}function At(t){return function(){var e=this,a=arguments;return new Promise((function(n,r){var l=t.apply(e,a);function c(t){Pt(l,n,r,c,i,"next",t)}function i(t){Pt(l,n,r,c,i,"throw",t)}c(void 0)}))}}var Et={data:function(){return{tableData:[],currentPage:1,pageSize:10}},mounted:function(){this.fetchData()},methods:{fetchData:function(){var t=this;return At(o.a.mark((function e(){var a,n;return o.a.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,U["g"].tableMetrics(t.$route.params.id);case 2:a=e.sent,n=a.data.entity,Object.entries(n).forEach((function(e){var a=$t(e,2),n=a[0],r=a[1],l=r.columns,c=r.rows,i=r.space,o=r.readwrite_status,u=r.completedQueries,s=r.failedQueries,f=r.parts,h=r.queryCost;t.tableData.push({tableName:n,columns:l,rows:c,space:i,readwrite_status:o,completedQueries:u,failedQueries:s,parts:f,queryCost:Object.values(h).join(", ")})}));case 5:case"end":return e.stop()}}),e)})))()},handleSizeChange:function(t){this.pageSize=t},handleCurrentChange:function(t){this.currentPage=t},onDelete:function(t){var e=this;return At(o.a.mark((function a(){var n,r,l,c,i;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,e.$confirm(e.$t("common.Confirm Delete"),e.$t("common.tips"),{confirmButtonText:e.$t("common.Delete"),cancelButtonText:e.$t("common.Cancel"),text:"warning"});case 2:return n=t.split("."),r=$t(n,2),l=r[0],c=r[1],i=e.$route.params.id,a.next=6,U["g"].deleteTable(i,{database:l,tableName:c});case 6:e.$message.success("Table ".concat(t," ").concat(e.$t("common.Delete")).concat(e.$t("common.Success"))),e.fetchData();case 8:case"end":return a.stop()}}),a)})))()},viewSql:function(t){var e=this;return At(o.a.mark((function a(){var n,r,l,c,i,u,s;return o.a.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t.split("."),r=$t(n,2),l=r[0],c=r[1],i=e.$route.params.id,a.next=4,U["g"].viewTableCreateSql(i,{database:l,tableName:c});case 4:return u=a.sent,s=u.data.entity.create_table_query,a.next=8,Object(St["c"])({component:Dt["a"],props:{title:e.$t("tables.Schema"),width:600,customClass:"create-cluster-modal",cancelText:e.$t("common.Cancel"),okText:e.$t("common.Confirm")},data:{sql:s}});case 8:case"end":return a.stop()}}),a)})))()}},computed:{columns:function(){var t=[{prop:"tableName",label:this.$t("tables.Table Name")},{prop:"columns",label:this.$t("tables.Columns")},{prop:"rows",label:this.$t("tables.Rows")},{prop:"parts",label:this.$t("tables.Parts")},{prop:"space",label:this.$t("tables.Disk Space")},{prop:"readwrite_status",label:this.$t("tables.RWStatus")},{prop:"completedQueries",label:this.$t("tables.Completed Queries in last 24h")},{prop:"failedQueries",label:this.$t("tables.Failed Queries in last 24h")},{prop:"queryCost",label:this.$t("tables.Last 7 days info")}];return t}}},It=Et,Nt=(a("e54d"),Object(X["a"])(It,xt,Ct,!1,null,"677c7a80",null)),Ft=Nt.exports,qt={data:function(){return{}},mounted:function(){},methods:{},components:{ZkTable:tt,ReplicationTable:_t,TableMetric:Ft}},Qt=qt,Mt=Object(X["a"])(Qt,n,r,!1,null,"11456861",null);e["default"]=Mt.exports},"9fd3":function(t,e,a){},cd6a:function(t,e,a){},e54d:function(t,e,a){"use strict";var n=a("cd6a"),r=a.n(n);r.a}}]);