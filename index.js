import play from "./var";
var play= require("play");

    /*const obj={
    0:"abhishek",
    1:"sharma"
}

var el=document.getElementsByClassName("hi");
for(var i=0;i<el.length;i++)
{
    console.log(el[i]);
}
for(var i=0;i<Object.keys(obj).length;i++)
{
    console.log(obj[i]);
}
try{
Object.entries(obj).forEach(([key,item]) => {
    console.log(key);
});}
catch(err)
{
    console.log(err);
}

var arr=[1,2,3];
var arr1=[...arr,6];
console.log(arr1);

var arr2=arr1.map((item)=>{
return item>3;
})
console.log(arr2);

var ar=[{
    user_id:"2",
    name:"abhi"
},{
    user_id:"3",
    name:"sharma"
}]

const ne=ar.map(({user_id})=>user_id)
console.log(ne);


const obje={
    name:"abhishek",
    type:"coder",
    child:0,
    parents:{
        father:"sh. amin",
        profession:"teacher"
    }
}
const arr90=[1,2,3,4];
const arr89=[4,5,6];
console.log([...arr90,...arr89]);
console.log(arr89.concat(arr90))


const car={
    name:"mustang",
    type:"muscle",
    color:"red"
}
const car2={
    name:"mustang",
    type:"muscle",
    color:"yellow"
}
console.log({...car,type:"me"});
const [id,id2,,,[a,b,c]=id3]=arr90;
const {name,type,parents: {profession}}=obje;
console.log(name,type,id2,profession,a);
*/
/*
var el=document.getElementById("name");
el.addEventListener("input",(e)=>{
    handleChange(e);
})
var el1=document.getElementById("age");
el1.addEventListener("input",(e)=>{
    handleChange(e);
})
const  obj={
    "name":String,
    "age":Number
 };
const handleChange=(e)=>{
    
 
 var ob={...obj,[e.target.name]:[e.target.value]};
 obj={...ob};
 e.target.value=obj[e.target.name];
 console.log(obj);

}


const dish = [
  {
    id: 1,
    name: "maggie",
  },
  {
    id: 2,
    name: "paneer",
  },
  {
    id: 3,
    name: "chicken",
  },
  {
    id: 2,
    name: "paneer",
  },
  {
    id: 3,
    name: "chicken",
  },
];

const objec={};

dish.map((item)=>{
if(!objec[item.id])
{
    objec[item.id]=[];
}
objec[item.id].push(item);
})
console.log(objec);
*/
/*
const say=()=>{
    console.log("first occurence");
}
var el=document.querySelector(".but");
el.addEventListener("click",()=>{hello(()=>{console.log("inside fxns")})})
const hello=(dr)=>{
    say();
    dr();
    console.log("second occurence");
    say();
    const hlo=()=>{
        console.log("third occurence");
    }
    console.log("fourth occurence");
}
*/
/*
var a=[[1,2,4],[3,5,4],[4,5,8],[6,7,9]];for([num,...rest] of a){console.log(rest)};
VM1587:1 (2) [2, 4]
VM1587:1 (2) [5, 4]
VM1587:1 (2) [5, 8]
VM1587:1 (2) [7, 9]
undefined
var a=[[1,2,4],[3,5,4],[4,5,8],[6,7,9]];for([num,...rest] of a){console.log(rest)};
VM1617:1 (2) [2, 4]
VM1617:1 (2) [5, 4]
VM1617:1 (2) [5, 8]
VM1617:1 (2) [7, 9]
undefined
var arr=[1,2,3,4];arr.map(item=>item*2);
(4) [2, 4, 6, 8]
var arr=[1,2,3,4];arr.map(item=>{item*2});
(4) [undefined, undefined, undefined, undefined]
var arr=[1,2,3,4];arr.map((item)=>{item*2});
(4) [undefined, undefined, undefined, undefined]
var arr=[1,2,3,4];arr.map((item)=>{ return item*2});
(4) [2, 4, 6, 8]
*/
/*
VM1885:1 Console was cleared
undefined
var a={name:"abhishek"};a["age"]=26;
26
a
{name: 'abhishek', age: 26}
const b={name:"abhishek"};a["age"]=26;
26
b
{name: 'abhishek'}
const b={name:"abhishek"};b["age"]=26;
26
b
{name: 'abhishek', age: 26}
const b=10;
undefined
const b=30;
undefined
b
30
const a=10;const a=30;
VM2309:1 Uncaught SyntaxError: Identifier 'a' has already been declared
var a=10;const a=30;
VM2350:1 Uncaught SyntaxError: Identifier 'a' has already been declared
var a=10;var a=30;
undefined
a
30
let a=3;let a;
VM2423:1 Uncaught SyntaxError: Identifier 'a' has already been declared
let a=30;function hello(){console.log(a)} hello();
VM2592:1 Uncaught SyntaxError: Identifier 'a' has already been declared
let aee=30;function hello(){console.log(a)} hello();
VM2650:1 30
undefined
let aee=30;function hello(){console.log(aee)} hello();
VM2688:1 30
undefined
var aer=[1234,234];for(item of aer){console.log(item)};
VM2916:1 1234
VM2916:1 234
undefined
const art={name:"abhishek",age:"27"};for(key in art){console.log(art[key])};
VM3102:1 abhishek
VM3102:1 27
undefined
const helloo=()=>{if([]){var a=10; console.log(`inside if ${a}`)}console.log(a);};helloo();
VM3500:1 inside if 10
VM3500:1 10
undefined
const helloo=()=>{if([]){let a=10; console.log(`inside if ${a}`)}console.log(a);};helloo();
VM3528:1 inside if 10
VM3528:1 30
undefined
const helloo=()=>{if([]){const a=10; console.log(`inside if ${a}`)}console.log(a);};helloo();
VM3557:1 inside if 10
VM3557:1 30
undefined
*/
/*
var a =78.34556;
undefined
var a =78.34556; a.toFixed(3)
'78.346'
var a =78.34556; a.toFixed(1)
'78.3'
var a =78.34556; a.toFixed(1)
'78.3'
var a =78.34556; parseFloat(a.toFixed(1))
78.3
var a =78.34556; Number(a.toFixed(1))
78.3
Math.PI
3.141592653589793
Math.PI.round(2);
VM403:1 Uncaught TypeError: Math.PI.round is not a function
    at <anonymous>:1:9
(anonymous) @ VM403:1
Math.PI.round();
VM413:1 Uncaught TypeError: Math.PI.round is not a function
    at <anonymous>:1:9
(anonymous) @ VM413:1
Math.round( Math.PI);
3
Math.round(11.6);
12
Math.round(11.5);
12
Math.round(11.4);
11
Math.ceil(11.2)
12
Math.floor(11.9)
11
Math.random()*1000;
606.595614636349
Math.random()*1000;
290.8856154797053
Math.random()*1000;
875.8627404572615
Math.(random()*1000);
VM859:1 Uncaught SyntaxError: Unexpected token '('
(Math.random()*1000);
744.2933417726721
(Math.random()*1000).floor;
undefined
(Math.random()*1000).ceil;
undefined
Math.floor(Math.random()*1000);
382
Math.floor(Math.random()*1000);
84
Math.floor(Math.random()*1000);
226
Math.floor(Math.random()*1000);
562
Math.floor(Math.random()*1000);
252
Math.floor(Math.random()*10);
5
Math.floor(Math.random()*10);\
VM1042:1 Uncaught SyntaxError: Invalid or unexpected token
Math.floor(Math.random()*10);\
VM1046:1 Uncaught SyntaxError: Invalid or unexpected token
Math.floor(Math.random()*10);
3
Math.floor(Math.random()*10);
2
Math.floor(Math.random()*10);
8
window.matchMedia("(user-color-scheme:dark)");
MediaQueryList {media: '(user-color-scheme:dark)', matches: false, onchange: null}
window.matchMedia("(user-color-scheme:dark)").matches;
false
*/
var el=document.querySelector(".but");
$(".but").addEventListener("click",()=>{
    hello();
});

const hello=()=>{
    hi();}