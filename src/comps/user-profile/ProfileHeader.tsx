import React from "react";

interface ProfileHeaderProps {
  name: string;
  city: string;
  street: string;
  avatar: string;
}

export const ProfileHeader: React.FC<ProfileHeaderProps> = ({ name, city, street, avatar }) => (
  <div className="px-4 pt-0 pb-4 cover">
    <div className="media align-items-end profile-head">
      <div className="profile mr-3">
        <img src={avatar} alt={name + ' profile'} width={130} className="rounded mb-2 img-thumbnail" />
      </div>
      <div className="media-body mb-5 text-white">
        <h4 className="mt-0 mb-0">{name}</h4>
        <p className="small mb-4">
          <i className="fas fa-map-marker-alt mr-2" />
          {city}, {street}
        </p>
      </div>
    </div>
  </div>
);
