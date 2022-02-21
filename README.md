## Full-Stack multi pages project


### tasks:

#### Task1:
create register page under this route /register and add a link for register on the navigation bar

    - register page should have the following inputs

        - first name
        - last name
        - username
        - email
        - password
        - re-password
        - birth date

    - create database on mongodb atlas called FBW-e05-1
    - save user registered data in a collection called users in the database
    - create a schema called userSchema with these properties and validation:
        - first name: string, min length: 2 , max length: 50, required
        - last name: string, min length: 2 , max length: 50, required
        - email: string, min length: 5 , max length: 50, required, unique
        - password (should be encrypted): string, required
        - birth date: date, required
        - verified (should be false): boolean 
    - sending registered user data from front to back end should be by FETCH 

#### Extra:
on the database validation : 

    - email: should be an email format
    - birth date: user should be 18 years old or older

