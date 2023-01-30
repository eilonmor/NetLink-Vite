import {SearchAndFilter} from './SearchAndFilter'
import {InfluencerUsers} from './InfloncersUsers'
import {useEffect, useState} from 'react'
import { UserInfluncer } from "./MockeUsers";
// comps responsibility creates the main of the app
export  function Main(){
    const [fullListOfUsers, setFullListOfUsers] = useState<UserInfluncer[]>([])
    let [usersInfluncerList, setUsersInfluncerList] = useState<UserInfluncer[]>([])
    useEffect(() => {
        const fetchData = async () => {
            const port = 3002
            const url = 'http://localhost:'
            let endPoint = '/NetLink'
            const data= await fetch(`${url+port+endPoint}`)
            const responce =await data.json()
            setUsersInfluncerList(responce)
            setFullListOfUsers(responce)
        }
        fetchData()
    }, []);
    const search = (event:any)=> {
        try{
            let ev = (event.target.value)
            const filteredUserssss = usersInfluncerList.filter(user => user.name.toLowerCase().includes(ev!.toLowerCase()))
            setUsersInfluncerList(filteredUserssss)
            if (ev === ''){setUsersInfluncerList(fullListOfUsers)}
        }catch{
            console.log("Eror404")
            return "Eror404"
        }

        
    }
    return(
        <div id="mainscrool" className="px-3 w-auto align-items-center m-auto text-center p-sm-5">
            <SearchAndFilter onChange={search} />
            <InfluencerUsers listOfUsers={usersInfluncerList} />
        </div>
    );
};