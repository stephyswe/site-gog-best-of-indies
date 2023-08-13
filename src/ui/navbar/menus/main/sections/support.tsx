export const SectionSupport = () => (
    <div
    className="menu-item menu-item--animated has-submenu hide-in-lite-mode hide-in-grouped-mode js-menu-support"
    ng-mouseenter="menu.showWithDelay($event, 'support')"
    ng-mouseleave="menu.hide($event, 'support')"
    hook-test="menuSupport"
>
    <a
        href="https://support.gog.com/hc/en-us?product=gog"
        className="menu-link menu-uppercase"
        ng-touchstart="$event.preventDefault(); menu.toggle($event, 'support')"
    >
        Support
        <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
            <use xlinkHref="#icon-arrow-down2" />
        </svg>
    </a>
    <span className="menu-triangle" />
    <div className="menu-submenu js-menu">
        <div className="menu-submenu-item  menu-submenu-item--hover">
            <a
                href="https://support.gog.com/hc/en-us/categories/201400969?product=gog"
                className="menu-submenu-link"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Game Technical Issues SUPPORT'}"
            >
                Game technical issues
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="https://support.gog.com/hc/en-us/categories/201552965?product=gog"
                className="menu-submenu-link"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Orders and payments SUPPORT'}"
            >
                Orders and payments
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="https://support.gog.com/hc/en-us/categories/201552985?product=gog"
                className="menu-submenu-link"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Account and Website SUPPORT'}"
            >
                Account and website
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="https://support.gog.com/hc/en-us/categories/201553005?product=gog"
                className="menu-submenu-link"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Downloads SUPPORT'}"
            >
                Downloads
            </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
            <a
                href="https://support.gog.com/hc/en-us/categories/201553025?product=gog"
                className="menu-submenu-link"
                gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy SUPPORT'}"
            >
                GOG Galaxy
            </a>
        </div>
    </div>
</div>
)