import { useState } from "react";
import Select from 'react-select';

interface SearchAndFilterProps {
    searchValue: string;
    onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    stateOptions: string[];
    selectedStates: string[];
    onStatesChange: (values: string[]) => void;
    countryOptions: string[];
    selectedCountries: string[];
    onCountriesChange: (values: string[]) => void;
    cityOptions: string[];
    selectedCities: string[];
    onCitiesChange: (values: string[]) => void;
    sectorOptions: string[];
    selectedSectors: string[];
    onSectorsChange: (values: string[]) => void;
    sectorDetailOptions: { label: string; value: string }[];
    selectedSectorDetails: string[];
    onSectorDetailsChange: (values: string[]) => void;
    socialMediaOptions: string[];
    selectedSocialMedia: string[];
    onSocialMediaChange: (values: string[]) => void;
    isLocalInfluencer: boolean;
    onLocalInfluencerToggle: (checked: boolean) => void;
}

export function SearchAndFilter({
    searchValue,
    onSearchChange,
    stateOptions,
    selectedStates,
    onStatesChange,
    countryOptions,
    selectedCountries,
    onCountriesChange,
    cityOptions,
    selectedCities,
    onCitiesChange,
    sectorOptions,
    selectedSectors,
    onSectorsChange,
    sectorDetailOptions,
    selectedSectorDetails,
    onSectorDetailsChange,
    socialMediaOptions,
    selectedSocialMedia,
    onSocialMediaChange,
    isLocalInfluencer,
    onLocalInfluencerToggle,
}: SearchAndFilterProps) {
    const [isFilterVisible, setIsFilterVisible] = useState(true);
    const reactSelectStyle = { minWidth: 220, marginBottom: 10 };

    const toggleFilterVisibility = () => {
        setIsFilterVisible((prev) => !prev);
    };
    return (
        <>
            <h3>Influencer Marketing</h3>
            <p className="p-2">Grow your brand with the help of our influencers and marketing experts.</p>
            <div>
                <div className="input-group mb-3">
                    <input
                        id="influncerSearchId"
                        value={searchValue}
                        onChange={onSearchChange}
                        type="text"
                        className="form-control"
                        placeholder="What service are you looking for?"
                    />
                    <div className="input-group-append">
                        <button className="btn btn-outline-secondary" type="button"><img src="./img/search.png" /></button>
                        <button className="btn btn-outline-secondary" type="button" onClick={toggleFilterVisibility}><img src="./img/filter.png" /></button>
                    </div>
                </div>
            </div>
            {isFilterVisible && (
                <div className="d-flex flex-wrap gap-3 justify-content-center">
                    <div style={reactSelectStyle}>
                        <label>State</label>
                        <Select
                            isMulti
                            options={stateOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedStates.map(val => ({ label: val, value: val }))}
                            onChange={opts => onStatesChange(opts ? opts.map(o => o.value) : [])}
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <label>Country</label>
                        <Select
                            isMulti
                            options={countryOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedCountries.map(val => ({ label: val, value: val }))}
                            onChange={opts => onCountriesChange(opts ? opts.map(o => o.value) : [])}
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <label>City</label>
                        <Select
                            isMulti
                            options={cityOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedCities.map(val => ({ label: val, value: val }))}
                            onChange={opts => onCitiesChange(opts ? opts.map(o => o.value) : [])}
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <label>Sector</label>
                        <Select
                            isMulti
                            options={sectorOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedSectors.map(val => ({ label: val, value: val }))}
                            onChange={opts => onSectorsChange(opts ? opts.map(o => o.value) : [])}
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <label>Sector Details</label>
                        <Select
                            isMulti
                            options={sectorDetailOptions}
                            value={selectedSectorDetails.map(val => sectorDetailOptions.find(o => o.value === val) || { label: val, value: val })}
                            onChange={opts => onSectorDetailsChange(opts ? opts.map(o => o.value) : [])}
                        />
                    </div>
                    <div style={reactSelectStyle}>
                        <label>Social Media</label>
                        <Select
                            isMulti
                            options={socialMediaOptions.map(opt => ({ label: opt, value: opt }))}
                            value={selectedSocialMedia.map(val => ({ label: val, value: val }))}
                            onChange={opts => onSocialMediaChange(opts ? opts.map(o => o.value) : [])}
                        />
                    </div>
                    <div className="form-switch m-2 d-flex align-items-center">
                        <input
                            className="form-check-input m-1"
                            type="checkbox"
                            id="local-influencer-switch"
                            checked={isLocalInfluencer}
                            onChange={e => onLocalInfluencerToggle(e.target.checked)}
                        />
                        <label className="form-check-label p-2 d-inline" htmlFor="local-influencer-switch">
                            Local Influencer
                        </label>
                    </div>
                </div>
            )}
        </>
    );
}
