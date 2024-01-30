// Promise one

const promiseOne = new Promise(function (resolve, reject) {
  //Do an async task
  // DB calls, cryptography, network

  setTimeout(function () {
    // console.log("Async task is complete");
    // resolve()
  }, 1000);
});

promiseOne.then(function () {
  console.log("Promise consumed");
});


// Promise two  == >> we can do it without split

new Promise(function(resolve,reject){
    setTimeout(function(){
        // console.log("Async task 2");
        // resolve()
    },1000)
}).then(function(){
    console.log("Aync task 2 complete")
})


// Promise third

ThirdPromise = new Promise(function(resolve,reject){

  setTimeout(function () {
    resolve({username: "iamdubey024", profession: "Software Developer"})
  },1000)
});

ThirdPromise.then(function (user) {
  console.log(user);
  
});

// Promise four ==>> (use of reject)

const PromiseFour = new Promise (function (resolve,reject){
  setTimeout(function(){
    {
        let error = false;
        if(!error)
        {
          resolve({username: 'iamdubey024', email:'ayushdubey0806@gmail.com'});
        }
        else
        {
          reject("ERROR: Something went wrong")
        }
      }
  },1000)
} )

// chaining is important for database connections

PromiseFour.then((user) => {
  console.log(user);
  return user.username;
})
.then((username) =>
{
  console.log(username);

})
.catch(function (error)
{
  console.log(error);
})
.finally(() => console.log("The promise is either resolved or rejected"));


// Promise five
// async, await => they can't handle errors directly

const PromiseFive = new Promise(function (resolve,reject) {
  setTimeout(function(){
    let error = true;
    if (!error) {
      resolve({username:"webdevelopment", id:"9599838173"})
    }
    else{
      reject("Error: you got error for webdev")
    }
  },1000)
});

async function consumePromiseFive()
{
 try {
  const response = await PromiseFive
  console.log(response);
 } catch (error) {
  console.log(error)
 }
}

consumePromiseFive();

// fetch

async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')

        const data = await response.json()
        console.log(data);
    } catch (error) {
        console.log("E: ", error);
    }
}

getAllUsers()

fetch('https://api.github.com/users/iamdubey024   ')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => console.log(error))

// promise.all
// yes this is also available, kuch reading aap b kro.