// Singleton constructor

// const fbuser = new Object(); // FIXME: IMPORTANT: Singleton object
const fbuser = {}    // Non singleton object
// console.log(fbuser)  // {}

fbuser.id = "123abc"
fbuser.name = "Dubey"
fbuser.isLoggedIn = true

// console.log(fbuser)

const user = {
    email: "abc@gmail.com",
    name: {
        firstname: "Ayush",
        lastname: "Dubey"
    }
}

// console.log(user.email)
// console.log(user.name.lastname)

const o1 = {1:"a", 2:"b"}
const o2 = {3:"c", 4:"d"}

// o3 = o1.concat(o2)  // TODO: Concatinate  method doesn't work

// const obj3 = Object.assign({}, obj1, obj2, obj4)

const o3 = {...o1,...o2} // TODO: SPREAD method works
//console.log(o3)

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]

// users[1].email

console.log(fbuser)

//console.log(Object.keys(fbuser))  // datatype will be arrays
//console.log(Object.values(fbuser)) // datatype will be arrays
//console.log(Object.entries(fbuser)) // each key value will be in a Array
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

// course.courseInstructor

const {courseInstructor: instruct} = course

// console.log(courseInstructor);
console.log(instruct);

// {  TODO: JSON API is almost similar to Object, but in JSON we use " " for keys

//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]