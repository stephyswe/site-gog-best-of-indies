export const SectionViewMobile = () => (
    <div
    className="menu-item menu-item--animated menu-account has-submenu js-menu-account ng-hide"
    ng-controller="menuAccountCtrl as account"
    ng-show="account.isUserLoggedIn"
    ng-mouseenter="menu.showWithDelay($event, 'account')"
    ng-mouseleave="menu.hide($event, 'account')"
    hook-test="menuAccount"
    menu-pending-notifications=""
>
    <a
        ng-href="/feed"
        className="menu-link"
        hook-test="menuAccountButton"
        ng-touchstart="$event.preventDefault(); menu.toggle($event, 'account')"
        ng-class="{'menu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('unseen_activities') > 0}"
        data-hj-suppress=""
        href="/feed"
    >
        {/**/}
        <span
            id="menuUsername"
            className="menu-username"
            ng-bind="account.username"
            data-hj-suppress=""
        />
        <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
            <use xlinkHref="#icon-arrow-down2" />
        </svg>
        <span className="menu-triangle menu-triangle--others" />
    </a>
    <div
        className="menu-submenu menu-account__submenu"
        ng-mouseenter="menu.cancelTimeout('account')"
    >
        <div className="menu-header menu-account__user">
            <div className="menu-account__user-in" data-hj-suppress="">
                {/**/}
                <span className="menu-header__label">Your account</span>
                <span
                    className="menu-account__user-name"
                    ng-bind="account.username"
                    data-hj-suppress=""
                />
            </div>
        </div>
        <div
            className="menu-submenu-item menu-submenu-item--hover"
            ng-show="account.isUserProfileEnabled"
        >
            <a
                href="/feed"
                className="menu-submenu-link"
                hook-test="menuAccountFeed"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Feed ACCOUNT'}"
                ng-class="{'menu-submenu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('unseen_activities') > 0}"
            >
                Activity feed
            </a>
        </div>
        <div
            className="menu-submenu-item menu-submenu-item--hover"
            ng-show="account.isUserProfileEnabled"
        >
            <a
                href="/u"
                className="menu-submenu-link"
                hook-test="menuAccountProfile"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Profile ACCOUNT'}"
            >
                Your profile
            </a>
        </div>
        <div
            className="menu-submenu-separator"
            ng-show="account.isUserProfileEnabled"
        />
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="/en/account"
                className="menu-submenu-link"
                hook-test="menuAccountGames"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Games ACCOUNT'}"
            >
                Games
                <span
                    className="menu-submenu-item__label ng-hide"
                    ng-show="account.userGamesCount > 0"
                    ng-bind="account.userGamesCount"
                >
                    0
                </span>
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="/en/account/movies"
                className="menu-submenu-link"
                hook-test="menuAccountMovies"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Movies ACCOUNT'}"
            >
                Movies
                <span
                    className="menu-submenu-item__label ng-hide"
                    ng-show="account.userMoviesCount > 0"
                    ng-bind="account.userMoviesCount"
                >
                    0
                </span>
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="/en/account/wishlist"
                className="menu-submenu-link"
                hook-test="menuAccountWishlist"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Wishlist ACCOUNT'}"
            >
                Wishlist
                <span
                    className="menu-submenu-item__label ng-hide"
                    ng-show="account.userWishlistedItemsCount > 0"
                    ng-bind="account.userWishlistedItemsCount"
                >
                    0
                </span>
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="/en/redeem"
                className="menu-submenu-link"
                hook-test="menuAccountRedeemCode"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Redeem ACCOUNT'}"
            >
                Redeem a code
            </a>
        </div>
        <div className="menu-submenu-separator" />
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="/en/account/friends"
                className="menu-submenu-link"
                hook-test="menuAccountFrieds"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Friends ACCOUNT'}"
            >
                Friends
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="/en/account/chat"
                className="menu-submenu-link"
                hook-test="menuAccountChat"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Chat ACCOUNT'}"
            >
                Chat
            </a>
        </div>
        <div className="menu-submenu-separator" />
        <div className="menu-submenu-item menu-submenu-item--hover menu-submenu-item--with-wallet">
            <a
                href="/en/wallet"
                className="menu-submenu-link"
                hook-test="menuAccountWallet"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Wallet ACCOUNT'}"
            >
                Your Wallet
                <span
                    className="menu-submenu-item__label _price ng-hide"
                    ng-show="account.userWalletBalance > 0"
                    ng-bind="account.userWalletBalance"
                >
                    0
                </span>
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="/en/account/settings/orders"
                className="menu-submenu-link"
                hook-test="menuAccountOrdersAndSettings"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Orders and settings ACCOUNT'}"
            >
                Orders &amp; settings
            </a>
        </div>
        <div
            className="menu-submenu-item menu-submenu-item--static menu-submenu-item--hover"
            gog-menu-lang-and-currency=""
            ng-class="{ 'is-active': langAndCurrency.isVisible }"
            ng-mouseenter="langAndCurrency.show()"
            ng-mouseleave="langAndCurrency.hide()"
        >
            <a
                href="/en/account/settings/personal"
                className="menu-submenu-link"
                hook-test="menuAccountLangAndCurrency"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Language and currency ACCOUNT'}"
                ng-touchstart="$event.preventDefault(); langAndCurrency.show()"
            >
                Language &amp; currency
                <svg viewBox="0 0 32 32" className="menu-submenu-icon">
                    <use xlinkHref="#icon-arrow-right4" />
                </svg>
                <svg viewBox="0 0 32 32" className="menu-submenu-icon">
                    <use xlinkHref="#icon-arrow-right4" />
                </svg>
            </a>
            <div
                className="menu-language-and-currency"
                ng-class="{ 'is-visible': langAndCurrency.isVisible }"
                ng-mouseenter="langAndCurrency.cancelHidding()"
            >
                <div className="menu-language">
                    <p className="menu-language-and-currency__header">
                        Language:
                    </p>
                    <ul className="menu-language-and-currency__list">
                        <li
                            className="menu-language-and-currency__list-item is-active"
                            ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'en-US'}"
                            ng-click="langAndCurrency.changeLanguage('en-US')"
                        >
                            <svg
                                viewBox="0 0 32 32"
                                className="menu-language-and-currency__tick"
                            >
                                <use xlinkHref="#icon-tick" />
                            </svg>
                            English
                        </li>
                        <li
                            className="menu-language-and-currency__list-item"
                            ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'de-DE'}"
                            ng-click="langAndCurrency.changeLanguage('de-DE')"
                        >
                            <svg
                                viewBox="0 0 32 32"
                                className="menu-language-and-currency__tick"
                            >
                                <use xlinkHref="#icon-tick" />
                            </svg>
                            Deutsch
                        </li>
                        <li
                            className="menu-language-and-currency__list-item"
                            ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'fr-FR'}"
                            ng-click="langAndCurrency.changeLanguage('fr-FR')"
                        >
                            <svg
                                viewBox="0 0 32 32"
                                className="menu-language-and-currency__tick"
                            >
                                <use xlinkHref="#icon-tick" />
                            </svg>
                            Français
                        </li>
                        <li
                            className="menu-language-and-currency__list-item"
                            ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'pl-PL'}"
                            ng-click="langAndCurrency.changeLanguage('pl-PL')"
                        >
                            <svg
                                viewBox="0 0 32 32"
                                className="menu-language-and-currency__tick"
                            >
                                <use xlinkHref="#icon-tick" />
                            </svg>
                            Polski
                        </li>
                        <li
                            className="menu-language-and-currency__list-item"
                            ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'ru-RU'}"
                            ng-click="langAndCurrency.changeLanguage('ru-RU')"
                        >
                            <svg
                                viewBox="0 0 32 32"
                                className="menu-language-and-currency__tick"
                            >
                                <use xlinkHref="#icon-tick" />
                            </svg>
                            Pусский
                        </li>
                        <li
                            className="menu-language-and-currency__list-item"
                            ng-class="{'is-active': langAndCurrency.currentLanguageCode == 'zh-Hans'}"
                            ng-click="langAndCurrency.changeLanguage('zh-Hans')"
                        >
                            <svg
                                viewBox="0 0 32 32"
                                className="menu-language-and-currency__tick"
                            >
                                <use xlinkHref="#icon-tick" />
                            </svg>
                            中文(简体)
                        </li>
                    </ul>
                </div>
                <p className="menu-language-and-currency__header">
                    Currency:
                </p>
                <ul className="menu-language-and-currency__list">
                    <li
                        className="menu-language-and-currency__list-item is-active"
                        ng-class="{'is-active': langAndCurrency.currentCurrencyCode == 'SEK'}"
                        ng-click="langAndCurrency.changeCurrency('SEK')"
                    >
                        <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                        >
                            <use xlinkHref="#icon-tick" />
                        </svg>
                        SEK
                    </li>
                    <li
                        className="menu-language-and-currency__list-item"
                        ng-class="{'is-active': langAndCurrency.currentCurrencyCode == 'EUR'}"
                        ng-click="langAndCurrency.changeCurrency('EUR')"
                    >
                        <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                        >
                            <use xlinkHref="#icon-tick" />
                        </svg>
                        EUR
                    </li>
                    <li
                        className="menu-language-and-currency__list-item"
                        ng-class="{'is-active': langAndCurrency.currentCurrencyCode == 'USD'}"
                        ng-click="langAndCurrency.changeCurrency('USD')"
                    >
                        <svg
                            viewBox="0 0 32 32"
                            className="menu-language-and-currency__tick"
                        >
                            <use xlinkHref="#icon-tick" />
                        </svg>
                        USD
                    </li>
                </ul>
                <div
                    className="menu-language-and-currency__footer"
                    ng-class="{'is-visible': langAndCurrency.showApplyButton}"
                >
                    <a
                        className="menu-language-and-currency__apply"
                        ng-click="langAndCurrency.applyChanges()"
                        hook-test="menuAccountLangAndCurrencyApply"
                    >
                        Apply changes
                    </a>
                </div>
            </div>
        </div>
        <div className="menu-submenu-separator" />
        <div
            className="menu-submenu-item menu-submenu-item--hover"
            hook-test="menuAccountSignOut"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Sign out ACCOUNT'}"
        >
            <a ng-click="account.logout()" className="menu-submenu-link">
                Sign out
            </a>
        </div>
    </div>
</div>
)