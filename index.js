const obj={
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