import { ArrowRight } from "lucide-react";
import type { CompassCard as CompassCardData } from "../../monaco";
import { COMPASS_ICONS } from "../constants";
import { Link } from "react-router-dom";
import {
    COMPASS_CARD_CLASSNAME,
    COMPASS_CARD_ICON_CLASSNAME,
    COMPASS_CARD_LINK_CLASSNAME,
} from "../styles";

type Props = Omit<CompassCardData, "id">;

const CompassCard = ({ title, description, href, linkLabel, icon }: Props) => {
    const Icon = COMPASS_ICONS[icon];
    return (
        <Link
            to={href}
            className={COMPASS_CARD_CLASSNAME}
        >
            <span
                aria-hidden="true"
                className={COMPASS_CARD_ICON_CLASSNAME}
            >
                <Icon />
            </span>
            <div className="flex min-w-0 flex-col gap-4">
                <h3 className="font-heading text-subheading wrap-break-word uppercase">
                    {title}
                </h3>
                <p className="text-paragraph wrap-break-word">
                    {description}
                </p>
                <span className={COMPASS_CARD_LINK_CLASSNAME}>
                    {linkLabel}
                    <ArrowRight className="size-6 shrink-0" aria-hidden="true" />
                </span>
            </div>
        </Link>
    );
};

export default CompassCard;
