import {SearchAndFilter} from './SearchAndFilter'
import {InfluencerUsers} from './InfloncersUsers'
import {useEffect, useState} from 'react'
import { UserInfluncer } from "./MockeUsers";
import Select from 'react-select';

// comps responsibility creates the main of the app
export  function Main(){
    const [fullListOfUsers, setFullListOfUsers] = useState<UserInfluncer[]>([]);
    const [filteredUsers, setFilteredUsers] = useState<UserInfluncer[]>([]);
    const [searchValue, setSearchValue] = useState("");
    const [selectedStates, setSelectedStates] = useState<string[]>([]);
    const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
    const [selectedCities, setSelectedCities] = useState<string[]>([]);
    const [selectedSectors, setSelectedSectors] = useState<string[]>([]);
    const [isLocalInfluencer, setIsLocalInfluencer] = useState(false);
    const [selectedSocialMedia, setSelectedSocialMedia] = useState<string[]>([]);
    const [selectedSectorDetails, setSelectedSectorDetails] = useState<string[]>([]);
    const [filterOpen, setFilterOpen] = useState(false);

    // fetch the data from the server
    useEffect(() => {
        const fetchData = async () => {
            try {
                const port = 3002
                const url = 'http://localhost:'
                let endPoint = '/NetLink'
                const data= await fetch(`${url+port+endPoint}`)
                const responce =await data.json()
                setFullListOfUsers(responce)
                setFilteredUsers(responce)
            } catch  (error){
                console.error('Error fetching users:', error);
            }
        };
        fetchData();
    }, []);

    // Use static options for dropdowns
    const stateOptions = [
        "California", "New York", "Texas", "Florida", "Illinois", "Washington", "Ohio", "Georgia", "North Carolina", "Michigan"
    ];
    const countryOptions = [
        "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Italy", "Spain", "India", "Brazil"
    ];
    const cityOptions = [
        "Los Angeles", "New York City", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"
    ];
    const sectorOptions = [
        "food", "sports", "fashion", "travel", "technology", "beauty", "fitness", "music", "gaming", "education"
    ];
    const socialMediaOptions = [
        "instagram", "facebook", "twitter", "youtube", "tiktok", "snapchat", "pinterest", "linkedin", "twitch", "reddit"
    ];
    const sectorDetailOptions = [
        { label: "food:meat", value: "food:meat" },
        { label: "food:vegan", value: "food:vegan" },
        { label: "sports:gym", value: "sports:gym" },
        { label: "sports:football", value: "sports:football" },
        { label: "fashion:streetwear", value: "fashion:streetwear" },
        { label: "fashion:luxury", value: "fashion:luxury" },
        { label: "travel:adventure", value: "travel:adventure" },
        { label: "technology:gadgets", value: "technology:gadgets" },
        { label: "beauty:makeup", value: "beauty:makeup" },
        { label: "fitness:yoga", value: "fitness:yoga" }
    ];

    useEffect(() => {
        let users = Array.isArray(fullListOfUsers) ? [...fullListOfUsers] : [];
        // Filter by search
        if (searchValue) {
            users = users.filter(user =>
                typeof user.name === 'string' &&
                user.name.toLowerCase().includes(searchValue.toLowerCase())
            );
        }
        // Filter by states (allow empty selection to show all)
        if (selectedStates.length > 0) {
            users = users.filter(user =>
                typeof user.State === 'string' &&
                selectedStates.some(state => state.toLowerCase() === user.State.toLowerCase())
            );
        }
        // Filter by countries
        if (selectedCountries.length > 0) {
            users = users.filter(user =>
                typeof user.Country === 'string' &&
                selectedCountries.some(country => country.toLowerCase() === user.Country.toLowerCase())
            );
        }
        // Filter by cities
        if (selectedCities.length > 0) {
            users = users.filter(user =>
                typeof user.city === 'string' &&
                selectedCities.some(city => city.toLowerCase() === user.city.toLowerCase())
            );
        }
        // Filter by sectors
        if (selectedSectors.length > 0) {
            users = users.filter(user =>
                user.sector &&
                selectedSectors.some(sector =>
                    user.sector[sector] &&
                    Object.values(user.sector[sector] || {}).some(Boolean)
                )
            );
        }
        // Filter by sector details (e.g., food:meat, sports:gym)
        if (selectedSectorDetails.length > 0) {
            users = users.filter(user =>
                selectedSectorDetails.some(detail => {
                    const [sector, key] = detail.split(":");
                    return user.sector &&
                        user.sector[sector] &&
                        user.sector[sector][key];
                })
            );
        }
        // Filter by social media
        if (selectedSocialMedia.length > 0) {
            users = users.filter(user =>
                user.socialMedia &&
                selectedSocialMedia.some(sm =>
                    user.socialMedia[sm]
                )
            );
        }
        // Filter by local influencer (example: you may want to filter by city or a boolean property)
        if (isLocalInfluencer) {
            users = users.filter(user =>
                typeof user.city === 'string' && user.city.toLowerCase() === "local"
            ); // Adjust as needed
        }
        setFilteredUsers(users);
    }, [fullListOfUsers, searchValue, selectedStates, selectedCountries, selectedCities, selectedSectors, selectedSectorDetails, selectedSocialMedia, isLocalInfluencer]);

    // Filter sectorDetailOptions based on selectedSectors
    const filteredSectorDetailOptions = selectedSectors.length > 0
        ? sectorDetailOptions.filter(opt => {
            const [sector] = opt.value.split(":");
            return selectedSectors.includes(sector);
        })
        : sectorDetailOptions;

    const reactSelectStyle = {
        minWidth: 220,
        marginBottom: 10,
        fontSize: '1rem',
    };
    const filterPanelStyle = {
        background: '#fff',
        borderRadius: '16px',
        boxShadow: '0 2px 16px rgba(0,0,0,0.08)',
        padding: '24px',
        marginBottom: '24px',
        width: '100%',
        maxWidth: '1200px',
    };
    const filterLabelStyle = {
        fontWeight: 600,
        marginBottom: 4,
        color: '#333',
    };
    const filterGroupStyle = {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '24px',
        justifyContent: 'center',
    };

    return (
        <div id="mainscrool" className="px-3 w-auto align-items-center m-auto text-center p-sm-5" style={{background: '#f6f8fa', minHeight: '100vh'}}>
            <div style={filterPanelStyle} className="m-auto">
                <h2 style={{fontWeight: 700, color: '#1a1a1a', marginBottom: 8}}>Influencer Marketing</h2>
                <p className="p-2" style={{color: '#555', marginBottom: 24}}>Grow your brand with the help of our influencers and marketing experts.</p>
                <div className="input-group mb-4" style={{maxWidth: 500, margin: '0 auto 24px auto'}}>
                    <input
                        id="influncerSearchId"
                        value={searchValue}
                        onChange={e => setSearchValue(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Search influencers by name..."
                        style={{borderRadius: '8px 0 0 8px', fontSize: '1rem'}}
                    />
                    <button className="btn btn-primary" type="button" style={{borderRadius: '0 8px 8px 0', fontWeight: 600}}>🔍</button>
                </div>
                <button
                    className="btn btn-outline-secondary mb-3"
                    style={{fontWeight: 600, borderRadius: 8, minWidth: 120}}
                    onClick={() => setFilterOpen(f => !f)}
                >
                    {filterOpen ? 'Hide Filters' : 'Show Filters'}
                </button>
                {filterOpen && (
                <div style={filterGroupStyle}>
                    <div style={reactSelectStyle}>
                        <div style={filterLabelStyle}>State</div>
                        <Select
                            isMulti
                            options={stateOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedStates.map(val => ({ label: val, value: val }))}
                            onChange={opts => setSelectedStates(opts ? opts.map(o => o.value) : [])}
                            placeholder="Select states..."
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <div style={filterLabelStyle}>Country</div>
                        <Select
                            isMulti
                            options={countryOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedCountries.map(val => ({ label: val, value: val }))}
                            onChange={opts => setSelectedCountries(opts ? opts.map(o => o.value) : [])}
                            placeholder="Select countries..."
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <div style={filterLabelStyle}>City</div>
                        <Select
                            isMulti
                            options={cityOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedCities.map(val => ({ label: val, value: val }))}
                            onChange={opts => setSelectedCities(opts ? opts.map(o => o.value) : [])}
                            placeholder="Select cities..."
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <div style={filterLabelStyle}>Sector</div>
                        <Select
                            isMulti
                            options={sectorOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedSectors.map(val => ({ label: val, value: val }))}
                            onChange={opts => setSelectedSectors(opts ? opts.map(o => o.value) : [])}
                            placeholder="Select sectors..."
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <div style={filterLabelStyle}>Sector Details</div>
                        <Select
                            isMulti
                            options={filteredSectorDetailOptions}
                            value={selectedSectorDetails.map(val => filteredSectorDetailOptions.find(o => o.value === val) || { label: val, value: val })}
                            onChange={opts => setSelectedSectorDetails(opts ? opts.map(o => o.value) : [])}
                            placeholder="Select sector details..."
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <div style={filterLabelStyle}>Social Media</div>
                        <Select
                            isMulti
                            options={socialMediaOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedSocialMedia.map(val => ({ label: val, value: val }))}
                            onChange={opts => setSelectedSocialMedia(opts ? opts.map(o => o.value) : [])}
                            placeholder="Select social media..."
                        />
                    </div>
                    <div className="form-switch d-flex align-items-center" style={{marginTop: 32}}>
                        <input
                            className="form-check-input m-1"
                            type="checkbox"
                            id="local-influencer-switch"
                            checked={isLocalInfluencer}
                            onChange={e => setIsLocalInfluencer(e.target.checked)}
                        />
                        <label className="form-check-label p-2 d-inline" htmlFor="local-influencer-switch" style={{fontWeight: 600, color: '#333'}}>
                            Local Influencer
                        </label>
                    </div>
                </div>
                )}
            </div>
            <InfluencerUsers listOfUsers={filteredUsers} />
        </div>
    );
};

export type Sector = {
    // ... your sector fields here
    [key: string]: { [key: string]: boolean } | undefined;
};