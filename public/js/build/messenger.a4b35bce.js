import{n as h,d as p,m as f}from"./app.47c6a662.js";import{D as g}from"./DialogWrapper.bfec71cb.js";import{l as m}from"./DialogSelect.bf804e7f.js";import"./UserInput.dd6daa30.js";import"./index.dbdc2404.js";import"./ImgUpload.9fb22c96.js";import"./details.ad9fa9c5.js";var _=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{ref:"scrollerView",staticClass:"app-scroller-y",class:[t.static?"static":""]},[t._t("default"),e("div",{ref:"bottom",staticClass:"app-scroller-bottom"})],2)},v=[];const $={name:"ScrollerY",props:{static:{type:Boolean,default:!1},autoBottom:{type:Boolean,default:!1},autoRecovery:{type:Boolean,default:!0},autoRecoveryAnimate:{type:Boolean,default:!1}},data(){return{scrollY:0,scrollDiff:0,autoInterval:null}},mounted(){this.openInterval(),this.$nextTick(this.initScroll)},activated(){this.openInterval(),this.recoveryScroll()},destroyed(){this.closeInterval()},deactivated(){this.closeInterval()},methods:{initScroll(){this.autoToBottom();let t=typeof this.$listeners["on-scroll"]=="function",i=$A(this.$refs.scrollerView);i.scroll(()=>{let e=Math.round(i.innerHeight()),s=i.scrollTop(),a=this.$refs.scrollerView.scrollHeight;if(this.scrollY=s,t){let o="static",r="static";this.scrollDiff-s>50?(this.scrollDiff=s,o="down"):this.scrollDiff-s<-100&&(this.scrollDiff=s,o="up"),this.scrollDiff-s>1?(this.scrollDiff=s,r="down"):this.scrollDiff-s<-1&&(this.scrollDiff=s,r="up"),this.$emit("on-scroll",{scale:s/(a-e),scrollY:s,scrollE:a-e-s,direction:o,directionreal:r})}})},recoveryScroll(){this.autoRecovery&&(this.scrollY>0||this.autoBottom)&&this.$nextTick(()=>{this.autoBottom?this.autoToBottom():this.scrollTo(this.scrollY,this.autoRecoveryAnimate)})},openInterval(){this.autoToBottom(),this.autoInterval&&clearInterval(this.autoInterval),this.autoInterval=setInterval(this.autoToBottom,300)},closeInterval(){clearInterval(this.autoInterval),this.autoInterval=null},scrollTo(t,i){i===!1?$A(this.$refs.scrollerView).stop().scrollTop(t):$A(this.$refs.scrollerView).stop().animate({scrollTop:t})},autoToBottom(){this.autoBottom&&$A.scrollToView(this.$refs.bottom,{behavior:"instant",inline:"end"})},scrollInfo(){let t=$A(this.$refs.scrollerView),i=Math.round(t.innerHeight()),e=t.scrollTop(),s=this.$refs.scrollerView.scrollHeight;return this.scrollY=e,{scale:e/(s-i),scrollY:e,scrollE:s-i-e}},querySelector(t){return this.$refs.scrollerView&&this.$refs.scrollerView.querySelector(t)}}},c={};var y=h($,_,v,!1,A,null,null,null);function A(t){for(let i in c)this[i]=c[i]}var D=function(){return y.exports}(),b=function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("div",{staticClass:"page-messenger"},[e("PageTitle",{attrs:{title:t.$L(t.tabActive==="dialog"?"\u6D88\u606F":"\u901A\u8BAF\u5F55")}}),e("div",{staticClass:"messenger-wrapper"},[e("div",{staticClass:"messenger-select"},[e("div",{staticClass:"messenger-search"},[e("div",{staticClass:"search-wrapper"},[t.tabActive==="dialog"?e("Input",{attrs:{placeholder:t.$L(t.loadDialogs?"\u66F4\u65B0\u4E2D...":"\u641C\u7D22\u6D88\u606F"),clearable:""},model:{value:t.dialogSearchKey,callback:function(s){t.dialogSearchKey=s},expression:"dialogSearchKey"}},[e("div",{staticClass:"search-pre",attrs:{slot:"prefix"},slot:"prefix"},[t.loadDialogs||t.dialogSearchLoad>0?e("Loading"):e("Icon",{attrs:{type:"ios-search"}})],1)]):e("Input",{attrs:{prefix:"ios-search",placeholder:t.$L("\u641C\u7D22\u8054\u7CFB\u4EBA"),clearable:""},model:{value:t.contactsKey,callback:function(s){t.contactsKey=s},expression:"contactsKey"}})],1)]),t.tabActive==="dialog"&&!t.dialogSearchKey?e("div",{staticClass:"messenger-nav"},[e("EDropdown",{ref:"navMenu",staticClass:"nav-menu",attrs:{trigger:"click",placement:"bottom-start"},on:{command:t.onActive}},[e("div",{staticClass:"nav-icon"},[e("i",{staticClass:"taskfont"},[t._v("\uE634")])]),e("EDropdownMenu",{staticClass:"messenger-nav-menu",attrs:{slot:"dropdown"},slot:"dropdown"},t._l(t.dialogMenus,function(s,a){return e("EDropdownItem",{key:a,attrs:{command:s.type}},[e("div",{staticClass:"messenger-nav-item",class:{active:t.dialogActive==s.type}},[e("div",{staticClass:"nav-title"},[t._v(t._s(t.$L(s.name)))]),e("Badge",{staticClass:"nav-num",attrs:{"overflow-count":999,count:t.msgUnread(s.type)}})],1)])}),1)],1),t._l(t.typeItems,function(s,a){return e("div",{key:a,class:{active:t.dialogActive==s.type},on:{click:function(o){return t.onActive(s.type)}}},[e("div",{staticClass:"nav-title"},[e("em",[t._v(t._s(t.$L(s.name)))]),e("Badge",{staticClass:"nav-num",attrs:{"overflow-count":999,count:t.msgUnread(s.type)}})],1)])})],2):t._e(),t.$isEEUiApp&&!t.appNotificationPermission?e("div",{staticClass:"messenger-notify-permission",on:{click:t.onOpenAppSetting}},[t._v(" "+t._s(t.$L("\u672A\u5F00\u542F\u901A\u77E5\u6743\u9650"))),e("i",{staticClass:"taskfont"},[t._v("\uE733")])]):t._e(),e("ScrollerY",{ref:"list",staticClass:"messenger-list",class:t.listClassName,attrs:{static:""},on:{"on-scroll":t.listScroll},nativeOn:{touchstart:function(s){return t.listTouch.apply(null,arguments)}}},[t.tabActive==="dialog"?e("ul",{staticClass:"dialog"},t._l(t.dialogList,function(s,a){return t.dialogList.length>0?e("li",{directives:[{name:"longpress",rawName:"v-longpress",value:t.handleLongpress,expression:"handleLongpress"}],key:a,ref:`dialog_${s.id}`,refInFor:!0,class:t.dialogClass(s),attrs:{"data-id":s.id},on:{click:function(o){return t.openDialog({dialog_id:s.id,search_msg_id:s.search_msg_id})}}},[s.type=="group"?[s.avatar?e("EAvatar",{staticClass:"img-avatar",attrs:{src:s.avatar,size:42}}):s.group_type=="department"?e("i",{staticClass:"taskfont icon-avatar department"},[t._v("\uE75C")]):s.group_type=="project"?e("i",{staticClass:"taskfont icon-avatar project"},[t._v("\uE6F9")]):s.group_type=="task"?e("i",{staticClass:"taskfont icon-avatar task"},[t._v("\uE6F4")]):e("Icon",{staticClass:"icon-avatar",attrs:{type:"ios-people"}})]:s.dialog_user?e("div",{staticClass:"user-avatar"},[e("UserAvatar",{attrs:{userid:s.dialog_user.userid,size:42}})],1):e("Icon",{staticClass:"icon-avatar",attrs:{type:"md-person"}}),e("div",{staticClass:"dialog-box"},[e("div",{staticClass:"dialog-title"},[s.todo_num?e("div",{staticClass:"todo"},[t._v("["+t._s(t.$L("\u5F85\u529E"))+t._s(t.formatTodoNum(s.todo_num))+"]")]):t._e(),t.$A.getDialogMention(s)>0?e("div",{staticClass:"mention"},[t._v("[@"+t._s(t.$A.getDialogMention(s))+"]")]):t._e(),s.bot?e("div",{staticClass:"taskfont bot"},[t._v("\uE68C")]):t._e(),t._l(t.$A.dialogTags(s),function(o){return o.color!="success"?[e("Tag",{attrs:{color:o.color,fade:!1},on:{"on-click":function(r){return t.openDialog(s.id)}}},[t._v(t._s(t.$L(o.text)))])]:t._e()}),e("span",[t._v(t._s(s.name))]),s.type=="user"&&t.lastMsgReadDone(s.last_msg)&&s.dialog_user.userid!=t.userId?e("Icon",{attrs:{type:t.lastMsgReadDone(s.last_msg)}}):t._e(),s.last_at?e("em",[t._v(t._s(t.$A.formatTime(s.last_at)))]):t._e()],2),e("div",{staticClass:"dialog-text no-dark-content"},[s.extra_draft_has&&s.id!=t.dialogId?[e("div",{staticClass:"last-draft"},[t._v("["+t._s(t.$L("\u8349\u7A3F"))+"]")]),e("div",{staticClass:"last-text"},[e("span",[t._v(t._s(t.formatDraft(s.extra_draft_content)))])])]:[s.type=="group"&&s.last_msg&&s.last_msg.userid?[s.last_msg.userid==t.userId?e("div",{staticClass:"last-self"},[t._v(t._s(t.$L("\u4F60")))]):e("UserAvatar",{attrs:{userid:s.last_msg.userid,"show-name":!0,"show-icon":!1,"tooltip-disabled":""}})]:t._e(),e("div",{staticClass:"last-text"},[t.formatMsgEmojiDesc(s.last_msg)?e("em",[t._v(t._s(t.formatMsgEmojiDesc(s.last_msg)))]):t._e(),e("span",[t._v(t._s(t.$A.getMsgSimpleDesc(s.last_msg)))])])],s.silence?e("div",{staticClass:"taskfont last-silence"},[t._v("\uE7D7")]):t._e()],2)]),e("Badge",{staticClass:"dialog-num",attrs:{type:s.silence?"normal":"error","overflow-count":999,count:t.$A.getDialogUnread(s,!0)}}),e("div",{staticClass:"dialog-line"})],2):t.dialogSearchLoad===0?e("li",{staticClass:"nothing"},[t._v(" "+t._s(t.$L(t.dialogSearchKey?`\u6CA1\u6709\u4EFB\u4F55\u4E0E"${t.dialogSearchKey}"\u76F8\u5173\u7684\u4F1A\u8BDD`:"\u6CA1\u6709\u4EFB\u4F55\u4F1A\u8BDD"))+" ")]):t._e()}),0):e("ul",{staticClass:"contacts"},[t.contactsFilter.length===0?[t.contactsLoad>0?e("li",{staticClass:"loading"},[e("Loading")],1):e("li",{staticClass:"nothing"},[t._v(" "+t._s(t.$L(t.contactsKey?`\u6CA1\u6709\u4EFB\u4F55\u4E0E"${t.contactsKey}"\u76F8\u5173\u7684\u8054\u7CFB\u4EBA`:"\u6CA1\u6709\u4EFB\u4F55\u8054\u7CFB\u4EBA"))+" ")])]:[t._l(t.contactsList,function(s){return e("li",[e("div",{staticClass:"label"},[t._v(t._s(s.az))]),e("ul",t._l(s.list,function(a,o){return e("li",{key:o,on:{click:function(r){return t.openContacts(a)}}},[e("div",{staticClass:"avatar"},[e("UserAvatar",{attrs:{userid:a.userid,size:30}})],1),e("div",{staticClass:"nickname"},[e("em",[t._v(t._s(a.nickname))]),a.tags?e("div",{staticClass:"tags"},t._l(a.tags,function(r){return e("span",{style:t.tagField(r,"style")},[t._v(t._s(t.tagField(r,"label")))])}),0):t._e()]),a.loading?e("div",{staticClass:"loading"},[e("Loading")],1):t._e()])}),0)])}),e("li",{staticClass:"loaded"},[t.contactsKey?[t._v(t._s(t.$L("\u641C\u7D22\u5230"+t.contactsFilter.length+"\u4F4D\u8054\u7CFB\u4EBA")))]:[t._v(t._s(t.$L("\u5171"+t.contactsTotal+"\u4F4D\u8054\u7CFB\u4EBA")))]],2)]],2),e("div",{directives:[{name:"show",rawName:"v-show",value:t.operateVisible,expression:"operateVisible"}],staticClass:"operate-position",style:t.operateStyles},[e("Dropdown",{attrs:{trigger:"custom",placement:t.windowLandscape?"bottom":"top",visible:t.operateVisible,transfer:""},on:{"on-clickoutside":function(s){t.operateVisible=!1}}},[e("div",{style:{userSelect:t.operateVisible?"none":"auto",height:t.operateStyles.height}}),e("DropdownMenu",{attrs:{slot:"list"},slot:"list"},[e("DropdownItem",{nativeOn:{click:function(s){return t.handleTopClick.apply(null,arguments)}}},[t._v(" "+t._s(t.$L(t.operateItem.top_at?"\u53D6\u6D88\u7F6E\u9876":"\u7F6E\u9876"))+" ")]),e("DropdownItem",{nativeOn:{click:function(s){return t.handleReadClick.apply(null,arguments)}}},[t._v(" "+t._s(t.$L(t.$A.getDialogUnread(t.operateItem,!0)>0?"\u6807\u8BB0\u5DF2\u8BFB":"\u6807\u8BB0\u672A\u8BFB"))+" ")]),e("DropdownItem",{attrs:{disabled:t.silenceDisabled(t.operateItem)},nativeOn:{click:function(s){return t.handleSilenceClick.apply(null,arguments)}}},[t._v(" "+t._s(t.$L(t.operateItem.silence?"\u5141\u8BB8\u6D88\u606F\u901A\u77E5":"\u6D88\u606F\u514D\u6253\u6270"))+" ")])],1)],1)],1)]),e("div",{staticClass:"messenger-menu"},[e("div",{staticClass:"menu-icon"},[e("Icon",{class:{active:t.tabActive==="dialog"},attrs:{type:"ios-chatbubbles"},on:{click:function(s){return t.onActive(null)}}}),e("Badge",{staticClass:"menu-num",attrs:{"overflow-count":999,count:t.msgUnread("all")}})],1),e("div",{staticClass:"menu-icon"},[e("Icon",{class:{active:t.tabActive==="contacts"},attrs:{type:"md-person"},on:{click:function(s){t.tabActive="contacts"}}})],1)])],1),t.activeNum>0&&t.routeName==="manage-messenger"?e("div",{staticClass:"messenger-msg"},[e("div",{staticClass:"msg-dialog-bg"},[e("div",{staticClass:"msg-dialog-bg-icon"},[e("Icon",{attrs:{type:"ios-chatbubbles"}})],1),e("div",{staticClass:"msg-dialog-bg-text"},[t._v(t._s(t.$L("\u9009\u62E9\u4E00\u4E2A\u4F1A\u8BDD\u5F00\u59CB\u804A\u5929")))])]),t.windowLandscape&&t.dialogId>0?e("DialogWrapper",{attrs:{dialogId:t.dialogId,"auto-focus":t.$A.isDesktop()},on:{"on-active":t.scrollIntoActive}}):t._e()],1):t._e()])],1)},C=[];const d={menuHistory:[]},k={components:{ScrollerY:D,DialogWrapper:g},directives:{longpress:m},data(){return{activeNum:0,tabActive:"dialog",dialogSearchLoad:0,dialogSearchKey:"",dialogSearchList:[],dialogActive:"",dialogMenus:[{type:"",name:"\u5168\u90E8"},{type:"project",name:"\u9879\u76EE"},{type:"task",name:"\u4EFB\u52A1"},{type:"user",name:"\u5355\u804A"},{type:"group",name:"\u7FA4\u804A"},{type:"bot",name:"\u673A\u5668\u4EBA"}],dialogHistory:d.menuHistory,contactsKey:"",contactsLoad:0,contactsData:null,contactsTotal:0,contactsCurrentPage:1,contactsHasMorePages:!1,contactsLastTime:0,operateItem:{},operateStyles:{},operateVisible:!1,clickAgainSubscribe:null}},async beforeRouteEnter(t,i,e){d.menuHistory=await $A.IDBArray("dialogMenuHistory"),e()},mounted(){const t=$A.runNum(this.$route.query.dialog_id);t>0&&this.openDialog(t),this.clickAgainSubscribe=p.Store.subscribe("clickAgainDialog",this.shakeUnread)},beforeDestroy(){this.clickAgainSubscribe&&(this.clickAgainSubscribe.unsubscribe(),this.clickAgainSubscribe=null),document.removeEventListener("keydown",this.shortcutEvent)},activated(){this.updateDialogs(1e3),this.$nextTick(t=>this.activeNum++),$A.isEEUiApp&&$A.eeuiAppSendMessage({action:"getNotificationPermission"})},deactivated(){this.updateDialogs(-1),this.$nextTick(t=>this.activeNum--)},computed:{...f(["cacheDialogs","loadDialogs","dialogId","messengerSearchKey","appNotificationPermission"]),routeName(){return this.$route.name},typeItems(){const{dialogActive:t,dialogMenus:i,dialogHistory:e}=this,s=[];return this.dialogHistory.includes(t)?s.push(...this.dialogHistory):(s.push(""),t&&s.push(t),e.some(a=>{s.includes(a)||s.push(a)}),["project","task","user"].some(a=>{s.includes(a)||s.push(a)}),this.dialogHistory=s.slice(0,4),$A.IDBSave("dialogMenuHistory",this.dialogHistory)),this.dialogHistory.map(a=>i.find(o=>o.type==a))},dialogList(){const{dialogActive:t,dialogSearchKey:i,dialogSearchList:e}=this;return e.length>0?e.sort((a,o)=>(a.is_search===!0?1:0)-(o.is_search===!0?1:0)):t==""&&i==""?this.cacheDialogs.filter(a=>this.filterDialog(a)).sort(this.dialogSort):this.cacheDialogs.filter(a=>{if(!this.filterDialog(a))return!1;if(i){const{name:o,pinyin:r,last_msg:l}=a;let n=`${o} ${r}`;if(l)switch(l.type){case"text":n+=` ${l.msg.text.replace(/<[^>]+>/g,"")}`;break;case"meeting":case"file":n+=` ${l.msg.name}`;break}if(!$A.strExists(n,i))return!1}else if(t)switch(t){case"project":case"task":if(t!=a.group_type)return!1;break;case"user":if(t!=a.type||a.bot)return!1;break;case"group":if(t!=a.type||["project","task"].includes(a.group_type))return!1;break;case"bot":if(!a.bot)return!1;break;default:return!1}return!0}).sort(this.dialogSort)},contactsFilter(){const{contactsData:t,contactsKey:i}=this;return t===null?[]:i?t.filter(e=>$A.strExists(`${e.email} ${e.nickname} ${e.profession} ${e.pinyin}`,i)):t},contactsList(){const t=[];return this.contactsFilter.some(i=>{let e=i.az?i.az.toUpperCase():"#",s=t.find(a=>a.az==e);s?s.list.findIndex(({userid:a})=>a==i.userid)===-1&&s.list.push(i):t.push({az:e,list:[i]})}),t},msgUnread(){return function(t){let i=0;return this.cacheDialogs.some(e=>{switch(t){case"project":case"task":if(t!=e.group_type)return!1;break;case"user":if(t!=e.type||e.bot)return!1;break;case"group":if(t!=e.type||["project","task"].includes(e.group_type))return!1;break;case"bot":if(!e.bot)return!1;break}i+=$A.getDialogNum(e)}),i}},listClassName(){return{"scrollbar-overlay":!0,"scrollbar-hidden":this.operateVisible===!0}}},watch:{$route:{handler({params:t}){["dialog","contacts"].includes(t.dialogAction)&&(this.tabActive=t.dialogAction)},immediate:!0},messengerSearchKey:{handler(t){this.$nextTick(i=>{this.dialogSearchKey=t.dialog,this.contactsKey=t.contacts})},deep:!0},dialogSearchKey(t){switch(this.$store.state.messengerSearchKey.dialog=t,t){case"log.o":$A.IDBSet("logOpen","open").then($A.reloadUrl);break;case"log.c":$A.IDBSet("logOpen","close").then($A.reloadUrl);break}this.dialogSearchList=[],t!=""&&(this.__searchTimer&&clearTimeout(this.__searchTimer),this.__searchTimer=setTimeout(this.searchDialog,600),this.dialogSearchLoad++,setTimeout(i=>this.dialogSearchLoad--,600))},contactsKey(t){this.$store.state.messengerSearchKey.contacts=t,t!=""&&(this.contactsLoad++,setTimeout(()=>{this.contactsKey==t&&this.getContactsList(1),this.contactsLoad--},600))},tabActive:{handler(t){t=="contacts"?($A.Time()-this.contactsLastTime>24*3600&&(this.contactsData=null),this.contactsData===null?this.getContactsList(1):this.updateContactsList(1e3)):this.updateDialogs(1e3)},immediate:!0},dialogId:{handler(t){t>0&&this.scrollIntoActive()},immediate:!0}},methods:{listTouch(){this.$refs.navMenu.visible&&this.$refs.navMenu.hide()},listScroll(t){t.scrollE<10&&this.getContactsNextPage(),this.operateVisible=!1},onActive(t){if(t===null){if(this.tabActive!=="dialog"){this.tabActive="dialog";return}t=this.dialogActive}this.dialogActive==t?this.shakeUnread():this.dialogActive=t},shakeUnread(){var i;let t=this.dialogList.findIndex(e=>$A.getDialogNum(e)>0);if(t===-1&&(t=this.dialogList.findIndex(e=>$A.getDialogUnread(e,!0)>0)),t>-1){const e=this.$refs[`dialog_${(i=this.dialogList[t])==null?void 0:i.id}`];if(e&&e[0]){if(e[0].classList.contains("common-shake"))return;$A.scrollIntoViewIfNeeded(e[0]),requestAnimationFrame(s=>{e[0].classList.add("common-shake"),setTimeout(a=>{e[0].classList.remove("common-shake")},600)})}}},dialogClass(t){return this.dialogSearchKey?null:{top:t.top_at,active:t.id==this.dialogId,operate:this.operateVisible&&t.id==this.operateItem.id,completed:$A.dialogCompleted(t)}},dialogSort(t,i){return t.top_at||i.top_at?$A.Date(i.top_at)-$A.Date(t.top_at):t.todo_num>0||i.todo_num>0?i.todo_num-t.todo_num:t.extra_draft_has||i.extra_draft_has?i.extra_draft_has-t.extra_draft_has:$A.Date(i.last_at)-$A.Date(t.last_at)},openDialog(t){this.operateVisible||($A.isJson(t)&&$A.leftExists(t.dialog_id,"u:")?this.$store.dispatch("openDialogUserid",$A.leftDelete(t.dialog_id,"u:")).catch(({msg:i})=>{$A.modalError(i)}):this.$store.dispatch("openDialog",t))},openContacts(t){t.loading||(this.$set(t,"loading",!0),this.$store.dispatch("openDialogUserid",t.userid).then(i=>{this.windowLandscape&&(this.tabActive="dialog")}).catch(({msg:i})=>{$A.modalError(i)}).finally(i=>{this.$set(t,"loading",!1)}))},tagField(t,i){switch($A.isJson(t)||(t={label:t}),i){case"style":return t.style||null;case"label":return t.label}return null},filterDialog(t){if(t.id>0&&t.id==this.dialogId||t.top_at||t.todo_num>0||$A.getDialogNum(t)>0)return!0;if(t.name===void 0||t.dialog_delete===1||!t.last_at)return!1;if(t.type=="group"&&["project","task"].includes(t.group_type)&&$A.isJson(t.group_info)){if(t.group_type=="task"&&t.group_info.complete_at){let i=Math.max($A.Date(t.last_at,!0),$A.Date(t.group_info.complete_at,!0));if(5*86400+i<$A.Time())return!1}if(t.group_info.deleted_at){let i=Math.max($A.Date(t.last_at,!0),$A.Date(t.group_info.deleted_at,!0));if(2*86400+i<$A.Time())return!1}if(t.group_info.archived_at){let i=Math.max($A.Date(t.last_at,!0),$A.Date(t.group_info.archived_at,!0));if(3*86400+i<$A.Time())return!1}}return!0},searchDialog(){const t=this.dialogSearchKey;t!=""&&(this.dialogSearchLoad++,this.$store.dispatch("call",{url:"dialog/search",data:{key:t}}).then(({data:i})=>{if(t!==this.dialogSearchKey)return;const e=$A.cloneJSON(this.dialogList),s=[],a=[];e.forEach(o=>{o.last_msg&&!s.includes(o.last_msg.id)&&s.push(o.last_msg.id),o.dialog_user&&!a.includes(o.dialog_user.userid)&&a.push(o.dialog_user.userid)}),i.some(o=>{$A.leftExists(o.id,"u:")?a.includes(o.dialog_user.userid)||e.push(Object.assign(o,{is_search:!0})):(!o.last_msg||!s.includes(o.last_msg.id))&&e.push(Object.assign(o,{is_search:!0}))}),this.dialogSearchList=e}).finally(i=>{this.dialogSearchLoad--}))},getContactsList(t){this.contactsLoad++;const i=this.contactsKey;this.$store.dispatch("call",{url:"users/search",data:{keys:{key:i},sorts:{az:"asc"},page:t,pagesize:50}}).then(({data:e})=>{i==""&&(this.contactsTotal=e.total),this.contactsData===null&&(this.contactsData=[]),e.data.some(s=>{this.contactsData.findIndex(a=>a.userid==s.userid)===-1&&this.contactsData.push(s)}),this.contactsCurrentPage=e.current_page,this.contactsHasMorePages=e.current_page<e.last_page,this.$nextTick(this.getContactsNextPage)}).catch(()=>{i==""&&(this.contactsTotal=0),this.contactsHasMorePages=!1}).finally(e=>{this.contactsLoad--,this.contactsLastTime=$A.Time()})},getContactsNextPage(){const{scrollE:t}=this.$refs.list.scrollInfo();t<10&&this.tabActive==="contacts"&&this.contactsLoad===0&&this.contactsHasMorePages&&this.getContactsList(this.contactsCurrentPage+1)},updateContactsList(t){this.__updateContactsList&&clearTimeout(this.__updateContactsList),t>-1&&(this.__updateContactsList=setTimeout(i=>{this.tabActive==="contacts"&&this.$store.dispatch("call",{url:"users/search",data:{updated_time:this.contactsLastTime,take:100}}).then(({data:e})=>{e.some(s=>{const a=this.contactsData.findIndex(o=>o.userid==s.userid);a>-1?this.contactsData.splice(a,1,s):this.contactsData.push(s)})}).finally(e=>{this.contactsLastTime=$A.Time()})},t))},formatDraft(t){return(t==null?void 0:t.replace(/<img[^>]*>/gi,`[${$A.L("\u56FE\u7247")}]`).replace(/<[^>]*>/g,""))||null},formatTodoNum(t){return t>999?"999+":t>1?t:""},formatMsgEmojiDesc(t){return $A.isJson(t)&&$A.arrayLength(t.emoji)>0?t.emoji[0].symbol:null},lastMsgReadDone(t){if($A.isJson(t)){const{userid:i,percentage:e}=t;if(i===this.userId)return e===100?"md-done-all":"md-checkmark"}return null},scrollIntoActive(){this.$nextTick(()=>{if(this.windowLandscape&&this.$refs.list){const t=this.$refs.list.querySelector(".active");t?$A.scrollIntoViewIfNeeded(t):this.cacheDialogs.find(({id:e})=>e==this.dialogId)&&this.dialogActive&&(this.dialogActive="",this.$nextTick(()=>{const e=this.$refs.list.querySelector(".active");e&&$A.scrollIntoViewIfNeeded(e)}))}})},handleLongpress(t,i){if(this.dialogSearchKey)return;const e=$A.getAttr(i,"data-id"),s=this.dialogList.find(a=>a.id==e);!s||(this.operateVisible=!1,this.operateItem=$A.isJson(s)?s:{},this.$nextTick(()=>{const a=i.getBoundingClientRect(),o=this.$refs.list.$el.getBoundingClientRect();this.operateStyles={left:`${t.clientX-o.left}px`,top:`${a.top+this.windowScrollY}px`,height:a.height+"px"},this.operateVisible=!0}))},handleTopClick(){this.$store.dispatch("call",{url:"dialog/top",data:{dialog_id:this.operateItem.id}}).then(({data:t})=>{this.$store.dispatch("saveDialog",t),this.$nextTick(this.scrollIntoActive)}).catch(({msg:t})=>{$A.modalError(t)})},handleReadClick(){this.$store.dispatch("dialogMsgMark",{dialog_id:this.operateItem.id,type:$A.getDialogUnread(this.operateItem,!0)>0?"read":"unread"}).catch(({msg:t})=>{$A.modalError(t)})},handleSilenceClick(){this.silenceDisabled(this.operateItem)||this.$store.dispatch("call",{url:"dialog/msg/silence",data:{dialog_id:this.operateItem.id,type:this.operateItem.silence?"cancel":"set"}}).then(({data:t})=>{this.$store.dispatch("saveDialog",t)}).catch(({msg:t})=>{$A.modalError(t)})},updateDialogs(t){this.__updateDialogs&&clearTimeout(this.__updateDialogs),t>-1&&(this.__updateDialogs=setTimeout(i=>{this.tabActive==="dialog"&&this.$store.dispatch("getDialogs",{hideload:!0}).catch(()=>{})},t))},onOpenAppSetting(){$A.eeuiAppSendMessage({action:"gotoSetting"})},silenceDisabled(t){const{type:i,group_type:e}=t;return i==="group"&&e!=="user"}}},u={};var I=h(k,b,C,!1,S,null,null,null);function S(t){for(let i in u)this[i]=u[i]}var V=function(){return I.exports}();export{V as default};
