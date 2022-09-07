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