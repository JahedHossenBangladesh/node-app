console.log('before');
// getUser(1,(user) =>{
//     console.log('User',user.id)
//     getRepo(user.githubUser,function(repo){
//         console.log('repo',repo)
//     })
// });

 getUser(1)
.then(user => getRepo(user.githubUser))
.then(repo => getCommits(repo[0]))
.then(commit => console.log('commit',commit));


console.log("after");

function getUser(id){
    return new Promise((resolve,reject) =>{
setTimeout(() => {
  console.log(`it is asynco ${id}`);
  resolve({ id: id, githubUser: "jahed" });
}, 2000);
    })


}

function getRepo(users){
  return new Promise((resolve,reject) =>{
  setTimeout(() => {
    resolve(["a", "b", "c"]);
  }, 2000);
  })
}

function getCommits(repo){
    return new Promise((resolve,reject) =>{
        setTimeout(() => {
            resolve(['commit'])
        })
    })
}