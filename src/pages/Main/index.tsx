import type { ComponentType } from "react";
import type { HomeSectionConfig } from "../../features/monaco";
import MagazineCollections from "./components/MagazineCollections";
import MagazineInfo from "./components/MagazineInfo";
import MagazineSeries from "./components/MagazineSeries";
import MainRedactor from "./components/MainRedactor";
import Partners from "./components/Partners";

const sectionComponents = {
    redactor: MainRedactor,
    partners: Partners,
    collections: MagazineCollections,
    info: MagazineInfo,
} satisfies Record<HomeSectionConfig[number]["type"], ComponentType>;

const Main = ({ sectionConfig }: { sectionConfig: HomeSectionConfig }) => {
    const blocks = [...sectionConfig].sort((a, b) => a.order - b.order);
    const columns = blocks.map(({ flex }) => `minmax(0, ${Math.max(0, flex)}fr)`).join(" ");

    return (
        <div className="flex flex-col gap-8">
            {blocks.length > 0 && (
                <div
                    className="grid grid-cols-1 items-start gap-8 lg:[grid-template-columns:var(--home-section-columns)]"
                    style={{ "--home-section-columns": columns } as React.CSSProperties}
                >
                    {blocks.map(({ type, order }, index) => {
                        const Block = sectionComponents[type];
                        return <Block key={`${type}-${order}-${index}`} />;
                    })}
                </div>
            )}
            <MagazineSeries />
        </div>
    );
};

export default Main;
