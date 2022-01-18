const posts=[
    {title:'Post One',body: 'This is Post One'},
    {title:'Post Two',body: 'This is Post Two'}
];
function getPosts() {
    
    
setTimeout(()=>{
let output ='';
posts.forEach((post)=>{
output+=`<li>${post.title}</li>`
});
document.body.innerHTML=output;
},1000);

}

function createPost(post) {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);
         
            const error =false;
            // set error tp true in order to trigger reject.
            if(!error)
                resolve();
                else reject('Error: OOPS There Seems to be a Problem')
        },2000)
    });
    
}
//getPosts()

// Callback calls example
//createPost({title:'Post Three',body: 'This is Post Three'},getPosts);
// Promise Call Example
//createPost({title:'Post Three',body: 'This is Post Three'}).then(getPosts).catch(error=>console.log(error));
//Async/ Await
async function init(){
   await  createPost({title:'Post Three',body: 'This is Post Three'});
   getPosts();
}

init();

//Async /Await Fetch
async function fetchUsers(){
    const res=await fetch('https://jsonplaceholder.typicode.com/users');
    const data =res.json();
    console.log(data);
}
fetchUsers();