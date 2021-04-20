console.log('before')

async function notifyCustomer(){
try{
const customer = await getCustomer(1)
console.log('Customer',customer);
if(customer.isGold){
const movies = await getTopMovies();
console.log('Top Movies',movies)
await sendEmail(customer.email,movies);
console.log('Email send ...')
}}
catch(err){
    console.log(new Error('something went wrong',err))
}


}

notifyCustomer();
console.log('after')


function getCustomer(id){
return new Promise((resolve,reject) =>{
    setTimeout(() => {
        console.log('database is connectiong')
        resolve({ id:1,name:'Jahed Hossen',
    isGold:true,
email:'email'})
    },2000);
});
}

function getTopMovies(){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(['movie1','movie2'])
        },2000)
    })
}

function sendEmail(email,movies){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve()
        },2000)
    })
}