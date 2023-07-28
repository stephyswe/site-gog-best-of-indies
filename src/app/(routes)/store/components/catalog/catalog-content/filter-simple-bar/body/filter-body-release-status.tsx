
export const FilterBodyReleaseStatus = () => (
    <div className="ng-tns-c64-3">
      <div>
        {/**/}
        {/**/}
        {/**/}
        <div className="filter-options" selenium-id="filterReleasestatuses">
          {/**/}
          {/**/}
          <div
            selenium-id="filterReleasestatusesRegularOptionsContainer"
            className="ng-star-inserted"
            style={{}}
          >
            <label
              className="checkbox__label ng-star-inserted"
              htmlFor="releasestatuses-new-arrival"
              selenium-id="filterReleasestatusesCheckboxnew-arrival"
            >
              <input
                type="checkbox"
                className="checkbox__input ng-star-inserted"
                name="releasestatuses-new-arrival"
                id="releasestatuses-new-arrival"
              />
              {/**/}
              <span className="ng-star-inserted">
                New arrivals{/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
              </span>
              {/**/}
              {/**/}
              <button
                className="filter-exclude ng-star-inserted"
                title="Exclude results with this release status"
                selenium-id="filterReleasestatusesExcludenew-arrival"
              >
                <span className="filter-exclude__icon icon-eye-open" />
              </button>
              {/**/}
              {/**/}
            </label>
            <label
              className="checkbox__label ng-star-inserted"
              htmlFor="releasestatuses-upcoming"
              selenium-id="filterReleasestatusesCheckboxupcoming"
            >
              <input
                type="checkbox"
                className="checkbox__input ng-star-inserted"
                name="releasestatuses-upcoming"
                id="releasestatuses-upcoming"
              />
              {/**/}
              <span className="ng-star-inserted">
                {/**/}Upcoming{/**/}
                {/**/}
                {/**/}
                {/**/}
                {/**/}
              </span>
              {/**/}
              {/**/}
              <button
                className="filter-exclude ng-star-inserted"
                title="Exclude results with this release status"
                selenium-id="filterReleasestatusesExcludeupcoming"
              >
                <span className="filter-exclude__icon icon-eye-open" />
              </button>
              {/**/}
              {/**/}
            </label>
            <label
              className="checkbox__label ng-star-inserted"
              htmlFor="releasestatuses-early-access"
              selenium-id="filterReleasestatusesCheckboxearly-access"
            >
              <input
                type="checkbox"
                className="checkbox__input ng-star-inserted"
                name="releasestatuses-early-access"
                id="releasestatuses-early-access"
              />
              {/**/}
              <span className="ng-star-inserted">
                {/**/}
                {/**/}Early access{/**/}
                {/**/}
                {/**/}
                {/**/}
              </span>
              {/**/}
              {/**/}
              <button
                className="filter-exclude ng-star-inserted"
                title="Exclude results with this release status"
                selenium-id="filterReleasestatusesExcludeearly-access"
              >
                <span className="filter-exclude__icon icon-eye-open" />
              </button>
              {/**/}
              {/**/}
            </label>
            {/**/}
          </div>
          {/**/}
        </div>
      </div>
    </div>
  );