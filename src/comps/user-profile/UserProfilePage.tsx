import React, { useEffect, useState } from "react";
import { Footer } from "../Footer";
import { Header } from "../Header";
import Loader from "../Loader";
import eilonPG from '../../../img/eilon.jpg';
import { ProfileHeader, ProfileStats, ProfileAbout, SocialRuler, SocialEmbed, ProfileJobsGallery } from ".";

interface UserProfile {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

const getResponsiveEmbedSize = () => {
  if (window.innerWidth < 700) return { width: Math.floor(window.innerWidth * 0.98), height: 320 };
  if (window.innerWidth < 1000) return { width: 420, height: 380 };
  return { width: 600, height: 380 };
};

export function UserProfilePage() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedSocial, setSelectedSocial] = useState<"instagram" | "tiktok" | "facebook" | "linkedin">("instagram");
  const [embedSize, setEmbedSize] = useState(getResponsiveEmbedSize());

  useEffect(() => {
    let ignore = false;
    async function fetchProfile() {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!response.ok) throw new Error("Failed to fetch");
        const data: UserProfile = await response.json();
        if (!ignore) setProfile(data);
      } catch (err) {
        if (!ignore) setError("Failed to load profile.");
      } finally {
        if (!ignore) setLoading(false);
      }
    }
    fetchProfile();
    return () => { ignore = true; };
  }, []);

  useEffect(() => {
    const handleResize = () => setEmbedSize(getResponsiveEmbedSize());
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  if (loading) return <Loader label="Loading profile..." />;
  if (error) return <div style={{textAlign: 'center', marginTop: 40}}>{error}</div>;
  if (!profile) return null;

  return (
    <>
      <Header />
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <ProfileHeader
              name={profile.name}
              city={profile.address.city}
              street={profile.address.street}
              avatar={eilonPG}
            />
            <div className="bg-light p-4 d-flex text-center justify-content-between">
              <ProfileStats />
            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
              <ProfileAbout
                catchPhrase={profile.company?.catchPhrase}
                city={profile.address.city}
                email={profile.email}
              />
              <SocialRuler selected={selectedSocial} onSelect={setSelectedSocial} />
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <SocialEmbed selected={selectedSocial} embedSize={embedSize} />
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Jobs Services</h5>
                <a href="#" className="btn btn-link text-muted">Show all</a>
              </div>
              <ProfileJobsGallery images={[
                { src: "https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", alt: "Job 1" },
                { src: "https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", alt: "Job 2" },
                { src: "https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80", alt: "Job 3" },
                { src: "https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80", alt: "Job 4" }
              ]} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
