import { Footer } from "./Footer";
import { Header } from "./Header";

export function SignIn(){
    return(
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" >
         
           <Header />
            <main className="form-signin m-auto p-3 text-center" style={{height: '40%', width: '30%'}}>
                <form>
                    <img src="./img/netlinkLogo.png" style={{borderRadius: '50%'}} className="mb-3"/>
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <div className="form-floating m-2">
                        <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label htmlFor="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating m-2">
                        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
                        <label htmlFor="floatingPassword">Password</label>
                    </div>
                    <div className="checkbox mb-3">
                        <label>
                        <input type="checkbox" defaultValue="remember-me" /> Remember me
                        </label>
                    </div>
                    <button className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
                    <hr />
                    <h5 className="m-3">or Sign in with Google</h5>
                    <div className="g-signin2" data-onsuccess="onSignIn" />
                    <p className="mt-5 mb-3 text-muted">© 2022–2023</p>
                </form>
            </main>
            <Footer />
        </div>
    )
}