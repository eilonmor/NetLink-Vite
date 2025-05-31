import React from "react";

interface ProfileJobsGalleryProps {
  images: { src: string; alt: string }[];
}

export const ProfileJobsGallery: React.FC<ProfileJobsGalleryProps> = ({ images }) => (
  <div className="row">
    {images.map((img, idx) => (
      <div key={idx} className={`col-lg-6${idx % 2 === 0 ? ' pr-lg-1' : ' pl-lg-1'} mb-2`}>
        <img src={img.src} alt={img.alt} className="img-fluid rounded shadow-sm" />
      </div>
    ))}
  </div>
);
