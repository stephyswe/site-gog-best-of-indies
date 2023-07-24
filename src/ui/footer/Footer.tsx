export const Footer = () => (
  <footer className="footer-microservice main-footer">
    <div className="footer-microservice__top footer-microservice-content">
      <ul className="footer-microservice-mainlinks">
        <li className="footer-microservice-mainlinks__item">
          <a className="footer-microservice-mainlinks__link" href="/redeem">
            Redeem code
          </a>
        </li>
        <li className="footer-microservice-mainlinks__item">
          <a
            className="footer-microservice-mainlinks__link"
            href="//support.gog.com/hc?product=gog"
          >
            Contact us
          </a>
        </li>
        <li className="footer-microservice-mainlinks__item">
          <a className="footer-microservice-mainlinks__link" href="/work">
            Career opportunities
          </a>
        </li>
        <li className="footer-microservice-mainlinks__item">
          <a className="footer-microservice-mainlinks__link" href="/indie">
            Submit your game
          </a>
        </li>
        <li className="footer-microservice-mainlinks__item">
          <a className="footer-microservice-mainlinks__link" href="/blog">
            Blog
          </a>
        </li>
      </ul>
      <div className="footer-microservice-socials">
        <a
          target="_blank"
          href="https://facebook.com/gogcom"
          className="footer-microservice-socials__item"
        >
          <i className="footer-ic footer-icon-facebook footer-fb" />
        </a>
        <a
          target="_blank"
          href="https://twitter.com/gogcom"
          className="footer-microservice-socials__item"
        >
          <i className="footer-ic footer-icon-twitter footer-twitter" />
        </a>
        <a
          target="_blank"
          href="http://www.twitch.tv/gogcom"
          className="footer-microservice-socials__item"
        >
          <i className="footer-ic footer-icon-twitch footer-twitch" />
        </a>
      </div>
    </div>
    <div className="footer-microservice__middle">
      <div className="footer-microservice-content">
        <a className="footer-microservice__logo" href="/" />
        <div className="footer-microservice__middle-section">
          <div className="footer-microservice-language" footer-language="">
            <span className="footer-microservice-language__label">
              Language:
            </span>
            <div className="footer-microservice-language__item--dropdown-wrapper">
              <span className="footer-microservice__sizer">
                English
                <svg
                  className="footer-microservice-language__dropdown-icon"
                  viewBox="0 0 32 32"
                >
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
              </span>
              <select
                className="footer-microservice-language__item--dropdown ng-pristine ng-untouched ng-valid ng-not-empty"
                ng-model="language.currentLanguageCode"
                ng-change="language.changeLanguage(language.currentLanguageCode)"
                defaultValue="en-US"
              >
                <option value="en-US">English</option>
                <option value="de-DE">Deutsch</option>
                <option value="fr-FR">Français</option>
                <option value="pl-PL">Polski</option>
                <option value="ru-RU">Pусский</option>
                <option value="zh-Hans">中文(简体)</option>
              </select>
            </div>
            <span className="footer-microservice-language__item--selected">
              English
            </span>
            {/**/}
            <div className="footer-microservice-language__item--more-wrapper">
              <span className="footer-microservice__sizer">
                more languages
                <svg
                  className="footer-microservice-language__dropdown-icon"
                  viewBox="0 0 32 32"
                >
                  <use xlinkHref="#icon-arrow-down2" />
                </svg>
              </span>
              <select
                className="footer-microservice-language__item--more ng-pristine ng-untouched ng-valid ng-empty"
                ng-model="language.currentLanguageCodeMore"
                ng-change="language.changeLanguage(language.currentLanguageCodeMore)"
                defaultValue={""}
              >
                <option value="">more languages</option>
                <option value="de-DE">Deutsch</option>
                <option value="fr-FR">Français</option>
                <option value="pl-PL">Polski</option>
                <option value="ru-RU">Pусский</option>
                <option value="zh-Hans">中文(简体)</option>
              </select>
            </div>
            <ul className="footer-microservice-language__list">
              <li
                className="footer-microservice-language__item is-selected"
                ng-class="{'is-selected': language.currentLanguage === 'English' }"
                ng-click="language.changeLanguage('en-US')"
              >
                English
              </li>
              <li
                className="footer-microservice-language__item"
                ng-class="{'is-selected': language.currentLanguage === 'Deutsch' }"
                ng-click="language.changeLanguage('de-DE')"
              >
                Deutsch
              </li>
              <li
                className="footer-microservice-language__item"
                ng-class="{'is-selected': language.currentLanguage === 'Français' }"
                ng-click="language.changeLanguage('fr-FR')"
              >
                Français
              </li>
              <li
                className="footer-microservice-language__item"
                ng-class="{'is-selected': language.currentLanguage === 'Polski' }"
                ng-click="language.changeLanguage('pl-PL')"
              >
                Polski
              </li>
              <li
                className="footer-microservice-language__item"
                ng-class="{'is-selected': language.currentLanguage === 'Pусский' }"
                ng-click="language.changeLanguage('ru-RU')"
              >
                Pусский
              </li>
              <li
                className="footer-microservice-language__item"
                ng-class="{'is-selected': language.currentLanguage === '中文(简体)' }"
                ng-click="language.changeLanguage('zh-Hans')"
              >
                中文(简体)
              </li>
            </ul>
          </div>
          <div className="footer-microservice-currency" footer-currency="">
            <span className="footer-microservice-currency__item--label">
              Currency:
            </span>
            <div className="footer-microservice-currency__item--dropdown-wrapper">
              <select
                className="footer-microservice-currency__item--dropdown ng-pristine ng-untouched ng-valid ng-not-empty"
                ng-model="currency.currentCurrency"
                ng-change="currency.changeCurrency(currency.currentCurrency)"
                defaultValue="SEK"
              >
                <option value="SEK">SEK</option>
                <option value="EUR">EUR</option>
                <option value="USD">USD</option>
              </select>
              <svg
                className="footer-microservice-currency__dropdown-icon"
                viewBox="0 0 32 32"
              >
                <use xlinkHref="#icon-arrow-down2" />
              </svg>
            </div>
            <span className="footer-microservice-currency__item--selected">
              SEK
            </span>
            <ul className="footer-microservice-currency__list">
              <li
                className="footer-microservice-currency__item
             selected"
                ng-click="currency.changeCurrency('SEK')"
              >
                SEK
              </li>
              <li
                className="footer-microservice-currency__item
            "
                ng-click="currency.changeCurrency('EUR')"
              >
                EUR
              </li>
              <li
                className="footer-microservice-currency__item
            "
                ng-click="currency.changeCurrency('USD')"
              >
                USD
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-microservice__middle-section">
          <div
            footer-download=""
            className="footer-microservice-download footer-microservice-download--windows"
            gog-track-event="{'event': 'gogGalaxyDownload'}"
          >
            <a
              className="footer-microservice-download__button footer-microservice-download__button--mac"
              href="https://content-system.gog.com/open_link/download?path=/open/galaxy/client/2.0.67.2/galaxy_client_2.0.67.2.pkg"
            >
              Download GOG Galaxy
              <span>for Mac</span>
            </a>
            <a
              className="footer-microservice-download__button footer-microservice-download__button--windows"
              href="https://webinstallers.gog-statics.com/download/GOG_Galaxy_2.0.exe?payload=iXm0qF4n8FFQR2Ms1XCUUbOp9eKYOB3h0hZM4jqpC0SoJ3D76Qu4NyzYytKGUHCRbqz3pBDR8joMRrdNaNJtFjCWWCvbKNVK4T7fkTn6IDP8UDNl8A.."
            >
              Download GOG Galaxy
              <span>for Windows</span>
            </a>
            <a
              className="footer-microservice-download__button footer-microservice-download__button--other"
              href="/galaxy"
            >
              Discover GOG Galaxy
            </a>
          </div>
          <div className="footer-microservice-socials">
            <a
              target="_blank"
              href="https://facebook.com/gogcom"
              className="footer-microservice-socials__item"
            >
              <i className="footer-ic footer-icon-facebook footer-fb" />
            </a>
            <a
              target="_blank"
              href="https://twitter.com/gogcom"
              className="footer-microservice-socials__item"
            >
              <i className="footer-ic footer-icon-twitter footer-twitter" />
            </a>
            <a
              target="_blank"
              href="http://www.twitch.tv/gogcom"
              className="footer-microservice-socials__item"
            >
              <i className="footer-ic footer-icon-twitch footer-twitch" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div
      className="footer-microservice-secondary footer-microservice-content"
      footer-links=""
    >
      <div className="footer-microservice-secondary__legals-wrapper">
        <ul className="footer-microservice-secondary__list">
          <li>
            <a
              className="footer-microservice-secondary__link"
              href="https://support.gog.com/hc/categories/201526109?product=gog"
            >
              Legal
            </a>
          </li>
          <li>
            <a
              className="footer-microservice-secondary__link"
              href="https://support.gog.com/hc/articles/212632109-Privacy-Policy?product=gog"
            >
              Privacy policy
            </a>
          </li>
          <li>
            <a className="footer-microservice-secondary__link" href="/thanks">
              Our thanks
            </a>
          </li>
          <li>
            <button
              className="footer-microservice-secondary__link"
              ng-click="links.toggleCookieDeclarationVisibility(true)"
            >
              Cookie Declaration
            </button>
          </li>
          <li>
            <a
              className="footer-microservice-secondary__link"
              href="https://support.gog.com/hc/articles/360019551598?product=gog"
            >
              Imprint
            </a>
          </li>
        </ul>
        <div className="footer-microservice-secondary__legal">
          © GOG sp. z o.o. All rights reserved. All trademarks and registered
          trademarks are the property of their respective owners.
        </div>
      </div>
      <div className="footer-microservice-secondary__copyrights">
        Part of{" "}
        <a
          className="footer-microservice-secondary__logo"
          href="https://www.cdprojekt.com/"
        >
          CD PROJEKT
        </a>{" "}
        group.
      </div>
    </div>
  </footer>
);
