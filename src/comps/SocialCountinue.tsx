import { useState } from "react";
import { Header } from "./Header";
import { useNavigate } from "react-router-dom";

type SocialMedia = "facebook" | "twiter" | "Instagram" | "tiktok" | "linkedin" | "youtube" | "snapchat" | "pinterest" | "reddit" | "twitch" | "wechat" | "qq"; 
type Errors = { [key in SocialMedia]?: string | null };

interface BuildInputsSocialMediaProps {
    errors: Errors;
    setErrors: React.Dispatch<React.SetStateAction<Errors>>;
}


function BuildInputsSocialMedia({ errors, setErrors }: BuildInputsSocialMediaProps) {
    const listOfChosenSocial = (localStorage.arrayOfSocialMedia as string).split(",");

    const validateLink = (media: SocialMedia, value: string) => {
        console.log(`value: ${value} \n media: ${media}`)
        const urlPattern: { [key in SocialMedia]?: RegExp } = {
            facebook: /^https?:\/\/(www\.)?facebook\.com(\/[A-Za-z0-9_.-]+)?\/?$/,
            twiter: /^https?:\/\/(www\.)?x\.com(\/[A-Za-z0-9_.-]+)?\/?$/,
            twitch: /^https?:\/\/(www\.)?twitch\.tv(\/[A-Za-z0-9_.-]+)?\/?$/,
            Instagram: /^https?:\/\/(www\.)?instagram\.com(\/[A-Za-z0-9_.-]+)?\/?$/,
            linkedin: /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+\/?$/,
            pinterest: /^https?:\/\/(www\.)?pinterest\.com(\/[A-Za-z0-9_.-]+)?\/?$/,
            reddit: /^https?:\/\/(www\.)?reddit\.com\/user\/[A-Za-z0-9_-]+\/?$/,
            youtube: /^https?:\/\/(www\.)?youtube\.com\/@([A-Za-z0-9_.-]+)(\?.*)?$/,
            snapchat: /^https?:\/\/(www\.)?snapchat\.com\/(?:add|t|)([A-Za-z0-9_-]+)(\/.*)?$/,
            tiktok: /^https?:\/\/(www\.)?tiktok\.com\/@([A-Za-z0-9_.-]+)(\?.*)?$/,
            wechat: /^https?:\/\/(www\.)?wechat\.com(\/[A-Za-z0-9_.-]+)?\/?$/,
            qq: /^https?:\/\/(im\.)?qq\.com(\/[A-Za-z0-9_.-]+)?\/?$/,

        };
        setErrors((prev: Errors) => ({
            ...prev,
            [media]: urlPattern[media]?.test(value) ? null : `Invalid ${media} link`,
        }));
    };

    return (
        <>
            {listOfChosenSocial.map((media) => (
                <div className="form-floating mb-3" key={media}>
                    <input
                        type="text"
                        className="form-control"
                        id={media}
                        onBlur={(e) => validateLink(media as SocialMedia, e.target.value)}
                    />
                    <label htmlFor={media}>Link to {media}</label>
                    {errors[media as SocialMedia] && (
                        <small className="text-danger">{errors[media as SocialMedia]}</small>
                    )}
                </div>
            ))}
        </>
    );
}



export function SocialContinue() {
    const navigate = useNavigate();
    const [errors, setErrors] = useState<Errors>({});

    const handleSubmit = () => {
        const hasErrors = Object.values(errors).some((error) => error !== null);
        const listOfChosenSocial = (localStorage.arrayOfSocialMedia as string).split(",");
        const hasEmptyInput = listOfChosenSocial.filter((media)=>{
            const inputText = document.getElementById(media) as HTMLInputElement;
            return !inputText.value
        })
        if (hasErrors) {
            alert("Please write a valid link.");
        }else if (hasEmptyInput.length){
            alert(`You forgot to fill ${hasEmptyInput} links`)
        } else {
            navigate("details-register");
        }
    };

    return (
        <>
            <Header />
            <main id="influencerMain" className="container-fluid">
                <h2 className="text-sm-center p-4">Put links to your social media</h2>
                <div id="eilon" className="container-sm p-4">
                    <BuildInputsSocialMedia errors={errors} setErrors={setErrors} />
                </div>
                <div className="container-sm text-center" style={{ width: "40%" }}>
                    <button
                        type="submit"
                        className="w-100 btn btn-lg btn-primary"
                        onClick={handleSubmit}
                    >
                        Submit
                    </button>
                </div>
            </main>
        </>
    );
}