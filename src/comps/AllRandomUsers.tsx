
import * as React from 'react';
import UserInfluencerCard from './UserInfluncerCard';
import { generateRandomUser  } from "./MockeUsers";

const AllRandomUsers= () => {
    const users = Array(250).fill(0).map(generateRandomUser);
    return (
        <>
            {users.map(user => (
              <UserInfluencerCard key={user.name} user={user} />
            ))}
        </>
    );
}

export default AllRandomUsers;