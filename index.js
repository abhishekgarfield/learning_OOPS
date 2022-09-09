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
var el=document.querySelector(".but");
$(".but").addEventListener("click",()=>{
    hello();
});

const hello=()=>{
    hi();}