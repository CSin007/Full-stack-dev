import { v4 as uuidv4 } from 'uuid';
let users = [

]; 

export const createUser= (req,res) =>{
    const user = req.body; 
   
    users.push({ ...user, id: uuidv4()}); 
    res.send(`User with username ${user.firstName} added to DB`); 
   };

export const getUser = (req,res) => {
    console.log(users); 
    res.send(users);
    //res.send(users); this prints in json format
}; 
export const getIDuser = (req,res) => {
    // issue is this matches anything after users, we need particular id
    const {id} = req.params;
     
    const foundUser = users.find( (user) => user.id === id ); 
    res.send(foundUser); 
   };

export const delUser = (req,res) => {
    const {id} = req.params;
    users = users.filter((user)=> 
        user.id !== id ); 
    res.send(`User with id ${id} is deleted`); 
};
 
export const patchUser = (req,res) => {
    const {id} = req.params;
    const {firstName,lastName, age} = req.body; 
    const userPatch = users.find( (user) => user.id === id ); 
    if(firstName){
        userPatch.firstName = firstName;
    }
    if(lastName){
        userPatch.lastName = lastName;
    }
    if(age){
        userPatch.age = age;
    }

    
    res.send(`User with id ${id} updated`)
};