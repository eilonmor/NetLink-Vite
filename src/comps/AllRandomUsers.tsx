
import UserInfluencerCard from './UserInfluncerCard';
import  {UserInfluncer} from "./MockeUsers";


export interface Props {
    listOfUsers: UserInfluncer[];
  }
// Comps responsibility - brings each correct user. 
function AllRandomUsers(props: Props){
    return (
                <>
                    {props.listOfUsers.map(user => (
                      <UserInfluencerCard key={user.name} user={user} />
                    ))}
                </>
    )};
export default AllRandomUsers;