import { cn } from "@/lib/utils";

export const MenuItem = ({ setMenuActive, isMenuActive, title, color }: any) => {
    return (
        <div ng-repeat="customCategory in games.customCategories track by customCategory.name">
            {/**/}
            <div
                className={cn(
                    "menu-submenu-item menu-submenu-item--custom",
                    isMenuActive === title ? "is-active" : ""
                )}
                ng-mouseover="games.selectCategory(customCategory.name)"
                ng-class="{'is-active': games.selectedCategory.name == customCategory.name}"
                onMouseLeave={() => setMenuActive("")}
                onMouseOver={() => setMenuActive(title)}
            >
                <a
                    className="menu-submenu-link menu-custom-category-link menu-custom-category-link js-menu-category-link"
                    ng-style="{'color': customCategory.customisation.categoryColor }"
                    ng-href="/en/good-old-games"
                    ng-touchstart="$event.preventDefault(); games.selectCategory(customCategory.name)"
                    href="/en/good-old-games"
                    style={{ color: color }}
                >
                    {" "}
                    {title}
                    <svg
                        viewBox="0 0 32 32"
                        className="menu-submenu-icon menu-submenu-icon--custom"
                        ng-style="{'fill': customCategory.customisation.categoryColor}"
                        style={{ fill: color }}
                    >
                        <use xlinkHref="#icon-arrow-right4" />
                    </svg>
                    <svg
                        viewBox="0 0 32 32"
                        className="menu-submenu-icon menu-submenu-icon--custom"
                        ng-style="{'fill': customCategory.customisation.categoryColor}"
                        style={{ fill: color }}
                    >
                        <use xlinkHref="#icon-arrow-right4" />
                    </svg>
                </a>
            </div>
        </div>
    );
}
