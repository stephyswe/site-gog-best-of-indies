export const SectionGalaxy = () => (
    <div className="galaxy-section-wrapper">
      <div galaxy-section="" className="galaxy-section">
        <a
          className="galaxy-section-info"
          href="https://www.gog.com/en/about_gog"
          ng-click="galaxySection.closeAllTooltips()"
        >
          GOG is the place to build and play your collection of
          <div
            className="galaxy-tooltip-wrapper"
            ng-mouseenter="galaxySection.checkTooltipForVisibility($event)"
          >
            <div
              gog-dropdown-two=""
              gog-dropdown-disable=""
              className="dropdown dropdown--top galaxy-tooltip js-galaxy-tooltip"
              ng-class="{
    'dropdown--is-open': dropdown.isOpen
      }"
              ng-mouseout="dropdown.hideWithDelay()"
              ng-mouseover="dropdown.cancelHiding()"
            >
              <span
                className="dropdown__trigger galaxy-tooltip__trigger"
                ng-mouseenter="dropdown.show()"
              >
                <span>Good Old Games</span>
              </span>
              <div className="dropdown__layer galaxy-tooltip__layer js-galaxy-tooltip__layer">
                <div className="galaxy-tooltip__tooltip-content">
                  <div className="tooltip-content__tooltip-icon-wrapper">
                    <svg className="tooltip-icon-wrapper__icon tooltip-icon-wrapper__icon--no-stroke">
                      <use
                        className="tooltip-icon-wrapper__icon-use"
                        xlinkHref="/svg/bf869f22.svg#icon-good-old-games"
                      />
                    </svg>
                  </div>
                  <span className="tooltip-content__header">
                    Classics to play and collect
                  </span>
                  <span className="tooltip-content__text">
                    A wide array of all-time classics that we strive to keep
                    compatible with future OSs and available for you for years to
                    come.
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
          and modern hits. With our
          <div
            className="galaxy-tooltip-wrapper"
            ng-mouseenter="galaxySection.checkTooltipForVisibility($event)"
          >
            <div
              gog-dropdown-two=""
              gog-dropdown-disable=""
              className="dropdown dropdown--top galaxy-tooltip js-galaxy-tooltip"
              ng-class="{
    'dropdown--is-open': dropdown.isOpen
      }"
              ng-mouseout="dropdown.hideWithDelay()"
              ng-mouseover="dropdown.cancelHiding()"
            >
              <span
                className="dropdown__trigger galaxy-tooltip__trigger"
                ng-mouseenter="dropdown.show()"
              >
                <span>gamers-first approach</span>
              </span>
              <div className="dropdown__layer galaxy-tooltip__layer js-galaxy-tooltip__layer">
                <div className="galaxy-tooltip__tooltip-content">
                  <div className="tooltip-content__tooltip-icon-wrapper">
                    <svg className="tooltip-icon-wrapper__icon ">
                      <use
                        className="tooltip-icon-wrapper__icon-use"
                        xlinkHref="/svg/bf869f22.svg#icon-store"
                      />
                    </svg>
                  </div>
                  <span className="tooltip-content__header">
                    Built with gamers in mind
                  </span>
                  <span className="tooltip-content__text">
                    We believe that in-house friendly support, full refunds up to
                    30 days after purchase, and optional gaming client are just a
                    few things that make your experience better.
                  </span>
                </div>
              </div>
            </div>
          </div>{" "}
          and respecting your
          <div
            className="galaxy-tooltip-wrapper"
            ng-mouseenter="galaxySection.checkTooltipForVisibility($event)"
          >
            <div
              gog-dropdown-two=""
              gog-dropdown-disable=""
              className="dropdown dropdown--top galaxy-tooltip js-galaxy-tooltip"
              ng-class="{
    'dropdown--is-open': dropdown.isOpen
      }"
              ng-mouseout="dropdown.hideWithDelay()"
              ng-mouseover="dropdown.cancelHiding()"
            >
              <span
                className="dropdown__trigger galaxy-tooltip__trigger"
                ng-mouseenter="dropdown.show()"
              >
                <span>need for ownership</span>
              </span>
              <div className="dropdown__layer galaxy-tooltip__layer js-galaxy-tooltip__layer">
                <div className="galaxy-tooltip__tooltip-content">
                  <div className="tooltip-content__tooltip-icon-wrapper">
                    <svg className="tooltip-icon-wrapper__icon ">
                      <use
                        className="tooltip-icon-wrapper__icon-use"
                        xlinkHref="/svg/bf869f22.svg#icon-padlock"
                      />
                    </svg>
                  </div>
                  <span className="tooltip-content__header">
                    Own the things you buy
                  </span>
                  <span className="tooltip-content__text">
                    DRM-free makes it easy to re-download games, back them up on
                    external hard drives, and enjoy their single-player mode
                    offline.
                  </span>
                </div>
              </div>
            </div>
          </div>
          , we’re here to make games last forever.
        </a>
        <a
          className="explore-galaxy"
          href="https://www.gog.com/galaxy"
          target="_blank"
          ng-click="galaxySection.closeAllTooltips()"
        >
          <picture className="explore-galaxy__icon">
            <source
              media="(max-width: 767px)"
              srcSet="https://images.gog-statics.com/0164e24124875d6b41560cbcd29e44bbe9efbbaf0097e694900aabf43677ca08.png, https://images.gog-statics.com/86663221546d07fbedc8eeb0f560442faf7dcfbc1c36673c73b9d3aa7ad521d4.png 2x"
            />
            <source
              media="screen"
              srcSet="https://images.gog-statics.com/7aef620c84b7f73f9ac9f4e1085e0c2433ae43cb74219d685b21c34bf09ce2b9.png, https://images.gog-statics.com/a36772733f2f23f0eb9cce56d2b9fb4769c3f663bcf27ad2ae1a21d0b0c94ec9.png 2x"
            />
            <img src="https://images.gog-statics.com/0164e24124875d6b41560cbcd29e44bbe9efbbaf0097e694900aabf43677ca08.png" />
          </picture>
          <div
            className="galaxy-tooltip-wrapper"
            ng-mouseenter="galaxySection.checkTooltipForVisibility($event)"
          >
            <div
              gog-dropdown-two=""
              gog-dropdown-disable=""
              className="dropdown dropdown--top galaxy-tooltip js-galaxy-tooltip explore-galaxy-tooltip"
              ng-class="{
    'dropdown--is-open': dropdown.isOpen
      }"
              ng-mouseout="dropdown.hideWithDelay()"
              ng-mouseover="dropdown.cancelHiding()"
            >
              <span
                className="dropdown__trigger galaxy-tooltip__trigger explore-galaxy-tooltip__trigger"
                ng-mouseenter="dropdown.show()"
              >
                <span>Check GOG GALAXY</span>
              </span>
              <div className="dropdown__layer galaxy-tooltip__layer js-galaxy-tooltip__layer explore-galaxy-tooltip__layer">
                <div className="galaxy-tooltip__tooltip-content">
                  <div className="tooltip-content__tooltip-icon-wrapper">
                    <img
                      className="explore-galaxy__icon explore-galaxy-tooltip__icon"
                      src="https://images.gog-statics.com/0164e24124875d6b41560cbcd29e44bbe9efbbaf0097e694900aabf43677ca08.png"
                    />
                  </div>
                  <span className="tooltip-content__header">
                    Your optional GOG client
                  </span>
                  <span className="tooltip-content__text">
                    The best way to run, manage and update your GOG games library
                    and organize your games across platforms.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  )
