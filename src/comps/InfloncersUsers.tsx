import { generateRandomUser, users1 } from "./MockeUsers";
import AllRandomUsers from "./AllRandomUsers"
import UserInfluencerCard from "./UserInfluncerCard";
// import UserSearch from "./searchInfluncer";
// import {FilteredUsersClient} from './searchInfluncer'

// comps responsibility - show all the correct users


export  function InfluencerUsers(){
    return(
        <div id="userSection">
            <div>
                <div className="userFlex">
                    <img className="userImg" src="./img/eilon.jpg"/>
                    <h5>Eilon Mor Yosef</h5>
                </div>
                <p className="p-2 ">hey I'm 23 years old. I build this app in web dev corss</p>
            </div>
            <UserInfluencerCard user={generateRandomUser()} />
            {/* <FilteredUsersClient /> */}
            <AllRandomUsers />
            

            {/* <AllRandomUsers  func={GenerateRandomUser}/> */}
        </div>  
    )
};
