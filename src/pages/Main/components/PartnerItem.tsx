import { type FC } from "react";
import type { Partner } from "../types";
import { ExternalLink } from "lucide-react";

type Props = {
    item: Partner;
};

const PartnerItem: FC<Props> = ({ item }) => {
    const { link, logo, name } = item;

    return (
        <a href={link} className="cursor-pointer">
            <div className="flex flex-col gap-2">
                <img src={logo} width={"100%"} />
                <div className="flex justify-between items-center">
                    <span className="text-paragraph">{name}</span>

                    <ExternalLink size={16} />
                </div>
            </div>
        </a>
    );
};

export default PartnerItem;
