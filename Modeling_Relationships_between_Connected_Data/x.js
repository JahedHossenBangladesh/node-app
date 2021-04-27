//Trade off between query performance vs consistency

//Using Reference (Normalization) -> Consistency
let author ={
    name:'Mosh'
}

let course = {
    author :'id',
    // authors:[
    //     'id1',
    //     'id2'
    // ]
}
//using Embedded Documents (Denormalization) -> performance 
 let course ={
    author:{ 
        name:'Mosh'
    }
}

//Hybrid Reference
let author ={
    name :'Mosh'
}
let course ={
    author:{
        id:'ref',
        name:'Mosh'
    }
}