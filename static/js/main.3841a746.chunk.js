(this.webpackJsonpuser_profile=this.webpackJsonpuser_profile||[]).push([[0],[,,,,,,function(e,a,t){e.exports=t.p+"static/media/arrow-left-solid.713fe29d.svg"},function(e,a,t){e.exports=t(20)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},function(e,a,t){},,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n,r=t(0),c=t.n(r),l=t(5),i=t.n(l),o=(t(12),t(1)),s=t(3),m=(t(13),t(6)),u=t.n(m),f=(n=function(){return c.a.createElement("div",{className:"header_title"},"People")},function(e){var a=e.showProfile,t=null;return a.show&&(t=c.a.createElement("div",{className:"back_button",onClick:a.backHandler},c.a.createElement("img",{src:u.a,alt:"Back",className:"back_button_shown"}))),c.a.createElement(c.a.Fragment,null,t,c.a.createElement(n,null))}),d=function(e){var a=e.showProfile;return c.a.createElement("header",null,c.a.createElement("div",{className:"container clearfix"},c.a.createElement(f,{showProfile:a})))},h=(t(14),function(e){var a=e.userInfo,t=e.onClick,n=e.index,r=a.lastName,l=a.firstName,i=a.profileImage;return c.a.createElement("div",{className:"list_item_wrapper clearfix",onClick:function(){return t(n)}},c.a.createElement("img",{className:"list_item_image",src:i,alt:"profile_image"}),c.a.createElement("div",{className:"list_item_info"},c.a.createElement("div",null,"".concat(l," ").concat(r))))}),p=function(e){var a=e.users,t=e.onClick;return c.a.createElement("div",{className:"contact_list container"},a.length>0&&a.map((function(e,a){return c.a.createElement(h,{key:e.id,userInfo:e,onClick:function(e){return t(e)},index:a})})))},E=(t(15),function(e){return c.a.createElement("div",{className:"search_wrapper"},c.a.createElement("div",{className:"container"},c.a.createElement("input",{className:"search_item",type:"text",name:"item",onChange:function(a){var t=a.target.value;e.handleSearch(t)},placeholder:"Search"})))}),v=(t(16),function(e){var a=e.userInfo,t=a.email,n=a.phone,r=a.address,l=a.lastName,i=a.firstName,o=a.profileImage;return c.a.createElement("div",{className:"profile_wrapper container"},c.a.createElement("div",{className:"profile_image_wrapper",style:{backgroundImage:"url(".concat(o,")")}},c.a.createElement("img",{className:"profile_image",src:o,alt:"profile_image"})),c.a.createElement("div",{className:"profile_info"},c.a.createElement("div",{className:"profile_info_title"},"Basic Info"),c.a.createElement("div",null,"name",c.a.createElement("span",null,"".concat(i," ").concat(l))),c.a.createElement("div",null,"email",c.a.createElement("span",null,c.a.createElement("a",{href:"mailto:".concat(t),title:"Send mail"},t))),c.a.createElement("div",null,"phone",c.a.createElement("span",{title:"Call"},c.a.createElement("a",{href:"tel:".concat(n)},n)))),c.a.createElement("div",{className:"profile_info"},c.a.createElement("div",{className:"profile_info_title"},"Address Details"),Object.keys(r).map((function(e,a){return c.a.createElement("div",{key:a},e,c.a.createElement("span",null,r[e]))}))))}),w=t(2),_=t.n(w),N=(t(18),function(e){return function(a){var t=a.showProfile,n=Object(s.a)(a,["showProfile"]);return t&&t.show?c.a.createElement(v,{userInfo:a.users[t.id]}):c.a.createElement(e,n)}}(function(e){return function(a){var t=a.search,n=Object(s.a)(a,["search"]);return c.a.createElement(c.a.Fragment,null,c.a.createElement(E,{handleSearch:t}),c.a.createElement("div",{className:"has_search"},c.a.createElement(e,n)))}}(p))),b=function(){var e=Object(r.useState)([]),a=Object(o.a)(e,2),t=a[0],n=a[1];Object(r.useEffect)((function(){}),[]);var l=Object(r.useState)([]),i=Object(o.a)(l,2),s=i[0],m=i[1];Object(r.useEffect)((function(){(function(){var e;return _.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,_.a.awrap(fetch("https://cors-anywhere.herokuapp.com/https://mock-io.herokuapp.com/users").then((function(e){return e.json()})));case 2:return e=a.sent,a.abrupt("return",e);case 4:case"end":return a.stop()}}))})().then((function(e){m(e),n(e)}))}),[]);var u=Object(r.useState)({}),f=Object(o.a)(u,2),h=f[0],p=f[1];Object(r.useEffect)((function(){}),[]);var E=function(){p({show:!1})};return c.a.createElement("div",{className:"Main"},c.a.createElement(d,{showProfile:h}),c.a.createElement("div",{className:"below_header"},c.a.createElement(N,{users:t,onClick:function(e){p({show:!0,id:e,backHandler:E})},showProfile:h,backHandler:E,search:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";n(s&&s.filter((function(a){return a.firstName.toLowerCase().includes(e.toLowerCase())||a.lastName.toLowerCase().includes(e.toLowerCase())})))}})))},g=(t(19),function(){return c.a.createElement("div",{className:"App"},c.a.createElement(b,null))});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(c.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[7,1,2]]]);
//# sourceMappingURL=main.3841a746.chunk.js.map