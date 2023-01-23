import {SearchAndFilter} from './SearchAndFilter'
import {InfluencerUsers} from './InfloncersUsers'
// comps responsibility creates the main of the app
export  function Main(){
    return(
        <div id="mainscrool" className="px-3 w-auto align-items-center m-auto text-center p-sm-5">
            <SearchAndFilter />
            <InfluencerUsers />
        </div>
    );
};