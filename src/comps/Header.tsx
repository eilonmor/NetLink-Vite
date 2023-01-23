// comps responsibility Header


export  function Header(){
    return(
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
        </header>)
};