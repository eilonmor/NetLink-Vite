import { Link } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import instegram from '../assets/Instagram.jpg'
import facebook from '../assets/facebook.png'
import linkdin from '../assets/linkdin.png'
import Pinterest from '../assets/Pinterest.png'
import reddit from '../assets/reddit.png'
import snapchat from '../assets/snapchat.png'
import tiktok from '../assets/tiktok.png'
import twiter from '../assets/twiter.png'
import twich from '../assets/twich.jpg'
import youtube from '../assets/youtub.png'
import wechat from '../assets/wechat.png'
import qq from '../assets/qq.png'


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
                <fieldset className="site" id="imgSociCheckbox">
                <div>
                    <input type="checkbox" id="facebook" name="interest" defaultValue="facebook" />
                    <label htmlFor="facebook"><img src={facebook} alt=""/></label>
                </div>
                <div>
                    <input type="checkbox" id="instagram" name="interest" defaultValue="instagram" />
                    <label htmlFor="instagram"><img src={instegram} alt=""/></label>
                </div>
                <div>
                    <input type="checkbox" id="linkdin" name="interest" defaultValue="linkdin" />
                    <label htmlFor="linkdin"><img src={linkdin} alt=""/></label>
                </div>
                <div>
                    <input type="checkbox" id="Pinterest" name="interest" defaultValue="Pinterest" />
                    <label htmlFor="Pinterest"><img src={Pinterest} /></label>
                </div>
                <div>
                    <input type="checkbox" id="reddit" name="interest" defaultValue="reddit" />
                    <label htmlFor="reddit"><img src={reddit} /></label>
                </div>
                <div>
                    <input type="checkbox" id="snapchat" name="interest" defaultValue="snapchat" />
                    <label htmlFor="snapchat"><img src={snapchat} /></label>
                </div>
                <div>
                    <input type="checkbox" id="tiktok" name="interest" defaultValue="tiktok" />
                    <label htmlFor="tiktok"><img src={tiktok} /></label>
                </div>
                <div>
                    <input type="checkbox" id="twiter" name="interest" defaultValue="twiter" />
                    <label htmlFor="twiter"><img src={twiter} /></label>
                </div>
                <div>
                    <input type="checkbox" id="twich" name="interest" defaultValue="twich" />
                    <label htmlFor="twich"><img src={twich} /></label>
                </div>
                <div>
                    <input type="checkbox" id="youtube" name="interest" defaultValue="youtube" />
                    <label htmlFor="youtube"><img src={youtube} /></label>
                </div>
                <div>
                    <input type="checkbox" id="wechat" name="interest" defaultValue="wechat" />
                    <label htmlFor="wechat"><img src={wechat} /></label>
                </div>
                <div>
                    <input type="checkbox" id="qq" name="interest" defaultValue="qq" />
                    <label htmlFor="qq"><img src={qq} /></label>
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