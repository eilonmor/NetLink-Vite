import { Footer } from "./Footer";
import { Header } from "./Header";
import loadinggif from "../assets/404.gif";

export function Notfound() {
    return (
        <>
            <Header />
            <div id="page404">
                <h1>404 PAGE NOT FOUND</h1>
                <p>this page isn't available. Sorry about that.
                <br />
                Try searching for something else</p>
                <img src={loadinggif} />
            </div>
            <Footer />
        </>
    )
}