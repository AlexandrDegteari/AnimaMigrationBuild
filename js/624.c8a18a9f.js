(globalThis["webpackChunkanimalmigration"]=globalThis["webpackChunkanimalmigration"]||[]).push([[624],{7093:(e,t,a)=>{"use strict";a.r(t),a.d(t,{default:()=>le});var i=a(9835),n=a(6970);const o=e=>((0,i.dD)("data-v-6bcda677"),e=e(),(0,i.Cn)(),e),l={class:"flex items-center justify-between"},s={class:"flex items-center"},r={class:"q-pa-md text-h6"},d={key:0},u=["src"],m={class:"bg-white"},c=o((()=>(0,i._)("h2",{class:"text-h6 text-center"},"Migrations List",-1))),g={class:"bg-white"},p=o((()=>(0,i._)("h2",{class:"text-h6 text-center"},"Migrations List",-1))),h=o((()=>(0,i._)("div",{class:"bg-white q-pa-md"},[(0,i._)("h2",{class:"text-h5"}," Info "),(0,i._)("p",null," For using addMode just click on the map to add new migration, or drag marker to move group of animal to new place, dont forget to change date of migration! ")],-1)));function j(e,t,a,o,j,f){const M=(0,i.up)("q-date"),k=(0,i.up)("q-popup-proxy"),w=(0,i.up)("q-btn"),b=(0,i.up)("q-toggle"),y=(0,i.up)("GMapMarker"),D=(0,i.up)("q-dialog"),v=(0,i.up)("MigrationTable"),_=(0,i.up)("MigrationDialog"),C=(0,i.up)("GMapInfoWindow"),q=(0,i.up)("GMapMap");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("div",null,[(0,i._)("div",l,[(0,i._)("div",s,[(0,i._)("span",r,(0,n.zw)(j.date),1),(0,i.Wm)(w,{icon:"event",round:"",color:"primary"},{default:(0,i.w5)((()=>[(0,i.Wm)(k,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(M,{options:f.getDates(),modelValue:j.date,"onUpdate:modelValue":t[0]||(t[0]=e=>j.date=e)},null,8,["options","modelValue"])])),_:1})])),_:1})]),(0,i._)("div",null,[(0,i.Wm)(b,{onClick:f.addModeActive,class:"q-pr-md",modelValue:j.addMode,"onUpdate:modelValue":t[1]||(t[1]=e=>j.addMode=e)},{default:(0,i.w5)((()=>[(0,i.Uk)("Add Mode")])),_:1},8,["onClick","modelValue"]),(0,i.Wm)(b,{onClick:f.editModeActive,class:"q-pr-md",modelValue:j.editMode,"onUpdate:modelValue":t[2]||(t[2]=e=>j.editMode=e)},{default:(0,i.w5)((()=>[(0,i.Uk)("Edit Mode")])),_:1},8,["onClick","modelValue"]),(0,i.Wm)(w,{class:"q-mr-md",onClick:t[3]||(t[3]=e=>j.list=!0),color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Migrations List ")])),_:1}),(0,i.Wm)(w,{class:"q-mr-md",onClick:f.showMigrations,color:"primary"},{default:(0,i.w5)((()=>[(0,i.Uk)(" Show migrations ")])),_:1},8,["onClick"])])])]),(0,i.Wm)(q,{onClick:f.newMigration,center:j.center,zoom:8,class:"map"},{default:(0,i.w5)((()=>[f.migrations?((0,i.wg)(),(0,i.iD)("div",d,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(f.filterDate(f.migrations),((e,t)=>((0,i.wg)(),(0,i.j4)(y,{key:t,draggable:j.addMode||j.editMode,onDrag:f.dragMarker,onDragend:t=>f.setM(e),icon:{url:e.Animal.icon,scaledSize:{height:40,width:40}},position:{lat:e.positionLat,lng:e.positionLng},title:e.animal_id.toString(),clickable:!0,onClick:a=>f.toggleInfo(e,t)},null,8,["draggable","onDrag","onDragend","icon","position","title","onClick"])))),128))])):(0,i.kq)("",!0),(0,i.Uk)(" > "),(0,i.Wm)(C,{options:j.infoOptions,position:j.infoPosition,opened:j.infoOpened,onCloseclick:t[7]||(t[7]=e=>j.infoOpened=!1)},{default:(0,i.w5)((()=>[(0,i._)("img",{width:"150",src:j.infoContent?.Animal?.image,alt:""},null,8,u),(0,i._)("p",null,"Animal: "+(0,n.zw)(j.infoContent?.Animal?.name),1),(0,i._)("p",null,"Quantity: "+(0,n.zw)(j.infoContent?.quantity),1),(0,i.Wm)(D,{"full-height":"","full-width":"",modelValue:j.list,"onUpdate:modelValue":t[4]||(t[4]=e=>j.list=e)},{default:(0,i.w5)((()=>[(0,i._)("div",m,[c,(0,i._)("p",null,"Are you sure you want to delete migration "+(0,n.zw)(j.currentMarker?.id),1)])])),_:1},8,["modelValue"]),(0,i.Wm)(D,{"full-height":"","full-width":"",modelValue:j.list,"onUpdate:modelValue":t[5]||(t[5]=e=>j.list=e)},{default:(0,i.w5)((()=>[(0,i._)("div",g,[p,(0,i.Wm)(v,{migrations:f.migrations},null,8,["migrations"])])])),_:1},8,["modelValue"]),(0,i.Wm)(D,{modelValue:j.migrationDialog,"onUpdate:modelValue":t[6]||(t[6]=e=>j.migrationDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(_,{edit:j.editMode,migration:j.currentMarker},null,8,["edit","migration"])])),_:1},8,["modelValue"])])),_:1},8,["options","position","opened"])])),_:1},8,["onClick","center"]),(0,i.Wm)(D,{modelValue:j.addModeDialog,"onUpdate:modelValue":t[8]||(t[8]=e=>j.addModeDialog=e)},{default:(0,i.w5)((()=>[h])),_:1},8,["modelValue"])])}a(9665);var f=a(3878),M=a.n(f),k=a(499),w=a(7524);const b="http://localhost:3020";w.Z.defaults.headers.common.Authorization=localStorage.getItem("access_token");const y=(0,k.qj)({animals:null,migrations:null,navItems:[{root:"/",to:"/",icon:"ui/sound.svg",label:"Sounds",all:!0},{root:"/profile",to:"/profile",icon:"ui/profile.svg",label:"Profile",auth:!0}],access_token:localStorage.getItem("access_token"),user:JSON.parse(localStorage.getItem("user")),usePageTransition:!1,iosBrowserSwipingBack:!1}),D={GetAnimals:()=>w.Z.get(`${b}/animals`).then((e=>!!e.data&&(y.animals=e.data,e.data))).catch((e=>({error:e}))),GetMigrations:()=>w.Z.get(`${b}/migrations`).then((e=>!!e.data&&(y.migrations=e.data,e.data))).catch((e=>({error:e}))),CreateMigration(e){return w.Z.post(`${b}/migrations/add`,e).then((e=>!!e.data&&(D.GetMigrations(),e.data))).catch((e=>({error:e})))},UpdateMigration(e){return w.Z.put(`${b}/migrations/put/`+e.id,e).then((e=>!!e.data&&(D.GetMigrations(),e.data))).catch((e=>({error:e})))},DeleteMigration(e){return w.Z["delete"](`${b}/migrations/`+e).then((e=>!!e.data&&(D.GetMigrations(),e.data))).catch((e=>({error:e})))}},v={isAuthenticated:()=>y.access_token,getUser:()=>y.user},_={state:y,getters:v,actions:D},C=_,q={class:"bg-white q-pa-md flex column"},V={class:"text-bold"},L={class:"flex justify-between q-pt-md"};function x(e,t,a,o,l,s){const r=(0,i.up)("q-icon"),d=(0,i.up)("q-input"),u=(0,i.up)("q-btn"),m=(0,i.up)("MigrationDialog"),c=(0,i.up)("q-dialog"),g=(0,i.up)("q-td"),p=(0,i.up)("q-table"),h=(0,i.Q2)("close-popup");return(0,i.wg)(),(0,i.iD)("div",null,[(0,i.Wm)(p,{rows:a.migrations,columns:l.columns,"rows-per-page-options":[0]},{"top-right":(0,i.w5)((()=>[(0,i.Wm)(d,{borderless:"",dense:"",debounce:"300",modelValue:l.filter,"onUpdate:modelValue":t[0]||(t[0]=e=>l.filter=e),placeholder:"Search"},{append:(0,i.w5)((()=>[(0,i.Wm)(r,{name:"search"})])),_:1},8,["modelValue"])])),"body-cell-actions":(0,i.w5)((e=>[(0,i.Wm)(g,{class:"flex no-wrap justify-around",props:e},{default:(0,i.w5)((()=>[(0,i.Wm)(u,{"no-caps":"",dense:"",round:"",flat:"",color:"grey",onClick:t=>s.openEditDialog(e.row),icon:"edit"},null,8,["onClick"]),l.currentMigration?.id===e.row.id?((0,i.wg)(),(0,i.j4)(c,{key:0,modelValue:l.editDialog,"onUpdate:modelValue":t[1]||(t[1]=e=>l.editDialog=e)},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{migration:l.currentMigration,edit:!0},null,8,["migration"])])),_:1},8,["modelValue"])):(0,i.kq)("",!0),(0,i.Wm)(u,{"no-caps":"",dense:"",round:"",flat:"",color:"grey",onClick:t=>s.openDeleteDialog(e.row.id),icon:"delete"},null,8,["onClick"]),l.currentId===e.row.id?((0,i.wg)(),(0,i.j4)(c,{key:1,modelValue:l.deleteDialog,"onUpdate:modelValue":t[2]||(t[2]=e=>l.deleteDialog=e)},{default:(0,i.w5)((()=>[(0,i._)("div",q,[(0,i.Uk)(" Are you sure you want to delete migration "),(0,i._)("span",V,(0,n.zw)(e.row?.id+" ?"),1),(0,i._)("div",L,[(0,i.wy)(((0,i.wg)(),(0,i.j4)(u,{color:"grey"},{default:(0,i.w5)((()=>[(0,i.Uk)("Cancel")])),_:1})),[[h]]),(0,i.Wm)(u,{color:"red",onClick:s.deleteMigration},{default:(0,i.w5)((()=>[(0,i.Uk)("Delete Migration")])),_:1},8,["onClick"])])])])),_:2},1032,["modelValue"])):(0,i.kq)("",!0)])),_:2},1032,["props"])])),_:1},8,["rows","columns"])])}const W={key:0,style:{width:"320px"},class:"bg-white q-pa-sm"},z={class:"text-h6 text-center"},U={class:"text-black"},Y={class:"row items-center justify-end"},Z={class:"text-red"},I={class:"flex justify-between"};function Q(e,t,a,o,l,s){const r=(0,i.up)("q-select"),d=(0,i.up)("q-input"),u=(0,i.up)("q-btn"),m=(0,i.up)("q-date"),c=(0,i.up)("q-popup-proxy"),g=(0,i.up)("q-icon"),p=(0,i.Q2)("close-popup");return l.currentMarker?((0,i.wg)(),(0,i.iD)("div",W,[(0,i._)("h2",z,(0,n.zw)(a.edit?"Edit":"New")+" Migration",1),(0,i._)("div",U,[(0,i.Wm)(r,{modelValue:l.currentMarker.animal_id,"onUpdate:modelValue":t[0]||(t[0]=e=>l.currentMarker.animal_id=e),options:s.animals,"map-options":"","emit-value":"","option-value":"id","option-label":"name",label:"Animal Id:"},null,8,["modelValue","options"]),(0,i.Wm)(d,{modelValue:l.currentMarker.quantity,"onUpdate:modelValue":t[1]||(t[1]=e=>l.currentMarker.quantity=e),type:"number",label:"Quantity:"},null,8,["modelValue"]),(0,i.Wm)(d,{modelValue:l.currentMarker.positionLat,"onUpdate:modelValue":t[2]||(t[2]=e=>l.currentMarker.positionLat=e),type:"number",label:"Position Lat:"},null,8,["modelValue"]),(0,i.Wm)(d,{modelValue:l.currentMarker.positionLng,"onUpdate:modelValue":t[3]||(t[3]=e=>l.currentMarker.positionLng=e),type:"number",label:"Position Lng:"},null,8,["modelValue"]),(0,i.Wm)(d,{filled:"",modelValue:l.currentMarker.date,"onUpdate:modelValue":t[5]||(t[5]=e=>l.currentMarker.date=e),mask:"date",rules:["date"]},{append:(0,i.w5)((()=>[(0,i.Wm)(g,{name:"event",class:"cursor-pointer"},{default:(0,i.w5)((()=>[(0,i.Wm)(c,{cover:"","transition-show":"scale","transition-hide":"scale"},{default:(0,i.w5)((()=>[(0,i.Wm)(m,{modelValue:l.currentMarker.date,"onUpdate:modelValue":t[4]||(t[4]=e=>l.currentMarker.date=e)},{default:(0,i.w5)((()=>[(0,i._)("div",Y,[(0,i.wy)((0,i.Wm)(u,{label:"Close",color:"primary",flat:""},null,512),[[p]])])])),_:1},8,["modelValue"])])),_:1})])),_:1})])),_:1},8,["modelValue"]),(0,i._)("p",Z,(0,n.zw)(l.error),1),(0,i._)("div",I,[(0,i.Wm)(u,{onClick:t[6]||(t[6]=e=>s.createMigration(l.currentMarker)),color:"blue",label:a.edit?"Edit Migration":"Create Migration"},null,8,["label"]),(0,i.wy)((0,i.Wm)(u,{color:"grey",label:"Cancel"},null,512),[[p]])])])])):(0,i.kq)("",!0)}const A={name:"MigrationDialog",props:["migration","edit"],data(){return{error:null,currentMarker:null,options:null}},computed:{animals(){return C.state.animals}},methods:{validateCoordinates(e,t){const a=/^-?([1-8]?\d(\.\d+)?|90(\.0+)?)$/,i=/^-?((1[0-7]|[1-9])?\d(\.\d+)?|180(\.0+)?)$/;return!!a.test(e)&&i.test(t)},createMigration(e){let t={id:this.edit?e.id:null,animal_id:e.animal_id,quantity:e.quantity,date:e.date,positionLat:e.positionLat,positionLng:e.positionLng};this.edit?this.validateCoordinates(t.positionLat,t.positionLng)?C.actions.UpdateMigration(t):this.error="Check coordinates!":this.validateCoordinates(t.positionLat,t.positionLng)?C.actions.CreateMigration(t):this.error="Check coordinates!"}},mounted(){C.actions.GetAnimals(),this.currentMarker={...this.migration}}};var P=a(1639),O=a(9812),$=a(1852),G=a(2857),S=a(2765),T=a(2535),E=a(9379),B=a(2146),N=a(9984),K=a.n(N);const F=(0,P.Z)(A,[["render",Q]]),H=F;K()(A,"components",{QSelect:O.Z,QInput:$.Z,QIcon:G.Z,QPopupProxy:S.Z,QDate:T.Z,QBtn:E.Z}),K()(A,"directives",{ClosePopup:B.Z});const J={name:"MigrationTable",components:{MigrationDialog:H},props:["migrations"],data(){return{filter:null,columns:[{name:"id",required:!0,label:"Migration Id",align:"left",field:e=>e.id,format:e=>`${e}`,sortable:!0,classes:"bg-grey-2 ellipsis",headerClasses:"bg-primary text-white"},{name:"date",required:!0,label:"Date",align:"left",field:e=>M()(e?.date).format("DD/MM/yyyy"),format:e=>`${e}`,sortable:!0,classes:"bg-grey-2 ellipsis",headerClasses:"bg-primary text-white"},{name:"animal",required:!0,label:"Animal Name",align:"left",field:e=>e?.Animal?.name,format:e=>`${e}`,sortable:!0,classes:"bg-grey-2 ellipsis",headerClasses:"bg-primary text-white"},{name:"quantity",required:!0,label:"Quantity",align:"left",field:e=>e?.quantity,format:e=>`${e}`,sortable:!0,classes:"bg-grey-2 ellipsis",headerClasses:"bg-primary text-white"},{name:"lat",required:!0,label:"Position Lat",align:"left",field:e=>e?.positionLat,format:e=>`${e}`,sortable:!0,classes:"bg-grey-2 ellipsis",headerClasses:"bg-primary text-white"},{name:"lng",required:!0,label:"Position Lng",align:"left",field:e=>e?.positionLng,format:e=>`${e}`,sortable:!0,classes:"bg-grey-2 ellipsis",headerClasses:"bg-primary text-white"},{name:"actions",label:"Actions",field:"",align:"center",classes:"bg-grey-2 ellipsis",headerClasses:"bg-primary text-white"}],editDialog:null,deleteDialog:null,currentMigration:null,currentId:null}},methods:{updateMigration(){C.actions.UpdateMigration(this.currentMigration)},deleteMigration(){C.actions.DeleteMigration(this.currentId)},openEditDialog(e){this.currentMigration=e,this.editDialog=!0},openDeleteDialog(e){this.currentId=e,this.deleteDialog=!0}}};var R=a(5235),X=a(7220),ee=a(7743);const te=(0,P.Z)(J,[["render",x]]),ae=te;K()(J,"components",{QTable:R.Z,QInput:$.Z,QIcon:G.Z,QTd:X.Z,QBtn:E.Z,QDialog:ee.Z}),K()(J,"directives",{ClosePopup:B.Z});const ie={name:"GoogleMap",components:{MigrationDialog:H,MigrationTable:ae},data(){return{editMode:!1,addMode:!1,addModeDialog:null,editModeDialog:null,list:!1,date:M()().format("YYYY/MM/DD"),newLocation:null,currentMarker:{animal_id:3,quantity:15,positionLat:59.73979093723632,positionLng:16.110176035156236,date:M()().format("YYYY/MM/DD"),Animal:{id:3,name:"bear",icon:"icon/bear.png",image:"img/bear.jpeg"}},center:{lat:59.334591,lng:17.06324},migrationDialog:null,position:null,infoPosition:null,infoContent:null,infoID:null,infoRating:null,infoImage:null,infoOpened:!1,infoCurrentKey:null,infoOptions:{pixelOffset:{width:0,height:-35}}}},computed:{migrations(){return C.state.migrations}},mounted(){C.actions.GetMigrations().then((()=>{this.migrations&&(this.date=M()(this.migrations[this.migrations.length-1].date).format("YYYY/MM/DD"))}))},methods:{addModeActive(){this.addModeDialog=!0,this.editMode=!1},editModeActive(){this.editModeDialog=!0,this.addMode=!1},notify(e){this.$q.notify({message:e,color:"red",multiLine:!0})},newMigration(e){this.addMode?(this.newLocation={lat:e.latLng.lat(),lng:e.latLng.lng()},this.setM(this.currentMarker)):this.notify("Please activate add mode for creating new migrations")},dragMarker(e){this.newLocation={lat:e.latLng.lat(),lng:e.latLng.lng()}},setM(e){this.currentMarker=e,this.createMigration(e)},async createMigration(e){e&&(this.currentMarker={...this.currentMarker,positionLat:this.newLocation.lat,positionLng:this.newLocation.lng}),this.migrationDialog=!0},async showMigrations(){let e=this;function t(t,a){let i=0;return function n(){i<t.length&&(e.date=t[i],i++,setTimeout(n,a))}}let a=t(this.getDates(),3e3);a()},getDates(){let e=[];return this.migrations?.map((t=>e.includes(M()(t.date).format("YYYY/MM/DD"))?null:e.push(M()(t.date).format("YYYY/MM/DD")))),e},filterDate(e){return e.filter((e=>M()(e.date).format("YYYY/MM/DD")===M()(this.date).format("YYYY/MM/DD")))},toggleInfo(e,t){this.infoID=e.id,this.infoPosition={lat:e.positionLat,lng:e.positionLng},this.infoContent=e,this.infoCurrentKey==t?this.infoOpened=!this.infoOpened:(this.infoOpened=!0,this.infoCurrentKey=t)}}};var ne=a(3175);const oe=(0,P.Z)(ie,[["render",j],["__scopeId","data-v-6bcda677"]]),le=oe;K()(ie,"components",{QBtn:E.Z,QPopupProxy:S.Z,QDate:T.Z,QToggle:ne.Z,QDialog:ee.Z})},6700:(e,t,a)=>{var i={"./af":3902,"./af.js":3902,"./ar":6314,"./ar-dz":5666,"./ar-dz.js":5666,"./ar-kw":6591,"./ar-kw.js":6591,"./ar-ly":7900,"./ar-ly.js":7900,"./ar-ma":5667,"./ar-ma.js":5667,"./ar-sa":4092,"./ar-sa.js":4092,"./ar-tn":6916,"./ar-tn.js":6916,"./ar.js":6314,"./az":1699,"./az.js":1699,"./be":8988,"./be.js":8988,"./bg":7437,"./bg.js":7437,"./bm":7947,"./bm.js":7947,"./bn":2851,"./bn-bd":4905,"./bn-bd.js":4905,"./bn.js":2851,"./bo":7346,"./bo.js":7346,"./br":1711,"./br.js":1711,"./bs":3706,"./bs.js":3706,"./ca":112,"./ca.js":112,"./cs":6406,"./cs.js":6406,"./cv":1853,"./cv.js":1853,"./cy":9766,"./cy.js":9766,"./da":6836,"./da.js":6836,"./de":9320,"./de-at":4904,"./de-at.js":4904,"./de-ch":6710,"./de-ch.js":6710,"./de.js":9320,"./dv":3274,"./dv.js":3274,"./el":286,"./el.js":286,"./en-au":143,"./en-au.js":143,"./en-ca":237,"./en-ca.js":237,"./en-gb":2428,"./en-gb.js":2428,"./en-ie":3349,"./en-ie.js":3349,"./en-il":3764,"./en-il.js":3764,"./en-in":7809,"./en-in.js":7809,"./en-nz":9851,"./en-nz.js":9851,"./en-sg":5594,"./en-sg.js":5594,"./eo":4483,"./eo.js":4483,"./es":2184,"./es-do":5777,"./es-do.js":5777,"./es-mx":9356,"./es-mx.js":9356,"./es-us":8496,"./es-us.js":8496,"./es.js":2184,"./et":7578,"./et.js":7578,"./eu":2092,"./eu.js":2092,"./fa":5927,"./fa.js":5927,"./fi":171,"./fi.js":171,"./fil":2416,"./fil.js":2416,"./fo":9937,"./fo.js":9937,"./fr":5172,"./fr-ca":8249,"./fr-ca.js":8249,"./fr-ch":7541,"./fr-ch.js":7541,"./fr.js":5172,"./fy":7907,"./fy.js":7907,"./ga":6361,"./ga.js":6361,"./gd":2282,"./gd.js":2282,"./gl":2630,"./gl.js":2630,"./gom-deva":680,"./gom-deva.js":680,"./gom-latn":6220,"./gom-latn.js":6220,"./gu":6272,"./gu.js":6272,"./he":5540,"./he.js":5540,"./hi":6067,"./hi.js":6067,"./hr":9669,"./hr.js":9669,"./hu":3396,"./hu.js":3396,"./hy-am":6678,"./hy-am.js":6678,"./id":4812,"./id.js":4812,"./is":4193,"./is.js":4193,"./it":7863,"./it-ch":959,"./it-ch.js":959,"./it.js":7863,"./ja":1809,"./ja.js":1809,"./jv":8657,"./jv.js":8657,"./ka":3290,"./ka.js":3290,"./kk":8418,"./kk.js":8418,"./km":7687,"./km.js":7687,"./kn":1375,"./kn.js":1375,"./ko":2641,"./ko.js":2641,"./ku":3518,"./ku.js":3518,"./ky":5459,"./ky.js":5459,"./lb":1978,"./lb.js":1978,"./lo":6915,"./lo.js":6915,"./lt":8948,"./lt.js":8948,"./lv":2548,"./lv.js":2548,"./me":8608,"./me.js":8608,"./mi":333,"./mi.js":333,"./mk":6611,"./mk.js":6611,"./ml":999,"./ml.js":999,"./mn":4098,"./mn.js":4098,"./mr":6111,"./mr.js":6111,"./ms":3717,"./ms-my":265,"./ms-my.js":265,"./ms.js":3717,"./mt":8980,"./mt.js":8980,"./my":6895,"./my.js":6895,"./nb":5348,"./nb.js":5348,"./ne":1493,"./ne.js":1493,"./nl":4419,"./nl-be":5576,"./nl-be.js":5576,"./nl.js":4419,"./nn":6907,"./nn.js":6907,"./oc-lnc":2321,"./oc-lnc.js":2321,"./pa-in":9239,"./pa-in.js":9239,"./pl":7627,"./pl.js":7627,"./pt":5703,"./pt-br":1623,"./pt-br.js":1623,"./pt.js":5703,"./ro":2747,"./ro.js":2747,"./ru":4420,"./ru.js":4420,"./sd":2148,"./sd.js":2148,"./se":2461,"./se.js":2461,"./si":2783,"./si.js":2783,"./sk":3306,"./sk.js":3306,"./sl":341,"./sl.js":341,"./sq":2768,"./sq.js":2768,"./sr":2451,"./sr-cyrl":3371,"./sr-cyrl.js":3371,"./sr.js":2451,"./ss":8812,"./ss.js":8812,"./sv":3820,"./sv.js":3820,"./sw":3615,"./sw.js":3615,"./ta":2869,"./ta.js":2869,"./te":2044,"./te.js":2044,"./tet":5861,"./tet.js":5861,"./tg":6999,"./tg.js":6999,"./th":926,"./th.js":926,"./tk":7443,"./tk.js":7443,"./tl-ph":9786,"./tl-ph.js":9786,"./tlh":2812,"./tlh.js":2812,"./tr":6952,"./tr.js":6952,"./tzl":9573,"./tzl.js":9573,"./tzm":5990,"./tzm-latn":6961,"./tzm-latn.js":6961,"./tzm.js":5990,"./ug-cn":2610,"./ug-cn.js":2610,"./uk":9498,"./uk.js":9498,"./ur":3970,"./ur.js":3970,"./uz":9006,"./uz-latn":26,"./uz-latn.js":26,"./uz.js":9006,"./vi":9962,"./vi.js":9962,"./x-pseudo":8407,"./x-pseudo.js":8407,"./yo":1962,"./yo.js":1962,"./zh-cn":8909,"./zh-cn.js":8909,"./zh-hk":4014,"./zh-hk.js":4014,"./zh-mo":996,"./zh-mo.js":996,"./zh-tw":6327,"./zh-tw.js":6327};function n(e){var t=o(e);return a(t)}function o(e){if(!a.o(i,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return i[e]}n.keys=function(){return Object.keys(i)},n.resolve=o,e.exports=n,n.id=6700}}]);