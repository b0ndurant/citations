(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,t,a){e.exports=a(43)},22:function(e,t,a){},23:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),c=a(9),i=a.n(c),s=(a(22),a(10)),r=a(11),l=a(14),m=a(12),u=a(15),d=(a(23),a(13)),h=a.n(d),v=function(e){function t(e){var a;return Object(s.a)(this,t),(a=Object(l.a)(this,Object(m.a)(t).call(this,e))).randomColor=function(){var e=a.state.colors;return e[Math.floor(Math.random()*e.length)]},a.nextQuote=function(){h.a.get("https://cors-anywhere.herokuapp.com/".concat("https://kaamelott.chaudie.re/api/random/personnage/Perceval")).then(function(e){a.setState({author:e.data.citation.infos.personnage,citation:e.data.citation.citation,episode:e.data.citation.infos.episode,color:a.randomColor()})}).catch(function(e){console.log(e)})},a.state={author:"",citation:"",episode:"",colors:["blue","red","blueLight","green","gray"],color:""},a}return Object(u.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){this.nextQuote()}},{key:"render",value:function(){return o.a.createElement("div",{className:"citation "+this.state.color},o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column"},o.a.createElement("h1",{className:"title is-1 has-text-centered"},"Random Citations"))),o.a.createElement("div",{className:"columns is-centered"},o.a.createElement("div",{className:"column is-10 "},o.a.createElement("div",{className:"columns"},o.a.createElement("h4",{className:"column is-size-4 has-text-weight-bold"},"episode : ",this.state.episode)),o.a.createElement("div",{className:"columns"},o.a.createElement("div",{className:"column has-text-centered is-size-5 is-capitalized is-italic"},"citation : ",this.state.citation)),o.a.createElement("div",{className:"columns"},o.a.createElement("h4",{className:"column has-text-right is-size-4 has-text-weight-bold"},'" ',this.state.author,' "')))),o.a.createElement("div",{className:"columns is-centered"},o.a.createElement("div",{className:"column is-1"},o.a.createElement("button",{className:"button is-success is-hovered is-medium",onClick:this.nextQuote},"Next Quote"))))}}]),t}(n.Component);var p=function(){return o.a.createElement(v,null)};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[16,1,2]]]);
//# sourceMappingURL=main.e5f286dd.chunk.js.map