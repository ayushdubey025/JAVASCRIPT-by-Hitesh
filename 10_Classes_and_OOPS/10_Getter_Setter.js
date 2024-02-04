class user{
    constructor(username,email,password)
    {
        this.username = username
        this.email = email
        this.password = password
    }
    get email()  // always return something
    {
        return `${this.Email.toUpperCase()}`
    }

    set email(value)
    {
        this.Email = value;
    }

    get password() // always return something
    {
        return `${this.Password.toUpperCase()}`
    }

    set password(value)
    {
        this.Password = value;
    }

}

const ayush = new user("ayush024","ayush0806@mail.com","Ayush@4567")
console.log(ayush.email)
console.log(ayush.password)