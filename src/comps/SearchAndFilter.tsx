import { useState } from "react";
import Filter from "./Filter";

interface SearchAndFilterProps {
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
// comps responsibility Search and headline
export function SearchAndFilter(props:SearchAndFilterProps){
    // SearchAndFilter component to manage the search and filter functionality
    const [isFilterVisible, setIsFilterVisible] = useState(true); // State to manage filter visibility
    const [selectedOption, setSelectedOption] = useState("all");
    const [isLocalInfluencer, setIsLocalInfluencer] = useState(false);

    const filterOptions = [
        { label: "All", value: "all" },
        { label: "Action", value: "action" },
        { label: "Another action", value: "another" },
        { label: "Something else", value: "something" },
    ];

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
                <Filter
                    dropdownLabel="Filter by"
                    options={filterOptions}
                    selectedOption={selectedOption}
                    onOptionChange={setSelectedOption}
                    isLocalInfluencer={isLocalInfluencer}
                    onLocalInfluencerToggle={setIsLocalInfluencer}
                />
            )}
        </>
    )
}
