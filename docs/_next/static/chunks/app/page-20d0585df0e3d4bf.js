(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{3486:function(e,n,t){Promise.resolve().then(t.bind(t,6911))},6911:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return r}});var i=t(3827),s=t(9107),l=t(4090);function r(){let[e,n]=(0,l.useState)([]),[t,r]=(0,l.useState)("$ "),o=t=>{let i=t.trim().split(" "),s=[...e,"$ "+t],l={echo:(e,t)=>{n([...t,e.replace("echo ","")])},clear:(e,t)=>{n([])},help:(e,t)=>{n([...t,"Available Commands:\n"+Object.keys(l).sort().map(e=>"	- "+e).join("\n")])},github:(e,t)=>{open("https://github.com/BowlBird"),n([...t])},linkedin:(e,t)=>{open("https://www.linkedin.com/in/carson-miller-295571253/"),n([...t])},resume:(e,t)=>{open("https://drive.google.com/file/d/1Ybb_2QpkmsaQ9wy9z4rZo6Sed88w75oW/view?usp=sharing"),n([...t])}};try{(0,l[i[0]])(t,s)}catch(e){n([...s,"Unrecognized command."])}};return(0,l.useEffect)(()=>{let e=e=>{if(e.key){var n;null===(n=document.getElementById("input"))||void 0===n||n.focus()}};return window.addEventListener("keydown",e),()=>window.removeEventListener("keydown",e)},[]),(0,i.jsxs)("div",{className:"m-1 mt-40",children:[e.map((e,n)=>(0,i.jsx)("div",{className:"history",children:e},n)),(0,i.jsx)("div",{className:"flex",children:(0,i.jsx)(s.Y,{value:t,onValueChange:e=>{if("$ "==e.substring(0,2)){if("\n"!=e[e.length-1]){r(e);return}r("$ "),o(e.substring(2))}},spellCheck:"false",className:"w-full",id:"input",type:"text"})})]})}}},function(e){e.O(0,[107,971,69,744],function(){return e(e.s=3486)}),_N_E=e.O()}]);