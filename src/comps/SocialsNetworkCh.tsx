import { Link, useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import instegram from '../assets/Instagram.jpg'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import pinterest from '../assets/pinterest.png'
import reddit from '../assets/reddit.png'
import snapchat from '../assets/snapchat.png'
import tiktok from '../assets/tiktok.png'
import twiter from '../assets/twiter.png'
import twitch from '../assets/twitch.jpg'
import youtube from '../assets/youtube.png'
import wechat from '../assets/wechat.png'
import qq from '../assets/qq.png'
import { useState } from "react";


let listOfSocialInput:any = []

function getSocialNetworkName(imgPath: string): string {
    const parts = imgPath.split('/');        // Split by "/"
    const filename = parts[parts.length - 1]; // Get the last part "facebook.png"
    const socialNetwork = filename.split('.')[0]; // Split by "." and get "facebook"
    return socialNetwork;
}

interface Props{
    imgS: string;
}
function SocialNetworkSelect({imgS}: Props) {
    const socialNetworkName:string = getSocialNetworkName(String(imgS))
    return(
        <div>
            <input type="checkbox" id={socialNetworkName} name="interest" defaultValue={socialNetworkName} />
            <label htmlFor={socialNetworkName}><img src={imgS} alt=""/></label>
        </div>
    )    
}

export function SocialNetworkCh(){
    const [socialNetworkList, setSocialNetworkList] = useState([facebook, instegram, linkedin, pinterest, reddit, snapchat, tiktok, twiter, twitch, youtube, wechat, qq]);
    const navigate = useNavigate()
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
        listOfSocialInput.length ? navigate('put-link') : alert("You must choose at least 1 social media!");
    }
    return(
        <>
            <Header />
            <div>
                <legend style={{textAlign: 'center'}}>Choose your social networks:</legend>
                <fieldset className="site" id="imgSociCheckbox">
                {socialNetworkList.map((socialNetwork,index)=>(
                    <SocialNetworkSelect imgS={socialNetwork} key={index}/>
                ))}
                </fieldset>
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className="btn btn-outline-primary" type="submit" onClick={() => {buildInputsSocial()}}>Submit!</button>
                </div>
            </div>
            <Footer />
        </>
    )
}