const numbers = [1,2,3,4,5,6,7,]
let otherAray= numbers.map(function(item){
    return item *10;
}) 

console.log(otherAray)
let  users= [
    {user:'Booadman',age:29,eyes:'Brown'},
    {user:'John root',age:32,eyes:'Black'},
    {user:'Patty Smith',age:22,eyes:'Grey'}
];

const listOfUsers= users.map(function(user){
    return user.user;
})

console.log(listOfUsers);
listOfUsers.forEach(function(item){

    const select = document.querySelector('select');
    select.insertAdjacentHTML("afterbegin",`<option value =${item} >${item}</option>`)
});

const paintings = [
    {name:'Mona Lisa',width:200,height:200},
    {name:'The Scream',width:400,height:600},
    {name:'The Last Supper',width:600,height:700}
]
const messages = paintings.map(function(paint){
  return `The ${paint.name} is ${paint.width} X ${paint.height}`;   
})

console.log(messages);

const cars =[
    {name:'BMW',price:4000},
    {name:'AUDI',price:7000},
    {name:'Merc',price:8000},
    {name:'Porsche',price:4000}
]
function convertPrice(price){
    return price*90;
}
const price = cars.map(function(item){
    return `The ${item.name} is ${convertPrice(item.price)}`;
})
console.log(price)