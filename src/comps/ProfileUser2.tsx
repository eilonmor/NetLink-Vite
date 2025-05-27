import React, { useEffect, useState } from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";
import eilonPG from '../../img/eilon.jpg'
import instegram from '../assets/Instagram.jpg'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';
import Loader from "./Loader";
import SocialEmbedWithLoader from "./SocialEmbedWithLoader";
import tiktok from '../assets/tiktok.png'

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

const SOCIALS = [
  { key: "instagram", label: "Instagram", icon: instegram },
  { key: "tiktok", label: "TikTok", icon: tiktok },
  { key: "facebook", label: "Facebook", icon: facebook },
  { key: "linkedin", label: "LinkedIn", icon: linkedin },
];

type SocialKey = "instagram" | "tiktok" | "facebook" | "linkedin";

const SocialRuler: React.FC<{
  selected: SocialKey;
  onSelect: (key: SocialKey) => void;
}> = ({ selected, onSelect }) => (
  <div style={{ display: "flex", gap: 16, justifyContent: "center", margin: "1rem 0" }}>
    {SOCIALS.map((s) => (
      <button
        key={s.key}
        onClick={() => onSelect(s.key as SocialKey)}
        style={{
          border: "none",
          background: selected === s.key ? "#e24a60" : "#fff",
          borderRadius: 8,
          padding: 8,
          boxShadow: selected === s.key ? "0 2px 8px #e24a6022" : undefined,
          outline: selected === s.key ? "2px solid #e24a60" : undefined,
          cursor: "pointer",
          transition: "all 0.2s",
          display: 'flex', alignItems: 'center', gap: 8
        }}
        aria-label={s.label}
      >
        <img src={s.icon} alt={s.label} style={{ width: 24, height: 24, opacity: selected === s.key ? 1 : 0.6 }} />
        <span style={{ fontWeight: selected === s.key ? 700 : 400, color: selected === s.key ? '#fff' : '#333', fontSize: 16 }}>{s.label}</span>
      </button>
    ))}
  </div>
);

const StatsList: React.FC = () => (
  <ul className="list-inline mb-0">
    <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"><i className="fas fa-image mr-1" />transactions</small></li>
    <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"><i className="fas fa-user mr-1" />Followers</small></li>
    <li className="list-inline-item"><h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"><i className="fas fa-user mr-1" />exposure</small></li>
  </ul>
);

// Add SocialButtons component
const SocialButtons: React.FC = () => (
  <div>
    <button id="profileBottonS" aria-label="Instagram"><img src={instegram} alt="Instagram" /></button>
    <button id="profileBottonS" aria-label="Facebook"><img src={facebook} alt="Facebook" /></button>
    <button id="profileBottonS" aria-label="LinkedIn"><img src={linkedin} alt="LinkedIn" /></button>
  </div>
);

// Responsive SocialEmbedWithLoader sizing
const getResponsiveEmbedSize = () => {
  if (window.innerWidth < 700) return { width: '98vw', height: 320 };
  if (window.innerWidth < 1000) return { width: 420, height: 380 };
  return { width: 600, height: 380 };
};

export function ProfileUser2() {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [selectedSocial, setSelectedSocial] = useState<SocialKey>("instagram");
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
      {/* Social media ruler */}
      <div className="row py-5 px-4">
        <div className="col-md-5 mx-auto">
          <div className="bg-white shadow rounded overflow-hidden">
            <div className="px-4 pt-0 pb-4 cover">
              <div className="media align-items-end profile-head">
                <div className="profile mr-3">
                  <img src={eilonPG} alt={profile.name} width={130} className="rounded mb-2 img-thumbnail" />
                </div>
                <div className="media-body mb-5 text-white">
                  <h4 className="mt-0 mb-0">{profile.name}</h4>
                  <p className="small mb-4">
                    <i className="fas fa-map-marker-alt mr-2" />
                    {profile.address.city}, {profile.address.street}
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-light p-4 d-flex text-center justify-content-between">
              <SocialButtons />
              <StatsList />
            </div>
            <div className="px-4 py-3">
              <h5 className="mb-0">About</h5>
              <div className="p-4 rounded shadow-sm bg-light">
                <p className="font-italic mb-0">{profile.company?.catchPhrase || "Web Developer"}</p>
                <p className="font-italic mb-0">Lives in {profile.address.city}</p>
                <p className="font-italic mb-0">Email: {profile.email}</p>
              </div>
                    <SocialRuler selected={selectedSocial} onSelect={setSelectedSocial} />

              <div style={{ display: 'flex', justifyContent: 'center' }}>
                {selectedSocial === "instagram" && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SocialEmbedWithLoader label="Loading Instagram..." width={embedSize.width} height={embedSize.height}>
                      <InstagramEmbed url="https://www.instagram.com/leomessi/" width={embedSize.width} />
                    </SocialEmbedWithLoader>
                  </div>
                )}
                {selectedSocial === "tiktok" && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <SocialEmbedWithLoader label="Loading TikTok..." width={embedSize.width} height={embedSize.height}>
                      <TikTokEmbed url="https://www.tiktok.com/@messimaniacos.10" width={embedSize.width} />
                    </SocialEmbedWithLoader>
                  </div>
                )}
                {selectedSocial === "facebook" && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: embedSize.width, height: embedSize.height, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f8fa', borderRadius: 12 }}>
                      <span style={{ color: '#888' }}>Facebook embed not implemented</span>
                    </div>
                  </div>
                )}
                {selectedSocial === "linkedin" && (
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <div style={{ width: embedSize.width, height: embedSize.height, display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f6f8fa', borderRadius: 12 }}>
                      <span style={{ color: '#888' }}>LinkedIn embed not implemented</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
            <div className="py-4 px-4">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <h5 className="mb-0">Jobs Services</h5>
                <a href="#" className="btn btn-link text-muted">Show all</a>
              </div>
              <div className="row">
                <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Job 1" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Job 2" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="Job 3" className="img-fluid rounded shadow-sm" /></div>
                <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Job 4" className="img-fluid rounded shadow-sm" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}