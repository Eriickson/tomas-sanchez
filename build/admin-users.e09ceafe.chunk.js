"use strict";(self.webpackChunktomas_sanchez_cms=self.webpackChunktomas_sanchez_cms||[]).push([[5199],{67875:(h,r,e)=>{e.d(r,{Z:()=>s});const s=()=>null},94699:(h,r,e)=>{e.d(r,{Z:()=>P});var t=e(67294),s=e(45697),n=e.n(s),E=e(97132),l=e(28702),f=e.n(l),c=e(41363),M=e.n(c),a=e(95489),_=e.n(a);const O=({displayedFilters:U})=>{const[i,R]=(0,t.useState)(!1),{formatMessage:C}=(0,E.useIntl)(),A=(0,t.useRef)(),y=()=>{R(j=>!j)};return t.createElement(t.Fragment,null,t.createElement(l.Box,{paddingTop:1,paddingBottom:1},t.createElement(l.Button,{variant:"tertiary",ref:A,startIcon:t.createElement(c.Filter,null),onClick:y,size:"S"},C({id:"app.utils.filters",defaultMessage:"Filters"})),i&&t.createElement(a.FilterPopoverURLQuery,{displayedFilters:U,isVisible:i,onToggle:y,source:A})),t.createElement(a.FilterListURLQuery,{filtersSchema:U}))};O.propTypes={displayedFilters:n().arrayOf(n().shape({name:n().string.isRequired,metadatas:n().shape({label:n().string}),fieldSchema:n().shape({type:n().string})})).isRequired};const P=O},4214:(h,r,e)=>{e.d(r,{Z:()=>_});var t=e(67294),s=e(97132),n=e(45697),E=e.n(n),l=e(28702),f=e.n(l),c=e(41363),M=e.n(c);const a=({onClick:O})=>{const{formatMessage:P}=(0,s.useIntl)();return t.createElement(l.Button,{onClick:O,startIcon:t.createElement(c.Envelop,null),size:"S"},P({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}))};a.propTypes={onClick:E().func.isRequired};const _=a},57338:(h,r,e)=>{e.d(r,{Z:()=>s});const s={firstname:"",lastname:"",email:"",roles:[]}},55867:(h,r,e)=>{e.d(r,{Z:()=>s});const s=[]},37735:(h,r,e)=>{e.r(r),e.d(r,{default:()=>be});var t=e(67294),s=e(95489),n=e(87751),E=e(15861),l=e(64572),f=e(70885),c=e(64687),M=e.n(c),a=e(28702),_=e(49656),O=e(97132),P=e(23724),U=e(45697),i=e.n(U),R=e(41363),C=e(38683);const A=({canDelete:o,headers:u,entriesToDelete:m,onClickDelete:p,onSelectRow:$,withMainAction:Y,withBulkActions:x,rows:ne})=>{const{push:N,location:{pathname:H}}=(0,_.useHistory)(),{formatMessage:I}=(0,O.useIntl)();return t.createElement(a.Tbody,null,ne.map(d=>{const V=m.findIndex(W=>W===d.id)!==-1;return t.createElement(a.Tr,{key:d.id,...(0,s.onRowClick)({fn:()=>N(`${H}/${d.id}`),condition:x})},Y&&t.createElement(a.Td,{...s.stopPropagation},t.createElement(a.BaseCheckbox,{"aria-label":I({id:"app.component.table.select.one-entry",defaultMessage:"Select {target}"},{target:(0,C.Pp)(d.firstname,d.lastname)}),checked:V,onChange:()=>{$({name:d.id,value:!V})}})),u.map(({key:W,cellFormatter:k,name:K,...q})=>t.createElement(a.Td,{key:W},typeof k=="function"?k(d,{key:W,name:K,formatMessage:I,...q}):t.createElement(a.Typography,{textColor:"neutral800"},d[K]||"-"))),x&&t.createElement(a.Td,null,t.createElement(a.Flex,{justifyContent:"end"},t.createElement(a.IconButton,{onClick:()=>N(`${H}/${d.id}`),label:I({id:"app.component.table.edit",defaultMessage:"Edit {target}"},{target:(0,C.Pp)(d.firstname,d.lastname)}),noBorder:!0,icon:t.createElement(R.Pencil,null)}),o&&t.createElement(a.Box,{paddingLeft:1,...s.stopPropagation},t.createElement(a.IconButton,{onClick:()=>p(d.id),label:I({id:"global.delete-target",defaultMessage:"Delete {target}"},{target:(0,C.Pp)(d.firstname,d.lastname)}),noBorder:!0,icon:t.createElement(R.Trash,null)})))))}))};A.defaultProps={canDelete:!1,entriesToDelete:[],onClickDelete(){},onSelectRow(){},rows:[],withBulkActions:!1,withMainAction:!1},A.propTypes={canDelete:i().bool,entriesToDelete:i().array,headers:i().array.isRequired,onClickDelete:i().func,onSelectRow:i().func,rows:i().array,withBulkActions:i().bool,withMainAction:i().bool};const y=A;var j=e(94699),S=e(87462),X=e(80831),ue=e(81288);const me=[[{intlLabel:{id:"Auth.form.firstname.label",defaultMessage:"First name"},name:"firstname",placeholder:{id:"Auth.form.firstname.placeholder",defaultMessage:"e.g. Kai"},type:"text",size:{col:6,xs:12},required:!0},{intlLabel:{id:"Auth.form.lastname.label",defaultMessage:"Last name"},name:"lastname",placeholder:{id:"Auth.form.lastname.placeholder",defaultMessage:"e.g. Doe"},type:"text",size:{col:6,xs:12}}],[{intlLabel:{id:"Auth.form.email.label",defaultMessage:"Email"},name:"email",placeholder:{id:"Auth.form.email.placeholder",defaultMessage:"e.g. kai.doe@strapi.io"},type:"email",size:{col:6,xs:12},required:!0}]];var G=e(53209);const Ee=G.Ry().shape({firstname:G.Z_().trim().required(s.translatedErrors.required),lastname:G.Z_(),email:G.Z_().email(s.translatedErrors.email).required(s.translatedErrors.required),roles:G.IX().min(1,s.translatedErrors.required).required(s.translatedErrors.required)}),pe={create:{buttonSubmitLabel:{id:"app.containers.Users.ModalForm.footer.button-success",defaultMessage:"Invite user"},isDisabled:!1,next:"magic-link"},"magic-link":{buttonSubmitLabel:{id:"global.finish",defaultMessage:"Finish"},isDisabled:!0,next:null}};var ge=function(){return window&&window.strapi&&window.strapi.isEE?e(97083).Z:e(57338).Z}(),_e=function(){return window&&window.strapi&&window.strapi.isEE?e(810).Z:e(55867).Z}(),Z=function(){return window&&window.strapi&&window.strapi.isEE?e(12201).Z:e(31605).Z}(),Te=function(u){var m=u.queryName,p=u.onToggle,$=(0,t.useState)("create"),Y=(0,f.Z)($,2),x=Y[0],ne=Y[1],N=(0,t.useState)(!1),H=(0,f.Z)(N,2),I=H[0],d=H[1],V=(0,t.useState)(null),W=(0,f.Z)(V,2),k=W[0],K=W[1],q=(0,P.useQueryClient)(),ie=(0,O.useIntl)(),z=ie.formatMessage,Me=(0,s.useNotification)(),ee=(0,s.useOverlayBlocker)(),de=ee.lockApp,te=ee.unlockApp,Pe=(0,s.useFetchClient)(),re=Pe.post,ae=(0,P.useMutation)(function(v){return re("/admin/users",v)},{onSuccess:function(F){return(0,E.Z)(M().mark(function Q(){var b;return M().wrap(function(g){for(;;)switch(g.prev=g.next){case 0:return b=F.data,K(b.data.registrationToken),g.next=4,q.refetchQueries(m);case 4:return g.next=6,q.refetchQueries(["ee","license-limit-info"]);case 6:ce(),d(!1);case 8:case"end":return g.stop()}},Q)}))()},onError:function(F){throw d(!1),Me({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),F},onSettled:function(){te()}}),L=z({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"}),ve=function(){var v=(0,E.Z)(M().mark(function F(Q,b){var w,g,De;return M().wrap(function(T){for(;;)switch(T.prev=T.next){case 0:return w=b.setErrors,de(),d(!0),T.prev=3,T.next=6,ae.mutateAsync(Q);case 6:T.next=12;break;case 8:T.prev=8,T.t0=T.catch(3),te(),(T.t0===null||T.t0===void 0||(g=T.t0.response)===null||g===void 0||(De=g.data)===null||De===void 0?void 0:De.error.message)==="Email already taken"&&w({email:T.t0.response.data.error.message});case 12:case"end":return T.stop()}},F,null,[[3,8]])}));return function(Q,b){return v.apply(this,arguments)}}(),ce=function(){B?ne(B):p()},se=pe[x],oe=se.buttonSubmitLabel,D=se.isDisabled,B=se.next,Ce=x==="create"?t.createElement(a.Button,{type:"submit",loading:I},z(oe)):t.createElement(a.Button,{type:"button",loading:I,onClick:p},z(oe));return t.createElement(a.ModalLayout,{onClose:p,labelledBy:"title"},t.createElement(a.ModalHeader,null,t.createElement(a.Breadcrumbs,{label:L},t.createElement(a.Crumb,null,L))),t.createElement(X.Formik,{initialValues:ge,onSubmit:ve,validationSchema:Ee,validateOnChange:!1},function(v){var F=v.errors,Q=v.handleChange,b=v.values;return t.createElement(s.Form,null,t.createElement(a.ModalBody,null,t.createElement(a.Stack,{spacing:6},x!=="create"&&t.createElement(Z,{registrationToken:k}),t.createElement(a.Box,null,t.createElement(a.Typography,{variant:"beta",as:"h2"},z({id:"app.components.Users.ModalCreateBody.block-title.details",defaultMessage:"User details"})),t.createElement(a.Box,{paddingTop:4},t.createElement(a.Stack,{spacing:1},t.createElement(a.Grid,{gap:5},me.map(function(w){return w.map(function(g){return t.createElement(a.GridItem,(0,S.Z)({key:g.name},g.size),t.createElement(s.GenericInput,(0,S.Z)({},g,{disabled:D,error:F[g.name],onChange:Q,value:b[g.name]})))})}))))),t.createElement(a.Box,null,t.createElement(a.Typography,{variant:"beta",as:"h2"},z({id:"global.roles",defaultMessage:"User's role"})),t.createElement(a.Box,{paddingTop:4},t.createElement(a.Grid,{gap:5},t.createElement(a.GridItem,{col:6,xs:12},t.createElement(ue.Z,{disabled:D,error:F.roles,onChange:Q,value:b.roles})),_e.map(function(w){return w.map(function(g){return t.createElement(a.GridItem,(0,S.Z)({key:g.name},g.size),t.createElement(s.GenericInput,(0,S.Z)({},g,{disabled:D,onChange:Q,value:b[g.name]})))})})))))),t.createElement(a.ModalFooter,{startActions:t.createElement(a.Button,{variant:"tertiary",onClick:p,type:"button"},z({id:"app.components.Button.cancel",defaultMessage:"Cancel"})),endActions:Ce}))}))};Te.propTypes={onToggle:i().func.isRequired,queryName:i().array.isRequired};const Ae=Te,fe=({pagination:o})=>t.createElement(a.Box,{paddingTop:4},t.createElement(a.Flex,{alignItems:"flex-end",justifyContent:"space-between"},t.createElement(s.PageSizeURLQuery,null),t.createElement(s.PaginationURLQuery,{pagination:o})));fe.defaultProps={pagination:{pageCount:0,pageSize:10,total:0}},fe.propTypes={pagination:i().shape({page:i().number,pageCount:i().number,pageSize:i().number,total:i().number})};const Le=fe,Be=async(o,u)=>{const{get:m}=(0,s.getFetchClient)(),{data:{data:p}}=await m(`/admin/users${o}`);return u(),p},Re=async o=>{const{post:u}=(0,s.getFetchClient)();await u("/admin/users/batch-delete",{ids:o})},Ie=[{name:"firstname",metadatas:{label:"Firstname"},fieldSchema:{type:"string"}},{name:"lastname",metadatas:{label:"Lastname"},fieldSchema:{type:"string"}},{name:"email",metadatas:{label:"Email"},fieldSchema:{type:"email"}},{name:"username",metadatas:{label:"Username"},fieldSchema:{type:"string"}},{name:"isActive",metadatas:{label:"Active user"},fieldSchema:{type:"boolean"}}],Ue=[{name:"firstname",key:"firstname",metadatas:{label:{id:"Settings.permissions.users.firstname",defaultMessage:"Firstname"},sortable:!0}},{name:"lastname",key:"lastname",metadatas:{label:{id:"Settings.permissions.users.lastname",defaultMessage:"Lastname"},sortable:!0}},{key:"email",name:"email",metadatas:{label:{id:"Settings.permissions.users.email",defaultMessage:"Email"},sortable:!0}},{key:"roles",name:"roles",metadatas:{label:{id:"Settings.permissions.users.roles",defaultMessage:"Roles"},sortable:!1},cellFormatter({roles:o},{formatMessage:u}){return t.createElement(a.Typography,{textColor:"neutral800"},o.map(m=>u({id:`Settings.permissions.users.${m.code}`,defaultMessage:m.name})).join(`,
`))}},{key:"username",name:"username",metadatas:{label:{id:"Settings.permissions.users.username",defaultMessage:"Username"},sortable:!0}},{key:"isActive",name:"isActive",metadatas:{label:{id:"Settings.permissions.users.user-status",defaultMessage:"User status"},sortable:!1},cellFormatter({isActive:o},{formatMessage:u}){return t.createElement(a.Flex,null,t.createElement(s.Status,{isActive:o,variant:o?"success":"danger"}),t.createElement(a.Typography,{textColor:"neutral800"},u({id:o?"Settings.permissions.users.active":"Settings.permissions.users.inactive",defaultMessage:o?"Active":"Inactive"})))}}];function he(o,u){var m=Object.keys(o);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(o);u&&(p=p.filter(function($){return Object.getOwnPropertyDescriptor(o,$).enumerable})),m.push.apply(m,p)}return m}function le(o){for(var u=1;u<arguments.length;u++){var m=arguments[u]!=null?arguments[u]:{};u%2?he(Object(m),!0).forEach(function(p){(0,l.Z)(o,p,m[p])}):Object.getOwnPropertyDescriptors?Object.defineProperties(o,Object.getOwnPropertyDescriptors(m)):he(Object(m)).forEach(function(p){Object.defineProperty(o,p,Object.getOwnPropertyDescriptor(m,p))})}return o}var Se=function(){return window&&window.strapi&&window.strapi.isEE?e(49823).Z:e(4214).Z}(),We=function(){return window&&window.strapi&&window.strapi.isEE?e(94018).Z:e(67875).Z}(),Ke=function(){var u=(0,s.useAPIErrorHandler)(),m=u.formatAPIError,p=(0,t.useState)(!1),$=(0,f.Z)(p,2),Y=$[0],x=$[1],ne=(0,s.useRBAC)(n.Z.settings.users),N=ne.allowedActions,H=N.canCreate,I=N.canDelete,d=N.canRead,V=(0,P.useQueryClient)(),W=(0,s.useNotification)(),k=(0,O.useIntl)(),K=k.formatMessage,q=(0,_.useLocation)(),ie=q.search;(0,s.useFocusWhenNavigate)(),We();var z=(0,a.useNotifyAT)(),Me=z.notifyStatus,ee=["users",ie],de=Ue.map(function(D){return le(le({},D),{},{metadatas:le(le({},D.metadatas),{},{label:K(D.metadatas.label)})})}),te=K({id:"global.users",defaultMessage:"Users"}),Pe=function(){Me(K({id:"app.utils.notify.data-loaded",defaultMessage:"The {target} has loaded"},{target:te}))},re=(0,P.useQuery)(ee,function(){return Be(ie,Pe)},{enabled:d,retry:!1,onError:function(B){W({type:"warning",message:{id:"notification.error",message:m(B),defaultMessage:"An error occured"}})}}),ae=re.status,L=re.data,ve=re.isFetching,ce=function(){x(function(B){return!B})},se=(0,P.useMutation)(function(D){return Re(D)},{onSuccess:function(){return(0,E.Z)(M().mark(function B(){return M().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:return v.next=2,V.refetchQueries(ee);case 2:return v.next=4,V.refetchQueries(["ee","license-limit-info"]);case 4:case"end":return v.stop()}},B)}))()},onError:function(B){W({type:"warning",message:{id:"notification.error",message:m(B),defaultMessage:"An error occured"}})}}),oe=ae!=="success"&&ae!=="error"||ae==="success"&&ve;return t.createElement(a.Main,{"aria-busy":oe},t.createElement(s.SettingsPageTitle,{name:"Users"}),t.createElement(a.HeaderLayout,{primaryAction:H&&t.createElement(Se,{onClick:ce}),title:te,subtitle:K({id:"Settings.permissions.users.listview.header.subtitle",defaultMessage:"All the users who have access to the Strapi admin panel"})}),d&&t.createElement(a.ActionLayout,{startActions:t.createElement(t.Fragment,null,t.createElement(s.SearchURLQuery,{label:K({id:"app.component.search.label",defaultMessage:"Search for {target}"},{target:te})}),t.createElement(j.Z,{displayedFilters:Ie}))}),t.createElement(a.ContentLayout,{canRead:d},!d&&t.createElement(s.NoPermissions,null),ae==="error"&&t.createElement("div",null,"TODO: An error occurred"),d&&t.createElement(t.Fragment,null,t.createElement(s.DynamicTable,{contentType:"Users",isLoading:oe,onConfirmDeleteAll:se.mutateAsync,onConfirmDelete:function(B){return se.mutateAsync([B])},headers:de,rows:L?.results,withBulkActions:!0,withMainAction:I},t.createElement(y,{canDelete:I,headers:de,rows:L?.results||[],withBulkActions:!0,withMainAction:I})),t.createElement(Le,{pagination:L?.pagination}))),Y&&t.createElement(Ae,{onToggle:ce,queryName:ee}))};const Fe=Ke,be=()=>t.createElement(s.CheckPagePermissions,{permissions:n.Z.settings.users.main},t.createElement(Fe,null))},82464:(h,r,e)=>{e.d(r,{Z:()=>i});var t=e(67294),s=e(45697),n=e.n(s),E=e(28702),l=e.n(E),f=e(95489),c=e.n(f),M=e(41363),a=e.n(M),_=e(74855),O=e.n(_),P=e(97132);const U=({children:R,target:C})=>{const A=(0,f.useNotification)(),{formatMessage:y}=(0,P.useIntl)(),j=()=>{A({type:"info",message:{id:"notification.link-copied"}})},S=y({id:"app.component.CopyToClipboard.label",defaultMessage:"Copy to clipboard"});return t.createElement(f.ContentBox,{endAction:t.createElement(_.CopyToClipboard,{onCopy:j,text:C},t.createElement(E.IconButton,{label:S,noBorder:!0,icon:t.createElement(M.Duplicate,null)})),title:C,titleEllipsis:!0,subtitle:R,icon:t.createElement("span",{style:{fontSize:32}},"\u2709\uFE0F"),iconBackground:"neutral100"})};U.propTypes={children:n().oneOfType([n().element,n().string]).isRequired,target:n().string.isRequired};const i=U},31605:(h,r,e)=>{e.d(r,{Z:()=>M});var t=e(67294),s=e(97132),n=e(45697),E=e.n(n),l=e(63871),f=e(82464);const c=({registrationToken:a})=>{const{formatMessage:_}=(0,s.useIntl)(),O=`${window.location.origin}${l.Z}auth/register?registrationToken=${a}`;return t.createElement(f.Z,{target:O},_({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"}))};c.defaultProps={registrationToken:""},c.propTypes={registrationToken:E().string};const M=c},81288:(h,r,e)=>{e.d(r,{Z:()=>j});var t=e(67294),s=e(45697),n=e.n(s),E=e(97132),l=e(28702),f=e.n(l),c=e(23724),M=e.n(c),a=e(27821),_=e(41363),O=e.n(_),P=e(95489),U=e.n(P);const i=a.keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(359deg);
  }
`,R=a.default.div`
  animation: ${i} 2s infinite linear;
`,C=()=>t.createElement(R,null,t.createElement(_.Loader,null)),A=async()=>{const{get:S}=(0,P.getFetchClient)(),{data:X}=await S("/admin/roles");return X.data},y=({disabled:S,error:X,onChange:ue,value:Oe})=>{const{status:me,data:G}=(0,c.useQuery)(["roles"],A,{staleTime:5e4}),{formatMessage:J}=(0,E.useIntl)(),Ee=X?J({id:X,defaultMessage:X}):"",ye=J({id:"app.components.Users.ModalCreateBody.block-title.roles",defaultMessage:"User's roles"}),pe=J({id:"app.components.Users.ModalCreateBody.block-title.roles.description",defaultMessage:"A user can have one or several roles"}),ge=J({id:"app.components.Select.placeholder",defaultMessage:"Select"}),_e=me==="loading"?t.createElement(C,null):void 0;return t.createElement(l.Select,{id:"roles",disabled:S,error:Ee,hint:pe,label:ye,name:"roles",onChange:Z=>{ue({target:{name:"roles",value:Z}})},placeholder:ge,multi:!0,startIcon:_e,value:Oe,withTags:!0,required:!0},(G||[]).map(Z=>t.createElement(l.Option,{key:Z.id,value:Z.id},J({id:`global.${Z.code}`,defaultMessage:Z.name}))))};y.defaultProps={disabled:!1,error:void 0},y.propTypes={disabled:n().bool,error:n().string,onChange:n().func.isRequired,value:n().array.isRequired};const j=y},49823:(h,r,e)=>{e.d(r,{Z:()=>U});var t=e(67294),s=e(97132),n=e(45697),E=e.n(n),l=e(28702),f=e.n(l),c=e(41363),M=e.n(c),a=e(14293),_=e.n(a),O=e(90594);const P=({onClick:i})=>{const{formatMessage:R}=(0,s.useIntl)(),{license:C}=(0,O.q5)(),{permittedSeats:A,shouldStopCreate:y}=C?.data??{};return t.createElement(l.Stack,{spacing:2,horizontal:!0},!_()(A)&&y&&t.createElement(l.Tooltip,{description:R({id:"Settings.application.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"}),position:"left"},t.createElement(l.Icon,{width:`${14/16}rem`,height:`${14/16}rem`,color:"danger500",as:c.ExclamationMarkCircle})),t.createElement(l.Button,{"data-testid":"create-user-button",onClick:i,startIcon:t.createElement(c.Envelop,null),size:"S",disabled:y},R({id:"Settings.permissions.users.create",defaultMessage:"Invite new user"})))};P.propTypes={onClick:E().func.isRequired};const U=P},97083:(h,r,e)=>{e.d(r,{Z:()=>E});var t=e(57338);const s=strapi.features.isEnabled(strapi.features.SSO)?{useSSORegistration:!0}:{},E={...t.Z,...s}},810:(h,r,e)=>{e.d(r,{Z:()=>s});const s=strapi.features.isEnabled(strapi.features.SSO)?[[{intlLabel:{id:"Settings.permissions.users.form.sso",defaultMessage:"Connect with SSO"},hint:{id:"Settings.permissions.users.form.sso.description",defaultMessage:"When enabled (ON), users can login via SSO"},name:"useSSORegistration",type:"bool",size:{col:6,xs:12}}]]:[]},12201:(h,r,e)=>{e.d(r,{Z:()=>M});var t=e(67294),s=e(97132),n=e(45697),E=e.n(n),l=e(63871),f=e(82464);const c=({registrationToken:a})=>{const{formatMessage:_}=(0,s.useIntl)();return a?t.createElement(f.Z,{target:`${window.location.origin}${l.Z}auth/register?registrationToken=${a}`},_({id:"app.components.Users.MagicLink.connect",defaultMessage:"Copy and share this link to give access to this user"})):t.createElement(f.Z,{target:`${window.location.origin}${l.Z}auth/login`},_({id:"app.components.Users.MagicLink.connect.sso",defaultMessage:"Send this link to the user, the first login can be made via a SSO provider."}))};c.defaultProps={registrationToken:""},c.propTypes={registrationToken:E().string};const M=c}}]);
