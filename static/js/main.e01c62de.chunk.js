(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,n){e.exports={Cockpit:"Cockpit__Cockpit__iuz7I",red:"Cockpit__red__3H17r",green:"Cockpit__green__34Nyi",bold:"Cockpit__bold__uRU0B"}},function(e,t,n){e.exports={Person:"Person__Person__37wpp",paragraph:"Person__paragraph__OV4NY"}},,,,function(e,t,n){e.exports={App:"App__App__2NQx7"}},function(e,t,n){e.exports=n(19)},,,,,,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(10),s=n.n(r),c=(n(18),n(8)),i=n(1),l=n(2),u=n(4),p=n(3),h=n(5),d=n(11),m=n.n(d),g=n(7),f=n.n(g),k=function(e){return e.children},v=function(e,t){return function(n){return o.a.createElement("div",{className:t},o.a.createElement(e,n))}},b=v(function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement(k,null,o.a.createElement("p",{onClick:this.props.clicked,className:f.a.paragraph},"I'm ",this.props.name," and I am ",this.props.age," years old!"),o.a.createElement("input",{type:"text",onChange:this.props.changed}))}}]),t}(a.Component),f.a.Person),C=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(p.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getSnapshotBeforeUpdate",value:function(e,t){return{message:"Snapshot!"}}},{key:"componentDidUpdate",value:function(e,t,n){}},{key:"componentWillUnmount",value:function(){}},{key:"render",value:function(){var e=this;return this.props.person.map(function(t,n){return o.a.createElement(b,{key:t.id,name:t.name,age:t.age,clicked:e.props.clicked.bind(e,n),changed:function(n){return e.props.changed(n,t.id)}})})}}]),t}(a.PureComponent),_=n(6),w=n.n(_),y=o.a.memo(function(e){Object(a.useEffect)(function(){return setTimeout(function(){alert("Saved data to cloud!")},1e3),function(){}},[]),Object(a.useEffect)(function(){return function(){return null}});var t=[];e.personsLenght<=2&&t.push(w.a.red),e.personsLenght<2&&t.push(w.a.bold);var n="";return e.show&&(n=w.a.red),o.a.createElement("div",{className:w.a.Cockpit},o.a.createElement("h1",null,e.title),o.a.createElement("p",{className:t.join(" ")},"This is really working!!! :O"),o.a.createElement("button",{className:n,onClick:e.toggle},"Toggle Persons"))}),O=v(function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,o=new Array(a),r=0;r<a;r++)o[r]=arguments[r];return(n=Object(u.a)(this,(e=Object(p.a)(t)).call.apply(e,[this].concat(o)))).state={person:[{id:"aaa",name:"Max",age:28},{id:"aab",name:"Manu",age:29},{id:"abb",name:"Stephanie",age:27}],otherState:"some other value hey",showPersons:!1,showCockpit:!0,changeCounter:0},n.deletePersonHandler=function(e){var t=Object(c.a)(n.state.person);t.splice(e,1),n.setState({person:t})},n.nameChangedHandler=function(e,t){var a=n.state.person.findIndex(function(e){return e.id===t}),o=Object(c.a)(n.state.person);o[a].name=e.target.value,n.setState(function(e,t){return{person:o,changeCounter:e.changeCounter+1}}),console.log(n.state.changeCounter)},n.togglePersonsHandler=function(){var e=n.state.showPersons;n.setState({showPersons:!e})},n.toggleCockpitHandler=function(){var e=n.state.showCockpit;n.setState({showCockpit:!e})},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(){}},{key:"shouldComponentUpdate",value:function(e,t){return!0}},{key:"render",value:function(){var e=null,t=o.a.createElement("div",null,o.a.createElement(y,{title:this.props.appTitle,personsLenght:this.state.person.length,show:this.state.showPersons,toggle:this.togglePersonsHandler}));return this.state.showPersons&&(e=o.a.createElement("div",null,o.a.createElement(C,{person:this.state.person,clicked:this.deletePersonHandler,changed:this.nameChangedHandler}))),this.state.showCockpit||(t=null),o.a.createElement(k,null,o.a.createElement("button",{onClick:this.toggleCockpitHandler},"Remove Cockpit"),t,e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){return t}}]),t}(a.Component),m.a.App);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(O,{appTitle:"Person Manager"}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.e01c62de.chunk.js.map