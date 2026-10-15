//Level1

for(let i=0; i<10; i++){
  console.log("hello Dawg")
};

//Level2

const names =["navid","nima","mehdi","kambiz"]
let n = 100;
for(let i=0;i<names.length;i++){
  console.log( n + "midam be" + names[i])
}

//Level3

const name =["navid","nima","mehdi","kambiz"];
const dublicates=[];
for (let i=0; i<name.lenght; i++){
  for ( let j =i+1;j<users.length;j++){
    if( name[i] ===name[j] && !dublicates.includes(users[i])
    ){
      duplicates.push(name[i]);
    }
  }
}

//Level1
let i =0;
while(i<10){
  console.log("chaghal")
}

//Level2

let tries =0;
let success =false;
while(tries<3 && !success){
  tries++;
  console.log(`Attempts ${tries}`);
  if (tries===2){
    success=true;
  }
}
console.log(success);

//level3

const tasks = [{id:1,status:"pending"},{id:2,status:"pending"},{id:3,status:"pending"}]
while (tasks.length >0){
  const task = tasks.shift();
  task.status = "completed";
  console.log(`The task ${task.id} is ${task.status}`);
}
console.log(tasks);