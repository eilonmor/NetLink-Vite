import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function ChooseUserType() {
    const navigate = useNavigate()
    return (
        <>
            <Header />
            <div className="site_grid">
                <a  id="text-white" onClick={()=>{navigate('social-network')}}><h1>Influencer</h1></a>
                <a  id="text-white" onClick={()=>{navigate('details-register')}}><h1>Business owner</h1></a>
            </div>
            <Footer />
        </>
    )
}