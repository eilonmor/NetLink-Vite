import { useNavigate } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";

export function Register(){
    const navigate = useNavigate();
    return(
        <>
            <Header />
                <div className="d-flex text-center  d-flex  p-auto mx-auto flex-column m-5" >
                    <main className="px-3">
                        <img src="./img/netlinkLogo.png" style={{backgroundColor: 'rgb(226, 74, 96)'}} />
                        <h1 className="text-muted">Welcome to NetLink</h1>
                        <p className="lead">Marketing through real people to there community</p>
                        <p className="lead">
                            <a  className="btn btn-lg btn-danger m-3 fw-bold border-black bg-clack">Register</a>
                            <a  className="btn btn-lg btn-danger fw-bold border-black bg-clack" onClick={()=>{navigate('sign-in')}}>Sign-in</a>
                        </p>
                    </main>
                </div>
            <Footer />
        </>        
    )
}