export const NavItemStoreMore = () => (
    <div
      className="menu-item menu-item--animated has-submenu hide-in-lite-mode hide-in-normal-mode menu-item--grouped js-menu-grouped"
      ng-mouseenter="menu.showWithDelay($event, 'grouped')"
      ng-mouseleave="menu.hide($event, 'grouped')"
      hook-test="menuMore"
    >
      <a
        className="menu-link menu-uppercase"
        ng-touchstart="$event.preventDefault(); menu.toggle($event, 'grouped')"
      >
        More
        <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
          <use xlinkHref="#icon-arrow-down2" />
        </svg>
      </a>
      <span className="menu-triangle" />
      <div className="menu-submenu js-menu">
        <div className="menu-submenu-item  menu-submenu-item--hover">
          <a
            href="/about_gog"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG.com ABOUT'}"
          >
            GOG.com
          </a>
        </div>
        <div className="menu-submenu-item  menu-submenu-item--hover">
          <a
            href="/galaxy"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'GOG Galaxy App ABOUT'}"
          >
            GOG Galaxy
          </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
          <a
            href="/work"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'We are hiring ABOUT'}"
          >
            Join the team
          </a>
        </div>
        <div className="menu-submenu-separator" />
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
        <div className="menu-submenu-separator" />
        <div className="menu-submenu-item  menu-submenu-item--hover">
          <a
            href="/forum"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Forums COMMUNITY'}"
          >
            Forums
          </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
          <a
            href="/wishlist"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Community Wishlist COMMUNITY'}"
          >
            Community wishlist
          </a>
        </div>
        <div className="menu-submenu-separator" />
        <div className="menu-submenu-item menu-submenu-item--hover">
          <a
            href="https://www.facebook.com/gogcom"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Facebook COMMUNITY'}"
          >
            Facebook
          </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
          <a
            href="https://twitter.com/GOGcom"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitter COMMUNITY'}"
          >
            Twitter
          </a>
        </div>
        <div className="menu-submenu-item menu-submenu-item--hover">
          <a
            href="https://www.twitch.tv/gogcom"
            className="menu-submenu-link"
            gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitch COMMUNITY'}"
          >
            Twitch
          </a>
        </div>
      </div>
    </div>
  )
