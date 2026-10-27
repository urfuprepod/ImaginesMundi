import { Church, Columns3, Ship, University } from "lucide-react";
import type { CompassCard } from "../monaco";

export const COMPASS_ICONS = {
    ship: Ship,
    university: University,
    church: Church,
    columns: Columns3,
};

export const SERIES_LINK_LABEL = "Перейти к выпускам";

// Временные данные до подключения запроса. Раскладка зависит от длины массива.
export const MAGAZINE_SERIES: CompassCard[] = [
    {
        id: "albionica",
        title: "Альбионика",
        description: "История Британских островов и стран атлантического мира.",
        href: "/archive?series=albionica",
        icon: "ship",
        linkLabel: SERIES_LINK_LABEL,
    },
    {
        id: "germanica",
        title: "Германика",
        description: "История германских народов и германоговорящих стран.",
        href: "/archive?series=germanica",
        icon: "university",
        linkLabel: SERIES_LINK_LABEL,
    },
    {
        id: "balkanica",
        title: "Балканика",
        description: "История Балканского региона: народы, государства, культуры.",
        href: "/archive?series=balkanica",
        icon: "church",
        linkLabel: SERIES_LINK_LABEL,
    },
    {
        id: "intellectual-history",
        title: "Интеллектуальная история",
        description: "История идей, знаний и научных практик в пространстве культуры.",
        href: "/archive?series=intellectual-history",
        icon: "columns",
        linkLabel: SERIES_LINK_LABEL,
    },
];

const TOP = "lg:col-start-2 lg:row-start-1";
const LEFT = "lg:col-start-1 lg:row-start-2";
const RIGHT = "lg:col-start-3 lg:row-start-2";
const BOTTOM = "lg:col-start-2 lg:row-start-3";

export const COMPASS_POSITIONS: Record<number, string[]> = {
    1: [TOP],
    2: [LEFT, RIGHT],
    3: [TOP, LEFT, RIGHT],
    4: [TOP, LEFT, RIGHT, BOTTOM],
};
