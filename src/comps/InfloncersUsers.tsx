import AllRandomUsers from "./AllRandomUsers"
// comps responsibility - show all the correct users
import { Props } from "./AllRandomUsers";

export  function InfluencerUsers(props: Props){
    return(
        <div id="userSection">
            <div>
                <div className="userFlex">
                    <img className="userImg" src="./img/eilon.jpg"/>
                    <h5>Eilon Mor Yosef</h5>
                </div>
                <p className="p-2 ">hey I'm 23 years old. I build this app in web dev corss</p>
            </div>
            <AllRandomUsers listOfUsers ={props.listOfUsers} />
        </div>  
    )
};
