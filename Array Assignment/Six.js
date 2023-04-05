//create array of object items//

let actors={
    actors1:{"id":"101", "name":"Ak", "movie":"62",},
    actors2:{"id":"102", "name":"vijay", "movie":"65",},
    actors3:{"id":"103", "name":"surya", "movie":"31", },
    actors4:{"id":"104", "name":"dhanush", "movie":"36",},
}


const arrayofactorsDetails =object.values(actors).map(key => actors[key])
console.log(actorsofplayerDetails);
