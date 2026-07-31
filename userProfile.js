//Object methods example.
console.log("\nObject Mthod Example: ");

//Create user object with methods.

let user = {
    username: "jane_smith",
    email: "jane.smith@hotmail.com",
    password: "Pasword123456!",
    lastLogin: new Date("2027-01-15"),

    //method to update email
    updateEmail: function(newEmail){
        if (newEmail.includes("@") && newEmail.includes(".")){
            this.email = newEmail;
            return true;
        } else{
            console.log("Invalid email format.");
        return false;
        }
    } 

}
console.log("user object:", user);
console.log("Initial email: ",user.email);
user.updateEmail("jane.smith@gmail.com");
console.log("Updated email: ",user.email);


