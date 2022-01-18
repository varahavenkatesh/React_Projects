const products = [
 {name:'Sony',category:'TV',radiation:true},
 {name:'Samsung',category:'TV',radiation:false},   
 {name:'Apple',category:'Phone',radiation:true},
 {name:'LG',category:'TV',radiation:true},
 {name:'Samsung',category:'Phone',radiation:true},
 {name:'LG',category:'Phone',radiation:false},
 {name:'TCL',category:'TV',radiation:false},
 {name:'MI',category:'TV',radiation:false},
 {name:'MI',category:'TV',radiation:true},
 {name:'Sony',category:'Phone',radiation:true},
 {name:'OnePlus',category:'TV',radiation:false},
 {name:'OnePlus',category:'Phone',radiation:true}

]

let result = products.filter(function(item){
    return item.category==='TV';
})

console.log(result);
result = products.filter(function(item){
    return item.category==='TV' && !item.radiation;
})
console.log(result)

const students = [
    {name:'Francis',grade:4},
    {name:'Martin',grade:5},
    {name:'FrancMarthas',grade:7}
]

const value= (name,age)=>{
    return `My name is ${name} and age ${age}`;
}

console.log(value('Venkatesh',50));

let sum=(x,y)=> x+y;
console.log(sum(20,30));


function showData(arg1,...arg2){
    console.log(arg1)
    console.log(arg2)
}

showData(["one","two","three","Four"],345,"TASTE",393939,"rrr");

const user={
    names:"Venky",
    age:45,
    salary:30000,
    experience:20
}

const {names,age,salary,experience} =user;
console.log(names,age,salary);
const url = "https://jsonplaceholder.typicode.com/posts/1";
//const wrongURL="https://dda.dodk.utut./1/2/2";
fetch(url).then(response =>response.json()).then(data=>console.log(data));
//fetch(wrongURL).then(response=>response.json()).then(data=>console.log(data)).catch(error=>console.log(("Bad URL "+error)))

let pads= new Set([1,2,3,4,5,6]);

for(let item of pads){
    console.log(item);
}
pads.forEach((item)=>{
    console.log(item);
})
let test = new Promise(function(resolve,reject){

    let flag=true;
    if(flag){
        resolve('Record');
    }
    else {
        reject('RED HAT');
    }
});
test.then(function(fromResolve){
    console.log(`The value is ${fromResolve}.`);

}).catch(function(fromReject){
    console.log(`The Value is ${fromReject}`);
})
