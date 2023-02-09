import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
let listOfSocialInput:any = []

function createDiv(social:string, imgS: string ){
    return(
        <div>
            <input type="checkbox" id={`${social}`} name="interest" defaultValue={`${social}`}  />
            <label htmlFor={`${social}`} ><img src={`${imgS}`}/></label>
        </div>
    )
}

export function SocialNetworkCh(){
    function buildInputsSocial(){
        listOfSocialInput = []
        const listOfSocialMedia = document.querySelectorAll('input')
        const eilonM = document.querySelectorAll('eilon')
        listOfSocialMedia.forEach(social => {
            if (social.checked === true){
                console.log(social.value)
                listOfSocialInput.push(social.value)
            }
            localStorage.setItem('arrayOfSocialMedia', listOfSocialInput)
        });
    }
    return(
        <>
            <Header />
            <div>
                <legend style={{textAlign: 'center'}}>Choose your social networks:</legend>
                <fieldset className="site">
                <div>
                    <input type="checkbox" id="facebook" name="interest" defaultValue="facebook" />
                    <label htmlFor="facebook"><img src="./img/f_logo_RGB-Blue_1024.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="instagram" name="interest" defaultValue="instagram" />
                    <label htmlFor="instagram"><img src="./img/Instagram_Glyph_Gradient.jpg" /></label>
                </div>
                <div>
                    <input type="checkbox" id="linkdin" name="interest" defaultValue="linkdin" />
                    <label htmlFor="linkdin"><img src="./img/linkdin.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="Pinterest" name="interest" defaultValue="Pinterest" />
                    <label htmlFor="Pinterest"><img src="./img/Pinterest.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="reddit" name="interest" defaultValue="reddit" />
                    <label htmlFor="reddit"><img src="./img/reddit.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="snapchat" name="interest" defaultValue="snapchat" />
                    <label htmlFor="snapchat"><img src="./img/snapchat.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="tiktok" name="interest" defaultValue="tiktok" />
                    <label htmlFor="tiktok"><img src="./img/tiktok.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="twiter" name="interest" defaultValue="twiter" />
                    <label htmlFor="twiter"><img src="./img/twiter.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="twich" name="interest" defaultValue="twich" />
                    <label htmlFor="twich"><img src="./img/twich.jpg" /></label>
                </div>
                <div>
                    <input type="checkbox" id="youtube" name="interest" defaultValue="youtube" />
                    <label htmlFor="youtube"><img src="./img/youtub.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="wechat" name="interest" defaultValue="wechat" />
                    <label htmlFor="wechat"><img src="./img/wechat.png" /></label>
                </div>
                <div>
                    <input type="checkbox" id="qq" name="interest" defaultValue="qq" />
                    <label htmlFor="qq"><img src="./img/qq.png" /></label>
                </div>
                </fieldset>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className="btn btn-outline-primary" type="submit" onClick={() => {buildInputsSocial()}}><Link to={'put-link'}>Submit!</Link> </button>
                </div>
            </div>
            <Footer />
        </>
    )
}