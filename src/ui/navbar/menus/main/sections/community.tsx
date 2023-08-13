export const SectionCommunity = () => (
    <div
        className="menu-item menu-item--animated has-submenu hide-in-lite-mode hide-in-grouped-mode js-menu-community"
        ng-mouseenter="menu.showWithDelay($event, 'community')"
        ng-mouseleave="menu.hide($event, 'community')"
        hook-test="menuCommunity"
        menu-pending-notifications=""
    >
        <a
            className="menu-link menu-uppercase"
            href="/forum"
            ng-touchstart="$event.preventDefault(); menu.toggle($event, 'community')"
            hook-test="menuCommunityButton"
            ng-class="{'menu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('new_forum_reply') > 0}"
        >
            Community
            <svg viewBox="0 0 32 32" className="menu-link__dropdown-icon">
                <use xlinkHref="#icon-arrow-down2" />
            </svg>
        </a>
        <span className="menu-triangle" />
        <div className="menu-submenu js-menu">
            <div className="menu-submenu-item  menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    href="/forum"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'All forums COMMUNITY'}"
                >
                    All forums
                </a>
            </div>
            <div className="menu-submenu-item  menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    href="/forum/general"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'General discussion forums COMMUNITY'}"
                >
                    General discussion forum
                </a>
            </div>
            <div className="menu-submenu-item menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    hook-test="menuAccountForumReplies"
                    href="/forum/myrecentposts"
                    ng-class="{'menu-submenu-link--pending-notifications': menuPendingNotifications.hasPendingNotificationsOfType('new_forum_reply') > 0}"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Forum replies COMMUNITY'}"
                >
                    Forum replies
                </a>
            </div>
            <div className="menu-submenu-item menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    href="/wishlist"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Community Wishlist COMMUNITY'}"
                >
                    Community wishlist
                </a>
            </div>
            <div className="menu-submenu-item menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    href="/blog"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Blog'}"
                >
                    Blog
                </a>
            </div>
            <div className="menu-submenu-separator" />
            <div className="menu-submenu-item menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    href="https://www.facebook.com/gogcom"
                    target="_blank"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Facebook COMMUNITY'}"
                >
                    Facebook
                </a>
            </div>
            <div className="menu-submenu-item menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    href="https://twitter.com/GOGcom"
                    target="_blank"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitter COMMUNITY'}"
                >
                    Twitter
                </a>
            </div>
            <div className="menu-submenu-item menu-submenu-item--hover">
                <a
                    className="menu-submenu-link"
                    href="https://www.twitch.tv/gogcom"
                    target="_blank"
                    gog-track-event="{eventAction: 'goToLink', eventCategory: 'topBar', eventLabel: 'Twitch COMMUNITY'}"
                >
                    Twitch
                </a>
            </div>
        </div>
    </div>
)