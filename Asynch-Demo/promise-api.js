// const p =Promise.reject(new Error('why itis error'));

// p.catch(error => console.log(error))

const p1 = new Promise((resolve,reject) =>{
    setTimeout(()=>{
   console.log('resolece promise 1');
   resolve(1);
   reject(new Error('error becouse something is getting problem'));
    },2000)
})

const p2 = new Promise((resolve) =>{
    setTimeout(() => {
        console.log('resolve promise 2')
        resolve(2)
    },2000)
})
Promise.race([p1,p2])
.then (result => console.log(result))
.catch(err => console.log('error',err.message))