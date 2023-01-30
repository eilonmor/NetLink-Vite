import { Footer } from "./Footer";
import { Header } from "./Header";

export function Contact(){
    return(
        <div style={{backgroundColor: 'rgb(226, 74, 96)', width: '100%', height: '10vh', padding: '5px', margin: 'auto'}}>
            <Header />
                <main style={{width: '100%', height: '85vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
                <div><h3>Ways to contact with us:</h3></div>
                <address>
                    Email: <a href="mailto:netLink@gmail.com">NetLink@gmail.com</a>.<br /> 
                    Visit us at instagram: <a href="https://www.instagram.com/eilonmor12/"><img style={{height: '32px', width: '32px'}} src="./img/Instagram.jpg" /></a>
                </address>
            </main>
      
            <Footer />
        </div>
    )
}