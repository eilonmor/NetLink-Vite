import { generateRandomUser } from "./MockeUsers";
import AllRandomUsers from "./AllRandomUsers"
import UserInfluencerCard from "./UserInfluncerCard";
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
            <AllRandomUsers />

            {/* <AllRandomUsers  func={GenerateRandomUser}/> */}
        </div>  
    )
};
