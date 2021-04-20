console.log('before');
// getUser(1,(user) =>{
//     console.log('User',user.id)
//     getRepo(user.githubUser,function(repo){
//         console.log('repo',repo)
//     })
// });

//  getUser(1)
// .then(user => getRepo(user.githubUser))
// .then(repo => getCommits(repo[0]))
// .then(commit => console.log('commit',commit))
// .catch(err => console.log('Error',err.message));

//Async and Await approach
async function displayCommits(){

    try {
const user = await getUser(1);
const repo = await getRepo(user.getUser);
const commits = await getCommits(repo[0]);
console.log(commits);
    }
    catch (err){
        console.log('Error',err)
    }

}

displayCommits()

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
    // resolve(["a", "b", "c"]);
    reject(new Error('Could not resolve the code'))
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