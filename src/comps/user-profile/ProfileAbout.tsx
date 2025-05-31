import React from "react";

interface ProfileAboutProps {
  catchPhrase?: string;
  city: string;
  email: string;
}

export const ProfileAbout: React.FC<ProfileAboutProps> = ({ catchPhrase, city, email }) => (
  <div className="p-4 rounded shadow-sm bg-light">
    <p className="font-italic mb-0">{catchPhrase || "Web Developer"}</p>
    <p className="font-italic mb-0">Lives in {city}</p>
    <p className="font-italic mb-0">Email: {email}</p>
  </div>
);
