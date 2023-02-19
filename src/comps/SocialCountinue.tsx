import { Header } from "./Header";
import { useNavigate } from "react-router-dom";


function BuildInputsSocialMedia(){
    const listOfChocenSocial = localStorage.arrayOfSocialMedia.split(",")
         return(
                <>
                    {listOfChocenSocial.map((media:string) => (
                      <div className="form-floating mb-3">
                        <input type="text" className="form-control" id={media} />
                        <label htmlFor={media}>Llink to {media} </label>
                      </div>
                    ))}
                </>
         )
};


export function SocialContinue(){
    const navigate = useNavigate()
    return(
        <>
            <Header />
            <main id="infloncerMain" className="container-fluid">
            <h2 className="text-sm-center p-4">Put links to your socials media</h2>  
            <div id="eilon" className="container-sm p-4" />
            <BuildInputsSocialMedia />
                <div className="container-sm text-center" style={{width: '40%'}}>
                    <button type="submit" className="w-100 btn btn-lg btn-primary" onClick={()=>navigate('details-register')}>submit</button>
                </div>  
            </main>
        </>
    )
}