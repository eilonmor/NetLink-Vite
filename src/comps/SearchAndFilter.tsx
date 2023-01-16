export function SearchAndFilter(){
    return(
        <div>
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
                        <button className="btn btn-primary  dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
        </div>
    )
}

let disaplySwitch: number = 1;

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
