console.log("hello + 2")

const firstName = document.getElementById('fname');
const lastName = document.getElementById('lname');
const email = document.getElementById('email');
const password = document.getElementById('password');

//create a new user object when submit button clicked

function Person(firstName, lastName, email, password) {
    this.firstName= firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password; 
};

 //create a new user with added values
 function myFunction() {
    const newUser = new Person(firstName.value, lastName.value, email.value, password.value);
    alert(`The form was submitted! Thank you ${newUser.firstName} ${newUser.lastName} for signing up!`);
    console.log(newUser);    
}


 