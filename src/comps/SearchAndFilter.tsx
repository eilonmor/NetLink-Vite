import { useState } from "react";

interface SearchAndFilterProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// comps responsibility Search and headline
export function SearchAndFilter(props:SearchAndFilterProps){
    // SearchAndFilter component to manage the search and filter functionality
    const [isFilterVisible, setIsFilterVisible] = useState(true); // State to manage filter visibility

    const toggleFilterVisibility = () => {
        setIsFilterVisible((prev) => !prev); // Toggle the visibility state
    };
    return(
        <>
            <h3>Influencer Marketing</h3>
            <p className="p-2">Grow your brand with the help of our influencers and marketing experts.</p>
            <div>
                <div className="input-group mb-3">
                    <input id="influncerSearchId" onChange={(e)=> (props.onChange(e))} type="text" className="form-control" placeholder="What service are you looking for?" />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><img src="./img/search.png"/></button>
                        <button className="btn btn-outline-secondary" type="button" onClick={toggleFilterVisibility}><img src="./img/filter.png"/></button>  
                    </div>
                </div>
            </div>
            {isFilterVisible && ( 
            <div id="disaplyFilters">
                <div className="d-flex flex-row" >
                {/* <!-- Search filter Influencer Details --> */}
                <div className="dropdown">
                    <button className="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown button
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>

                    <div className="form-switch m-2">
                        <input className="form-check-input m-1" type="checkbox" id="flexSwitchCheckChecked" checked />
                        <label className="form-check-label p-2 d-inline" >Local Influencer </label>
                    </div>
                </div>
            </div>
        )}
        </>
    )
}
