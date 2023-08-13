export const SectionSignIn = () => (
    <div
    className="menu-item menu-item--animated has-submenu menu-anonymous js-menu-anonymous"
    ng-controller="menuAnonymousCtrl as anonymous"
    ng-show="anonymous.isResponseFetched && !anonymous.isUserLoggedIn"
    ng-mouseenter="menu.show($event, 'anonymous')"
    ng-mouseleave="menu.hide($event, 'anonymous')"
    hook-test="menuAnonymous"
>
    <a
        className="menu-link menu-link--anonymous menu-uppercase hide-on-touch-device"
        ng-click="anonymous.openLogin()"
        hook-test="menuAnonymousButton"
    >
        <span gog-track-event="{eventCategory: 'topBar', eventAction:'login', eventLabel:'Login' }">
            Sign in
        </span>
        <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
            <use xlinkHref="#icon-arrow-down2" />
        </svg>
        <span className="menu-triangle menu-triangle--others menu-triangle--anonymous" />
    </a>
    <a
        className="menu-link menu-link--anonymous menu-uppercase hide-on-non-touch-device"
        hook-test="menuLoginMobile"
        ng-touchstart="$event.preventDefault(); menu.toggle($event, 'anonymous')"
    >
        <span gog-track-event="{eventCategory: 'topBar', eventAction:'login', eventLabel:'Login' }">
            Sign in
        </span>
        <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
            <use xlinkHref="#icon-arrow-down2" />
        </svg>
        <span className="menu-triangle menu-triangle--others menu-triangle--anonymous" />
    </a>
    <div
        className="menu-submenu menu-anonymous__submenu"
        ng-click="menu.stopPropagation($event)"
        ng-mouseenter="menu.cancelTimeout('anonymous')"
    >
        <div className="menu-header menu-anonymous-header">
            <a
                className="menu-btn menu-btn--gray menu-anonymous-header__btn menu-anonymous-header__btn--create-account menu-uppercase"
                ng-click="anonymous.openRegistration()"
                hook-test="menuSignUp"
                gog-track-event="{eventCategory: 'topBar', eventAction:'register', eventLabel:'Register' }"
            >
                Create account
            </a>
            <span className="menu-anonymous-header__separator" />
            <a
                className="menu-btn menu-anonymous-header__btn menu-anonymous-header__btn--sign-in menu-uppercase"
                ng-click="anonymous.openLogin()"
                hook-test="menuLogin"
                gog-track-event="{eventCategory: 'topBar', eventAction:'login', eventLabel:'Login' }"
            >
                Sign in
            </a>
        </div>
        <figure className="menu-anonymous__shelf" />
        <p className="menu-anonymous__about">
            <b>
                GOG.com is a digital distribution platform – an online store
                with a curated selection of games, an optional gaming client
                giving you freedom of choice, and a vivid community of
                gamers.
            </b>
            All of this born from a deeply rooted love for games, utmost
            care about customers, and a belief that you should own the
            things you buy.
        </p>
        <p className="menu-anonymous__features-header">
            <span className="menu-anonymous__features-header-in">
                What is GOG.com about?
            </span>
        </p>
        <div
            className="menu-features-slider"
            gog-menu-features-slider=""
            ng-mouseenter="slider.stop()"
            ng-mouseleave="slider.play()"
        >
            <span
                className="menu-features-slider__nav menu-features-slider__nav--left js-no-prevent-default"
                ng-click="slider.triggerPrevSlide()"
            >
                <svg
                    viewBox="0 0 32 32"
                    className="menu-features-slider__nav-icon"
                >
                    <use xlinkHref="#icon-fat-arrow-left" />
                </svg>
            </span>
            <span
                className="menu-features-slider__nav menu-features-slider__nav--right js-no-prevent-default"
                ng-click="slider.triggerNextSlide()"
            >
                <svg
                    viewBox="0 0 32 32"
                    className="menu-features-slider__nav-icon"
                >
                    <use xlinkHref="#icon-fat-arrow-right" />
                </svg>
            </span>
            <div className="menu-features-slider__slide js-slide is-active">
                <div className="menu-features-slider__slide-text">
                    <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide1"
                    >
                        <use xlinkHref="#icon-star" />
                    </svg>
                    <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide1">
                        Hand-picking the best in gaming.
                    </b>{" "}
                    A selection of great games, from modern hits to all-time
                    classics, that you really shouldn’t miss.
                </div>
            </div>
            <div className="menu-features-slider__slide js-slide">
                <div className="menu-features-slider__slide-text">
                    <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide2"
                    >
                        <use xlinkHref="#icon-heart" />
                    </svg>
                    <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide2">
                        Customer-first approach.
                    </b>{" "}
                    Delivering user-friendly support enriched with additional
                    customer benefits.
                </div>
            </div>
            <div className="menu-features-slider__slide js-slide">
                <div className="menu-features-slider__slide-text">
                    <svg
                        viewBox="0 0 32 32"
                        className="menu-features-slider__slide-icon menu-features-slider__slide-icon--slide3"
                    >
                        <use xlinkHref="#icon-hand-picked" />
                    </svg>
                    <b className="menu-features-slider__slide-highlight menu-features-slider__slide-highlight--slide3">
                        Gamer-friendly platform.
                    </b>{" "}
                    We’re here to make a difference in the way you buy and
                    play your games, giving you freedom of choice and a
                    hassle-free experience.
                </div>
            </div>
            <div className="menu-features-slider__timer is-on js-timer">
                <span className="menu-features-slider__timer-section js-timer-section" />
                <span className="menu-features-slider__timer-section js-timer-section" />
                <span className="menu-features-slider__timer-section js-timer-section" />
            </div>
        </div>
    </div>
</div>
)