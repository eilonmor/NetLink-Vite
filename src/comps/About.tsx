import { Footer } from "./Footer";
import { Header } from "./Header";

export function About() {
    return(
        <div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column" style={{backgroundColor: "rgb(226, 74, 96);"}}>
            <Header />
            <main role="main" className="p-6 m-4">
        <h1 style={{textAlign: 'center'}}>influencers - why to work with us?</h1>
        <div className="container marketing p-2">
          {/* Three columns of text below the carousel */}
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src="./img/increase.png" alt="increase image" width={140} height={140} />
              <h2>Increase exposure</h2>
              <p>We will present your profile on social networks to businesses all over the world and connect you to them. also, We will present your profile to businesses around your current location.<br /><br /></p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="./img/money.png" alt="Generic placeholder image" width={140} height={140} />
              <h2>Make Money!</h2>
              <p>You choose your price, working in your time.<br /> Get offers from businesses to making a cooperation.<br /><br /><br /></p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="./img/shield.png" alt="Generic placeholder image" width={140} height={140} />
              <h2>Free register &amp; security</h2>
              <p>You can join us for free! We keep your payments secure. first, the payment is made, and then you provide the service.<br />you choose where the money goes: bank account/ PayPal. </p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
          <hr className="featurette-divider" />
          <h1 style={{textAlign: 'center', padding: '2%'}}>businesses - why to work with us?</h1>  
          <div className="row">
            <div className="col-lg-4">
              <img className="rounded-circle" src="./img/increase.png" alt="increase image" width={140} height={140} />
              <h2>Increase your Buisnes</h2>
              <p>Expose your business to an exact clientele for you. Get reports about your marketing.<br />Join one of the leading marketing methods in the market!<br /></p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="./img/joinUs.png" alt="Generic placeholder image" width={140} height={140} />
              <h2>Join us!</h2>
              <p>More than xxx company work with us.<br />Name of companys<br /><br /><br /></p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
            <div className="col-lg-4">
              <img className="rounded-circle" src="./img/shield.png" alt="Generic placeholder image" width={140} height={140} />
              <h2>Free register &amp; security</h2>
              <p>You can join us for free! We keep the payments secure and make sure you get the service you paid for. If for some reason it doesn't happen don't worry your money is safe and you get a full refund.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details »</a></p>
            </div>{/* /.col-lg-4 */}
          </div>{/* /.row */}
          {/* START THE FEATURETTES */}
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Company partnerships<span className="text-muted"> More than xxx companys</span></h2>
              <p className="lead">Peactures of Company partnerships</p>
            </div>
            <div className="col-md-5">
              <img style={{width: '300px', height: '200px'}} src="./img/companyTemple.jpg" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading">Influencers partnerships<span className="text-muted"> More than xxx influencers</span></h2>
              <p className="lead">picture of influencers</p>
            </div>
            <div className="col-md-5 order-md-1">
              <img style={{width: '300px', height: '200px'}} src="./img/influncer.jpg" />
            </div>
          </div>
          <hr className="featurette-divider" />
          <div className="row featurette">
            <div className="col-md-7">
              <h2 className="featurette-heading">Free search and reports<span className="text-muted"> Check this.</span></h2>
              <p className="lead">difrent Types of reports</p>
            </div>
            <div className="col-md-5">
              <img style={{width: '300px', height: '200px'}} src="./img/grap.jpg" alt="Generic placeholder image" />
            </div>
          </div>
          <hr className="featurette-divider" />
          
        </div>
      </main>
            <Footer />
        </div>    
    )
}