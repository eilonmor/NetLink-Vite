import { useState, useEffect } from 'react';
import UserInfluencerCard from './UserInfluncerCard';
import AllRandomUsers  from "./AllRandomUsers";
import  { users1, UserInfluncer, generateRandomUser  } from "./MockeUsers";
// import { users } from "module";

export function bringEventSearch(event: { target: { value: string; }; }):string|undefined{
    try{
        console.log(event.target.value)
    return(event.target.value)
    }catch{
        console.log("Eror404")
        return "Eror404"
    }
    
}

export  function FilteredUsersClient(e:{ target: { value: any; }; }){
    const clientSearch = bringEventSearch(e)
    const filteredUsers = users1.filter(user => 
        user.name.toLowerCase().includes(clientSearch!.toLowerCase())
    );
    return(
        <div>
            {filteredUsers.map(user => (
              <UserInfluencerCard key={user.name} user={user} />
            ))}
        </div>)
    //     <div>
    //     {filteredUsers.map(user => (
    //     <UserInfluencerCard key={user.name} user={user} />
    //   ))}
    //   </div>) 
}

function UserSearch(e:{ target: { value: any; }; },users: Array<UserInfluncer> ){
    // const [searchTerm, setSearchTerm] = useState('');
    // const handleSearch = (e) => {
    //     setSearchTerm(e.target.value);
    // }
    const clientSearch = bringEventSearch(e)
    const filteredUsers = users1.filter(user => 
        user.name.toLowerCase().includes(clientSearch!.toLowerCase())
    );

    return (
        <div>
            <input type="text" placeholder="Search for user" onChange={bringEventSearch} />
            {filteredUsers.map(user => (
              <UserInfluencerCard key={user.name} user={user} />
            ))}
        </div>
    );
}

export default UserSearch;
