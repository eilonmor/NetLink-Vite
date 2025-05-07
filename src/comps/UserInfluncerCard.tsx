import * as React from 'react';
import { UserInfluncer } from './MockeUsers';

interface Props {
  user: UserInfluncer;
}


// map for show logo
export const SOCIAL_MEDIA_COMPONENTS:any = {
    facebook: <img className="userImg" src="./image/facebook.png"/>,
    instegram: <img className="userImg" src="./image/Instagram.jpg"/>,
    linkedin: <img className="userImg" src="./image/linkedin.png"/>,
    pinterest: <img className="userImg" src="./image/pinterest.png"/>,
    reddit: <img className="userImg" src="./image/reddit.png"/>,
    snapchat: <img className="userImg" src="./image/snapchat.png"/>,
    tiktok: <img className="userImg" src="./image/tiktok.png"/>,
    twiter: <img className="userImg" src="./image/twiter.png"/>,
    twitch: <img className="userImg" src="./image/twitch.jpg"/>,
    youtube: <img className="userImg" src="./image/youtube.png"/>,
    wechat: <img className="userImg" src="./image/facebook.png"/>,
    qq: <img className="userImg" src="./image/wechat.png"/>
  };
// how eatch card looks like
const UserInfluencerCard: React.FC<Props> = ({ user }) => {
    return (
        <div className="user-card">
            <h5>{user.name}</h5>
            <p>Hey, I'm {user.age} years old and I use this app.</p>
            <p>
                I'm from {user.city}, {user.State}, {user.Country}.
            </p>
            <p>My social networks:</p>
            <div className="social-networks">
                {Object.entries(user.socialMedia).map(([key, value]) => {
                    if (!value) return null;
                    return (
                        <button key={key} className="social-network-button">
                            {SOCIAL_MEDIA_COMPONENTS[key]}
                        </button>
                    );
                })}
            </div>
        </div>
    );
};

export default UserInfluencerCard;


