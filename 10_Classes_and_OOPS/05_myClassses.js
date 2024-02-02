class user{
    constructor(username,id,password)
    {
        this.username = username;
        this.id = id;
        this.password = password;

    }

    encryptPasswordis()
    {
        return `user password is ${this.password}`;
    }

    tellID()
    {
        return `userid is ${this.id}`
    }
}

const company = new user('ayush','iamdubey024','9599')
console.log(company.encryptPasswordis());
console.log(company.tellID());

// behind the scenes

function User(username, id, password)
{
    this.username = username;
    this.id = id;
    this.password = password;
}

User.prototype.encryptPasswordis = function(){
    return `user password is ${this.password}`;
}

User.prototype.tellID = function(){
    return `userid is ${this.id}`
}

const Company = new User('AYUSH','dubeyji','2001')

console.log(Company.encryptPasswordis());
console.log(Company.tellID());