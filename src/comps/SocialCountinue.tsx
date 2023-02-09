import { Header } from "./Header";



function CreatInput(props: { mediaName: any; }){
    console.log(`this is check, ${props.mediaName}`)
    return( 
        <div className="form-floating mb-3">
            <input type="text" className="form-control" id={props.mediaName} />
            <label htmlFor={props.mediaName}>Llink to {props.mediaName} </label>
        </div>
  ) 
}

function BuildInputsSocialMedia(){
    const listOfChocenSocial = localStorage.arrayOfSocialMedia.split(",")
         return(
            <>
            {listOfChocenSocial.map((media: string) => {
                <CreatInput mediaName = {media}/>
                console.log(media)
            })}
            </>
         )
};


export function SocialContinue(){
    return(
        <>
            <Header />
            <main id="infloncerMain" className="container-fluid">
            <h2 className="text-sm-center p-4">Put links to your socials media</h2>  
            <div id="eilon" className="container-sm p-4" />
            <BuildInputsSocialMedia />
            <div className="form-floating mb-3">
                <input type="text" className="form-control" id='facebook' />
                <label htmlFor='facebook'>Llink to facebook </label>
            </div>
                <div className="container-sm text-center" style={{width: '40%'}}>
                    <a href="./infloncerRightAbuotYorself.html"><button type="submit" className="w-100 btn btn-lg btn-primary">submit</button></a>
                </div>  
            </main>
        </>
    )
}