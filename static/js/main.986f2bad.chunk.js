(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,function(e,t,a){e.exports={BreadBottom:"BurgerIngredient__BreadBottom__HuxZP",BreadTop:"BurgerIngredient__BreadTop__10-cT",Seeds1:"BurgerIngredient__Seeds1__3xHtz",Seeds2:"BurgerIngredient__Seeds2__1cUso",Meat:"BurgerIngredient__Meat__13nAN",Cheese:"BurgerIngredient__Cheese__1FxeY",Salad:"BurgerIngredient__Salad__1iTJE",Bacon:"BurgerIngredient__Bacon__3vrAI"}},,,,,,,,function(e,t,a){e.exports={Content:"Layout__Content__LhJtv"}},function(e,t,a){e.exports={Burger:"Burger__Burger__3K4F-"}},,function(e,t,a){e.exports=a(19)},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),o=a.n(c),i=(a(18),a(2)),l=a(3),s=a(5),u=a(4),d=a(6),m=function(e){return e.children},_=a(9),b=a.n(_),g=function(e){return r.a.createElement(m,null,r.a.createElement("div",null,"Toolbar, SideDrawer, Backdrop"),r.a.createElement("main",{className:b.a.Content},e.children))},p=a(11),h=a(10),B=a.n(h),v=a(1),E=a.n(v),f=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=null;switch(this.props.type){case"bread-bottom":e=r.a.createElement("div",{className:E.a.BreadBottom});break;case"bread-top":e=r.a.createElement("div",{className:E.a.BreadTop},r.a.createElement("div",{className:E.a.Seeds1}),r.a.createElement("div",{className:E.a.Seeds2}));break;case"meat":e=r.a.createElement("div",{className:E.a.Meat});break;case"bacon":e=r.a.createElement("div",{className:E.a.Bacon});break;case"salad":e=r.a.createElement("div",{className:E.a.Salad});break;case"cheese":e=r.a.createElement("div",{className:E.a.Cheese});break;default:e=null}return e}}]),t}(n.Component),j=function(e){var t=Object.keys(e.ingredients).map(function(t){return Object(p.a)(Array(e.ingredients[t])).map(function(e,a){return r.a.createElement(f,{key:t+a,type:t})})}).reduce(function(e,t){return e.concat(t)},[]);return 0===t.length&&(t=r.a.createElement("p",null,"Please start adding ingredients")),console.log(t),r.a.createElement("div",{className:B.a.Burger},r.a.createElement(f,{type:"bread-top"}),t,r.a.createElement(f,{type:"bread-bottom"}))},y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={ingredients:{salad:0,bacon:0,cheese:0,meat:0}},a}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(m,null,r.a.createElement(j,{ingredients:this.state.ingredients}),r.a.createElement("div",null,"Build Controls"))}}]),t}(n.Component),O=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(g,null,r.a.createElement(y,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[12,1,2]]]);
//# sourceMappingURL=main.986f2bad.chunk.js.map