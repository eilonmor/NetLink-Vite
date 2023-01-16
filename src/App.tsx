
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';


let disaplySwitch: number = 0;

function OnOfFilter(){
    const filterr:HTMLElement = document.querySelector('#disaplyFilters')!
    if (disaplySwitch == 0){
        filterr.style.display = '';
        disaplySwitch = 1
    }else {
        filterr.style.display = 'none';
        disaplySwitch = 0
    }
}

function App() {
  // <link
  // href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" 
  // rel="stylesheet" 
  // integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" 
  // crossOrigin="anonymous"/>
  return ( 
    <body>
            <header className="mb-auto">
                <div className="cover-container d-flex w-auto h-100 w-100 p-3 mx-auto  justify-content-between" id='headerFooterColor'>
                    <a href="./index.html"><h3 className="float-md-start mb-0 text-white h2">NetLink</h3></a>      
                    <nav className="nav nav-masthead justify-content-center float-md-end fs-5">
                        <a className="nav-link fw-bold py-1 px-2 active m-2 text-white" aria-current="page" href="../NetLinkApp/index.html">Home</a>
                        <a className="nav-link fw-bold py-1 px-2 m-2 text-white" href="../NetLinkApp/about.html">About</a>
                        <a className="nav-link fw-bold py-1 px-2 m-2 text-white" href="../NetLinkApp/contact.html">Contact</a>
                        <a className="nav-link fw-bold py-1 px-2 m-2 text-white" href="./contact.html">My profile</a>
                        <a className="nav-link fw-bold py-1 px-2 m-2 text-white" href="./contact.html">Sign-out</a>
                    </nav>
                </div>
            </header>

            <main id="mainscrool" className="px-3 w-auto align-items-center m-auto text-center p-sm-5">
                <h3>Influencer Marketing</h3>
                <p className="p-2">Grow your brand with the help of our influencers and marketing experts.</p>
                <div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="What service are you looking for?" />
                        <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><img src="./img/search.png"/></button>
                      <button className="btn btn-outline-secondary" type="button" onClick={()=> OnOfFilter()}><img src="./img/filter.png"/></button>  
                        </div>
                    </div>
                </div>

                <div id="disaplyFilters">
                    <div className="d-flex flex-row" >
                        {/* <!-- Search filter Influencer Details --> */}
                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              Dropdown button
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <a className="dropdown-item" href="#">Action</a>
                              <a className="dropdown-item" href="#">Another action</a>
                              <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>

                        <div className="form-switch m-2">
                            <input className="form-check-input m-1" type="checkbox" id="flexSwitchCheckChecked" checked />
                            <label className="form-check-label p-2 d-inline" >Local Influencer </label>
                        </div>
                    </div>
                </div>
                <div id="userSection">
                    <div>
                        <div className="userFlex">
                            <img className="userImg" src="./img/eilon.jpg"/>
                            <h5>Eilon Mor Yosef</h5>
                        </div>
                        <p className="p-2 ">hey I'm 23 years old. I build this app in web dev corss</p>
                    </div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                    <div>1</div>
                </div>  
            </main>
            <footer className="fixed-bottom text-white text-center" id='headerFooterColor'>
                <p>NetLink <br/> @2023</p>
            </footer>
        
    {/* <script src="./userMocke.js"></script>  */}
    </body>    
  )
}

export default App
