import clsx from "clsx";
import {
    COMPASS_IMAGE_CLASSNAME,
    COMPASS_LAYOUT_CLASSNAME,
    SERIES_GRID_CLASSNAME,
} from "./styles";
import CompassCard from "./components/CompassCard";
import {
    COMPASS_POSITIONS,
    MAGAZINE_SERIES,
} from "./constants";

const Compass = () => {
    const positions = COMPASS_POSITIONS[MAGAZINE_SERIES.length];
    const isCompass = positions !== undefined;

    return (
        <div
            className={clsx(
                "grid gap-8",
                isCompass
                    ? COMPASS_LAYOUT_CLASSNAME
                    : SERIES_GRID_CLASSNAME,
            )}
        >
            {isCompass && (
                <img
                    src="/compass.svg"
                    alt=""
                    aria-hidden="true"
                    className={COMPASS_IMAGE_CLASSNAME}
                />
            )}
            {MAGAZINE_SERIES.map(({ id, ...series }, index) => (
                <div key={id} className={clsx("min-w-0", positions?.[index])}>
                    <CompassCard
                        {...series}
                    />
                </div>
            ))}
        </div>
    );
};

export default Compass;
