(this["webpackJsonpcowin-vaccine"]=this["webpackJsonpcowin-vaccine"]||[]).push([[0],{116:function(e,t,n){},121:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),s=n.n(i),c=n(7),r=n.n(c),o=n(19),l=n(20),d=n(28),h=n(26),j=n(54),u=n(9),O=(n(90),n(11)),p=n(137),b=n(132),m=n(136),v=n(133),f=n(129),x=n(44),g=n(57),_=n.n(g),C=n(45),S=n(46),y=n(30),D=n.n(y),k=n(55),N="SET_TXN_ID",I="SET_USER_TOKEN",T=n(126),E=n(127),A=n(134),w=n(128),M=n(40),R=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){var e;Object(o.a)(this,n);for(var a=arguments.length,i=new Array(a),s=0;s<a;s++)i[s]=arguments[s];return(e=t.call.apply(t,[this].concat(i))).state={centers:[],week:[0,1,2,3,4,5,6].map((function(e){return D()().add(e,"day").format("DD-MM-YY")}))},e}return Object(l.a)(n,[{key:"OnChangeDate",value:function(e){this.setState({week:[0,1,2,3,4,5,6].map((function(t){return D()(e,"YYYY-MM-DD").add(t,"day").format("DD-MM-YY")}))})}},{key:"SetCenters",value:function(e){this.setState({centers:e})}},{key:"render",value:function(){var e=this;return Object(a.jsx)("div",{className:"bg-light",children:Object(a.jsxs)(T.a,{striped:!0,bordered:!0,hover:!0,children:[Object(a.jsx)("thead",{children:Object(a.jsxs)("tr",{children:[Object(a.jsx)("th",{children:"Name"}),this.state.week.map((function(e){return Object(a.jsx)("th",{children:e},"th-"+e)}))]})}),Object(a.jsx)("tbody",{children:this.state.centers.map((function(t){return Object(a.jsxs)("tr",{children:[Object(a.jsx)("td",{children:Object(a.jsxs)("div",{children:[Object(a.jsxs)("div",{className:"font-weight-bolder",children:[t.name,Object(a.jsxs)("sup",{className:"small",children:[" ",Object(a.jsx)(E.a,{variant:"secondary",children:t.fee_type})]})]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.address,", ",t.block_name]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.district_name,", ",t.state_name,", ",t.pincode]})]})}),e.state.week.map((function(e){var n=t.sessions.findIndex((function(t){return t.date===D()(e,"DD-MM-YY").format("DD-MM-YYYY")}));return n>=0?Object(a.jsx)("td",{children:Object(a.jsxs)("div",{children:[Object(a.jsx)("span",{className:"",children:t.sessions[n].vaccine}),Object(a.jsxs)("p",{className:"small m-0 text-danger",children:["For ",t.sessions[n].min_age_limit,"+"]}),t.sessions[n].available_capacity?Object(a.jsx)(A.a,{overlay:Object(a.jsxs)(w.a,{children:["Slots: ",t.sessions[n].slots.join(", ")]}),children:Object(a.jsx)("a",{href:M.COWIN_REGISTRATION,target:"_blank",rel:"noreferrer",children:Object(a.jsxs)(f.a,{variant:"success p-1","data-toggle":"tooltip","data-placement":"top",title:"Tooltip on top",children:["Book ",Object(a.jsx)("sup",{children:Object(a.jsx)(E.a,{variant:"primary",children:t.sessions[n].available_capacity})})]})})}):Object(a.jsx)(f.a,{variant:"danger p-0",children:"Booked"})]})}):Object(a.jsx)("td",{})}))]},t.center_id)}))})]})})}}]),n}(i.Component),Y=n(16),B=n(84),G=n(135),V=n(130),L=n(131),P=n(61),H=n.n(P),W=function(){return Object(a.jsx)("div",{children:Object(a.jsx)("div",{className:"bg-primary",style:{height:18,width:18,borderRadius:18,border:"2px solid #fff"}})})};function U(e){return Object(a.jsxs)(G.a,Object(Y.a)(Object(Y.a)({},e),{},{size:"lg","aria-labelledby":"contained-modal-title-vcenter",centered:!0,children:[Object(a.jsx)(G.a.Header,{closeButton:!0,children:Object(a.jsx)(G.a.Title,{id:"contained-modal-title-vcenter",children:"Set Tracking Notification"})}),Object(a.jsx)(G.a.Body,{children:Object(a.jsx)("p",{children:"Coming soon"})}),Object(a.jsx)(G.a.Footer,{children:Object(a.jsx)(f.a,{onClick:e.onHide,children:"Close"})})]}))}var z=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={my_position:{lat:12.97,lng:77.59},map_center:{lat:12.97,lng:77.59},map_zoom:10,selected_center:{},maps_data:{},markers:[],modalShow:!1},a.HandleApiLoaded=function(e,t){a.setState({maps_data:{map:e,maps:t}})},a.OnMouseHoverOnHospital=a.OnMouseHoverOnHospital.bind(Object(O.a)(a)),a.OnClickCenterBox=a.OnClickCenterBox.bind(Object(O.a)(a)),a}return Object(l.a)(n,[{key:"UpdateMarkers",value:function(e){this.setState({markers:e}),this.DrawMarkersOnMap()}},{key:"componentDidMount",value:function(){var e=this;navigator.geolocation.getCurrentPosition((function(t){e.setState({my_position:{lat:t.coords.latitude,lng:t.coords.longitude},map_center:{lat:t.coords.latitude,lng:t.coords.longitude}})}))}},{key:"OnMouseHoverOnHospital",value:function(e,t){t.center&&t.center.name&&this.setState({selected_center:t.center})}},{key:"DrawMarkersOnMap",value:function(){var e=this;this.state.markers.forEach((function(t){var n=e.state.maps_data.map,a=new e.state.maps_data.maps.Marker({position:{lat:t.lat,lng:t.long},map:n,title:t.name,label:{text:"H",color:"white",fontWeight:"bold"}});a.addListener("click",(function(){})),a.addListener("mouseover",(function(){e.SetActiveCenterBox(t.center_id)}))}))}},{key:"SetDirection",value:function(e){var t=new this.state.maps_data.maps.DirectionsService,n=new this.state.maps_data.maps.DirectionsRenderer;n.setMap(this.state.maps_data.map);var a={origin:this.state.my_position,destination:e,travelMode:this.state.maps_data.maps.TravelMode.DRIVING};t.route(a,(function(e,t){"OK"===t&&n.setDirections(e)}))}},{key:"SetActiveCenterBox",value:function(e){H()(".center-box").removeClass("border-primary"),H()("#center-"+e).addClass("border-primary")}},{key:"OnClickCenterBox",value:function(e){this.SetActiveCenterBox(e.center_id),this.setState({map_center:{lat:e.lat,lng:e.long},map_zoom:8.5})}},{key:"SetModalShow",value:function(e){this.setState({modalShow:e})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)("section",{children:[Object(a.jsxs)(V.a,{children:[Object(a.jsx)(L.a,{md:9,className:"",children:this.state.markers.length>0&&Object(a.jsx)("div",{style:{height:600,width:"100%"},className:"shadow-sm",children:Object(a.jsx)(B.a,{bootstrapURLKeys:{key:M.GOOGLE_MAP_API,language:"en"},defaultCenter:{lat:12.97,lng:77.59},center:this.state.map_center,defaultZoom:10,zoom:this.state.map_zoom,yesIWantToUseGoogleMapApiInternals:!0,onGoogleApiLoaded:function(t){var n=t.map,a=t.maps;return e.HandleApiLoaded(n,a)},onChildMouseEnter:this.OnMouseHoverOnHospital,children:Object(a.jsx)(W,{lat:this.state.my_position.lat,lng:this.state.my_position.lng})})})}),Object(a.jsx)(L.a,{md:3,style:{maxHeight:600,overflowY:"auto"},children:this.state.markers.map((function(t){return Object(a.jsx)(L.a,{className:"p-0 py-1",children:Object(a.jsxs)("div",{className:"p-1 shadow rounded border center-box",id:"center-"+t.center_id,onClick:function(){e.OnClickCenterBox(t)},children:[Object(a.jsxs)("b",{children:[t.name," ",Object(a.jsx)("sup",{children:t.sessions[0].available_capacity?Object(a.jsx)(E.a,{variant:"primary",children:t.sessions[0].available_capacity}):Object(a.jsx)(E.a,{variant:"danger",children:"Booked"})})]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.address,", ",t.block_name]}),Object(a.jsxs)("p",{className:"text-secondary small m-0",children:[t.district_name,", ",t.state_name,", ",t.pincode]}),Object(a.jsx)("div",{className:"text-primary btn px-0",onClick:function(){e.SetDirection({lat:t.lat,lng:t.long})},children:"Show direction on map"}),t.sessions.map((function(e){return Object(a.jsxs)("div",{className:"font-weight-bolder",children:[Object(a.jsxs)("span",{className:"small font-weight-bold",children:[e.date," [",e.vaccine,"] "," "," "]}),e.available_capacity?Object(a.jsx)("a",{href:M.COWIN_REGISTRATION,target:"_blank",rel:"noreferrer",children:Object(a.jsx)(E.a,{variant:"primary",className:"btn",children:"Book"})}):Object(a.jsx)(E.a,{variant:"danger",children:"Booked"})]})})),Object(a.jsx)(E.a,{variant:"primary",className:"btn p-1 m-1",onClick:function(){e.SetModalShow(!0)},children:" Set Tracking"})]})},"center-"+t.center_id)}))})]}),Object(a.jsx)(U,{show:this.state.modalShow,onHide:function(){return e.SetModalShow(!1)}})]})}}]),n}(i.Component),F=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={is_unmounted:!1,pin_code:"",district_id:"1",is_valid_pin_code:!1,vaccine:"",vaccine_date:D()().format("YYYY-MM-DD"),states:[],districts:[],centers:[]},a.options={headers:{"Content-Type":"application/json",Accept:"application/json",Authorization:"Bearer "+a.props.user.token}},a.GetState=a.GetState.bind(Object(O.a)(a)),a.OnChangeState=a.OnChangeState.bind(Object(O.a)(a)),a.OnChangeDate=a.OnChangeDate.bind(Object(O.a)(a)),a.OnChangePinCode=a.OnChangePinCode.bind(Object(O.a)(a)),a.OnChangeDistrictCode=a.OnChangeDistrictCode.bind(Object(O.a)(a)),a.OnChangeVaccine=a.OnChangeVaccine.bind(Object(O.a)(a)),a.SelectVaccinesWithDate=a.SelectVaccinesWithDate.bind(Object(O.a)(a)),a.OnSubmitPinCode=a.OnSubmitPinCode.bind(Object(O.a)(a)),a.OnSubmitDistrict=a.OnSubmitDistrict.bind(Object(O.a)(a)),a.GetVaccineSessionChild=s.a.createRef(),a.googleMapRef=s.a.createRef(),a}return Object(l.a)(n,[{key:"componentDidMount",value:function(){this.GetState(),this.OnChangeState(1)}},{key:"componentWillUnmount",value:function(){this.setState({is_unmounted:!0})}},{key:"GetState",value:function(){var e=this;_.a.get(C.COWIN_BASE_URL+x.GET_STATES,this.options).then((function(t){200===t.status&&t.data.states.length>0?e.setState({states:t.data.states}):console.log(t)})).catch((function(e){return console.error(e)}))}},{key:"OnChangeState",value:function(e){var t=this;_.a.get(C.COWIN_BASE_URL+x.GET_DISTRICT.replace("<DISTRICT>",e),this.options).then((function(e){200===e.status&&e.data.districts.length>0?t.setState({districts:e.data.districts}):console.error(e)})).catch((function(e){return console.error(e)}))}},{key:"OnChangeDistrictCode",value:function(e){this.setState({district_id:e})}},{key:"OnSubmitPinCode",value:function(){if(6===this.state.pin_code.length){var e=D()(this.state.vaccine_date).format("DD-MM-YYYY");this.GetCenters(C.COWIN_BASE_URL+x.CALENDAR_BY_PIN_CODE.replace("<PINCODE>",this.state.pin_code).replace("<DATE>",e).replace("<VACCINE>",this.state.vaccine))}}},{key:"OnSubmitDistrict",value:function(){if(!(this.state.district_id.length<=0)){var e=D()(this.state.vaccine_date).format("DD-MM-YYYY");this.GetCenters(C.COWIN_BASE_URL+x.CALENDAR_BY_DISTRICT.replace("<DISTRICT_ID>",this.state.district_id).replace("<DATE>",e).replace("<VACCINE>",this.state.vaccine))}}},{key:"GetCenters",value:function(e){var t=this;_.a.get(e,this.options).then((function(e){200===e.status&&e.data.centers&&(t.setState({centers:e.data.centers}),t.GetVaccineSessionChild.current.SetCenters(t.state.centers),t.googleMapRef.current.UpdateMarkers(t.state.centers))})).catch((function(e){e.response&&401===e.response.status&&t.props.setToken(null),console.error(e)}))}},{key:"OnChangeVaccine",value:function(e){this.setState({vaccine:e.target.value})}},{key:"OnChangeDate",value:function(e){this.setState({vaccine_date:e.target.value}),this.GetVaccineSessionChild.current.OnChangeDate(e.target.value)}},{key:"OnChangePinCode",value:function(e){this.setState({pin_code:e.target.value,is_valid_pin_code:6===e.target.value.length})}},{key:"SelectVaccinesWithDate",value:function(){return Object(a.jsxs)("div",{children:[Object(a.jsxs)("select",{className:"form-control no-input-shadow mt-2",value:this.state.vaccine,onChange:this.OnChangeVaccine,children:[Object(a.jsx)("option",{value:"",children:"All Vaccine"}),Object(a.jsx)("option",{value:S.COVAXIN,children:S.COVAXIN}),Object(a.jsx)("option",{value:S.COVISHIELD,children:S.COVISHIELD})]}),Object(a.jsx)(p.a,{className:"no-input-shadow mt-2",placeholder:"Enter start date",type:"date",value:this.state.vaccine_date,onChange:this.OnChangeDate})]})}},{key:"render",value:function(){var e=this;return Object(a.jsxs)(b.a,{className:"position-relative",children:[Object(a.jsx)("h5",{children:"Search Vaccine sessions with"}),Object(a.jsxs)(m.a,{defaultActiveKey:"home",transition:!1,id:"noanim-tab-example",children:[Object(a.jsx)(v.a,{eventKey:"home",title:"Pin code",children:Object(a.jsx)("div",{className:"bg-white p-4 justify-content-center d-flex align-items-center",style:{height:300},children:Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)(p.a,{className:"no-input-shadow",placeholder:"Enter pin code",value:this.state.pin_code,onChange:this.OnChangePinCode}),Object(a.jsx)(this.SelectVaccinesWithDate,{}),Object(a.jsx)(f.a,{variant:"primary",className:"form-control mt-4",onClick:this.OnSubmitPinCode,disabled:!this.state.is_valid_pin_code,children:" Find vaccine slots"})]})})}),Object(a.jsx)(v.a,{eventKey:"profile",title:"District",children:Object(a.jsx)("div",{className:"bg-white p-4 justify-content-center d-flex align-items-center",style:{height:300},children:Object(a.jsxs)("div",{className:"col-md-6",children:[Object(a.jsx)("select",{className:"form-control no-input-shadow",placeholder:"Select state",onChange:function(t){e.OnChangeState(t.target.value)},children:this.state.states.map((function(e){return Object(a.jsx)("option",{value:e.state_id,children:e.state_name},e.state_id)}))}),Object(a.jsx)("select",{className:"form-control no-input-shadow mt-2",placeholder:"Select district",value:this.state.district_id,onChange:function(t){e.OnChangeDistrictCode(t.target.value)},children:this.state.districts.map((function(e){return Object(a.jsx)("option",{value:e.district_id,children:e.district_name},e.district_id)}))}),Object(a.jsx)(this.SelectVaccinesWithDate,{}),Object(a.jsx)(f.a,{variant:"primary",className:"form-control mt-4",onClick:this.OnSubmitDistrict,children:" Find vaccine slots"})]})})})]}),Object(a.jsx)(z,{ref:this.googleMapRef}),Object(a.jsx)(R,{ref:this.GetVaccineSessionChild}),Object(a.jsx)("div",{style:{height:400}})]})}}]),n}(i.Component),K=Object(k.b)((function(e){return{user:e.user}}),(function(e){return{setToken:function(t){return e(function(e){return{type:I,payload:e}}(t))}}}))(F),J=function(e){Object(d.a)(n,e);var t=Object(h.a)(n);function n(){return Object(o.a)(this,n),t.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsx)("div",{className:"App",children:Object(a.jsx)(j.a,{children:Object(a.jsx)(u.c,{children:Object(a.jsx)(u.a,{path:"",exact:!0,component:K})})})})}}]),n}(i.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(115),n(116);var X=n(21),Q=n(64),q=n(80),Z=n.n(q),$={txn_id:null,token:null},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case N:return Object(Y.a)(Object(Y.a)({},e),{},{txn_id:t.payload});case I:return Object(Y.a)(Object(Y.a)({},e),{},{token:t.payload});default:return e}},te="SET_LATITUDE",ne="SET_LONGITUDE",ae={latitude:100,longitude:157},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case te:return Object(Y.a)(Object(Y.a)({},e),{},{latitude:t.payload});case ne:return Object(Y.a)(Object(Y.a)({},e),{},{longitude:t.payload});default:return e}},se=Object(X.b)({user:ee,position:ie}),ce={key:"root",storage:Z.a},re=Object(Q.a)(ce,se),oe=Object(X.c)(re),le=Object(Q.b)(oe),de=n(81),he=n(82),je=n(83),ue=n(24);he.a.add(je.a,ue.h,ue.c,ue.a,ue.e,ue.f,ue.d,ue.g,ue.b),r.a.render(Object(a.jsx)(s.a.StrictMode,{children:Object(a.jsx)(k.a,{store:oe,children:Object(a.jsxs)(de.a,{loading:null,persistor:le,children:[Object(a.jsx)(j.a,{}),Object(a.jsx)(J,{})]})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e){e.exports=JSON.parse('{"GOOGLE_MAP_API":"AIzaSyDxI8eduQyNzUzqCLnTcD2mm-NHQpBsF30","COWIN_REGISTRATION":"https://selfregistration.cowin.gov.in/"}')},44:function(e){e.exports=JSON.parse('{"REGISTER_OTP":"/v2/auth/generateOTP","CONFIRM_OTP":"/v2/auth/confirmOTP","GET_STATES":"/v2/admin/location/states","GET_DISTRICT":"/v2/admin/location/districts/<DISTRICT>","CALENDAR_BY_PIN_CODE":"/v2/appointment/sessions/public/calendarByPin?pincode=<PINCODE>&date=<DATE>&vaccine=<VACCINE>","CALENDAR_BY_DISTRICT":"/v2/appointment/sessions/public/calendarByDistrict?district_id=<DISTRICT_ID>&date=<DATE>&vaccine=<VACCINE>"}')},45:function(e){e.exports=JSON.parse('{"COWIN_BASE_URL":"https://cdn-api.co-vin.in/api","API_KEY":"3sjOr2rmM52GzhpMHjDEE1kpQeRxwFDr4YcBEimi","GMAIL_API_CLIENT_ID":"670845801161-bj69no3o6lm0p0qfk7m7itk6jv23fa5a.apps.googleusercontent.com"}')},46:function(e){e.exports=JSON.parse('{"COVISHIELD":"COVISHIELD","COVAXIN":"COVAXIN"}')},90:function(e,t,n){}},[[121,1,2]]]);
//# sourceMappingURL=main.76a42241.chunk.js.map