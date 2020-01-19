(this["webpackJsonpmaths-elo"]=this["webpackJsonpmaths-elo"]||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),s=a.n(o),c=a(23),i=a(12),l=(a(69),a(26)),u=a(108),m=(a(70),a(15)),d=a(17),h=a.n(d),f=function(e){return{type:"CHANGE_ACTIVE_SCREEN",newScreen:e}},g=a(34),p=a.n(g),b="metricConversion",E="TimeConversion",w="MultiplyNumbers",y="PercentOf",v="PercentChange",A="ReversePercentage",R="Vocab",k="Ratio",q="Algebra01",O=[b,E,w,y,v,A,R,k,q].sort(),T=["zeroQ",{large:["metres","m"],small:["centimetres","cm"],ratio:100},{large:["metres","m"],small:["millimetres","mm"],ratio:1e3},{large:["kilometres","Km"],small:["metres","m"],ratio:1e3},{large:["grams","g"],small:["milligrams","mg"],ratio:1e3},{large:["kilograms","Kg"],small:["grams","g"],ratio:1e3},{large:["litres","L"],small:["centilitres","cL"],ratio:100},{large:["litres","L"],small:["millimetres","mL"],ratio:1e3}],j=function(e){var t=Number(e)||Math.floor(Math.random()*(T.length-1))+1,a=T[t],n=Math.random()<.5,r=Math.random()<.25?1:Math.random()<.8?10:100,o=Math.floor(Math.random()*a.ratio)*r,s=o/a.ratio;return n?{q:"Convert "+o+a.small[1]+" to "+a.large[0],a:""+s,QType:b+"-"+t}:{q:"Convert "+s+a.large[1]+" to "+a.small[0],a:""+o,QType:b+"-"+t}},N=function(e,t,a){return 3600*e+60*t+a},Q=["null","secMin","secMinHr"],C=function(e){return Math.floor(Math.random()*e)},S=function(e){var t,a,n,r,o=Number(e)||Math.floor(Math.random()*(Q.length-1))+1,s=Math.random()<0,c=C(60),i=C(60),l=C(24);switch(Q[o]){case"secMin":0===i&&i++;var u=N(0,i,c);t=""+u,a=i+"min "+c+"sec",n="seconds",r="minutes and seconds";break;case"secMinHr":t=""+(u=N(l,i,c)),a=l+"hr "+i+"min "+c+"sec",n="seconds",r="hours minutes and seconds";break;default:return{q:"TimeConversion default Q",a:"625"}}return o=E+"-"+o,console.log(o),s?{q:"Convert "+t+n+" to "+r,a:a,QType:o,answerFormat:"string",extraKeys:["hrs","min","sec"]}:{q:"Convert "+a+" to "+n,a:t,QType:o,answerFormat:"number",extraKeys:["hrs","min","sec"]}},I=a(9),M=[].concat([{q:"What do you call a line that goes from the edge of a circle, through the centre, to the other side?",a:"diameter"},{q:"What do you call a line from the centre of a circle to the edge of the circle?",a:"radius"},{q:"What do you call a line that just touches the outside of a circle?",a:"tangent"},{q:"What do you call a line that cuts across a circle, but not necessarily through the centre?",a:"chord"},{q:"A chord cuts a circle into two ...?",a:"segments"},{q:"Two radii (radiuses) cut out a piece like a slice of pie, called a ...?",a:"sector"}],[{q:"A triangle with all sides equal is described as ...?",a:"equilateral"},{q:"A triangle with exactly two sides equal is described as ...?",a:"isosceles"},{q:"A triangle with all sides of different length is described as ...?",a:"scalene"},{q:"The long side of a right-angled triangle is called the ...?",a:"hypotenuse"}],[{q:"An angle which is less than 90 degrees is described as ...?",a:"acute"},{q:"An angle which is exactly 90 degrees is described as ...?",a:"right"},{q:"An angle which is more than 90 degrees is described as ...?",a:"obtuse"},{q:"An angle which is more than 180 degrees is described as ...?",a:"reflex"},{q:"Two angles which add up to 180 degress are described as ...?",a:"supplementary"},{q:"Two angles which add up to 90 degress are described as ...?",a:"complementary"},{q:"Lines which point in the same direction and never meet are described as ...?",a:"parallel"}]),x=function(){var e=Math.floor(Math.random()*M.length);return Object(I.a)({},M[e],{answerFormat:"string",QType:R})},_=a(5),L=[null,"simplify","mapForm","keepRatio","share","givenDiff"],D=function(e){var t=e||Object(_.RandomElement)(L.slice(1)),a={QType:k+"-"+t,extraKeys:[":",":",":"]};switch(t){case"simplify":a.q="Simplify 12:16",a.a="3:4",a.answerFormat="string";break;case"mapForm":a.q="Express 16:12 in the form 1:n",a.a="1:0.75",a.answerFormat="string";break;case"keepRatio":a.q="The ratio of men to women waiting at a bus stop is 3:2. If there are 6 men, then how many women are there?",a.a="4";break;case"share":a.q="Share \xa3180 in the ratio 3:5:4, giving your answer as a ratio",a.a="45:75:60",a.answerFormat="string";break;case"givenDiff":a.q="Alice and Bob share some money in the ratio 7:5 Alice gets \xa310 more than Bob. How much money did they share?",a.a="60";break;default:a.q="Ratio default Q",a.a="42"}return console.log(a),a},W=a(5),F=W.RandomInt,G=W.RandomElement,P=function(e){return Array(e).fill(9).map(F).map((function(e,t){return 0===t?e+1:1===F(2)?e+1:-(e+1)}))},U=a(5).RandomInt,K=function(e,t){var a=Math.min(e.length,t.length);if(0===a)return null;for(var n="",r=0;r<a;r++)if(0!==e[r]){n+=e[r]<0?"-":n.length>0?"+":"";var o=Math.abs(e[r]);n+=1===o&&""!==t[r]?"":o,n+=t[r]}return""===n?"0":n},B=function(e,t){var a=t.filter((function(e,a){return t.indexOf(e)===a})).sort();return K(a.map((function(a){return e.reduce((function(e,n,r){return t[r]===a?e+n:e}),0)})),a)},H=function(e){var t=P(e),a=U(4),n=a<=1?function(e){return Array(e).fill(["a","b","c"]).map(G)}(e):2===a?function(e){return Array(e).fill(["a","b"]).map(G)}(e):function(e){return Array(e).fill(G(["a","b","c"]))}(e);return{q:"Simplify "+K(t,n),a:B(t,n)}},V=function(e,t,a){return e+"("+K(t,a)+")"},Y=function(e,t){return t.map((function(t){return e*t}))},z=function(e,t,a){return K(Y(e,t),a)},J=function(e){var t=[],a=Object(_.distinctPrimes)(2,"small"),n=Object(m.a)(a,2),r=n[0],o=n[1];switch(e){case 1:t=0===Object(_.RandomInt)(2)?[1,r]:[r,1];break;case 2:t=0===Object(_.RandomInt)(2)?[r,o]:[r,-o];break;default:console.log("level unknown in FactoriseQ:",e),t=[3,2]}var s=Object(_.RandomInt)(9)+2;return{q:"Factorise "+z(s,t,["a","b"]),a:V(s,t,["a","b"])}},$=function(e,t,a,n,r,o){var s=Y(e,t),c=Y(n,r),i=s.map((function(e,t){return"+"===a?e+c[t]:e-c[t]}));return K(i,o)},X=[null,"simplifyAddSub","expandBracket","expand2Simplify","factorise1","factorise2"],Z=function(e){var t=e||Object(_.RandomElement)(X.slice(1)),a={QType:q+"-"+t,extraKeys:["a","b","c","+","-","/"]},n={};switch(t){case"simplifyAddSub":n=H(5),a.answerFormat="string",a.furtherInstructions="Give variables in alphabetical order. eg: 7+3a-2b";break;case"expandBracket":n=function(){var e=P(2),t=Object(_.RandomInt)(9)+2;return{q:"Expand "+V(t,e,["a",""]),a:z(t,e,["a",""])}}(),a.answerFormat="string",a.furtherInstructions="Give variables in order of appearance in brackets";break;case"expand2Simplify":n=function(){var e=P(2),t=P(2),a=Object(_.RandomInt)(9)+2,n=Object(_.RandomInt)(9)+2,r=0===Object(_.RandomInt)(2)?"+":"-",o=["a","b"];return{q:"Expand and simplify "+V(a,e,o)+r+V(n,t,o),a:$(a,e,r,n,t,o)}}(),a.answerFormat="string",a.furtherInstructions="Give variables in order of appearance in brackets";break;case"factorise1":n=J(1),a.answerFormat="string",a.furtherInstructions="Give variables in order of appearance",a.extraKeys=["a","b","(","+","-",")"];break;case"factorise2":n=J(2),a.answerFormat="string",a.furtherInstructions="Give variables in order of appearance",a.extraKeys=["a","b","(","+","-",")"];break;default:n.q="default algebra01 Q",n.a=42}return a.q=n.q,a.a=n.a,a},ee=["zeroQ","sq","cube","sqEnd5","sqEnd1","gridWhole"],te=[50,25,10],ae=[5,10,15,25,35,50,75],ne=[null,"beginner1","beginner2","intermediate","expert"],re=function(e){var t=0,a=0;switch(e){case"beginner1":t=Object(_.RandomElement)(te),a=20*(Object(_.RandomInt)(5)+1);break;case"beginner2":t=Object(_.RandomElement)(te),a=4*(Object(_.RandomInt)(50)+1);break;case"intermediate":t=Object(_.RandomElement)(ae),a=Object(_.RandomInt)(200);break;case"expert":t=Object(_.RandomInt)(99)+1,a=Object(_.RandomInt)(200);break;default:t=0,a=0}return[t,a]},oe=function(e,t){var a;switch(console.log("QType and subQType",e,t),e||O[Math.floor(Math.random()*O.length)]){case b:a=j(t);break;case w:a=function(e){var t=Number(e)||Math.floor(Math.random()*(ee.length-1))+1;console.log(w+"-"+t);var a=Math.ceil(9*Math.random())+1,n=Math.ceil(9*Math.random())+1,r=Math.ceil(90*Math.random())+10,o={QType:w+"-"+t};switch(ee[t]){case"sq":return Object(I.a)({},o,{q:"What is "+a+" squared?",a:""+a*a});case"sqEnd5":return a=10*a+5,Object(I.a)({},o,{q:"What is "+a+" squared?",a:""+a*a});case"sqEnd1":return a=10*a+1,Object(I.a)({},o,{q:"What is "+a+" squared?",a:""+a*a});case"cube":return Object(I.a)({},o,{q:"What is "+a+" cubed?",a:""+a*a*a});case"gridWhole":return Object(I.a)({},o,{q:"What is "+r+" times "+a*n+"?",a:""+a*n*r});default:return{q:"MultiplyNumberQ default Q",a:"625"}}}(t);break;case y:a=function(e){var t=e||Object(_.RandomElement)(ne.slice(1)),a={qType:y+"-"+t},n=re(t),r=Object(m.a)(n,2),o=r[0],s=r[1];return 0!==o?(a.q="Find "+o+"% of "+s,a.a=o*s/100):(a.q="Default Percentage Q",a.a=42),a}(t);break;case v:a=function(e){var t=e||Object(_.RandomElement)(ne.slice(1)),a={qType:v+"-"+t},n=re(t),r=Object(m.a)(n,2),o=r[0],s=r[1];return 0!==o?0===Object(_.RandomInt)(4)?(a.q="A shop is having a sale. The price of an item went from \xa3"+s+" to \xa3"+((100-o)*s/100).toFixed(2)+"  Find the percentage change",a.a=o):1===Object(_.RandomInt)(2)?(a.q="Increase "+s+" by "+o+"%",a.a=(100+o)*s/100):(a.q="Decrease "+s+" by "+o+"%",a.a=(100-o)*s/100):(a.q="Default Percentage Q",a.a=42),a}(t);break;case A:a=function(){var e=Object(_.RandomElement)(ae),t=15*(Object(_.RandomInt)(30)+1),a={qType:A,a:t};return 0===Object(_.RandomInt)(2)?a.q="A shop is having a "+e+"% off sale. The sale price of an item is \xa3"+((100-e)*t/100).toFixed(2)+"  What was the original price?":a.q="After a "+e+"% increase, the value of a share in Maths-ELO is now \xa3"+((100+e)*t/100).toFixed(2)+"  What was the original price?",a}();break;case E:a=S(t);break;case R:a=x();break;case k:a=D(t);break;case q:a=Z(t);break;default:return{q:"How many mathematicians does it take to change a light bulb?",a:"1",QType:"giveDefault"}}return console.log(a),a},se=function(e){return Math.pow(10,e/400)},ce=function(e,t,a,n){var r=se(e),o=se(t),s=r+o,c=e+32*n*(a-r/s),i=t+32/n*(1-a-o/s);return[Math.floor(c),Math.floor(i)]},ie=a(14),le=Object(i.b)((function(e){return{extraKeys:e.extraKeys4Pad}}),{Keypad_number:function(e){return{type:"KEYPAD_NUMBER",payload:e}},Keypad_delete:function(){return{type:"KEYPAD_DELETE"}}})((function(e){var t=e.extraKeys,a=e.Keypad_number,n=e.Keypad_delete,o=Object(ie.a)("123456789").map((function(e){return r.a.createElement("button",{onClick:function(){return a(e)},className:"keypadButton",key:"keypad-button"+e},e)})),s=r.a.createElement("button",{onClick:function(){return a("0")},className:"keypadButton",key:"keypad-button0"},"0"),c=r.a.createElement("button",{onClick:function(){return a(".")},className:"keypadButton",key:"keypad-buttonDP"},"."),i=r.a.createElement("button",{onClick:function(){return n()},className:"keypadButton",key:"keypad-buttonDEL"},"DEL"),l=6===t.length?6:3,u=t.slice(0,l).map((function(e,t){return r.a.createElement("button",{onClick:function(){return a(e)},className:"keypadButton",key:"extra-keypad-button"+e+t},e)}));return r.a.createElement("div",{className:"keypad"},r.a.createElement("div",null,o.slice(0,3)),r.a.createElement("div",null,o.slice(3,6)),r.a.createElement("div",null,o.slice(6)),r.a.createElement("div",null,s,c,i),r.a.createElement("hr",null),l>0?u.slice(0,3):"",6===l?u.slice(3,6):"")})),ue=Object(i.b)((function(e){return{quAndA:e.quAndA,needNewRatedQ:e.needNewRatedQ,wrongAnswers:e.wrongAnswers,userAnswer:e.userAnswer,userRating:e.userRating}}),{UpdateUserAnswer:function(e){return{type:"UPDATE_USER_ANSWER",payload:e}},UserRatingChanges:function(e){return{type:"USER_RATING_CHANGES",userRating:e}},SetNewQ:function(e){return{type:"SET_NEW_Q",quAndA:e}},UserIsWrong:function(e,t){return{type:"USER_IS_WRONG",wrongAnswer:e,newQuAndARating:t}},NeedNewRatedQ:function(){return{type:"NEED_NEW_RATED_Q"}}})((function(e){var t=e.quAndA,a=e.userAnswer,o=e.userRating,s=e.wrongAnswers,c=e.needNewRatedQ,i=e.UserRatingChanges,l=e.UpdateUserAnswer,u=e.SetNewQ,d=e.UserIsWrong,f=e.NeedNewRatedQ,g=s.map((function(e,t){return r.a.createElement("p",{key:t},e," was wrong")}));return Object(n.useEffect)((function(){if(c||"giveDefault"===t.QType){var e=oe("","");(function(e){var t,a;return p.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return t={qType:e},a=1234,n.next=4,p.a.awrap(h.a.get("/qratings/get1rating",{params:t}).then((function(e){console.log("Axios get 1 rating:",e.data),a=e.data.rating})).catch((function(t){console.log("Axios Error getting rating for ",e,t),a=1345})));case 4:return n.abrupt("return",a);case 5:case"end":return n.stop()}}))})(e.QType).then((function(t){e.QRating=t,u(e)})).catch((function(e){console.log("GetNewQ in useEffect has error:",e)}))}})),r.a.createElement("div",null,r.a.createElement("div",{id:"quAndA"},r.a.createElement("h2",null,t.q),r.a.createElement("form",{onSubmit:function(e){switch(e.preventDefault(),t.answerFormat){case"string":var n=a.toLowerCase().replace(/\s/g,"")===t.a.toLowerCase().replace(/\s/g,"");break;default:n=Number(a)===Number(t.a)}if(n){var r=ce(o,t.QRating||1500,1,1),s=Object(m.a)(r,2),c=s[0],l=s[1];i(c),f()}else{var u=ce(o,t.QRating||1500,0,1),g=Object(m.a)(u,2);c=g[0],l=g[1],i(c),d(a,l)}if("giveDefault"!==t.QType){var p={category:t.QType,ratingValue:l};h.a.put("/qratings/new-data",p).then((function(e){return console.log("Success while posting rating of Q",e)})).catch((function(e){return console.log("Error while posting rating of Q",e)}))}else console.log("Did not post about default Q")}},r.a.createElement("input",{className:"answerbox",type:"text",name:"answerbox",value:a,onChange:function(e){l(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("p",null,t.furtherInstructions||""),g,r.a.createElement("br",null)),c?r.a.createElement("p",null,"Fetching the rating for a new question...."):r.a.createElement(le,null))})),me=a(50),de=a(51),he=a(58),fe=a(52),ge=a(59),pe=function(e){function t(){var e,a;Object(me.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(he.a)(this,(e=Object(fe.a)(t)).call.apply(e,[this].concat(r)))).state={showAnswer:!1,localQ:a.props.freshQ()},a.quandaClass=Number(a.props.rowType)%2?"quandaBlock-odd":"quandaBlock-even",a.handleClick=function(){a.setState({showAnswer:!a.state.showAnswer})},a.refreshQ=function(){a.setState({localQ:a.props.freshQ(),showAnswer:!1})},a}return Object(ge.a)(t,e),Object(de.a)(t,[{key:"render",value:function(){var e=r.a.createElement("button",{className:"revealBtn",onClick:this.handleClick},"Show answer"),t=r.a.createElement("h2",{className:"aBlock",onClick:this.handleClick},this.state.localQ.a);return r.a.createElement("div",{className:this.quandaClass},r.a.createElement("h2",{className:"qBlock",onClick:this.refreshQ},this.state.localQ.q),this.state.showAnswer?t:e)}}]),t}(r.a.Component),be=function(e){var t=[];return Object(_.elementsFrom)(5,e.typeList).forEach((function(e,a){var n=e.split("-");console.log("classroom is looking for qType",e,n),t.push(r.a.createElement(pe,{freshQ:function(){return oe(n[0],n[1])},rowType:""+a,key:a}))})),r.a.createElement("div",null,r.a.createElement("h2",null,"This is the class room"),r.a.createElement("h3",null,"Where you simply click to see the answers"),r.a.createElement("p",null,"(Click on a question to get another of the same type)"),t)},Ee=a(53),we=a(107),ye=Object(i.b)((function(e){return{selectedTopics:e.selectedTopics}}),{ToggleTopic:function(e){return{type:"TOGGLE_TOPIC",topic:e}},AllTopics:function(e){return{type:"ALL_TOPICS",mode:e}},ChangeActiveScreen:f})((function(e){var t=e.selectedTopics,a=e.ToggleTopic,n=e.AllTopics,o=e.ChangeActiveScreen,s=O.map((function(e){return r.a.createElement(Ee.a,{onClick:function(){return a(e)},variant:t.includes(e)?"success":"secondary",key:e},e)})),c=t.length>0?r.a.createElement("p",null,"When ready: ",r.a.createElement(Ee.a,{variant:"link",onClick:function(){return o("classRoom-General")}},"Go to the classroom")):r.a.createElement("p",null,"You need to select at least one topic");return r.a.createElement("div",null,r.a.createElement("h2",null,"Select Topics"),r.a.createElement("p",null,"Topics highlighted in green are active. Click a topic to toggle its status"),r.a.createElement(we.a,null,r.a.createElement(Ee.a,{onClick:function(){return n("all")}},"Select all"),r.a.createElement(Ee.a,{onClick:function(){return n("none")}},"Clear all")),c,r.a.createElement("p",null,"Currently selected are ",t.join(", ")," "),r.a.createElement(we.a,{id:"topicList",vertical:!0},s))})),ve=a(109),Ae=Object(i.b)(null,{ChangeActiveScreen:f,LoginUser:function(e,t){return{type:"LOGIN_USER",userName:e,userRating:t}}})((function(e){var t=e.ChangeActiveScreen,a=e.LoginUser;return r.a.createElement("div",{id:"loginForm"},r.a.createElement("div",null,r.a.createElement(Ee.a,{variant:"link",onClick:function(){return t("testRoom")}},"If you are not a member, you can register for free")),r.a.createElement(ve.a,{onSubmit:function(e){e.preventDefault();var t={userName:e.target.UserName.value,password:e.target.password.value};console.log("toPost is ",t),h.a.put("/users/login",t).then((function(e){console.log("axios posted login, got result with status",e.status),console.log("need to set new user with name, rating",e.data.userName,e.data.userRating),a(e.data.userName,e.data.userRating)})).catch((function(e){return console.log("axios posted login got error",e)}))}},r.a.createElement(ve.a.Group,null,r.a.createElement(ve.a.Label,null,"User name"),r.a.createElement(ve.a.Control,{type:"text",name:"UserName",placeholder:"User name",required:!0}),r.a.createElement(ve.a.Text,{className:"text-muted"},"This will be your public name, to be used on the leaderboard")),r.a.createElement(ve.a.Group,null,r.a.createElement(ve.a.Label,null,"Password"),r.a.createElement(ve.a.Control,{type:"password",name:"password",placeholder:"Password",required:!0})),r.a.createElement(Ee.a,{variant:"secondary",onClick:function(){return t("testRoom")}},"Cancel"),r.a.createElement(Ee.a,{variant:"success",type:"submit"},"Login")))})),Re=(a(91),Object(i.b)((function(e){return{userName:e.userID,userRating:e.userRating,currentQ:e.quAndA,activeScreen:e.activeScreen,selectedTopics:e.selectedTopics}}),{ChangeActiveScreen:f})((function(e){var t=e.userName,a=e.userRating,n=e.currentQ,o=e.activeScreen,s=e.selectedTopics,c=e.ChangeActiveScreen,i=r.a.createElement(l.a.Item,{onClick:function(){return c("classRoom")}},"5 in the Classroom"),m=r.a.createElement(l.a.Item,{onClick:function(){return c("testRoom")}},"Rate My Maths"),d=r.a.createElement(l.a.Item,{onClick:function(){return c("topicSelect")}},"Select Topics"),h=(r.a.createElement(l.a.Item,{onClick:function(){return c("login")}},"Login or Register"),""===t?"Guest user":t);return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement(u.a,{id:"dropdown-variants-info",title:"Maths ELO",className:"appTitle",size:"lg"},"testRoom"===o?i:m,d),r.a.createElement("p",null,"Rate and review your maths"),r.a.createElement("p",{className:"userVSquestion"},h," (",a,") VS ",n.QType," (",n.QRating||"????",") ")),function(){switch(o){case"testRoom":return r.a.createElement(ue,null);case"classRoom":return r.a.createElement(be,{typeList:[n.QType]});case"classRoom-General":return r.a.createElement(be,{typeList:s});case"topicSelect":return r.a.createElement(ye,null);case"login":return r.a.createElement(Ae,null);default:return r.a.createElement(ue,null)}}())}))),ke=["--","--","--"],qe={userRating:1500,userID:"",userLoggedIn:!1,quAndA:{q:"How many mathematicians does it take to change a light bulb?",a:"1",QType:"giveDefault"},needNewRatedQ:!0,userAnswer:"",selectedTopics:Object(ie.a)(O),wrongAnswers:[],extraKeys4Pad:ke,activeScreen:"testRoom"},Oe=function(e,t){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat(Object(ie.a)(e),[t])},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:qe,t=arguments.length>1?arguments[1]:void 0;switch(console.log("handling the action ",t),t.type){case"UPDATE_USER_ANSWER":return Object(I.a)({},e,{userAnswer:t.payload});case"TOGGLE_TOPIC":return Object(I.a)({},e,{selectedTopics:Oe(e.selectedTopics,t.topic)});case"ALL_TOPICS":return Object(I.a)({},e,{selectedTopics:"all"===t.mode?Object(ie.a)(O):[]});case"NEED_NEW_RATED_Q":return Object(I.a)({},e,{needNewRatedQ:!0});case"USER_RATING_CHANGES":return Object(I.a)({},e,{userRating:t.userRating});case"SET_NEW_Q":return Object(I.a)({},e,{quAndA:t.quAndA,needNewRatedQ:!1,extraKeys4Pad:t.quAndA.extraKeys||ke,userAnswer:"",wrongAnswers:[]});case"USER_IS_WRONG":return Object(I.a)({},e,{wrongAnswers:[].concat(Object(ie.a)(e.wrongAnswers),[t.wrongAnswer]),userAnswer:"",quAndA:Object(I.a)({},e.quAndA,{QRating:t.newQuAndARating})});case"LOGIN_USER":return Object(I.a)({},e,{userID:t.userName,userRating:t.userRating,activeScreen:"testRoom",userLoggedIn:!0});case"KEYPAD_NUMBER":return Object(I.a)({},e,{userAnswer:e.userAnswer+t.payload});case"KEYPAD_DELETE":return Object(I.a)({},e,{userAnswer:e.userAnswer.slice(0,-1)});case"CHANGE_ACTIVE_SCREEN":return Object(I.a)({},e,{activeScreen:t.newScreen});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(i.a,{store:Object(c.b)(Te)},r.a.createElement(Re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},5:function(e,t,a){"use strict";a.r(t),a.d(t,"RandomElement",(function(){return r})),a.d(t,"RandomInt",(function(){return o})),a.d(t,"elementsFrom",(function(){return s})),a.d(t,"distinctElementsFrom",(function(){return c})),a.d(t,"primes",(function(){return i})),a.d(t,"smallPrimes",(function(){return l})),a.d(t,"RandomPrime",(function(){return u})),a.d(t,"distinctPrimes",(function(){return m}));var n=a(14),r=function(e){return e[Math.floor(Math.random()*e.length)]},o=function(e){return Math.floor(Math.random()*e)},s=function(e,t){if(t.length===e)return t;if(t.length>e)return c(e,t);for(var a=[];a.length<e;)a=[].concat(Object(n.a)(a),Object(n.a)(t));return a.slice(0,e)},c=function(e,t){var a=[];if(t.length<=e)return t;for(;a.length<e;)a.push(r(t.filter((function(e){return-1===a.indexOf(e)}))));return a},i=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47],l=[2,3,5,7],u=function(e){return r("small"===e?l:i)},m=function(e,t){return c(e,"small"===t?l:i)}},60:function(e,t,a){e.exports=a(105)},69:function(e,t,a){},91:function(e,t,a){}},[[60,1,2]]]);
//# sourceMappingURL=main.27088fb2.chunk.js.map