(this["webpackJsonpcowin-vaccine"]=this["webpackJsonpcowin-vaccine"]||[]).push([[0],{118:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var i=n(1),a=n(0),s=n.n(a),o=n(13),c=n.n(o),r=n(11),l=n(12),d=n(6),u=n(16),h=n(15),p=n(53),b=n(9),j=(n(89),n(132)),m=n(128),O=n(125),v=n(131),g=n(129),_=n(36),f=n(17),k=n.n(f),C=n(8),S=n(46),x=n(24),y=n.n(x),T=n(18),N="SET_USER_TOKEN",w="SET_SERVER_STAT",I="SET_USER_SUBSCRIPTION",E=function(e){return{type:N,payload:e}},A=function(e){return{type:I,payload:e}},D=n(123),R=n(124),B=n(25),M=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(r.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(e=t.call.apply(t,[this].concat(a))).state={week:[0,1,2,3,4,5,6].map((function(e){return y()().add(e,"day").format("DD-MM-YY")}))},e}return Object(l.a)(n,[{key:"OnChangeDate",value:function(e){this.setState({week:[0,1,2,3,4,5,6].map((function(t){return y()(e,"YYYY-MM-DD").add(t,"day").format("DD-MM-YY")}))})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"bg-white shadow rounded-lg mt-2 overflow-hidden p-0",children:[this.props.vaccine.centers.length>0&&Object(i.jsxs)(D.a,{striped:!0,bordered:!0,hover:!0,children:[Object(i.jsx)("thead",{children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{children:"Name"}),this.state.week.map((function(e){return Object(i.jsx)("th",{children:e},"th-"+e)}))]})}),Object(i.jsx)("tbody",{children:this.props.vaccine.centers.map((function(t){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsxs)("div",{children:[Object(i.jsxs)("div",{className:"font-weight-bolder",children:[t.name,Object(i.jsxs)("sup",{className:"small",children:[" ",Object(i.jsx)(R.a,{variant:"secondary",children:t.fee_type})]})]}),Object(i.jsxs)("p",{className:"text-secondary small m-0",children:[t.address,", ",t.block_name]}),Object(i.jsxs)("p",{className:"text-secondary small m-0",children:[t.district_name,", ",t.state_name,", ",t.pincode]})]})}),e.state.week.map((function(e){var n=t.sessions.findIndex((function(t){return t.date===y()(e,"DD-MM-YY").format("DD-MM-YYYY")}));return n>=0?Object(i.jsx)("td",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"",children:t.sessions[n].vaccine}),Object(i.jsxs)("p",{className:"small m-0 text-danger",children:["For ",t.sessions[n].min_age_limit,"+"]}),t.sessions[n].available_capacity?Object(i.jsx)("a",{href:B.COWIN_REGISTRATION,target:"_blank",rel:"noreferrer",children:Object(i.jsxs)(O.a,{variant:"success p-1","data-toggle":"tooltip","data-placement":"top",title:"Tooltip on top",children:["Book ",Object(i.jsx)("sup",{children:Object(i.jsx)(R.a,{variant:"primary",children:t.sessions[n].available_capacity})})]})}):Object(i.jsx)(O.a,{variant:"danger p-0",children:"Booked"})]})},t.sessions[n].session_id):Object(i.jsx)("td",{},Math.random())}))]},t.center_id)}))})]}),this.props.vaccine.centers.length<=0&&Object(i.jsx)("div",{className:"text-center font-weight-bold p-4",children:"No centers are available for now, try to search for another pin code."})]})}}]),n}(a.Component),U=Object(T.b)((function(e){return{user:e.user,vaccine:e.vaccine}}),(function(e){return{setToken:function(t){return e(E(t))}}}))(M),L=n(83),P=n(126),G=n(127),F=n(60),W=n.n(F),Y=n(44),V=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Event Category";return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"action",n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"label";Y.a.event({category:e,action:t,label:n})}},H=n(78),K=n.n(H),z=n(19),q=n(79),J=function(e){return Object(i.jsxs)(O.a,{onClick:e.onClick,disabled:e.disabled,variant:"primary",className:"shadow my-1",children:[Object(i.jsx)(q.a,{icon:"comment-dots",size:"3x"}),Object(i.jsx)("div",{children:e.text||"Login and subscribe SMS notification"})]})},X=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(r.a)(this,n),(a=t.call(this,e)).state={mobile_number:"",is_valid_mobile:!1,show_mobile_input:!1,submitting_mobile:!1},a.options={headers:{"Content-Type":"application/json",Authorization:"Token "+a.props.user.token}},a.GetButton=function(){return a.props.user.subscriptions&&a.props.user.subscriptions.includes(B.SUBSCRIPTION_WA)?Object(i.jsx)(J,{text:"Unsubscribe text SMS notification",onClick:a.OnWaSubscriptionBtnToggle}):Object(i.jsx)(J,{text:"Subscribe text SMS notification",onClick:a.OnWaSubscriptionBtnToggle})},a.OnWaSubscriptionBtnToggle=a.OnWaSubscriptionBtnToggle.bind(Object(d.a)(a)),a.OnMobileChange=a.OnMobileChange.bind(Object(d.a)(a)),a.OnSubmitMobile=a.OnSubmitMobile.bind(Object(d.a)(a)),a}return Object(l.a)(n,[{key:"IsSubscriptionContainsWa",value:function(){return this.props.user.subscriptions&&this.props.user.subscriptions.includes(B.SUBSCRIPTION_WA)}},{key:"OnSubmitMobile",value:function(){var e=this;if(!this.IsSubscriptionContainsWa()){this.setState({submitting_mobile:!0});var t={subscription:B.SUBSCRIPTION_WA,mobile:this.state.mobile_number};k.a.post(C.BACKEND_BASE_URL+z.NOTIFICATION_SUBSCRIBED_URL,t,this.options).then((function(t){if("success"===t.data.status||"you already subscribed"===t.data.message){var n=e.props.user.subscriptions;e.props.callback&&e.props.callback(t.data.message),n&&(n.push(B.SUBSCRIPTION_WA),e.props.setSubscriptions(n))}else e.setState({submitting_mobile:!1,show_mobile_input:!1})})).catch((function(t){console.log(t),e.setState({submitting_mobile:!1})}))}}},{key:"OnWaSubscriptionBtnToggle",value:function(){var e=this;if(this.IsSubscriptionContainsWa()){var t={subscription:B.SUBSCRIPTION_WA};k.a.post(C.BACKEND_BASE_URL+z.NOTIFICATION_UNSUBSCRIBED_URL,t,this.options).then((function(t){if("success"===t.data.status){var n=e.props.user.subscriptions;n&&(n[n.indexOf(B.SUBSCRIPTION_WA)]=n[n.length-1],n.pop(),e.props.setSubscriptions(n))}})).catch((function(e){console.log(e)}))}else this.setState({show_mobile_input:!0})}},{key:"OnMobileChange",value:function(e){var t=e.target.value.replace(/^0+/,"");this.setState({mobile_number:t,is_valid_mobile:10===e.target.value.length})}},{key:"render",value:function(){return Object(i.jsx)("div",{children:this.state.show_mobile_input?Object(i.jsxs)("div",{className:"shadow rounded-lg p-1 border-primary border",children:[Object(i.jsx)(j.a,{className:"no-input-shadow",placeholder:"Enter mobile number",type:"number",value:this.state.mobile_number,onChange:this.OnMobileChange,disabled:this.state.submitting_mobile}),Object(i.jsx)(O.a,{varient:"primary",style:{width:"100%"},className:"mt-2",disabled:!this.state.is_valid_mobile||this.state.submitting_mobile,onClick:this.OnSubmitMobile,children:" Subscribe SMS "})]}):Object(i.jsx)(this.GetButton,{})})}}]),n}(a.Component),Q=Object(T.b)((function(e){return{user:e.user}}),(function(e){return{setSubscriptions:function(t){return e(A(t))}}}))(X),Z="SET_CENTERS",$="SET_TRACKING_CENTER",ee="CENTER_UPDATE_DONE",te=function(e){return{type:$,payload:e}},ne=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={is_google_login_supported:!0},i.GaEventTracker=V(),i.responseGoogle=function(e){i.GaEventTracker("AUTH 2.0 success"),"idpiframe_initialization_failed"===e.error&&i.setState({is_google_login_supported:!1}),e.accessToken&&i.exchangeToken(e.accessToken)},i.responseGoogle=i.responseGoogle.bind(Object(d.a)(i)),i.exchangeToken=i.exchangeToken.bind(Object(d.a)(i)),i}return Object(l.a)(n,[{key:"exchangeToken",value:function(e){var t=this;k.a.post(C.BACKEND_BASE_URL+z.GET_TOKEN_URL,{access_token:e},{headers:{"Content-type":"application/json"}}).then((function(e){t.props.setToken(e.data.token),t.props.getUser()})).catch((function(e){t.GaEventTracker("Fail GET User",e),console.log(e)}))}},{key:"render",value:function(){return this.state.is_google_login_supported?this.props.user.token?Object(i.jsx)(Q,{callback:this.props.onSubscriptionResponseCallback}):Object(i.jsx)(K.a,{clientId:C.GMAIL_API_CLIENT_ID,render:J,buttonText:"Login",onSuccess:this.responseGoogle,onFailure:this.responseGoogle,cookiePolicy:"single_host_origin",isSignedIn:!0}):Object(i.jsx)("div",{className:"bg-white rounded-lg p-2 shadow btn my-1",children:"Google Login not supported, please try another browser or close icognito mode."})}}]),n}(a.Component),ie=Object(T.b)((function(e){return{user:e.user,vaccine:e.vaccine}}),(function(e){return{setToken:function(t){return e(E(t))},setSubscriptions:function(t){return e(A(t))},setTrackingCenter:function(t){return e(te(t))}}}))(ne),ae=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){return Object(r.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"componentDidMount",value:function(){}},{key:"render",value:function(){var e=this;return Object(i.jsxs)("div",{className:"shadow p-1 rounded-lg bg-white my-1",children:[this.props.vaccine.tracking_centers&&this.props.vaccine.tracking_centers.length>0?Object(i.jsx)("h6",{className:"font-weight-bold btn",children:" Tracking pin codes 18-45"}):Object(i.jsx)("h6",{className:"font-weight-bold btn",children:" No notification trackers "}),Object(i.jsx)("hr",{}),this.props.vaccine.tracking_centers&&this.props.vaccine.tracking_centers.map((function(t){return Object(i.jsxs)("div",{className:"rounded p-2 m-1 font-weight-bold bg-cowin2 position-relative overflow-hidden",children:[t.pin_code,Object(i.jsx)(O.a,{variant:"danger",onClick:function(){e.props.removeFromTracking(t.pin_code)},className:"float-right  position-absolute rounded-0",style:{top:0,right:0,height:"100%"},children:" X "})]},"center-tr-"+t.pin_code)}))]})}}]),n}(a.Component),se=Object(T.b)((function(e){return{user:e.user,vaccine:e.vaccine}}),(function(e){return{setTrackingCenters:function(t){return e(te(t))}}}))(ae),oe=n.p+"static/media/map.4ffa6cad.jpg",ce=function(){return Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:"bg-primary",style:{height:18,width:18,borderRadius:18,border:"2px solid #fff"}})})},re=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={my_position:{lat:12.97,lng:77.59},map_center:{lat:12.97,lng:77.59},map_zoom:10,selected_center:{},maps_data:{},show_map:!1,markers:[]},i.GaEventTracker=V(),i.HandleApiLoaded=function(e,t){i.setState({maps_data:{map:e,maps:t}})},i.OnMouseHoverOnHospital=i.OnMouseHoverOnHospital.bind(Object(d.a)(i)),i.OnClickCenterBox=i.OnClickCenterBox.bind(Object(d.a)(i)),i.LocateMyPosition=i.LocateMyPosition.bind(Object(d.a)(i)),i.RemoveAllMarkersFromMap=i.RemoveAllMarkersFromMap.bind(Object(d.a)(i)),i.getMyPositionFromNavigator=i.getMyPositionFromNavigator.bind(Object(d.a)(i)),i}return Object(l.a)(n,[{key:"componentDidUpdate",value:function(){this.props.vaccine.is_centers_updated&&(this.props.setCentersUpdateDone(),this.UpdateMarkers())}},{key:"UpdateMarkers",value:function(){var e=this;!this.state.show_map&&this.props.vaccine.centers.length>0&&(this.setState({show_map:!0}),this.getMyPositionFromNavigator()),this.GaEventTracker("Google map marker update"),this.RemoveAllMarkersFromMap(),setTimeout((function(){e.DrawMarkersOnMap()}),500)}},{key:"RemoveAllMarkersFromMap",value:function(){this.state.markers.forEach((function(e){e.setMap(null)})),this.setState({markers:[]})}},{key:"getMyPositionFromNavigator",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({my_position:{lat:t.coords.latitude,lng:t.coords.longitude},map_center:{lat:t.coords.latitude,lng:t.coords.longitude}})}))}},{key:"LocateMyPosition",value:function(){this.setState({map_center:this.state.my_position,map_zoom:11})}},{key:"OnMouseHoverOnHospital",value:function(e,t){t.center&&t.center.name&&this.setState({selected_center:t.center})}},{key:"DrawMarkersOnMap",value:function(){var e=this;if(this.state.maps_data.map){var t=[];this.props.vaccine.centers.forEach((function(n){var i={lat:n.lat,lng:n.long};if(!(t.findIndex((function(e){return e.lat===n.lat&&e.lng===n.long}))>=0)){t.push(i);var a=e.state.maps_data.map,s=new e.state.maps_data.maps.Marker({position:i,map:a,title:n.name,label:{text:"H",color:"white",fontWeight:"bold"}});s.addListener("click",(function(){s.setAnimation(e.state.maps_data.maps.Animation.BOUNCE),setTimeout((function(){s.setAnimation(null)}),2e3)})),s.addListener("mouseover",(function(){e.SetActiveCenterBox(n.center_id)})),e.state.markers.push(s)}}))}else console.warn("Map is not ready yet")}},{key:"SetDirection",value:function(e){this.GaEventTracker("Google map directions requests");var t=new this.state.maps_data.maps.DirectionsService,n=new this.state.maps_data.maps.DirectionsRenderer;n.setMap(this.state.maps_data.map);var i={origin:this.state.my_position,destination:e,travelMode:this.state.maps_data.maps.TravelMode.DRIVING};t.route(i,(function(e,t){"OK"===t&&n.setDirections(e)}))}},{key:"SetActiveCenterBox",value:function(e){W()(".center-box").removeClass("border-primary"),W()("#center-"+e).addClass("border-primary")}},{key:"OnClickCenterBox",value:function(e){this.SetActiveCenterBox(e.center_id),this.setState({map_center:{lat:e.lat,lng:e.long},map_zoom:9})}},{key:"GetFormattedDate",value:function(e){return y()(e,"DD-MM-YYYY").format("DD MMM")}},{key:"render",value:function(){var e=this;return Object(i.jsx)("section",{children:Object(i.jsxs)(P.a,{children:[Object(i.jsx)(G.a,{md:9,className:"",children:this.state.show_map>0?Object(i.jsxs)("div",{style:{height:600,width:"100%"},className:"shadow position-relative rounded-lg overflow-hidden",children:[Object(i.jsx)(L.a,{bootstrapURLKeys:{key:C.GOOGLE_MAP_API,language:"en"},defaultCenter:{lat:12.97,lng:77.59},center:this.state.map_center,defaultZoom:10,zoom:this.state.map_zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var n=t.map,i=t.maps;return e.HandleApiLoaded(n,i)},onChildMouseEnter:this.OnMouseHoverOnHospital,children:Object(i.jsx)(ce,{lat:this.state.my_position.lat,lng:this.state.my_position.lng})}),Object(i.jsx)(O.a,{variant:"light",className:"my-location position-absolute shadow",style:{right:10,bottom:150,height:38,width:38,borderRadius:38},onClick:this.LocateMyPosition,children:"+"})]}):Object(i.jsxs)("div",{style:{height:600,width:"100%"},className:"shadow position-relative rounded-lg overflow-hidden",children:[Object(i.jsx)("img",{src:oe,height:"100%",alt:"map"}),Object(i.jsx)("div",{style:{height:"100%",width:"100%",top:0,background:"rgba(0,0,0, 0.5)"},className:"p-2 position-absolute text-white font-weight-bold d-flex justify-content-center align-items-center",children:"Try to search for valid pin code"})]})}),Object(i.jsxs)(G.a,{md:3,style:{maxHeight:600,overflowY:"auto"},children:[Object(i.jsx)(G.a,{className:"p-0 py-1",children:Object(i.jsx)(se,{removeFromTracking:this.props.removeFromTracking})}),this.props.user.is_server_up&&!(this.props.user.subscriptions&&this.props.user.subscriptions.includes(B.SUBSCRIPTION_WA))&&Object(i.jsx)(ie,{getUser:this.props.getUser,onSubscriptionResponseCallback:this.props.onSubscriptionResponseCallback}),0===this.props.vaccine.centers.length&&Object(i.jsx)(G.a,{className:"p-0 py-1",children:Object(i.jsx)("div",{className:"p-2 shadow rounded-lg border center-box bg-white btn font-weight-bold my-1",style:{width:"100%"},children:"No centers are available now"})}),this.props.vaccine.centers.map((function(t){return Object(i.jsx)(G.a,{className:"p-0 py-1",children:Object(i.jsxs)("div",{className:"p-1 shadow rounded-lg border center-box bg-white",id:"center-"+t.center_id,onClick:function(){e.OnClickCenterBox(t)},children:[Object(i.jsxs)("b",{children:[t.name," ",Object(i.jsx)("sup",{children:t.sessions[0].available_capacity?Object(i.jsx)(R.a,{variant:"primary",children:t.sessions[0].available_capacity}):Object(i.jsx)(R.a,{variant:"danger",children:"Booked"})})]}),Object(i.jsxs)("p",{className:"text-secondary small m-0",children:[t.address,", ",t.block_name]}),Object(i.jsxs)("p",{className:"text-secondary small m-0",children:[t.district_name,", ",t.state_name,", ",t.pincode]}),t.sessions.map((function(t){return Object(i.jsxs)("div",{className:"font-weight-bolder",children:[Object(i.jsxs)("span",{className:"small font-weight-bold",children:[e.GetFormattedDate(t.date)," [",t.vaccine,", ",t.min_age_limit,"+] "," "," "]}),t.available_capacity?Object(i.jsx)("a",{href:B.COWIN_REGISTRATION,target:"_blank",rel:"noreferrer",children:Object(i.jsx)(R.a,{variant:"primary",className:"btn",children:"Book"})}):Object(i.jsx)(R.a,{variant:"danger",children:"Booked"})]},t.session_id)})),Object(i.jsx)("div",{className:"text-primary btn px-0 small",onClick:function(){e.SetDirection({lat:t.lat,lng:t.long})},style:{fontSize:11},children:"Show direction on map"}),Object(i.jsx)("div",{children:e.props.isTrackingContains(t.pincode)?"":Object(i.jsx)(R.a,{variant:"primary",className:"btn p-1 m-1",onClick:function(){e.props.addToTracking(t.pincode)},children:" Set Tracking"})})]})},"center-"+t.center_id)})),Object(i.jsx)(G.a,{className:"p-0 py-1",children:Object(i.jsx)("a",{href:"https://dashboard.cowin.gov.in/",target:"_blank",rel:"noreferrer",children:Object(i.jsx)(O.a,{variant:"info",style:{width:"100%"},className:"shadow p-4",children:" Cowin Dashboard & Statistics"})})})]})]})})}}]),n}(a.Component),le=Object(T.b)((function(e){return{user:e.user,vaccine:e.vaccine}}),(function(e){return{setToken:function(t){return e(E(t))},setTrackingCenters:function(t){return e(te(t))},setCentersUpdateDone:function(){return e({type:ee,is_centers_updated:!1})}}}))(re),de=V();function ue(e,t){de("Total cowin-api requests",e),fetch(e).then((function(e){return e.json()})).then((function(e){return t(e.centers)}))}var he=n(38),pe={name:"cowin",version:C.DB_VERSION,objectStoresMeta:[{store:"centers",storeConfig:{keyPath:"pin_code"},storeSchema:[{name:"pin_code",keypath:"pin_code",options:{unique:!0}}]}]},be=V();function je(){return(0,Object(he.useIndexedDB)("centers").getAll)()}function me(e){return be("[SW] Center Added",e),(0,Object(he.useIndexedDB)("centers").add)({pin_code:e})}var Oe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).IsTrackingContains=i.IsTrackingContains.bind(Object(d.a)(i)),i.RemoveFromTracking=i.RemoveFromTracking.bind(Object(d.a)(i)),i.RemovePinCodeFromBackend=i.RemovePinCodeFromBackend.bind(Object(d.a)(i)),i.SetTrackingCentersFromDbIndex=i.SetTrackingCentersFromDbIndex.bind(Object(d.a)(i)),i.SyncPinCodeWithBackend=i.SyncPinCodeWithBackend.bind(Object(d.a)(i)),i.GetUser=i.GetUser.bind(Object(d.a)(i)),i.AddToTracking=i.AddToTracking.bind(Object(d.a)(i)),i.SetTrackingCentersFromDbIndex(),i}return Object(l.a)(n,[{key:"SetTrackingCentersFromDbIndex",value:function(){var e=this;je().then((function(t){e.props.setTrackingCenters(t)}))}},{key:"GetUser",value:function(){var e=this,t=C.BACKEND_BASE_URL+z.GET_USER_INFO,n={headers:{"Content-Type":"application/json",Authorization:"Token "+this.props.user.token}};k.a.post(t,{},n).then((function(t){e.props.setSubscriptions(t.data.subscriptions),e.SyncPinCodeWithBackend(t.data.pin_codes)})).catch((function(t){e.GaEventTracker("Fail GET User",t),console.log(t)}))}},{key:"SyncPinCodeWithBackend",value:function(){var e=this;if(this.props.user.token){var t=C.BACKEND_BASE_URL+z.SYNC_PIN_CODE_URL,n={headers:{"Content-Type":"application/json",Authorization:"Token "+this.props.user.token}};je().then((function(i){k.a.post(t,{pin_codes:i.map((function(e){return e.pin_code}))},n).then((function(t){(0,Object(he.useIndexedDB)("centers").clear)().then((function(){t.data.pin_codes.forEach((function(e){me(e)})),e.SetTrackingCentersFromDbIndex()}))})).catch((function(e){console.log(e)}))}))}}},{key:"IsTrackingContains",value:function(e){return this.props.vaccine.tracking_centers.findIndex((function(t){return t.pin_code===e}))>=0}},{key:"RemovePinCodeFromBackend",value:function(e){var t=C.BACKEND_BASE_URL+z.REMOVE_PIN_CODE_URL,n={headers:{"Content-Type":"application/json",Authorization:"Token "+this.props.user.token}};k.a.post(t,{pin_code:e},n).then((function(e){console.debug(e)})).catch((function(e){console.log(e)}))}},{key:"RemoveFromTracking",value:function(e){if(this.IsTrackingContains(e)){!function(e){var t=Object(he.useIndexedDB)("centers").deleteRecord;je().then((function(n){n.forEach((function(n){if(n.pin_code===e)return t(n.pin_code)}))}))}(e);for(var t=this.props.vaccine.tracking_centers,n=t.findIndex((function(t){return t.pin_code===e}));n<t.length-1;n++)t[n]=t[n+1];t.pop(),console.log(t),this.props.setTrackingCenters(t),this.RemovePinCodeFromBackend(e)}}},{key:"AddToTracking",value:function(e){if(this.props.vaccine.tracking_centers.length>3)try{this.onSubscriptionResponseCallback("Allowed max 4 tracking centers, please delete some to add new one. Thanks!")}catch(n){console.log("Error: ",n)}else if(!this.IsTrackingContains(e)){me(e);var t=this.props.vaccine.tracking_centers;t.push({pin_code:e}),this.props.setTrackingCenters(t),this.AddCentersToBackend(e)}}},{key:"AddCentersToBackend",value:function(e){var t=C.BACKEND_BASE_URL+z.ADD_PIN_CODE_URL,n={headers:{"Content-Type":"application/json",Authorization:"Token "+this.props.user.token}};k.a.post(t,{pin_code:e},n).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}}]),n}(a.Component),ve=n(130);var ge=function(e){var t=e.showModal,n=e.handleClose,a=e.textBody;return Object(i.jsxs)(ve.a,{show:t,onHide:n,children:[Object(i.jsx)(ve.a.Header,{closeButton:!0,children:Object(i.jsx)(ve.a.Title,{children:" Notification"})}),Object(i.jsx)(ve.a.Body,{children:a})]})},_e=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={is_valid_feedback:!1,is_feedback_btn_disabled:!0,feedback_text:""},i.OnSubmitFeedback=i.OnSubmitFeedback.bind(Object(d.a)(i)),i.OnChangeFeedback=i.OnChangeFeedback.bind(Object(d.a)(i)),i}return Object(l.a)(n,[{key:"OnSubmitFeedback",value:function(){var e=this;this.setState({is_valid_feedback:!0});var t=C.BACKEND_BASE_URL+z.USER_FEEDBACK,n={headers:{"Content-Type":"application/json",Authorization:"Token "+this.props.user.token}};k.a.post(t,{feedback:this.state.feedback_text},n).then((function(e){console.debug(e)})).catch((function(t){e.setState({is_valid_feedback:!1}),console.log(t)}))}},{key:"OnChangeFeedback",value:function(e){var t=e.target.value;this.setState({feedback_text:t,is_feedback_btn_disabled:t.length<10})}},{key:"render",value:function(){return Object(i.jsx)("section",{className:"p-0",children:Object(i.jsx)("div",{className:"shadow bg-white p-4 my-2 rounded-lg",children:Object(i.jsxs)(P.a,{children:[Object(i.jsxs)(G.a,{children:[Object(i.jsx)("div",{className:"font-weight-bold",children:"Reach out through"}),Object(i.jsx)("a",{href:"https://www.linkedin.com/feed/update/urn%3Ali%3Aactivity%3A6798913715489120256/",target:"_blank",rel:"noreferrer",className:"no-text-decor",children:Object(i.jsxs)("div",{className:"text-primary",style:{fontWeight:800,fontSize:20},children:["Linked ",Object(i.jsx)("span",{className:"bg-primary text-white rounded-sm",style:{padding:"1px 2px 1px 2px"},children:"in"})]})})]}),this.props.user.is_server_up&&Object(i.jsxs)(G.a,{children:[Object(i.jsx)("div",{className:"font-weight-bold",children:"Feedback"}),Object(i.jsxs)("div",{children:[Object(i.jsx)("textarea",{className:"form-control no-input-shadow",onChange:this.OnChangeFeedback,value:this.state.feedback_text,disabled:this.state.is_valid_feedback}),this.state.is_valid_feedback?Object(i.jsx)("div",{children:"Thanks for the feedback :) "}):Object(i.jsx)(O.a,{variant:"primary",className:"my-1 float-right",onClick:this.OnSubmitFeedback,disabled:this.state.is_feedback_btn_disabled,children:"Submit"})]})]})]})})})}}]),n}(a.Component),fe=Object(T.b)((function(e){return{user:e.user}}),(function(){return{}}))(_e);Y.a.initialize(C.GOOGLE_ANALYTICS_UA);var ke=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={is_unmounted:!1,pin_code:"",district_id:"1",is_valid_pin_code:!1,vaccine:"",vaccine_date:y()().format("YYYY-MM-DD"),states:[],districts:[],show_modal:!1,modal_text:"",can_show_tracking_center_button:!1},i.options={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+i.props.user.token}},i.GaEventTracker=V(),Y.a.pageview(window.location.pathname+window.location.search),i.GetState=i.GetState.bind(Object(d.a)(i)),i.OnChangeState=i.OnChangeState.bind(Object(d.a)(i)),i.OnChangeDate=i.OnChangeDate.bind(Object(d.a)(i)),i.OnChangePinCode=i.OnChangePinCode.bind(Object(d.a)(i)),i.OnChangeDistrictCode=i.OnChangeDistrictCode.bind(Object(d.a)(i)),i.OnChangeVaccine=i.OnChangeVaccine.bind(Object(d.a)(i)),i.SelectVaccinesWithDate=i.SelectVaccinesWithDate.bind(Object(d.a)(i)),i.OnSubmitPinCode=i.OnSubmitPinCode.bind(Object(d.a)(i)),i.OnSubmitDistrict=i.OnSubmitDistrict.bind(Object(d.a)(i)),i.OnGetCenterCallback=i.OnGetCenterCallback.bind(Object(d.a)(i)),i.OnLogout=i.OnLogout.bind(Object(d.a)(i)),i.onSubscriptionResponseCallback=i.onSubscriptionResponseCallback.bind(Object(d.a)(i)),i.closeModal=i.closeModal.bind(Object(d.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.GetState(),this.OnChangeState(1),this.CheckHealth()}},{key:"CheckHealth",value:function(){var e=this,t=C.BACKEND_BASE_URL+z.HEALTH_CHECK,n={headers:{"Content-Type":"application/json",Authorization:"Token "+this.props.user.token}};k.a.post(t,{},n).then((function(t){console.log(t),e.GetUser()})).catch((function(t){e.props.setToken(null),e.props.setSubscriptions([]),void 0===t.response||403!==t.response.status?e.props.setServerStat(!1):e.props.setServerStat(!0),console.log(t)}))}},{key:"componentWillUnmount",value:function(){this.setState({is_unmounted:!0})}},{key:"GetState",value:function(){var e=this;k.a.get(C.COWIN_BASE_URL+_.GET_STATES,this.options).then((function(t){200===t.status&&t.data.states.length>0?e.setState({states:t.data.states}):console.log(t)})).catch((function(e){return console.error(e)}))}},{key:"OnChangeState",value:function(e){var t=this;k.a.get(C.COWIN_BASE_URL+_.GET_DISTRICT.replace("<DISTRICT>",e),this.options).then((function(e){200===e.status&&e.data.districts.length>0?t.setState({districts:e.data.districts}):console.error(e)})).catch((function(e){return console.error(e)}))}},{key:"OnChangeDistrictCode",value:function(e){this.setState({district_id:e})}},{key:"OnSubmitPinCode",value:function(){if(6===this.state.pin_code.length){this.GaEventTracker("Pin code Submitted",this.state.pin_code);var e=y()(this.state.vaccine_date).format("DD-MM-YYYY");ue(C.COWIN_BASE_URL+_.CALENDAR_BY_PIN_CODE.replace("<PINCODE>",this.state.pin_code).replace("<DATE>",e).replace("<VACCINE>",this.state.vaccine),this.OnGetCenterCallback)}}},{key:"OnSubmitDistrict",value:function(){if(!(this.state.district_id.length<=0)){this.GaEventTracker("District Submitted",this.state.pin_code);var e=y()(this.state.vaccine_date).format("DD-MM-YYYY");ue(C.COWIN_BASE_URL+_.CALENDAR_BY_DISTRICT.replace("<DISTRICT_ID>",this.state.district_id).replace("<DATE>",e).replace("<VACCINE>",this.state.vaccine),this.OnGetCenterCallback)}}},{key:"OnGetCenterCallback",value:function(e){this.props.setCenters(e),this.GaEventTracker("Received Centers"),e.length>0&&this.setState({can_show_tracking_center_button:!0})}},{key:"OnChangeVaccine",value:function(e){this.setState({vaccine:e.target.value})}},{key:"OnChangeDate",value:function(e){this.setState({vaccine_date:e.target.value}),this.GetVaccineSessionChild.current.OnChangeDate(e.target.value)}},{key:"OnChangePinCode",value:function(e){var t=e.target.value.replace(/^0+/,"");this.setState({pin_code:t,can_show_tracking_center_button:!1,is_valid_pin_code:6===e.target.value.length})}},{key:"SelectVaccinesWithDate",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsxs)("select",{className:"form-control no-input-shadow mt-2",value:this.state.vaccine,onChange:this.OnChangeVaccine,children:[Object(i.jsx)("option",{value:"",children:"All Vaccine"}),Object(i.jsx)("option",{value:S.COVAXIN,children:S.COVAXIN}),Object(i.jsx)("option",{value:S.COVISHIELD,children:S.COVISHIELD})]}),Object(i.jsx)(j.a,{className:"no-input-shadow mt-2",placeholder:"Enter start date",type:"date",value:this.state.vaccine_date,onChange:this.OnChangeDate})]})}},{key:"OnLogout",value:function(){var e=this,t=C.BACKEND_BASE_URL+z.LOGOUT_URL,n={headers:{"Content-Type":"application/json",Authorization:"Token "+this.props.user.token}};k.a.post(t,{},n).then((function(t){e.props.setToken(null),e.props.setSubscriptions([])})).catch((function(e){console.log(e)}))}},{key:"closeModal",value:function(){this.setState({show_modal:!1})}},{key:"onSubscriptionResponseCallback",value:function(e){this.setState({show_modal:!0,modal_text:e})}},{key:"render",value:function(){var e=this;return Object(i.jsxs)(m.a,{className:"",children:[Object(i.jsx)("div",{className:"position-relative",children:null!==this.props.user.token&&Object(i.jsx)(O.a,{variant:"danger",className:"position-absolute shadow-lg logout-btn",onClick:this.OnLogout,children:"Logout"})}),Object(i.jsxs)(v.a,{defaultActiveKey:"home",transition:!1,id:"noanim-tab-example",className:"bg-white rounded-top shadow overflow-hidden mt-4 position-relative",children:[Object(i.jsx)(g.a,{eventKey:"home",title:"Pin code",children:Object(i.jsx)("div",{className:"bg-white mb-2 rounded-bottom bg-cowin2-light shadow p-4 justify-content-center d-flex align-items-center",style:{height:300},children:Object(i.jsxs)("div",{className:"col-md-6",children:[Object(i.jsx)(j.a,{className:"no-input-shadow",placeholder:"Enter pin code",type:"number",value:this.state.pin_code,onChange:this.OnChangePinCode}),this.state.can_show_tracking_center_button&&Object(i.jsx)(O.a,{variant:"outline-success",className:"small py-0 rounded-0 float-right mb-1",style:{top:0,right:"-10%"},onClick:function(){e.AddToTracking(parseInt(e.state.pin_code))},children:"Track this pincode"}),Object(i.jsx)(this.SelectVaccinesWithDate,{}),Object(i.jsx)(O.a,{variant:"primary",className:"form-control mt-4",onClick:this.OnSubmitPinCode,disabled:!this.state.is_valid_pin_code,children:" Find vaccine slots"})]})})}),Object(i.jsx)(g.a,{eventKey:"profile",title:"District",children:Object(i.jsx)("div",{className:"bg-white mb-2 rounded-bottom shadow p-4 justify-content-center d-flex align-items-center",style:{height:300},children:Object(i.jsxs)("div",{className:"col-md-6",children:[Object(i.jsx)("select",{className:"form-control no-input-shadow",placeholder:"Select state",onChange:function(t){e.OnChangeState(t.target.value)},children:this.state.states.map((function(e){return Object(i.jsx)("option",{value:e.state_id,children:e.state_name},e.state_id)}))}),Object(i.jsx)("select",{className:"form-control no-input-shadow mt-2",placeholder:"Select district",value:this.state.district_id,onChange:function(t){e.OnChangeDistrictCode(t.target.value)},children:this.state.districts.map((function(e){return Object(i.jsx)("option",{value:e.district_id,children:e.district_name},e.district_id)}))}),Object(i.jsx)(this.SelectVaccinesWithDate,{}),Object(i.jsx)(O.a,{variant:"primary",className:"form-control mt-4",onClick:this.OnSubmitDistrict,children:" Find vaccine slots"})]})})}),Object(i.jsx)(g.a,{eventKey:"near_me",title:"Notifications Manager",children:Object(i.jsxs)("div",{className:"bg-white mb-2 rounded-bottom shadow p-4 justify-content-center d-flex",children:[this.props.user.is_server_up&&Object(i.jsx)("div",{className:"p-1",children:Object(i.jsx)(ie,{getUser:this.GetUser})}),Object(i.jsx)("div",{className:"p-1",children:Object(i.jsx)(se,{removeFromTracking:this.RemoveFromTracking})})]})})]}),null===this.props.user.token&&Object(i.jsx)("div",{className:"p-1 shadow rounded-lg bg-warning my-2",children:"Please do use google login and subscribe SMS text to get more accurate notification even you're offline."}),Object(i.jsx)(le,{removeFromTracking:this.RemoveFromTracking,addToTracking:this.AddToTracking,isTrackingContains:this.IsTrackingContains,getUser:this.GetUser,onSubscriptionResponseCallback:this.onSubscriptionResponseCallback}),Object(i.jsx)(U,{}),Object(i.jsx)(ge,{showModal:this.state.show_modal,textBody:this.state.modal_text,handleClose:this.closeModal}),Object(i.jsx)(fe,{})]})}}]),n}(Oe),Ce=Object(T.b)((function(e){return{user:e.user,vaccine:e.vaccine}}),(function(e){return{setToken:function(t){return e(E(t))},setCenters:function(t){return e(function(e){return{type:Z,payload:e}}(t))},setServerStat:function(t){return e(function(e){return{type:w,payload:e}}(t))},setSubscriptions:function(t){return e(A(t))},setTrackingCenters:function(t){return e(te(t))}}}))(ke),Se=window.indexedDB||window.mozIndexedDB||window.webkitIndexedDB||window.msIndexedDB;!function(){var e=Se.open("cowin",C.DB_VERSION);e.onupgradeneeded=function(t){var n=e.result;n.objectStoreNames.contains("centers")?t.oldVersion&&(n.deleteObjectStore("centers"),n.createObjectStore("centers",{keyPath:"pin_code"}).createIndex("pin_code","pin_code",{unique:!0})):n.createObjectStore("centers",{keyPath:"pin_code"}).createIndex("pin_code","pin_code",{unique:!0})},e.onsuccess=function(t){e.result.objectStoreNames.contains("centers")||Se.deleteDatabase("cowin")}}(),Object(he.initDB)(pe);var xe=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(e){var i;return Object(r.a)(this,n),(i=t.call(this,e)).state={is_notification_granted:!0,top_notification_content:"Grant notification permission manually, which will get use to notify if any slots available."},i.OnNotificationPermissionChange=i.OnNotificationPermissionChange.bind(Object(d.a)(i)),i}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.IsPushNotificationSupported()?(this.OnNotificationPermissionChange(),"default"===Notification.permission&&Notification.requestPermission(this.OnNotificationPermissionChange).then((function(e){}))):this.setState({is_notification_granted:!1,top_notification_content:"Notifications are not supported by your browser :("})}},{key:"OnNotificationPermissionChange",value:function(){"denied"===Notification.permission&&this.setState({is_notification_granted:!1})}},{key:"IsPushNotificationSupported",value:function(){return"serviceWorker"in navigator&&"PushManager"in window}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"App",children:[!this.state.is_notification_granted&&Object(i.jsx)("div",{className:"bg-danger text-center text-white",children:this.state.top_notification_content}),Object(i.jsx)(p.a,{children:Object(i.jsx)(b.c,{children:Object(i.jsx)(b.a,{path:"",exact:!0,component:Ce})})})]})}}]),n}(a.Component),ye=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Te(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var Ne=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,133)).then((function(t){var n=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),i(e),a(e),s(e),o(e)}))},we=(n(117),n(118),n(28)),Ie=n(64),Ee=n(81),Ae=n.n(Ee),De=n(14),Re={is_server_up:!0,token:null,subscriptions:[]},Be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(De.a)(Object(De.a)({},e),{},{token:t.payload});case w:return Object(De.a)(Object(De.a)({},e),{},{is_server_up:t.payload});case I:return Object(De.a)(Object(De.a)({},e),{},{subscriptions:t.payload});default:return e}},Me="SET_LATITUDE",Ue="SET_LONGITUDE",Le={latitude:100,longitude:157},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Me:return Object(De.a)(Object(De.a)({},e),{},{latitude:t.payload});case Ue:return Object(De.a)(Object(De.a)({},e),{},{longitude:t.payload});default:return e}},Ge={centers:[],is_centers_updated:!1,tracking_centers:[]},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ge,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(t.type){case Z:return Object(De.a)(Object(De.a)({},e),{},{centers:t.payload,is_centers_updated:!0});case $:return Object(De.a)(Object(De.a)({},e),{},{tracking_centers:t.payload});case ee:return Object(De.a)(Object(De.a)({},e),{},{is_centers_updated:t.payload});default:return e}},We=Object(we.b)({user:Be,position:Pe,vaccine:Fe}),Ye={key:"root",storage:Ae.a,blacklist:["vaccine"]},Ve=Object(Ie.a)(Ye,We),He=Object(we.c)(Ve),Ke=Object(Ie.b)(He),ze=n(82),qe=n(37),Je=n(63),Xe=n(29);qe.b.add(Je.b,Xe.i,Xe.c,Xe.a,Xe.f,Xe.g,Xe.e,Xe.h,Xe.b,Je.a,Xe.d),c.a.render(Object(i.jsx)(s.a.StrictMode,{children:Object(i.jsx)(T.a,{store:He,children:Object(i.jsxs)(ze.a,{loading:null,persistor:Ke,children:[Object(i.jsx)(p.a,{}),Object(i.jsx)(xe,{})]})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ye?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var i=n.headers.get("content-type");404===n.status||null!=i&&-1===i.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Te(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Te(t,e)}))}}(),Ne()},19:function(e){e.exports=JSON.parse('{"GET_USER_INFO":"/api/user/","LOGOUT_URL":"/api/logout/","GET_TOKEN_URL":"/api/authentication/exchange/google-oauth2","NOTIFICATION_SUBSCRIBED_URL":"/api/user/subscribe/","NOTIFICATION_UNSUBSCRIBED_URL":"/api/user/unsubscribe/","ADD_PIN_CODE_URL":"/api/user/pincode/add/","REMOVE_PIN_CODE_URL":"/api/user/pincode/remove/","SYNC_PIN_CODE_URL":"/api/user/pincode/sync/","HEALTH_CHECK":"/api/health/check/","USER_FEEDBACK":"/api/user/feedback/"}')},25:function(e){e.exports=JSON.parse('{"COWIN_REGISTRATION":"https://selfregistration.cowin.gov.in/","SUBSCRIPTION_WA":"WA","SUBSCRIPTION_BR":"BR"}')},36:function(e){e.exports=JSON.parse('{"REGISTER_OTP":"/v2/auth/generateOTP","CONFIRM_OTP":"/v2/auth/confirmOTP","GET_STATES":"/v2/admin/location/states","GET_DISTRICT":"/v2/admin/location/districts/<DISTRICT>","CALENDAR_BY_PIN_CODE":"/v2/appointment/sessions/public/calendarByPin?pincode=<PINCODE>&date=<DATE>&vaccine=<VACCINE>","CALENDAR_BY_DISTRICT":"/v2/appointment/sessions/public/calendarByDistrict?district_id=<DISTRICT_ID>&date=<DATE>&vaccine=<VACCINE>"}')},46:function(e){e.exports=JSON.parse('{"COVISHIELD":"COVISHIELD","COVAXIN":"COVAXIN"}')},8:function(e){e.exports=JSON.parse('{"COWIN_BASE_URL":"https://cdn-api.co-vin.in/api","BACKEND_BASE_URL":"https://notifyslot-backend.online","GMAIL_API_CLIENT_ID":"262189712583-00tmf16i31b5dgievcav04912pdqjs80.apps.googleusercontent.com","GOOGLE_ANALYTICS_UA":"UA-196979850-1","GOOGLE_MAP_API":"AIzaSyBBwvwTMgYVzcSUojddLQA4VtTwUmAtH3o","DB_VERSION":5}')},89:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.e9b22bbb.chunk.js.map