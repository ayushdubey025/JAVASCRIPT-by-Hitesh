class user{
    constructor(username){
        this.username = username
    }

    logMe()
    {
        console.log(`USERNAME name is ${this.username}`)
    }

   static id()  // it is for user who don't want to share id
    {
        return "024";
    }
}

const Ayush = new user("Ayush Dubey")

// console.log(Ayush.id())

class Teacher extends user{
    constructor(username,email,password)
    {
        super(username)
        this.email = email
        this.password = password
    }
}

const samsung = new Teacher("samsung","galaxyai@samsung.com","24")

samsung.logMe()