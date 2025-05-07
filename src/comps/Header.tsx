import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export function Header() {
    const navigate = useNavigate();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const CreatTab = ({ tabname }:{tabname:string}) => {
        return (
            <button
                className="btn bg-transparent nav-link fw-bold py-0 px-2 text-white"
                onClick={() => navigate(`../${tabname}`, { replace: true })}
            >
                {tabname.charAt(0).toUpperCase() + tabname.slice(1)}
            </button>
        );
    };

    return (
        <header className="mb-auto">
            <div
                className="cover-container d-flex w-auto h-100 w-100 p-3 mx-auto justify-content-between align-items-center"
                id="headerFooterColor"
            >
                <button className="btn bg-transparent" onClick={() => navigate('/')}>
                    <h3 className="float-md-start mb-0 text-white h2">NetLink</h3>
                </button>

                {/* Mobile Menu Toggle */}
                <button className="btn bg-transparent text-white d-md-none" onClick={toggleMobileMenu}>
                    ☰
                </button>

                {/* Navigation Tabs */}
                <nav
                    className={`nav nav-masthead justify-content-center float-md-end fs-5 ${
                        isMobileMenuOpen ? '' : 'd-none d-md-flex'
                    }`}
                >
                    <CreatTab tabname="home" />
                    <CreatTab tabname="about" />
                    <CreatTab tabname="contact" />
                    <CreatTab tabname="my profile" />
                    <CreatTab tabname="sign out" />
                    <CreatTab tabname="register" />
                </nav>
            </div>
        </header>
    );
}
