import clsx from "clsx";
import { NavLink } from "react-router-dom";
import type { RouterConfig } from "../../features/monaco";
import {
    HEADER_NAVIGATION_STYLES,
    HEADER_NAVIGATION_LIST_STYLES,
    HEADER_NAVIGATION_LINK_STYLES,
    HEADER_NAVIGATION_ACTIVE_LINK_STYLES,
} from "./constants";

const HeaderNavigation = ({ items }: { items: RouterConfig }) => (
    <nav
        aria-label="Основная навигация"
        className={HEADER_NAVIGATION_STYLES}
    >
        <ul className={HEADER_NAVIGATION_LIST_STYLES}>
            {items.map(({ path, label }) => (
                <li key={path}>
                    <NavLink
                        to={path}
                        end
                        className={({ isActive }) => clsx(
                            HEADER_NAVIGATION_LINK_STYLES,
                            isActive && HEADER_NAVIGATION_ACTIVE_LINK_STYLES,
                        )}
                    >
                        {label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default HeaderNavigation;
