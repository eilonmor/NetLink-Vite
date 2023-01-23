
import * as React from 'react';
import UserInfluencerCard from './UserInfluncerCard';
import  {users1, UserInfluncer, generateRandomUser  } from "./MockeUsers";
import { useState, useEffect } from 'react';
import { bringEventSearch } from './searchInfluncer';
import {listofUsers, listofUMocksers, setListofUMocksers} from './UsersMockList'


function AllRandomUsers(e: { target: { value: string; }; }){
    // const [users, setUsers] = useState<UserInfluncer[]>([]) 
    // useEffect(() => {
    //     setUsers(Array(250).fill(0).map(generateRandomUser))
    //     }, []);

    
    let clientInput =  bringEventSearch(e)
    console.log('client: ' + clientInput)
    if (clientInput == "Eror404"){
        return (
            <>
                {listofUMocksers.map(user => (
                  <UserInfluencerCard key={user.name} user={user} />
                ))}
            </>
        );
    }else {
        console.log('hi')
        const filteredUserssss = listofUsers.filter(user => user.name.toLowerCase().includes(clientInput!.toLowerCase())
        );
        console.log('hihi')
        setListofUMocksers(filteredUserssss)
        console.log(filteredUserssss)
        return(
            
            <>
            {console.log('I can Do it')}
                {listofUMocksers.map(user => (
                  <UserInfluencerCard key={user.name} user={user} />
                ))}
            </>
        );
    }

    
}

export default AllRandomUsers;