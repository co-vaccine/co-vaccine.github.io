(this["webpackJsonpcowin-vaccine"]=this["webpackJsonpcowin-vaccine"]||[]).push([[0],{117:function(e,t,n){},122:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),s=n.n(i),c=n(7),r=n.n(c),o=n(19),l=n(20),d=n(28),h=n(26),j=n(54),u=n(9),O=(n(91),n(60)),p=n(11),b=n(138),m=n(133),v=n(137),f=n(134),x=n(130),_=n(44),C=n(57),g=n.n(C),S=n(45),y=n(46),N=n(30),I=n.n(N),D=n(55),k="SET_TXN_ID",T="SET_USER_TOKEN",E=n(127),A=n(128),w=n(135),M=n(129),R=n(40),G=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={centers:[],week:[0,1,2,3,4,5,6].map((function(e){return I()().add(e,"day").format("DD-MM-YY")}))},e}return Object(l.a)(n,[{key:"OnChangeDate",value:function(e){this.setState({week:[0,1,2,3,4,5,6].map((function(t){return I()(e,"YYYY-MM-DD").add(t,"day").format("DD-MM-YY")}))})}},{key:"SetCenters",value:function(e){this.setState({centers:e})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"bg-light",children:Object(a.jsxs)(E.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),this.state.week.map((function(e){return Object(a.jsx)("th",{children:e},"th-"+e)}))]})}),Object(a.jsx)("tbody",{children:this.state.centers.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"font-weight-bolder",children:[t.name,Object(a.jsxs)("sup",{className:"small",children:[" ",Object(a.jsx)(A.a,{variant:"secondary",children:t.fee_type})]})]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.address,", ",t.block_name]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.district_name,", ",t.state_name,", ",t.pincode]})]})}),e.state.week.map((function(e){var n=t.sessions.findIndex((function(t){return t.date===I()(e,"DD-MM-YY").format("DD-MM-YYYY")}));return n>=0?Object(a.jsx)("td",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"",children:t.sessions[n].vaccine}),Object(a.jsxs)("p",{className:"small m-0 text-danger",children:["For ",t.sessions[n].min_age_limit,"+"]}),t.sessions[n].available_capacity?Object(a.jsx)(w.a,{overlay:Object(a.jsxs)(M.a,{children:["Slots: ",t.sessions[n].slots.join(", ")]}),children:Object(a.jsx)("a",{href:R.COWIN_REGISTRATION,target:"_blank",rel:"noreferrer",children:Object(a.jsxs)(x.a,{variant:"success p-1","data-toggle":"tooltip","data-placement":"top",title:"Tooltip on top",children:["Book ",Object(a.jsx)("sup",{children:Object(a.jsx)(A.a,{variant:"primary",children:t.sessions[n].available_capacity})})]})})}):Object(a.jsx)(x.a,{variant:"danger p-0",children:"Booked"})]})}):Object(a.jsx)("td",{})}))]},t.center_id)}))})]})})}}]),n}(i.Component),Y=n(16),V=n(85),B=n(136),L=n(131),P=n(132),H=n(62),W=n.n(H),U=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"bg-primary",style:{height:18,width:18,borderRadius:18,border:"2px solid #fff"}})})};function z(e){return Object(a.jsxs)(B.a,Object(Y.a)(Object(Y.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(a.jsx)(B.a.Header,{closeButton:!0,children:Object(a.jsx)(B.a.Title,{id:"contained-modal-title-vcenter",children:"Set Tracking Notification"})}),Object(a.jsx)(B.a.Body,{children:Object(a.jsx)("p",{children:"Coming soon"})}),Object(a.jsx)(B.a.Footer,{children:Object(a.jsx)(x.a,{onClick:e.onHide,children:"Close"})})]}))}var F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={my_position:{lat:12.97,lng:77.59},map_center:{lat:12.97,lng:77.59},map_zoom:10,selected_center:{},maps_data:{},markers:[],modalShow:!1},a.HandleApiLoaded=function(e,t){a.setState({maps_data:{map:e,maps:t}})},a.OnMouseHoverOnHospital=a.OnMouseHoverOnHospital.bind(Object(p.a)(a)),a.OnClickCenterBox=a.OnClickCenterBox.bind(Object(p.a)(a)),a}return Object(l.a)(n,[{key:"UpdateMarkers",value:function(e){this.setState({markers:e}),this.DrawMarkersOnMap()}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({my_position:{lat:t.coords.latitude,lng:t.coords.longitude},map_center:{lat:t.coords.latitude,lng:t.coords.longitude}})}))}},{key:"OnMouseHoverOnHospital",value:function(e,t){t.center&&t.center.name&&this.setState({selected_center:t.center})}},{key:"DrawMarkersOnMap",value:function(){var e=this;this.state.markers.forEach((function(t){var n=e.state.maps_data.map,a=new e.state.maps_data.maps.Marker({position:{lat:t.lat,lng:t.long},map:n,title:t.name,label:{text:"H",color:"white",fontWeight:"bold"}});a.addListener("click",(function(){})),a.addListener("mouseover",(function(){e.SetActiveCenterBox(t.center_id)}))}))}},{key:"SetDirection",value:function(e){var t=new this.state.maps_data.maps.DirectionsService,n=new this.state.maps_data.maps.DirectionsRenderer;n.setMap(this.state.maps_data.map);var a={origin:this.state.my_position,destination:e,travelMode:this.state.maps_data.maps.TravelMode.DRIVING};t.route(a,(function(e,t){"OK"===t&&n.setDirections(e)}))}},{key:"SetActiveCenterBox",value:function(e){W()(".center-box").removeClass("border-primary"),W()("#center-"+e).addClass("border-primary")}},{key:"OnClickCenterBox",value:function(e){this.SetActiveCenterBox(e.center_id),this.setState({map_center:{lat:e.lat,lng:e.long},map_zoom:8.5})}},{key:"SetModalShow",value:function(e){this.setState({modalShow:e})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("section",{children:[Object(a.jsxs)(L.a,{children:[Object(a.jsx)(P.a,{md:9,className:"",children:Object(a.jsx)("div",{style:{height:600,width:"100%"},className:"shadow-sm",children:Object(a.jsx)(V.a,{bootstrapURLKeys:{key:R.GOOGLE_MAP_API,language:"en"},defaultCenter:{lat:12.97,lng:77.59},center:this.state.map_center,defaultZoom:10,zoom:this.state.map_zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var n=t.map,a=t.maps;return e.HandleApiLoaded(n,a)},onChildMouseEnter:this.OnMouseHoverOnHospital,children:Object(a.jsx)(U,{lat:this.state.my_position.lat,lng:this.state.my_position.lng})})})}),Object(a.jsx)(P.a,{md:3,style:{maxHeight:600,overflowY:"auto"},children:this.state.markers.map((function(t){return Object(a.jsx)(P.a,{className:"p-0 py-1",children:Object(a.jsxs)("div",{className:"p-1 shadow rounded border center-box",id:"center-"+t.center_id,onClick:function(){e.OnClickCenterBox(t)},children:[Object(a.jsxs)("b",{children:[t.name," ",Object(a.jsx)("sup",{children:t.sessions[0].available_capacity?Object(a.jsx)(A.a,{variant:"primary",children:t.sessions[0].available_capacity}):Object(a.jsx)(A.a,{variant:"danger",children:"Booked"})})]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.address,", ",t.block_name]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.district_name,", ",t.state_name,", ",t.pincode]}),Object(a.jsx)("div",{className:"text-primary btn px-0",onClick:function(){e.SetDirection({lat:t.lat,lng:t.long})},children:"Show direction on map"}),t.sessions.map((function(e){return Object(a.jsxs)("div",{className:"font-weight-bolder",children:[Object(a.jsxs)("span",{className:"small font-weight-bold",children:[e.date," [",e.vaccine,"] "," "," "]}),e.available_capacity?Object(a.jsx)("a",{href:R.COWIN_REGISTRATION,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(A.a,{variant:"primary",className:"btn",children:"Book"})}):Object(a.jsx)(A.a,{variant:"danger",children:"Booked"})]})})),Object(a.jsx)(A.a,{variant:"primary",className:"btn p-1 m-1",onClick:function(){e.SetModalShow(!0)},children:" Set Tracking"})]})},"center-"+t.center_id)}))})]}),Object(a.jsx)(z,{show:this.state.modalShow,onHide:function(){return e.SetModalShow(!1)}})]})}}]),n}(i.Component),J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={is_unmounted:!1,pin_code:"",district_id:"1",is_valid_pin_code:!1,vaccine:"",vaccine_date:I()().format("YYYY-MM-DD"),states:[],districts:[],centers:[]},a.options={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+a.props.user.token}},a.GetState=a.GetState.bind(Object(p.a)(a)),a.OnChangeState=a.OnChangeState.bind(Object(p.a)(a)),a.OnChangeDate=a.OnChangeDate.bind(Object(p.a)(a)),a.OnChangePinCode=a.OnChangePinCode.bind(Object(p.a)(a)),a.OnChangeDistrictCode=a.OnChangeDistrictCode.bind(Object(p.a)(a)),a.OnChangeVaccine=a.OnChangeVaccine.bind(Object(p.a)(a)),a.SelectVaccinesWithDate=a.SelectVaccinesWithDate.bind(Object(p.a)(a)),a.OnSubmitPinCode=a.OnSubmitPinCode.bind(Object(p.a)(a)),a.OnSubmitDistrict=a.OnSubmitDistrict.bind(Object(p.a)(a)),a.GetVaccineSessionChild=s.a.createRef(),a.googleMapRef=s.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.GetState(),this.OnChangeState(1)}},{key:"componentWillUnmount",value:function(){this.setState({is_unmounted:!0})}},{key:"GetState",value:function(){var e=this;g.a.get(S.COWIN_BASE_URL+_.GET_STATES,this.options).then((function(t){200===t.status&&t.data.states.length>0?e.setState({states:t.data.states}):console.log(t)})).catch((function(e){return console.error(e)}))}},{key:"OnChangeState",value:function(e){var t=this;g.a.get(S.COWIN_BASE_URL+_.GET_DISTRICT.replace("<DISTRICT>",e),this.options).then((function(e){200===e.status&&e.data.districts.length>0?t.setState({districts:e.data.districts}):console.error(e)})).catch((function(e){return console.error(e)}))}},{key:"OnChangeDistrictCode",value:function(e){this.setState({district_id:e})}},{key:"OnSubmitPinCode",value:function(){if(6===this.state.pin_code.length){var e=I()(this.state.vaccine_date).format("DD-MM-YYYY");this.GetCenters(S.COWIN_BASE_URL+_.CALENDAR_BY_PIN_CODE.replace("<PINCODE>",this.state.pin_code).replace("<DATE>",e).replace("<VACCINE>",this.state.vaccine))}}},{key:"OnSubmitDistrict",value:function(){if(!(this.state.district_id.length<=0)){var e=I()(this.state.vaccine_date).format("DD-MM-YYYY");this.GetCenters(S.COWIN_BASE_URL+_.CALENDAR_BY_DISTRICT.replace("<DISTRICT_ID>",this.state.district_id).replace("<DATE>",e).replace("<VACCINE>",this.state.vaccine))}}},{key:"GetCenters",value:function(e){var t=this;g.a.get(e,this.options).then((function(e){200===e.status&&e.data.centers&&(t.setState({centers:e.data.centers}),t.GetVaccineSessionChild.current.SetCenters(t.state.centers),t.googleMapRef.current.UpdateMarkers(t.state.centers))})).catch((function(e){e.response&&401===e.response.status&&t.props.setToken(null),console.error(e)}))}},{key:"OnChangeVaccine",value:function(e){this.setState({vaccine:e.target.value})}},{key:"OnChangeDate",value:function(e){this.setState({vaccine_date:e.target.value}),this.GetVaccineSessionChild.current.OnChangeDate(e.target.value)}},{key:"OnChangePinCode",value:function(e){this.setState({pin_code:e.target.value,is_valid_pin_code:6===e.target.value.length})}},{key:"SelectVaccinesWithDate",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("select",{className:"form-control no-input-shadow mt-2",value:this.state.vaccine,onChange:this.OnChangeVaccine,children:[Object(a.jsx)("option",{value:"",children:"All Vaccine"}),Object(a.jsx)("option",{value:y.COVAXIN,children:y.COVAXIN}),Object(a.jsx)("option",{value:y.COVISHIELD,children:y.COVISHIELD})]}),Object(a.jsx)(b.a,{className:"no-input-shadow mt-2",placeholder:"Enter start date",type:"date",value:this.state.vaccine_date,onChange:this.OnChangeDate})]})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(m.a,{className:"position-relative",children:[Object(a.jsx)("h5",{children:"Search Vaccine sessions with"}),Object(a.jsxs)(v.a,{defaultActiveKey:"home",transition:!1,id:"noanim-tab-example",children:[Object(a.jsx)(f.a,{eventKey:"home",title:"Pin code",children:Object(a.jsx)("div",{className:"bg-white p-4 justify-content-center d-flex align-items-center",style:{height:300},children:Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)(b.a,{className:"no-input-shadow",placeholder:"Enter pin code",value:this.state.pin_code,onChange:this.OnChangePinCode}),Object(a.jsx)(this.SelectVaccinesWithDate,{}),Object(a.jsx)(x.a,{variant:"primary",className:"form-control mt-4",onClick:this.OnSubmitPinCode,disabled:!this.state.is_valid_pin_code,children:" Find vaccine slots"})]})})}),Object(a.jsx)(f.a,{eventKey:"profile",title:"District",children:Object(a.jsx)("div",{className:"bg-white p-4 justify-content-center d-flex align-items-center",style:{height:300},children:Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("select",{className:"form-control no-input-shadow",placeholder:"Select state",onChange:function(t){e.OnChangeState(t.target.value)},children:this.state.states.map((function(e){return Object(a.jsx)("option",{value:e.state_id,children:e.state_name},e.state_id)}))}),Object(a.jsx)("select",{className:"form-control no-input-shadow mt-2",placeholder:"Select district",value:this.state.district_id,onChange:function(t){e.OnChangeDistrictCode(t.target.value)},children:this.state.districts.map((function(e){return Object(a.jsx)("option",{value:e.district_id,children:e.district_name},e.district_id)}))}),Object(a.jsx)(this.SelectVaccinesWithDate,{}),Object(a.jsx)(x.a,{variant:"primary",className:"form-control mt-4",onClick:this.OnSubmitDistrict,children:" Find vaccine slots"})]})})})]}),Object(a.jsx)(F,{ref:this.googleMapRef}),Object(a.jsx)(G,{ref:this.GetVaccineSessionChild}),Object(a.jsx)("div",{style:{height:400}})]})}}]),n}(i.Component),K=Object(D.b)((function(e){return{user:e.user}}),(function(e){return{setToken:function(t){return e(function(e){return{type:T,payload:e}}(t))}}}))(J),X=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(j.a,{children:Object(a.jsxs)(u.d,{children:[Object(a.jsx)(u.a,{from:"/",to:O.GET_VACCINATION_SESSION,exact:!0}),Object(a.jsx)(u.b,{path:O.GET_VACCINATION_SESSION,exact:!0,component:K})]})})})}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(116),n(117);var Q=n(21),q=n(65),Z=n(81),$=n.n(Z),ee={txn_id:null,token:null},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:return Object(Y.a)(Object(Y.a)({},e),{},{txn_id:t.payload});case T:return Object(Y.a)(Object(Y.a)({},e),{},{token:t.payload});default:return e}},ne="SET_LATITUDE",ae="SET_LONGITUDE",ie={latitude:100,longitude:157},se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(Y.a)(Object(Y.a)({},e),{},{latitude:t.payload});case ae:return Object(Y.a)(Object(Y.a)({},e),{},{longitude:t.payload});default:return e}},ce=Object(Q.b)({user:te,position:se}),re={key:"root",storage:$.a},oe=Object(q.a)(re,ce),le=Object(Q.c)(oe),de=Object(q.b)(le),he=n(82),je=n(83),ue=n(84),Oe=n(24);je.a.add(ue.a,Oe.h,Oe.c,Oe.a,Oe.e,Oe.f,Oe.d,Oe.g,Oe.b),r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(D.a,{store:le,children:Object(a.jsxs)(he.a,{loading:null,persistor:de,children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(X,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e){e.exports=JSON.parse('{"GOOGLE_MAP_API":"AIzaSyDxI8eduQyNzUzqCLnTcD2mm-NHQpBsF30","COWIN_REGISTRATION":"https://selfregistration.cowin.gov.in/"}')},44:function(e){e.exports=JSON.parse('{"REGISTER_OTP":"/v2/auth/generateOTP","CONFIRM_OTP":"/v2/auth/confirmOTP","GET_STATES":"/v2/admin/location/states","GET_DISTRICT":"/v2/admin/location/districts/<DISTRICT>","CALENDAR_BY_PIN_CODE":"/v2/appointment/sessions/public/calendarByPin?pincode=<PINCODE>&date=<DATE>&vaccine=<VACCINE>","CALENDAR_BY_DISTRICT":"/v2/appointment/sessions/public/calendarByDistrict?district_id=<DISTRICT_ID>&date=<DATE>&vaccine=<VACCINE>"}')},45:function(e){e.exports=JSON.parse('{"COWIN_BASE_URL":"https://cdn-api.co-vin.in/api","API_KEY":"3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi","GMAIL_API_CLIENT_ID":"670845801161-bj69no3o6lm0p0qfk7m7itk6jv23fa5a.apps.googleusercontent.com"}')},46:function(e){e.exports=JSON.parse('{"COVISHIELD":"COVISHIELD","COVAXIN":"COVAXIN"}')},60:function(e){e.exports=JSON.parse('{"REGISTER_OTP":"/cowin/authenticateOtp","GET_VACCINATION_SESSION":"/cowin/vaccine/sessions"}')},91:function(e,t,n){}},[[122,1,2]]]);
//# sourceMappingURL=main.5d4031e2.chunk.js.map