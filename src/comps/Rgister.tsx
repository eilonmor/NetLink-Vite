import { Footer } from "./Footer";
import { Header } from "./Header";

export function Register(){
    return(
        <>    
            <Header />
                <main className="px-3">
                    <img src="./img/netlinkLogo.png" style={{backgroundColor: 'rgb(226, 74, 96)'}} />
                    <h1>Welcome to NetLink.</h1>
                    <p className="lead">Marketing through real people to there community</p>
                    <p className="lead">
                        <a href="./choiceUser.html" className="btn btn-lg btn-secondary fw-bold border-black bg-clack">Register</a>
                        <a href="./siginIn.html" className="btn btn-lg btn-secondary fw-bold border-black bg-clack">Sign-in</a>
                    </p>
                </main>
            <Footer />
        </>        
    )
}