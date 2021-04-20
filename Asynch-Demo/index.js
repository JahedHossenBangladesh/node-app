console.log('before');
getUser(1,(user) =>{
    console.log('User',user.id)
    getRepo(user.githubUser,function(repo){
        console.log('repo',repo)
    })
});
console.log('after');

function getUser(id,caallback){
setTimeout(() => {
  console.log(`it is asynco ${id}`);
  caallback({ id: id,githubUser: "jahed"});
}, 2000);
return 1;
}

function getRepo(users,called){
    setTimeout(() =>{ called(["a", "b", "c"]);
 },2000);
}