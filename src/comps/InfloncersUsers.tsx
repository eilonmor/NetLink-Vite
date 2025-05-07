import AllRandomUsers from "./AllRandomUsers"
// comps responsibility - show all the correct users
import { Props } from "./AllRandomUsers";

export  function InfluencerUsers(props: Props){
    return(
        <div id="userSection">
            <AllRandomUsers listOfUsers ={props.listOfUsers} />
        </div>  
    )
};
