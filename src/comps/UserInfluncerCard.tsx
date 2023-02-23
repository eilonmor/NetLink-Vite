import * as React from 'react';
import { UserInfluncer } from './MockeUsers';


interface Props {
  user: UserInfluncer;
}


// map for show logo
export const SOCIAL_MEDIA_COMPONENTS:any = {
    facebook: <img className="userImg" src="./image/facebook.png"/>,
    instegram: <img className="userImg" src="./image/Instagram.jpg"/>,
    linkdin: <img className="userImg" src="./image/linkdin.png"/>,
    Pinterest: <img className="userImg" src="./image/Pinterest.png"/>,
    reddit: <img className="userImg" src="./image/reddit.png"/>,
    snapchat: <img className="userImg" src="./image/snapchat.png"/>,
    tiktok: <img className="userImg" src="./image/tiktok.png"/>,
    twiter: <img className="userImg" src="./image/twiter.png"/>,
    twich: <img className="userImg" src="./image/twich.jpg"/>,
    youtube: <img className="userImg" src="./image/youtub.png"/>,
    wechat: <img className="userImg" src="./image/facebook.png"/>,
    qq: <img className="userImg" src="./image/wechat.png"/>
  };
// how eatch card looks like
const UserInfluencerCard: React.FC<Props> = ({ user }) => {
    return (

        <div>
            <h5>{user.name}</h5>
            <p>hey I'm {user.age} years old and I'm use this app.</p>
            <p>I'M from  {user.city}, {user.State} in {user.Country}.</p>
            <p>My social networks: </p>
            {Object.entries(user.socialMedia).map(([key, value]) => {
            if (!value)
                return null;
            return <button id='buttonMysSocialNetworks'> {SOCIAL_MEDIA_COMPONENTS[key]}
            </button>})}
        </div>
    );
};

export default UserInfluencerCard;


