(this["webpackJsonpmaths-elo"]=this["webpackJsonpmaths-elo"]||[]).push([[0],{1:function(e,t,n){"use strict";n.r(t),n.d(t,"RandomElement",(function(){return r})),n.d(t,"RandomInt",(function(){return c})),n.d(t,"nRandomInts",(function(){return o})),n.d(t,"elementsFrom",(function(){return i})),n.d(t,"distinctElementsFrom",(function(){return s})),n.d(t,"primes",(function(){return u})),n.d(t,"smallPrimes",(function(){return l})),n.d(t,"RandomPrime",(function(){return m})),n.d(t,"distinctPrimes",(function(){return d})),n.d(t,"random2357",(function(){return b})),n.d(t,"randomNames",(function(){return h}));var a=n(8),r=function(e){return e[Math.floor(Math.random()*e.length)]},c=function(e){return Math.floor(Math.random()*e)},o=function(e,t){for(var n=[],a=0;a<e;)n.push(c(t)),a++;return n},i=function(e,t){if(t.length===e)return t;if(t.length>e)return s(e,t);for(var n=[];n.length<e;)n=[].concat(Object(a.a)(n),Object(a.a)(t));return n.slice(0,e)},s=function(e,t){var n=[];if(t.length<=e)return t;for(;n.length<e;)n.push(r(t.filter((function(e){return-1===n.indexOf(e)}))));return n},u=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47],l=[2,3,5,7],m=function(e){return r("small"===e?l:u)},d=function(e,t){return s(e,"small"===t?l:u)},b=function(e){var t=[0,0,0,0].map((function(t){return c(e+1)}));t.every((function(e){return 0===e}))&&(t=[0,1,0,1]);var n=[2,3,5,7].map((function(e,n){return Math.pow(e,t[n])})).reduce((function(e,t){return e*t}),1);return{exponents:t,value:n}},f=["Alex","Arlene","Bruce","Caroline","Demi","Evette","Felix","Farnaz","Grace","Helen","Isobel","James","Jana","Katie","Kal","Louise","Meera","Muthu","Natalie","Nandini","Nadiya","Parvathy","Ranjit","Raji","Sharon","Shraddha","Steven","Sam","Victoria","Val","Zanet"],h=function(e){return s(e,f)}},101:function(e,t,n){},102:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(13),o=n.n(c),i=n(20),s=n(14),u=(n(68),n(24)),l=n(104),m=(n(69),n(15)),d=n(21),b=n.n(d),f=function(e){return{type:"CHANGE_ACTIVE_SCREEN",newScreen:e}},h=n(33),p=n.n(h),g=[{topic:"Algebra01",subTopics:["simplifyAddSub","expandBracket","expand2Simplify","factorise1","factorise2","substitution"]},{topic:"SolveLinear",subTopics:["oneStep","twoStep","brackets","bothSides","fraction"]},{topic:"Data",subTopics:["mean","meanFindmissing","medianOdd","medianEven","range","mode"]},{topic:"MultiplyNumbers",subTopics:["sq","cube","sqEnd5","sqEnd1","gridWhole"]},{topic:"NegNumbers",subTopics:["adding","subtract","times","divide"]},{topic:"Decimal",subTopics:["order","round"]},{topic:"metricConversion",subTopics:["m/cm","m/mm","km/m","g/mg","kg/g","L/cL","L/mL"]},{topic:"TimeConversion",subTopics:["secMin","secMinHr"]},{topic:"FactorsAndMultiples",subTopics:["prodOfPrimes","findMultiple","facOrMul","hcf","lcm","numFactors"]},{topic:"PercentOf",subTopics:["beginner1","beginner2","intermediate","expert"]},{topic:"PercentChange",subTopics:["beginner1","beginner2","intermediate","expert"]},{topic:"ReversePercentage",subTopics:[]},{topic:"Ratio",subTopics:["simplify","mapForm","keepRatio","share","givenDiff"]},{topic:"Vocab",subTopics:[]}],v=[{type:"zeroQ"},{type:"m/cm",large:["metres","m"],small:["centimetres","cm"],ratio:100},{type:"m/mm",large:["metres","m"],small:["millimetres","mm"],ratio:1e3},{type:"km/m",large:["kilometres","Km"],small:["metres","m"],ratio:1e3},{type:"g/mg",large:["grams","g"],small:["milligrams","mg"],ratio:1e3},{type:"kg/g",large:["kilograms","Kg"],small:["grams","g"],ratio:1e3},{type:"L/cL",large:["litres","L"],small:["centilitres","cL"],ratio:100},{type:"L/mL",large:["litres","L"],small:["millilitres","mL"],ratio:1e3}],x=function(e){var t=v.findIndex((function(t){return t.type===e}));console.log("index for convFacts Q is",t,"from parameter",e),-1===t&&(t=Math.floor(Math.random()*(v.length-1))+1,console.log("index changed for convFacts Q is",t,"from parameter",e));var n=v[t],a=Math.random()<.5,r=Math.random()<.25?1:Math.random()<.8?10:100,c=Math.floor(Math.random()*n.ratio)*r,o=c/n.ratio;return a?{q:"Convert "+c+n.small[1]+" to "+n.large[0],a:""+o,QType:"metricConversion-"+v[t].type}:{q:"Convert "+o+n.large[1]+" to "+n.small[0],a:""+c,QType:"metricConversion-"+v[t].type}},O=function(e,t,n){return 3600*e+60*t+n},j=["null","secMin","secMinHr"],w=function(e){return Math.floor(Math.random()*e)},R=function(e){var t,n,a,r,c=Number(e)||Math.floor(Math.random()*(j.length-1))+1,o=Math.random()<0,i=w(60),s=w(60),u=w(24);switch(j[c]){case"secMin":0===s&&s++;var l=O(0,s,i);t=""+l,n=s+"min "+i+"sec",a="seconds",r="minutes and seconds";break;case"secMinHr":t=""+(l=O(u,s,i)),n=u+"hr "+s+"min "+i+"sec",a="seconds",r="hours minutes and seconds";break;default:return{q:"TimeConversion default Q",a:"625"}}return c="TimeConversion-"+j[c],o?{q:"Convert "+t+a+" to "+r,a:n,QType:c,answerFormat:"string",extraKeys:["hrs","min","sec"]}:{q:"Convert "+n+" to "+a,a:t,QType:c,answerFormat:"number",extraKeys:["hrs","min","sec"]}},y=n(7),E=[].concat([{q:"What do you call a line that goes from the edge of a circle, through the centre, to the other side?",a:"diameter"},{q:"What do you call a line from the centre of a circle to the edge of the circle?",a:"radius"},{q:"What do you call a line that just touches the outside of a circle?",a:"tangent"},{q:"What do you call a line that cuts across a circle, but not necessarily through the centre?",a:"chord"},{q:"A chord cuts a circle into two ...?",a:"segments"},{q:"Two radii (radiuses) cut out a piece like a slice of pie, called a ...?",a:"sector"}],[{q:"A triangle with all sides equal is described as ...?",a:"equilateral"},{q:"A triangle with exactly two sides equal is described as ...?",a:"isosceles"},{q:"A triangle with all sides of different length is described as ...?",a:"scalene"},{q:"The long side of a right-angled triangle is called the ...?",a:"hypotenuse"}],[{q:"An angle which is less than 90 degrees is described as ...?",a:"acute"},{q:"An angle which is exactly 90 degrees is described as ...?",a:"right"},{q:"An angle which is more than 90 degrees is described as ...?",a:"obtuse"},{q:"An angle which is more than 180 degrees is described as ...?",a:"reflex"},{q:"Two angles which add up to 180 degress are described as ...?",a:"supplementary"},{q:"Two angles which add up to 90 degress are described as ...?",a:"complementary"},{q:"Lines which point in the same direction and never meet are described as ...?",a:"parallel"}]),k=function(){var e=Math.floor(Math.random()*E.length);return Object(y.a)({},E[e],{answerFormat:"string",QType:"Vocab"})},q=n(1),A=[null,"simplify","mapForm","keepRatio","share","givenDiff"],I={1:[2,3,4,5,6,7,8,9],2:[3,5,7,9],3:[4,5,7,8],4:[5,7,9],5:[6,7,8,9]},T=[2,3,4,5,6,7,8,9,10,12,15,18,20,24,25,30],N=[[.5,1,2],[1.5,3,2],[2.5,5,2],[.25,1,4],[.75,3,4],[1.25,5,4],[.2,1,5],[.4,2,5],[.6,3,5],[.8,4,5],[1.2,6,5]],Q=function e(t){return 2===t.length?t.join(" and "):t[0]+", "+e(t.slice(1))},M=function(e){var t=e||Object(q.RandomElement)(A.slice(1)),n={QType:"Ratio-"+t,extraKeys:[":",":",":"]};switch(t){case"simplify":var a=function(){var e=""+(Object(q.RandomInt)(5)+1),t=Object(q.RandomElement)(I[e]);if(0===Object(q.RandomInt)(2)){var n=[t,e];e=n[0],t=n[1]}var a=Object(q.RandomElement)(T);return{high:e*a+":"+t*a,simp:e+":"+t}}();n.q="Simplify "+a.high,n.a=a.simp,n.answerFormat="string";break;case"mapForm":a=function(){var e=Object(q.RandomElement)(N),t=Object(q.RandomElement)(T.slice(0,5));return{high:t*e[2]+":"+t*e[1],mF:"1:"+e[0]}}(),n.q="Express "+a.high+" in the form 1:n",n.a=a.mF,n.answerFormat="string";break;case"keepRatio":a=function(){var e=Object(q.randomNames)(3),t=Object(q.RandomElement)(["012","021","120","102","210","201"]).split("").map(Number),n=Object(q.distinctElementsFrom)(3,[1,2,3,4,5,6,7,8,9]),a=Object(q.RandomInt)(10)+2,r="",c="";switch(Object(q.RandomInt)(3)){case 0:r=Q(e)+" share some money in the ratio "+n.join(":")+"   "+e[t[0]]+" gets \xa3"+n[t[0]]*a+"   How much money did they share?",c=n.reduce((function(e,t){return e+t}))*a;break;case 1:r=Q([e[0],e[1]])+" share some money in the ratio "+n.slice(0,2).join(":")+"   "+e[0]+" gets \xa3"+n[0]*a+"   How much does "+e[1]+" get?",c=n[1]*a;break;default:r=Q(e)+" share some money in the ratio "+n.join(":")+"   "+e[t[0]]+" gets \xa3"+n[t[0]]*a+"   How much does "+e[t[1]]+" get?",c=n[t[1]]*a}return{q:r,a:c}}(),n.q=a.q,n.a=a.a;break;case"share":a=function(){var e=Object(q.randomNames)(3),t=Object(q.RandomInt)(3),n=Object(q.distinctElementsFrom)(3,[1,2,3,4,5,6,7,8,9]),a=Object(q.RandomInt)(10)+2;return{q:Q(e)+" share \xa3"+n.reduce((function(e,t){return e+t}))*a+" in the ratio "+n.join(":")+"   How much money did "+e[t]+" get?",a:n[t]*a}}(),n.q=a.q,n.a=a.a;break;case"givenDiff":a=function(){var e=Object(q.randomNames)(3),t=Object(q.RandomElement)(["012","021","120","102","210","201"]).split("").map(Number),n=Object(q.distinctElementsFrom)(3,[1,2,3,4,5,6,7,8,9]),a=Object(q.RandomInt)(10)+2,r=n[t[0]]>n[t[1]]?" more":" less";return{q:Q(e)+" shared some money in the ratio "+n.join(":")+" "+e[t[0]]+" got "+Math.abs((n[t[0]]-n[t[1]])*a)+r+" than "+e[t[1]]+".   How much money did "+e[t[2]]+" get?",a:n[t[2]]*a}}(),n.q=a.q,n.a=a.a;break;default:n.q="Ratio default Q",n.a="42"}return n},S=n(1),C=S.RandomInt,F=S.RandomElement,D=function(e){return Array(e).fill(9).map(C).map((function(e,t){return 0===t?e+1:1===C(2)?e+1:-(e+1)}))},_=n(1).RandomInt,L=function(e,t){var n=Math.min(e.length,t.length);if(0===n)return null;for(var a="",r=0;r<n;r++)if(0!==e[r]){a+=e[r]<0?"-":a.length>0?"+":"";var c=Math.abs(e[r]);a+=1===c&&""!==t[r]?"":c,a+=t[r]}return""===a?"0":a},P=function(e,t){var n=t.filter((function(e,n){return t.indexOf(e)===n})).sort();return L(n.map((function(n){return e.reduce((function(e,a,r){return t[r]===n?e+a:e}),0)})),n)},W=function(e){var t=D(e),n=_(4),a=n<=1?function(e){return Array(e).fill(["a","b","c"]).map(F)}(e):2===n?function(e){return Array(e).fill(["a","b"]).map(F)}(e):function(e){return Array(e).fill(F(["a","b","c"]))}(e);return{q:"Simplify "+L(t,a),a:P(t,a)}},G=function(e,t,n){return e+"("+L(t,n)+")"},K=function(e,t){return t.map((function(t){return e*t}))},B=function(e,t,n){return L(K(e,t),n)},U=function(e){var t=[],n=Object(q.distinctPrimes)(2,"small"),a=Object(m.a)(n,2),r=a[0],c=a[1];switch(e){case 1:t=0===Object(q.RandomInt)(2)?[1,r]:[r,1];break;case 2:t=0===Object(q.RandomInt)(2)?[r,c]:[r,-c];break;default:console.log("level unknown in FactoriseQ:",e),t=[3,2]}var o=Object(q.RandomInt)(9)+2;return{q:"Factorise "+B(o,t,["a","b"]),a:G(o,t,["a","b"])}},H=function(e,t,n,a,r,c){var o=K(e,t),i=K(a,r),s=o.map((function(e,t){return"+"===n?e+i[t]:e-i[t]}));return L(s,c)},V=[null,"simplifyAddSub","expandBracket","expand2Simplify","factorise1","factorise2","substitution"],Y=function(e){var t=e||Object(q.RandomElement)(V.slice(1)),n={QType:"Algebra01-"+t,extraKeys:["a","b","c","+","-","/"]},a={};switch(t){case"simplifyAddSub":a=W(5),n.answerFormat="string",n.furtherInstructions="Give variables in alphabetical order. eg: 7+3a-2b";break;case"expandBracket":a=function(){var e=D(2),t=Object(q.RandomInt)(9)+2;return{q:"Expand "+G(t,e,["a",""]),a:B(t,e,["a",""])}}(),n.answerFormat="string",n.furtherInstructions="Give variables in order of appearance in brackets";break;case"expand2Simplify":a=function(){var e=D(2),t=D(2),n=Object(q.RandomInt)(9)+2,a=Object(q.RandomInt)(9)+2,r=0===Object(q.RandomInt)(2)?"+":"-",c=["a","b"];return{q:"Expand and simplify "+G(n,e,c)+r+G(a,t,c),a:H(n,e,r,a,t,c)}}(),n.answerFormat="string",n.furtherInstructions="Give variables in order of appearance in brackets";break;case"factorise1":a=U(1),n.answerFormat="string",n.furtherInstructions="Give variables in order of appearance",n.extraKeys=["a","b","(","+","-",")"];break;case"factorise2":a=U(2),n.answerFormat="string",n.furtherInstructions="Give variables in order of appearance",n.extraKeys=["a","b","(","+","-",")"];break;case"substitution":a=function(){var e,t,n,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Object(q.RandomInt)(4),r=D(4),c=D(4);switch(a){case 0:e=L(r.slice(0,2),["a",""]),t="a="+c[0],n=r[0]*c[0]+r[1];break;case 1:e=L(r.slice(0,2),["a",""]),t="a="+c[1],n=r[0]*c[1]+r[1];break;case 2:e=L(r.slice(0,3),["b","a",""]),t="a="+c[1]+" b="+c[0],n=r[0]*c[0]+r[1]*c[1]+r[2];break;case 3:e=L(r.slice(0,3),["ab","a","b"]),t="a="+c[0]+" b="+c[1],n=r[0]*c[0]*c[1]+r[1]*c[0]+r[2]*c[1];break;default:e="4x+2",t="x = 10",n=42}return{QType:"Algebra01-substitution",q:"What is the value of "+e+" when "+t,a:n}}();break;default:a.q="default algebra01 Q",a.a=42}return n.q=a.q,n.a=a.a,n},z=function(e){return e<0?" - "+-e:0===e?"":" + "+e},J=function(e){return e<0?" - "+-e:0===e?"":" + "+e},Z=[null,"oneStep","twoStep","brackets","bothSides","fraction"],$=function(e){var t=e||Object(q.RandomElement)(Z.slice(1)),n=Object(q.RandomInt)(20)-9,a={QType:"SolveLinear-"+t,a:n},r=Object(q.RandomInt)(9)+2,c=Object(q.RandomInt)(24)+2,o="";switch(t){case"oneStep":var i=["x+a","x-a","a-x","ax","a/x","x/a"][Object(q.RandomInt)(6)];"a/x"===i&&0===n&&(n=7),"x/a"===i&&(a.a=c*n),o=function(e,t,n){switch(n){case"x+a":return"x + "+t+" = "+(e+t);case"x-a":return"x - "+t+" = "+(e-t);case"a-x":return t+" - x = "+(t-e);case"ax":return t+"x = "+t*e;case"a/x":return t*e+"/x = "+t;case"x/a":return"x/"+t+" = "+e;default:return"x = "+e}}(n,c,i);break;case"twoStep":o=function(e,t,n,a){switch(a){case"ax+b":return t+"x + "+n+" = "+(t*e+n);case"ax-b":return t+"x - "+n+" = "+(t*e-n);case"b-ax":return n+" - "+t+"x = "+(n-t*e);default:return"x + 0 = "+e}}(n,r,c,["ax+b","ax-b","b-ax"][Object(q.RandomInt)(3)]);break;case"brackets":var s=["c(x+b)","c(ax+b)","c(ax-b)","c(b-ax)"][Object(q.RandomInt)(4)];o=function(e,t,n,a,r){switch(r){case"c(x+b)":return a+"(x + "+n+") = "+a*(e+n);case"c(ax+b)":return a+"("+t+"x + "+n+") = "+a*(t*e+n);case"c(ax-b)":return a+"("+t+"x - "+n+") = "+a*(t*e-n);case"c(b-ax)":return a+"("+n+" - "+t+"x) = "+a*(n-t*e);default:return"(x+0) = "+e}}(n,r,c,Object(q.RandomInt)(9)+2,s);break;case"bothSides":var u=["ax+b=x+?","x+?=b-ax","ax-b=x+?","?-x=ax+b","ax+b=cx+?","b-ax=cx+?","cx+?=b-ax","c(x+b)=ax+?","c(b-x)=ax+?"][Object(q.RandomInt)(9)],l=Object(q.RandomInt)(9)+2;l===r&&l++,o=function(e,t,n,a,r){switch(r){case"ax+b=x+?":return t+"x + "+n+" = x"+z((t-1)*e+n);case"x+?=b-ax":return"x"+z(n-(t+1)*e)+" = "+n+" - "+t+"x";case"ax-b=x+?":return t+"x - "+n+" = x"+z((t-1)*e-n);case"?-x=ax+b":return n+(t+1)*e+" - x = "+t+"x + "+n;case"ax+b=cx+?":return t+"x + "+n+" = "+a+"x"+z((t-a)*e+n);case"b-ax=cx+?":return n+" - "+t+"x = "+a+"x"+z(n-(t+a)*e);case"cx+?=b-ax":return a+"x"+z(n-(t+a)*e)+" = "+n+" - "+t+"x";case"c(x+b)=ax+?":return a+"(x + "+n+") = "+t+"x"+z(a*n+(a-t)*e);case"c(b-x)=ax+?":return a+"("+n+" - x) = "+t+"x"+z(a*n-(a+t)*e);default:return"2x+0=x+"+e}}(n,r,c,l,u);break;case"fraction":var m=["(cx+d) / (ax+b)","(cx+d) / (b-ax)","(d-cx) / (b-ax)"][Object(q.RandomInt)(3)];o=function(e,t,n,a,r){var c=Object(q.RandomInt)(8)+2;switch(r){case"(cx+d) / (ax+b)":c===t*a&&c++;var o=a*(t*e+n)-c*e;return(0===o?c+"x":"("+c+"x"+J(o)+")")+" / ("+t+"x + "+n+") = "+a;case"(cx+d) / (b-ax)":var i=a*(n-t*e)-c*e;return(0===i?c+"x":"("+c+"x"+J(i)+")")+" / ("+n+" - "+t+"x) = "+a;case"(d-cx) / (b-ax)":var s=a*(n-t*e)+c*e;return(0===s?c+"x":"("+s+" - "+c+"x)")+" / ("+n+" - "+t+"x) = "+a;default:return"(x+0) / (x-x+1) = "+e}}(n,r,c,Object(q.RandomInt)(9)+2,m);break;default:o="default solveLinear Question"}return a.q=o,a},X=n(8),ee=[null,"mean","meanFindmissing","medianOdd","medianEven","range","mode"],te=function(){var e=Object(q.RandomInt)(4)+6,t=Object(q.RandomInt)(20)+1,n=Object(q.nRandomInts)(e,20).map((function(e){return e+t})),a={},r=[],c=0;for(var o in n.forEach((function(e){return a[e]=(a[e]||0)+1})),a)a[o]>c?(c=a[o],r=[o]):a[o]===c&&r.push(o);return{q:"Find the mode of ".concat(n.join(", ")),a:r.length>2?"none":r.join(" and ")}},ne=function(){var e=Object(q.RandomInt)(4)+4,t=Object(q.RandomInt)(20)+1,n=Object(q.nRandomInts)(e,20).map((function(e){return e+t}));return{q:"Find the range of "+n.join(", "),a:Math.max.apply(Math,Object(X.a)(n))-Math.min.apply(Math,Object(X.a)(n))}},ae=function(e){var t=Object(q.RandomInt)(3)+2,n="ODD"===e?2*t+1:2*t,a=Object(q.nRandomInts)(n,15).map((function(e){return e+3})),r="Find the median of "+a.join(", "),c=a.sort((function(e,t){return e-t}));return{q:r,a:"ODD"===e?c[t]:(c[t-1]+c[t])/2}},re=function(e){var t=Object(q.RandomInt)(3)+5,n=Object(q.RandomInt)(10)+1,a=Object(q.nRandomInts)(t,15).map((function(e){return e+n})),r=a.reduce((function(e,t){return e+t}));t++;var c=Math.ceil(r/t);if("findMissing"===e)var o="The numbers "+a.join(", ")+", x have a mean of "+c+". Find x",i=c*t-r;else a.push(c*t-r),o="Find the mean of  "+a.join(", "),i=c;return{q:o,a:i}},ce=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e||Object(q.RandomElement)(ee.slice(1)),n={QType:"Data-"+t},a={};switch(t){case"mean":a=re("regular");break;case"meanFindmissing":a=re("findMissing");break;case"medianOdd":a=ae("ODD");break;case"medianEven":a=ae("EVEN");break;case"range":a=ne();break;case"mode":n.answerFormat="string",n.furtherInstructions='Say "none" if there are none. For two modes give answer as "lowest and highest"',a=te();break;default:a.q="default Data Question",a.a=42}return n.q=a.q,n.a=a.a,n},oe=[null,"order","round"],ie=function(e){var t=e||Object(q.RandomElement)(oe.slice(1)),n={QType:"Decimal-"+t},a={};switch(t){case"order":a=function(){var e=100*(Object(q.RandomInt)(9)+1),t=10*(Object(q.RandomInt)(9)+1),n=e-Object(q.RandomInt)(50)-1,a=e+t,r=a-Object(q.RandomInt)(9)-1,c=[[e,n,a,r],[a,e,n,r],[r,a,e,n]][Object(q.RandomInt)(3)].map((function(e){return e/1e3})),o=Object(q.RandomInt)(2);return{q:"Put into "+(0===o?"ascending":"descending")+" order "+c.join(", "),a:c.sort((function(e,t){return 0===o?e-t:t-e})).join(", ")}}(),n.furtherInstructions="give numbers seperated by comma and space",n.answerFormat="string";break;case"round":a=function(e){var t=Object(X.a)("012345").map((function(e,t){return 2===t?".":Object(q.RandomInt)(9)+1})).join("");switch(e){case 0:return{q:"Round "+t+" to the nearest whole number",a:""+Math.round(t)};case 1:return{q:"Round "+t+" to one decimal place",a:""+Number(Math.round(t+"e1")+"e-1").toFixed(1)};case 2:return{q:"Round "+t+" to two decimal place",a:""+Number(Math.round(t+"e2")+"e-2").toFixed(2)};default:return{q:"Round 0.42 to one decimal place",a:"0.4"}}}(Object(q.RandomInt)(3)),n.answerFormat="string";break;default:a.q="default Decimal Question",a.a=42}return n.q=a.q,n.a=a.a,n},se=["zeroQ","sq","cube","sqEnd5","sqEnd1","gridWhole"],ue=[null,"adding","subtract","times","divide"],le=function(e){var t=e||Object(q.RandomElement)(ue.slice(1)),n={QType:"NegNumbers-"+t},a={},r=Object(X.a)(function(){var e=Object(q.RandomInt)(3),t=Object(q.RandomInt)(15)+1,n=Object(q.RandomInt)(15)+1;return 0===e?[-t,n]:1===e?[t,-n]:[-t,-n]}()),c=r[0],o=r[1];switch(t){case"adding":a.q=[c,o].join(" + ")+" = ",a.a=c+o;break;case"subtract":a.q=[c,o].join(" - ")+" = ",a.a=c-o;break;case"times":a.q=[c,o].join(" * ")+" = ",a.a=c*o;break;case"divide":a.q=[c*o,o].join(" / ")+" = ",a.a=c;break;default:a.q="default NegNumbers Question",a.a=42}return n.q=a.q,n.a=a.a,n},me=[null,"prodOfPrimes","findMultiple","facOrMul","hcf","lcm","numFactors"],de=function(e){var t=e||Object(q.RandomElement)(me.slice(1)),n={QType:"FactorsAndMultiples-"+t},a={};switch(t){case"findMultiple":a=function(){var e=Object(q.RandomInt)(11)+2,t=Object(q.RandomInt)(8)+5;return{q:"Find the "+t+"th multiple of "+e,a:e*t}}();break;case"facOrMul":n.answerFormat="string",a=function(){var e=Object(q.RandomElement)([2,3,4,5,6,10,15]),t=e*Object(q.RandomElement)([2,3,4]);return 0===Object(q.RandomInt)(2)?{q:"Is ".concat(e," a factor or multiple of ").concat(t,"?"),a:"factor"}:{q:"Is ".concat(t," a factor or multiple of ").concat(e,"?"),a:"multiple"}}();break;case"prodOfPrimes":n.answerFormat="string",n.furtherInstructions="Give primes in ascending order",a=function(){var e=Object(q.RandomInt)(2)+4,t=Object(X.a)(Array(e)).map((function(e,t){return Object(q.RandomPrime)("small")})).sort((function(e,t){return e-t}));return{q:"Express ".concat(t.reduce((function(e,t){return e*t}),1)," as a product of primes."),a:t.join("x")}}();break;case"hcf":a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2,n=Object(q.random2357)(e).value,a=Object(q.distinctPrimes)(t,"small").map((function(e){return e*n}));return{q:"Find the highest common factor of \n            ".concat(a.slice(0,-1).join(", ")," and ").concat(a.slice(-1)),a:n}}(2,Object(q.RandomInt)(2)+2);break;case"lcm":a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=Object(q.random2357)(e).value,n=Object(q.distinctPrimes)(2,"small").map((function(e){return e*t}));return{q:"Find the lowest common multiple of \n            ".concat(n.join(" and "),"."),a:n[0]*n[1]/t}}(2);break;case"numFactors":a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3,t=Object(q.random2357)(e);return{q:"How many factors does ".concat(t.value," have?"),a:t.exponents.map((function(e){return e+1})).reduce((function(e,t){return e*t}),1)}}(2);break;default:a.q="default factorsAndMultiples Question",a.a=42}return n.q=a.q,n.a=a.a,n},be=[50,25,10],fe=[5,10,15,25,35,50,75],he=[null,"beginner1","beginner2","intermediate","expert"],pe=function(e){var t=0,n=0;switch(e){case"beginner1":t=Object(q.RandomElement)(be),n=20*(Object(q.RandomInt)(5)+1);break;case"beginner2":t=Object(q.RandomElement)(be),n=4*(Object(q.RandomInt)(50)+1);break;case"intermediate":t=Object(q.RandomElement)(fe),n=Object(q.RandomInt)(200);break;case"expert":t=Object(q.RandomInt)(99)+1,n=Object(q.RandomInt)(200);break;default:t=0,n=0}return[t,n]},ge=function(e,t){var n;switch(e||g[Math.floor(Math.random()*g.length)].topic){case"metricConversion":n=x(t);break;case"MultiplyNumbers":n=function(e){var t=e||se[Math.floor(Math.random()*(se.length-1))+1],n=Math.ceil(9*Math.random())+1,a=Math.ceil(9*Math.random())+1,r=Math.ceil(90*Math.random())+10,c={QType:"MultiplyNumbers-"+t};switch(t){case"sq":return Object(y.a)({},c,{q:"What is "+n+" squared?",a:""+n*n});case"sqEnd5":return n=10*n+5,Object(y.a)({},c,{q:"What is "+n+" squared?",a:""+n*n});case"sqEnd1":return n=10*n+1,Object(y.a)({},c,{q:"What is "+n+" squared?",a:""+n*n});case"cube":return Object(y.a)({},c,{q:"What is "+n+" cubed?",a:""+n*n*n});case"gridWhole":return Object(y.a)({},c,{q:"What is "+r+" times "+n*a+"?",a:""+n*a*r});default:return{q:"MultiplyNumberQ default Q",a:"625"}}}(t);break;case"NegNumbers":n=le(t);break;case"FactorsAndMultiples":n=de(t);break;case"Decimal":n=ie(t);break;case"PercentOf":n=function(e){var t=e||Object(q.RandomElement)(he.slice(1)),n={QType:"PercentOf-"+t},a=pe(t),r=Object(m.a)(a,2),c=r[0],o=r[1];return 0!==c?(n.q="Find "+c+"% of "+o,n.a=c*o/100):(n.q="Default Percentage Q",n.a=42),n}(t);break;case"PercentChange":n=function(e){var t=e||Object(q.RandomElement)(he.slice(1)),n={QType:"PercentChange-"+t},a=pe(t),r=Object(m.a)(a,2),c=r[0],o=r[1];return 0!==c?0===Object(q.RandomInt)(4)?(n.q="A shop is having a sale. The price of an item went from \xa3"+o+" to \xa3"+((100-c)*o/100).toFixed(2)+"  Find the percentage change",n.a=c):1===Object(q.RandomInt)(2)?(n.q="Increase "+o+" by "+c+"%",n.a=(100+c)*o/100):(n.q="Decrease "+o+" by "+c+"%",n.a=(100-c)*o/100):(n.q="Default Percentage Q",n.a=42),n}(t);break;case"ReversePercentage":n=function(){var e=Object(q.RandomElement)(fe),t=15*(Object(q.RandomInt)(30)+1),n={QType:"ReversePercentage",a:t};return 0===Object(q.RandomInt)(2)?n.q="A shop is having a "+e+"% off sale. The sale price of an item is \xa3"+((100-e)*t/100).toFixed(2)+"  What was the original price?":n.q="After a "+e+"% increase, the value of a share in Maths-ELO is now \xa3"+((100+e)*t/100).toFixed(2)+"  What was the original price?",n}();break;case"TimeConversion":n=R(t);break;case"Vocab":n=k();break;case"Ratio":n=M(t);break;case"Algebra01":n=Y(t);break;case"SolveLinear":n=$(t);break;case"Data":n=ce(t);break;default:return{q:"How many mathematicians does it take to change a light bulb?",a:"1",QType:"giveDefault"}}return n},ve=function(e){return Math.pow(10,e/400)},xe=function(e,t,n,a){var r=ve(e),c=ve(t),o=r+c,i=e+32*a*(n-r/o),s=t+32/a*(1-n-c/o);return[Math.floor(i),Math.floor(s)]},Oe=Object(s.b)((function(e){return{extraKeys:e.extraKeys4Pad}}),{Keypad_number:function(e){return{type:"KEYPAD_NUMBER",payload:e}},Keypad_delete:function(){return{type:"KEYPAD_DELETE"}}})((function(e){var t=e.extraKeys,n=e.Keypad_number,a=e.Keypad_delete,c=Object(X.a)("123456789").map((function(e){return r.a.createElement("button",{onClick:function(){return n(e)},className:"keypadButton",key:"keypad-button"+e},e)})),o=r.a.createElement("button",{onClick:function(){return n("0")},className:"keypadButton",key:"keypad-button0"},"0"),i=r.a.createElement("button",{onClick:function(){return n(".")},className:"keypadButton",key:"keypad-buttonDP"},"."),s=r.a.createElement("button",{onClick:function(){return a()},className:"keypadButton",key:"keypad-buttonDEL"},"DEL"),u=6===t.length?6:3,l=t.slice(0,u).map((function(e,t){return r.a.createElement("button",{onClick:function(){return n(e)},className:"keypadButton",key:"extra-keypad-button"+e+t},e)}));return r.a.createElement("div",{className:"keypad"},r.a.createElement("div",null,c.slice(0,3)),r.a.createElement("div",null,c.slice(3,6)),r.a.createElement("div",null,c.slice(6)),r.a.createElement("div",null,o,i,s),r.a.createElement("hr",null),u>0?l.slice(0,3):"",6===u?l.slice(3,6):"")})),je=Object(s.b)((function(e){return{quAndA:e.quAndA,needNewRatedQ:e.needNewRatedQ,wrongAnswers:e.wrongAnswers,userAnswer:e.userAnswer,userRating:e.userRating}}),{UpdateUserAnswer:function(e){return{type:"UPDATE_USER_ANSWER",payload:e}},UserRatingChanges:function(e){return{type:"USER_RATING_CHANGES",userRating:e}},SetNewQ:function(e){return{type:"SET_NEW_Q",quAndA:e}},UserIsWrong:function(e,t){return{type:"USER_IS_WRONG",wrongAnswer:e,newQuAndARating:t}},NeedNewRatedQ:function(){return{type:"NEED_NEW_RATED_Q"}}})((function(e){var t=e.quAndA,n=e.userAnswer,c=e.userRating,o=e.wrongAnswers,i=e.needNewRatedQ,s=e.UserRatingChanges,u=e.UpdateUserAnswer,l=e.SetNewQ,d=e.UserIsWrong,f=e.NeedNewRatedQ,h=o.map((function(e,t){return r.a.createElement("p",{key:t},e," was wrong")}));return Object(a.useEffect)((function(){if(i||"giveDefault"===t.QType){var e=ge("","");(function(e){var t,n;return p.a.async((function(a){for(;;)switch(a.prev=a.next){case 0:return t={qType:e},n=1234,a.next=4,p.a.awrap(b.a.get("/qratings/get1rating",{params:t}).then((function(e){console.log("Axios get 1 rating:",e.data),n=e.data.rating})).catch((function(t){console.log("Axios Error getting rating for ",e,t),n=1345})));case 4:return a.abrupt("return",n);case 5:case"end":return a.stop()}}))})(e.QType).then((function(t){e.QRating=t,l(e)})).catch((function(e){console.log("GetNewQ in useEffect has error:",e)}))}})),r.a.createElement("div",null,r.a.createElement("div",{id:"quAndA"},r.a.createElement("h2",null,t.q),r.a.createElement("form",{onSubmit:function(e){switch(e.preventDefault(),t.answerFormat){case"string":var a=n.toLowerCase().replace(/\s/g,"")===t.a.toLowerCase().replace(/\s/g,"");break;default:a=Number(n)===Number(t.a)}if(a){var r=xe(c,t.QRating||1500,1,1),o=Object(m.a)(r,2),i=o[0],u=o[1];s(i),f()}else{var l=xe(c,t.QRating||1500,0,1),h=Object(m.a)(l,2);i=h[0],u=h[1],s(i),d(n,u)}if("giveDefault"!==t.QType){var p={category:t.QType,ratingValue:u};b.a.put("/qratings/new-data",p).then((function(e){return console.log("Success while posting rating of Q",e)})).catch((function(e){return console.log("Error while posting rating of Q",e)}))}else console.log("Did not post about default Q")}},r.a.createElement("input",{className:"answerbox",type:"text",name:"answerbox",value:n,onChange:function(e){u(e.target.value)}}),r.a.createElement("button",{type:"submit"},"Submit")),r.a.createElement("p",null,t.furtherInstructions||""),h,r.a.createElement("br",null)),i?r.a.createElement("p",null,"Fetching the rating for a new question...."):r.a.createElement(Oe,null))})),we=n(48),Re=n(49),ye=n(56),Ee=n(50),ke=n(57),qe=function(e){function t(){var e,n;Object(we.a)(this,t);for(var a=arguments.length,r=new Array(a),c=0;c<a;c++)r[c]=arguments[c];return(n=Object(ye.a)(this,(e=Object(Ee.a)(t)).call.apply(e,[this].concat(r)))).state={showAnswer:!1,localQ:n.props.freshQ()},n.quandaClass=Number(n.props.rowType)%2?"quandaBlock-odd":"quandaBlock-even",n.handleClick=function(){n.setState({showAnswer:!n.state.showAnswer})},n.refreshQ=function(){n.setState({localQ:n.props.freshQ(),showAnswer:!1})},n}return Object(ke.a)(t,e),Object(Re.a)(t,[{key:"render",value:function(){var e=r.a.createElement("button",{className:"revealBtn",onClick:this.handleClick},"Show answer"),t=r.a.createElement("h2",{className:"aBlock",onClick:this.handleClick},this.state.localQ.a);return r.a.createElement("div",{className:this.quandaClass},r.a.createElement("h2",{className:"qBlock",onClick:this.refreshQ,title:this.state.localQ.QType},this.state.localQ.q),this.state.showAnswer?t:e)}}]),t}(r.a.Component),Ae=function(e){var t=[];return Object(q.elementsFrom)(5,e.typeList).forEach((function(e,n){var a=e.split("-");t.push(r.a.createElement(qe,{freshQ:function(){return ge(a[0],a[1])},rowType:""+n,key:n}))})),r.a.createElement("div",null,r.a.createElement("h2",null,"This is the class room"),r.a.createElement("h3",null,"Where you simply click to see the answers"),r.a.createElement("p",null,"(Click on a question to get another of the same type)"),t)},Ie=n(54),Te=n(105),Ne=Object(s.b)((function(e){return{selectedTopics:e.selectedTopics}}),{ToggleTopic:function(e){return{type:"TOGGLE_TOPIC",topic:e}},AllTopics:function(e){return{type:"ALL_TOPICS",mode:e}},ChangeActiveScreen:f})((function(e){var t=e.selectedTopics,n=e.ToggleTopic,a=e.AllTopics,c=e.ChangeActiveScreen,o=g.map((function(e){return r.a.createElement(l.a,{title:e.topic,variant:t.includes(e.topic)?"success":t.findIndex((function(t){return t.startsWith(e.topic)}))>-1?"warning":"secondary",key:e.topic,className:"topicButton"},r.a.createElement(u.a.Item,{onClick:function(){return n(e.topic)}},"all"),e.subTopics.map((function(a){return r.a.createElement(u.a.Item,{onClick:function(){return n(e.topic+"-"+a)},key:a,active:t.includes(e.topic+"-"+a)},a)})))})),i=t.length>0?r.a.createElement("p",null,"When ready: ",r.a.createElement(Ie.a,{variant:"link",onClick:function(){return c("classRoom-General")}},"Go to the classroom")," ",r.a.createElement("br",null),"(If you select more than five topics, I will pick five of them at random)"):r.a.createElement("p",null,"You need to select at least one topic.");return r.a.createElement("div",null,r.a.createElement("h2",null,"Select Topics"),r.a.createElement("p",null,"Click a topic to toggle its status. Select subtopics from the dropdown.",r.a.createElement("br",null),"Topics highlighted in green are entirely active, those in orange have subtopics selected. "),r.a.createElement(Te.a,null,r.a.createElement(Ie.a,{onClick:function(){return a("all")}},"Select all"),r.a.createElement(Ie.a,{onClick:function(){return a("none")}},"Clear all")),i,r.a.createElement("p",null,"Currently selected are: ",t.join(", ")," "),r.a.createElement("div",{id:"topic-list"},o))})),Qe=(n(101),Object(s.b)((function(e){return{userName:e.userID,userRating:e.userRating,currentQ:e.quAndA,activeScreen:e.activeScreen,selectedTopics:e.selectedTopics}}),{ChangeActiveScreen:f})((function(e){var t=e.userName,n=e.userRating,a=e.currentQ,c=e.activeScreen,o=e.selectedTopics,i=e.ChangeActiveScreen,s=r.a.createElement(u.a.Item,{onClick:function(){return i("classRoom")}},"5 in the Classroom"),m=r.a.createElement(u.a.Item,{onClick:function(){return i("testRoom")}},"Rate My Maths"),d=r.a.createElement(u.a.Item,{onClick:function(){return i("topicSelect")}},"Select Topics"),b=""===t?"Guest user":t;return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"header"},r.a.createElement(l.a,{id:"dropdown-variants-info",title:"Maths ELO",className:"appTitle",size:"lg"},"testRoom"===c?s:m,d),r.a.createElement("p",null,"Rate and review your maths"),r.a.createElement("p",{className:"userVSquestion"},b," (",n,") VS ",a.QType," (",a.QRating||"????",") ")),function(){switch(c){case"testRoom":return r.a.createElement(je,null);case"classRoom":return r.a.createElement(Ae,{typeList:[a.QType]});case"classRoom-General":return r.a.createElement(Ae,{typeList:o});case"topicSelect":return r.a.createElement(Ne,null);default:return r.a.createElement(je,null)}}())}))),Me=["--","--","--"],Se={userRating:1500,userID:"",userLoggedIn:!1,quAndA:{q:"How many mathematicians does it take to change a light bulb?",a:"1",QType:"giveDefault"},needNewRatedQ:!0,userAnswer:"",selectedTopics:Object(X.a)(g).map((function(e){return e.topic})),wrongAnswers:[],extraKeys4Pad:Me,activeScreen:"topicSelect"},Ce=function(e,t){return e.includes(t)?e.filter((function(e){return e!==t})):[].concat(Object(X.a)(e),[t])},Fe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(console.log("handling the action ",t),t.type){case"UPDATE_USER_ANSWER":return Object(y.a)({},e,{userAnswer:t.payload});case"TOGGLE_TOPIC":return Object(y.a)({},e,{selectedTopics:Ce(e.selectedTopics,t.topic)});case"ALL_TOPICS":return Object(y.a)({},e,{selectedTopics:"all"===t.mode?Object(X.a)(g).map((function(e){return e.topic})):[]});case"NEED_NEW_RATED_Q":return Object(y.a)({},e,{needNewRatedQ:!0});case"USER_RATING_CHANGES":return Object(y.a)({},e,{userRating:t.userRating});case"SET_NEW_Q":return Object(y.a)({},e,{quAndA:t.quAndA,needNewRatedQ:!1,extraKeys4Pad:t.quAndA.extraKeys||Me,userAnswer:"",wrongAnswers:[]});case"USER_IS_WRONG":return Object(y.a)({},e,{wrongAnswers:[].concat(Object(X.a)(e.wrongAnswers),[t.wrongAnswer]),userAnswer:"",quAndA:Object(y.a)({},e.quAndA,{QRating:t.newQuAndARating})});case"LOGIN_USER":return Object(y.a)({},e,{userID:t.userName,userRating:t.userRating,activeScreen:"testRoom",userLoggedIn:!0});case"KEYPAD_NUMBER":return Object(y.a)({},e,{userAnswer:e.userAnswer+t.payload});case"KEYPAD_DELETE":return Object(y.a)({},e,{userAnswer:e.userAnswer.slice(0,-1)});case"CHANGE_ACTIVE_SCREEN":return Object(y.a)({},e,{activeScreen:t.newScreen});default:return e}};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(s.a,{store:Object(i.b)(Fe)},r.a.createElement(Qe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},59:function(e,t,n){e.exports=n(102)},68:function(e,t,n){}},[[59,1,2]]]);
//# sourceMappingURL=main.a2d1559f.chunk.js.map