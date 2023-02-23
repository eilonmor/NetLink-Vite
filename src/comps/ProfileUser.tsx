import { Footer } from "./Footer";
import { Header } from "./Header";

export function ProfileUser() {
  return (
    <>
        <Header />
        <div className="padding"  >
            <div className="col-md-8">
            <div className="card"> <img className="card-img-top" src="https://i.imgur.com/K7A78We.jpg" alt="Card image cap" />
                <div className="card-body little-profile text-center">
                <div className="pro-img"><img src="https://i.imgur.com/8RKXAIV.jpg" alt="user" /></div>
                <h3 className="m-b-0">Brad Macullam</h3>
                <p>Fitness &amp; Health</p> <a href="javascript:void(0)" className="m-t-10 waves-effect waves-dark btn btn-primary btn-md btn-rounded" data-abc="true">More Info</a>
                <div className="row text-center m-t-20">
                    <div className="col-lg-4 col-md-4 m-t-20">
                    <h3 className="m-b-0 font-light">103</h3><small>transactions</small>
                    </div>
                    <div className="col-lg-4 col-md-4 m-t-20">
                    <h3 className="m-b-0 font-light">434K</h3><small>Followers</small>
                    </div>
                    <div className="col-lg-4 col-md-4 m-t-20">
                    <h3 className="m-b-0 font-light">1.8M</h3><small>exposure</small>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        <Footer />
    </>
  )
}