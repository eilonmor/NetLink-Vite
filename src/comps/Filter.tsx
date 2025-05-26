
interface FilterOption {
  label: string;
  value: string;
}

interface FilterProps {
  dropdownLabel?: string;
  options: FilterOption[];
  selectedOption: string;
  onOptionChange: (value: string) => void;
  isLocalInfluencer: boolean;
  onLocalInfluencerToggle: (checked: boolean) => void;
}

const Filter: React.FC<FilterProps> = ({
  dropdownLabel = "Select Option",
  options,
  selectedOption,
  onOptionChange,
  isLocalInfluencer,
  onLocalInfluencerToggle,
}) => (
  <div id="displayFilters" className="d-flex flex-row align-items-center gap-3">
    {/* Dropdown */}
    <div className="dropdown">
      <label className="visually-hidden" htmlFor="filter-dropdown">
        {dropdownLabel}
      </label>
      <select
        id="filter-dropdown"
        className="form-select"
        value={selectedOption}
        onChange={(e) => onOptionChange(e.target.value)}
        aria-label={dropdownLabel}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>

    {/* Local Influencer Toggle */}
    <div className="form-switch m-2 d-flex align-items-center">
      <input
        className="form-check-input m-1"
        type="checkbox"
        id="local-influencer-switch"
        checked={isLocalInfluencer}
        onChange={(e) => onLocalInfluencerToggle(e.target.checked)}
      />
      <label
        className="form-check-label p-2 d-inline"
        htmlFor="local-influencer-switch"
      >
        Local Influencer
      </label>
    </div>
  </div>
);

export default Filter;