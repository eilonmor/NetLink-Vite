interface FilterProps {
    // Define any props you want to pass to the Filter component
  }
  
  function Filter() {
    return (
      <div id="disaplyFilters">
        <div className="d-flex flex-row">
          {/* Search filter Influencer Details */}
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Dropdown button
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  Action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Another action
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </div>
  
          <div className="form-switch m-2">
            <input
              className="form-check-input m-1"
              type="checkbox"
              id="flexSwitchCheckChecked"
              checked
            />
            <label className="form-check-label p-2 d-inline">
              Local Influencer
            </label>
          </div>
        </div>
      </div>
    );
  }
  
  export default Filter;