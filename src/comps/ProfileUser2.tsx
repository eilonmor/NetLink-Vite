import { Footer } from "./Footer";
import { Header } from "./Header";
import eilonPG from '../../img/eilon.jpg'
import instegram from '../assets/Instagram.jpg'
import facebook from '../assets/facebook.png'
import linkedin from '../assets/linkedin.png'
import { InstagramEmbed, TikTokEmbed } from 'react-social-media-embed';

export function ProfileUser2(){
    return(
        <>
            <Header />
            <div className="row py-5 px-4">
                <div className="col-md-5 mx-auto"> {/* Profile widget */}
                    <div className="bg-white shadow rounded overflow-hidden"> 
                        <div className="px-4 pt-0 pb-4 cover"> 
                            <div className="media align-items-end profile-head"> 
                                <div className="profile mr-3"><img src={eilonPG} alt="..." width={130} className="rounded mb-2 img-thumbnail" /></div> 
                                <div className="media-body mb-5 text-white"> 
                                    <h4 className="mt-0 mb-0">Eilon Mor Yosef</h4> <p className="small mb-4"> <i className="fas fa-map-marker-alt mr-2" />Kiriat Shemona</p> 
                                </div> 
                            </div> 
                        </div> 
                        <div className="bg-light p-4 d-flex  text-center justify-content-between"> 
                            <div>
                                <button id='profileBottonS'><img src={instegram} /></button>
                                <button id='profileBottonS'><img src={facebook} /></button>
                                <button id='profileBottonS'><img src={linkedin} /></button>
                            </div>
                            <ul className="list-inline mb-0"> 
                                <li className="list-inline-item"> <h5 className="font-weight-bold mb-0 d-block">215</h5><small className="text-muted"> <i className="fas fa-image mr-1" />transactions</small> </li> 
                                <li className="list-inline-item"> <h5 className="font-weight-bold mb-0 d-block">745</h5><small className="text-muted"> <i className="fas fa-user mr-1" />Followers</small> </li> 
                                <li className="list-inline-item"> <h5 className="font-weight-bold mb-0 d-block">340</h5><small className="text-muted"> <i className="fas fa-user mr-1" />exposure</small> </li> 
                            </ul> 
                        </div> 
                        <div className="px-4 py-3"> 
                            <h5 className="mb-0">About</h5> 
                            <div className="p-4 rounded shadow-sm bg-light"> 
                                <p className="font-italic mb-0">Web Developer</p> 
                                <p className="font-italic mb-0">Lives in Kiriat Shemona</p> 
                            </div> 
                            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                                <div> 
                                <h6 className="mb-0 py-3 ">Instegram profile</h6>
                                <InstagramEmbed url="https://www.instagram.com/leomessi/" width={340} />
                                </div>
                                <div> 
                                <h6 className="mb-0 py-3">Tiktok profile:</h6>
                                <TikTokEmbed url="https://www.tiktok.com/@messimaniacos.10"width={340}/>
                                </div>
                            </div>

                        </div> 
                        <div className="py-4 px-4"> 
                            <div className="d-flex align-items-center justify-content-between mb-3"> 
                                <h5 className="mb-0">Jobs Services</h5><a href="#" className="btn btn-link text-muted">Show all</a> 
                            </div> 
                            <div className="row"> 
                                <div className="col-lg-6 mb-2 pr-lg-1"><img src="https://images.unsplash.com/photo-1469594292607-7bd90f8d3ba4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div> 
                                <div className="col-lg-6 mb-2 pl-lg-1"><img src="https://images.unsplash.com/photo-1493571716545-b559a19edd14?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div> 
                                <div className="col-lg-6 pr-lg-1 mb-2"><img src="https://images.unsplash.com/photo-1453791052107-5c843da62d97?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" alt="" className="img-fluid rounded shadow-sm" /></div> 
                                <div className="col-lg-6 pl-lg-1"><img src="https://images.unsplash.com/photo-1475724017904-b712052c192a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="" className="img-fluid rounded shadow-sm" /></div> 
                            </div> 
                        </div> 
                    </div> 
                </div>
            </div>
            <Footer />
        </>
    );
}