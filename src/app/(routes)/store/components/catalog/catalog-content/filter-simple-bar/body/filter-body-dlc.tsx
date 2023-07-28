export const FilterBodyDLC = () => (
  <div className="filter-options ng-tns-c64-0">
    <label className="checkbox__label" selenium-id="hideAllDLCCheckbox">
      <input
        type="checkbox"
        className="checkbox__input ng-untouched ng-pristine ng-valid"
      />
      Hide DLCs and extras{/**/}
    </label>
    {/**/}
  </div>
);

export const InputContainer = ({ children }: any) => (
  <div className="filter-options ng-tns-c64-0">{children}</div>
);

export const InputAltContainer = ({ children }: any) => (
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
          {children}
        </div>
      </div>
    </div>
  </div>
);

export const Input = ({ title }: any) => (
  <label className="checkbox__label" selenium-id="hideAllDLCCheckbox">
    <input
      type="checkbox"
      className="checkbox__input ng-untouched ng-pristine ng-valid"
    />
    {title}
    {/**/}
  </label>
);

export const InputAlt = ({ title }: any) => (
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
      {title}{/**/}
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
);
