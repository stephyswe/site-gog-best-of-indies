import { FilterBodyGenres } from "./body/filter-body-genres";
import { FilterBodyTags } from "./body/filter-body-tags";
import { FilterItem, FilterItemData } from "./filter-item";

const filterData = [
  {
    title: "DLCs",
    type: "checkbox",
    content: [
      {
        title: "Hide DLCs and extras",
        selId: "hideAllDLCCheckbox",
      },
    ],
  },
  {
    title: "Price range",
    type: "price",
    content: [
      {
        name: "...",
        title: "...",
        selBtnId: "...",
        selLabelId: "...",
        idInput: "...",
      },
    ],
  },
  {
    title: "Release Status",
    type: "checkbox-alt",
    content: [
      {
        name: "releasestatuses-new-arrival",
        title: "New arrivals",
        selBtnId: "filterReleasestatusesExcludenew-arrival",
        selLabelId: "filterReleasestatusesCheckboxnew-arrival",
        idInput: "releasestatuses-new-arrival",
      },
    ],
  },
  {
    title: "Genres",
    type: "checkbox-alt",
    content: [
      {
        name: "genres-action",
        title: "Action",
        selBtnId: "filterReleasestatusesExcludenew-arrival",
        selLabelId: "filterReleasestatusesCheckboxnew-arrival",
        idInput: "releasestatuses-new-arrival",
      },
    ],
  },
];

export const FilterSimpleBar = () => (
  <div
    //simplebar=""
    className="filters-wrapper"
    selenium-id="filtersWrapper"
    data-simplebar="init"
    data-simplebar-auto-hide="false"
  >
    <div className="simplebar-wrapper" style={{ margin: "-3px 0px 0px" }}>
      <div className="simplebar-height-auto-observer-wrapper">
        <div className="simplebar-height-auto-observer" />
      </div>
      <div className="simplebar-mask">
        <div className="simplebar-offset" style={{ right: 0, bottom: 0 }}>
          <div
            className="simplebar-content-wrapper"
            tabIndex={0}
            role="region"
            aria-label="scrollable content"
            style={{ height: "auto", overflow: "hidden scroll" }}
          >
            <div
              className="simplebar-content"
              style={{ padding: "3px 0px 0px" }}
            >
              <div className="filters-wrapper__header">
                <h3 className="filters-wrapper__header-text">Filters</h3>
                <span className="filters__close-button icon-close" />
              </div>
              <div>
                <div className="filters" selenium-id="filtersWrapper">
                  <div className="filters__item filters__item--single filter-options">
                    <label
                      className="checkbox__label ng-star-inserted"
                      selenium-id="filterDiscountedCheckbox"
                    >
                      <input
                        type="checkbox"
                        className="checkbox__input ng-untouched ng-pristine ng-valid"
                      />
                      Show only discounted{/**/}
                    </label>
                    {/**/}
                    {/**/}
                    {/**/}
                  </div>

                  {/* loop data */}
                  {filterData.map((item: any) => (
                    <FilterItemData key={item.title} {...item} />
                  ))}
                  <FilterItem title="Genres" Content={<FilterBodyGenres />} />
                  <FilterItem title="Tags" Content={<FilterBodyTags />} />

                  <filter className="filters__item ng-star-inserted">
                    <div className="ng-tns-c64-6 ng-star-inserted">
                      <div
                        className="collapsible-section__header ng-tns-c64-6"
                        selenium-id="collapsibleSectionHeader"
                      >
                        <div className="collapsible-section__icon-wrapper ng-tns-c64-6">
                          <span className="collapsible-section__icon icon-angle-right ng-tns-c64-6" />
                        </div>
                        <div className="filter__header ng-tns-c64-6">
                          <h4 selenium-id="filterSystemsName">
                            <div>
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/} Operating Systems {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                          </h4>
                          {/**/}
                        </div>
                      </div>
                      {/**/}
                      <div
                        className="collapsible-section__body ng-tns-c64-6 ng-trigger ng-trigger-openClose"
                        selenium-id="collapsibleSectionBody"
                        style={{ height: 0 }}
                      >
                        <div className="ng-tns-c64-6">
                          <div>
                            {/**/}
                            {/**/}
                            {/**/}
                            <div
                              className="filter-options"
                              selenium-id="filterSystems"
                            >
                              {/**/}
                              {/**/}
                              <div
                                selenium-id="filterSystemsRegularOptionsContainer"
                                className="ng-star-inserted"
                                style={{}}
                              >
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="systems-windows"
                                  selenium-id="filterSystemsCheckboxwindows"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="systems-windows"
                                    id="systems-windows"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Windows{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="systems-osx"
                                  selenium-id="filterSystemsCheckboxosx"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="systems-osx"
                                    id="systems-osx"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    macOS{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="systems-linux"
                                  selenium-id="filterSystemsCheckboxlinux"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="systems-linux"
                                    id="systems-linux"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Linux{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                {/**/}
                              </div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**/}
                  </filter>
                  <filter className="filters__item ng-star-inserted">
                    <div className="ng-tns-c64-7 ng-star-inserted">
                      <div
                        className="collapsible-section__header ng-tns-c64-7"
                        selenium-id="collapsibleSectionHeader"
                      >
                        <div className="collapsible-section__icon-wrapper ng-tns-c64-7">
                          <span className="collapsible-section__icon icon-angle-right ng-tns-c64-7" />
                        </div>
                        <div className="filter__header ng-tns-c64-7">
                          <h4 selenium-id="filterFeaturesName">
                            <div>
                              {/**/}
                              {/**/}
                              {/**/} Features {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                          </h4>
                          {/**/}
                        </div>
                      </div>
                      {/**/}
                      <div
                        className="collapsible-section__body ng-tns-c64-7 ng-trigger ng-trigger-openClose"
                        selenium-id="collapsibleSectionBody"
                        style={{ height: 0 }}
                      >
                        <div className="ng-tns-c64-7">
                          <div>
                            {/**/}
                            {/**/}
                            {/**/}
                            <div
                              className="filter-options"
                              selenium-id="filterFeatures"
                            >
                              {/**/}
                              {/**/}
                              <div
                                selenium-id="filterFeaturesRegularOptionsContainer"
                                className="ng-star-inserted"
                                style={{}}
                              >
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-single"
                                  selenium-id="filterFeaturesCheckboxsingle"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-single"
                                    id="features-single"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Single-player{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludesingle"
                                  >
                                    <span className="filter-exclude__icon icon-eye-open" />
                                  </button>
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-multi"
                                  selenium-id="filterFeaturesCheckboxmulti"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-multi"
                                    id="features-multi"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Multi-player{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludemulti"
                                  >
                                    <span className="filter-exclude__icon icon-eye-open" />
                                  </button>
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-coop"
                                  selenium-id="filterFeaturesCheckboxcoop"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-coop"
                                    id="features-coop"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Co-op{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludecoop"
                                  >
                                    <span className="filter-exclude__icon icon-eye-open" />
                                  </button>
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-achievements"
                                  selenium-id="filterFeaturesCheckboxachievements"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-achievements"
                                    id="features-achievements"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Achievements{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludeachievements"
                                  >
                                    <span className="filter-exclude__icon icon-eye-open" />
                                  </button>
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-leaderboards"
                                  selenium-id="filterFeaturesCheckboxleaderboards"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-leaderboards"
                                    id="features-leaderboards"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Leaderboards{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludeleaderboards"
                                  >
                                    <span className="filter-exclude__icon icon-eye-open" />
                                  </button>
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-controller_support"
                                  selenium-id="filterFeaturesCheckboxcontroller_support"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-controller_support"
                                    id="features-controller_support"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Controller support{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludecontroller_support"
                                  >
                                    <span className="filter-exclude__icon icon-eye-open" />
                                  </button>
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-cloud_saves"
                                  selenium-id="filterFeaturesCheckboxcloud_saves"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-cloud_saves"
                                    id="features-cloud_saves"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Cloud saves{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludecloud_saves"
                                  >
                                    <span className="filter-exclude__icon icon-eye-open" />
                                  </button>
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="features-overlay"
                                  selenium-id="filterFeaturesCheckboxoverlay"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="features-overlay"
                                    id="features-overlay"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Overlay{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  <button
                                    className="filter-exclude ng-star-inserted"
                                    title="Exclude results with this feature"
                                    selenium-id="filterFeaturesExcludeoverlay"
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
                      </div>
                    </div>
                    {/**/}
                  </filter>
                  {/**/}
                  <div className="ng-star-inserted">
                    <div className="ng-tns-c64-2 ng-star-inserted">
                      <div
                        className="collapsible-section__header ng-tns-c64-2"
                        selenium-id="collapsibleSectionHeader"
                      >
                        <div className="collapsible-section__icon-wrapper ng-tns-c64-2">
                          <span className="collapsible-section__icon icon-angle-right ng-tns-c64-2" />
                        </div>
                        <div className="filter__header ng-tns-c64-2">
                          <h4 selenium-id="releaseDateFilterName">
                            Release Date
                          </h4>
                          {/**/}
                        </div>
                      </div>
                      {/**/}
                      <div
                        className="collapsible-section__body ng-tns-c64-2 ng-trigger ng-trigger-openClose"
                        selenium-id="collapsibleSectionBody"
                        style={{ height: 0 }}
                      >
                        <div className="release-date-filter__content filter-options ng-tns-c64-2">
                          <div>
                            <div className="range-slider">
                              <div
                                className="range-slider__range ng2-nouislider ng-untouched ng-pristine ng-valid ng-star-inserted"
                                _nghost-gogcom-store-c67=""
                                selenium-id="releaseDateRangeSlider"
                                style={{}}
                              >
                                <div
                                  _ngcontent-gogcom-store-c67=""
                                  className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                                >
                                  <div className="noUi-base">
                                    <div className="noUi-connects">
                                      <div
                                        className="noUi-connect"
                                        style={{
                                          transform:
                                            "translate(0%, 0px) scale(1, 1)",
                                        }}
                                      />
                                    </div>
                                    <div
                                      className="noUi-origin"
                                      style={{
                                        transform: "translate(-100%, 0px)",
                                        zIndex: 5,
                                      }}
                                    >
                                      <div
                                        className="noUi-handle noUi-handle-lower"
                                        data-handle={0}
                                        tabIndex={0}
                                        role="slider"
                                        aria-orientation="horizontal"
                                        aria-valuemin={1980.0}
                                        aria-valuemax={2023.0}
                                        aria-valuenow={1980.0}
                                        //aria-valuetext={1980}
                                      >
                                        <div className="noUi-touch-area" />
                                      </div>
                                    </div>
                                    <div
                                      className="noUi-origin"
                                      style={{
                                        transform: "translate(0%, 0px)",
                                        zIndex: 4,
                                      }}
                                    >
                                      <div
                                        className="noUi-handle noUi-handle-upper"
                                        data-handle={1}
                                        tabIndex={0}
                                        role="slider"
                                        aria-orientation="horizontal"
                                        aria-valuemin={1980.0}
                                        aria-valuemax={2023.0}
                                        aria-valuenow={2023.0}
                                        //aria-valuetext={2023}
                                      >
                                        <div className="noUi-touch-area" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              {/**/}
                              {/**/}
                              <div className="range-slider__inputs">
                                <label className="range-slider__label">
                                  <input
                                    type="text"
                                    className="range-slider__input ng-untouched ng-pristine ng-valid"
                                    min={1980}
                                    max={2023}
                                    selenium-id="releaseDateRangeFrom"
                                  />
                                </label>
                                <span className="range-slider__separator">
                                  -
                                </span>
                                <label className="range-slider__label">
                                  <input
                                    type="text"
                                    className="range-slider__input ng-untouched ng-pristine ng-valid"
                                    min={1980}
                                    max={2023}
                                    selenium-id="releaseDateRangeTo"
                                  />
                                </label>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/**/}
                  <div className="filters__item ng-star-inserted">
                    <div className="ng-tns-c64-8 ng-star-inserted">
                      <div
                        className="collapsible-section__header ng-tns-c64-8"
                        selenium-id="collapsibleSectionHeader"
                      >
                        <div className="collapsible-section__icon-wrapper ng-tns-c64-8">
                          <span className="collapsible-section__icon icon-angle-right ng-tns-c64-8" />
                        </div>
                        <div className="filter__header ng-tns-c64-8">
                          <h4 selenium-id="filterLanguagesName">
                            <div>
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/} Languages {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                              {/**/}
                            </div>
                          </h4>
                          {/**/}
                        </div>
                      </div>
                      {/**/}
                      <div
                        className="collapsible-section__body ng-tns-c64-8 ng-trigger ng-trigger-openClose"
                        selenium-id="collapsibleSectionBody"
                        style={{ height: 0 }}
                      >
                        <div className="ng-tns-c64-8">
                          <div>
                            {/**/}
                            {/**/}
                            {/**/}
                            <div
                              className="filter-options"
                              selenium-id="filterLanguages"
                            >
                              {/**/}
                              {/**/}
                              <div
                                selenium-id="filterLanguagesRegularOptionsContainer"
                                className="ng-star-inserted"
                                style={{}}
                              >
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-ar"
                                  selenium-id="filterLanguagesCheckboxar"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-ar"
                                    id="languages-ar"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    العربية{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-br"
                                  selenium-id="filterLanguagesCheckboxbr"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-br"
                                    id="languages-br"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Português do Brasil{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-cn"
                                  selenium-id="filterLanguagesCheckboxcn"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-cn"
                                    id="languages-cn"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    中文(简体){" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-cz"
                                  selenium-id="filterLanguagesCheckboxcz"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-cz"
                                    id="languages-cz"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    český{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-da"
                                  selenium-id="filterLanguagesCheckboxda"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-da"
                                    id="languages-da"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Dansk{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-de"
                                  selenium-id="filterLanguagesCheckboxde"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-de"
                                    id="languages-de"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Deutsch{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-en"
                                  selenium-id="filterLanguagesCheckboxen"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-en"
                                    id="languages-en"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    English{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-es"
                                  selenium-id="filterLanguagesCheckboxes"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-es"
                                    id="languages-es"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    español{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-es_mx"
                                  selenium-id="filterLanguagesCheckboxes_mx"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-es_mx"
                                    id="languages-es_mx"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Español (AL){" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-fi"
                                  selenium-id="filterLanguagesCheckboxfi"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-fi"
                                    id="languages-fi"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Suomi{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-fr"
                                  selenium-id="filterLanguagesCheckboxfr"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-fr"
                                    id="languages-fr"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    français{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-gk"
                                  selenium-id="filterLanguagesCheckboxgk"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-gk"
                                    id="languages-gk"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Ελληνικά{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-hu"
                                  selenium-id="filterLanguagesCheckboxhu"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-hu"
                                    id="languages-hu"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    magyar{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-it"
                                  selenium-id="filterLanguagesCheckboxit"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-it"
                                    id="languages-it"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    italiano{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-jp"
                                  selenium-id="filterLanguagesCheckboxjp"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-jp"
                                    id="languages-jp"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    日本語{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-ko"
                                  selenium-id="filterLanguagesCheckboxko"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-ko"
                                    id="languages-ko"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    한국어{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-nl"
                                  selenium-id="filterLanguagesCheckboxnl"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-nl"
                                    id="languages-nl"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    nederlands{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-no"
                                  selenium-id="filterLanguagesCheckboxno"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-no"
                                    id="languages-no"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    norsk{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-pl"
                                  selenium-id="filterLanguagesCheckboxpl"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-pl"
                                    id="languages-pl"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    polski{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-pt"
                                  selenium-id="filterLanguagesCheckboxpt"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-pt"
                                    id="languages-pt"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    português{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-ro"
                                  selenium-id="filterLanguagesCheckboxro"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-ro"
                                    id="languages-ro"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    română{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-ru"
                                  selenium-id="filterLanguagesCheckboxru"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-ru"
                                    id="languages-ru"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    русский{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-sv"
                                  selenium-id="filterLanguagesCheckboxsv"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-sv"
                                    id="languages-sv"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    svenska{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-th"
                                  selenium-id="filterLanguagesCheckboxth"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-th"
                                    id="languages-th"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    ไทย{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-tr"
                                  selenium-id="filterLanguagesCheckboxtr"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-tr"
                                    id="languages-tr"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Türkçe{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-uk"
                                  selenium-id="filterLanguagesCheckboxuk"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-uk"
                                    id="languages-uk"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    Українська{" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                <label
                                  className="checkbox__label ng-star-inserted"
                                  htmlFor="languages-zh"
                                  selenium-id="filterLanguagesCheckboxzh"
                                >
                                  <input
                                    type="checkbox"
                                    className="checkbox__input ng-star-inserted"
                                    name="languages-zh"
                                    id="languages-zh"
                                  />
                                  {/**/}
                                  <span className="filter-options__label ng-star-inserted">
                                    {" "}
                                    中文(繁體){" "}
                                  </span>
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                  {/**/}
                                </label>
                                {/**/}
                              </div>
                              {/**/}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/**/}
                  </div>
                  {/**/}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="simplebar-placeholder"
        style={{ width: "auto", height: 1392 }}
      />
    </div>
    <div
      className="simplebar-track simplebar-horizontal"
      style={{ visibility: "hidden" }}
    >
      <div
        className="simplebar-scrollbar simplebar-visible"
        style={{ width: 0, display: "none" }}
      />
    </div>
    <div
      className="simplebar-track simplebar-vertical"
      style={{ visibility: "visible" }}
    >
      <div
        className="simplebar-scrollbar simplebar-visible"
        style={{
          height: 69,
          transform: "translate3d(0px, 0px, 0px)",
          display: "block",
        }}
      />
    </div>
  </div>
);
