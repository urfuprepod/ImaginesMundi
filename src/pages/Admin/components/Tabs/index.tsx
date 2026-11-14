import TabItem from "../TabItem";

export const TABS = [
    { label: "Выпуски", value: "issues" },
    { label: "Изображения", value: "images" },
    { label: "Текстовый редактор", value: "text-editor" },
    { label: "Конфигурации", value: "configurations" },
] as const;

export type AdminTab = (typeof TABS)[number]["value"];

type Props = {
    activeId: AdminTab;
    onChangeActive: (value: AdminTab) => void;
};

const Tabs = ({ activeId, onChangeActive }: Props) => {

    return (
        <div className="flex flex-wrap border-b-2 border-solid border-b-[#e6eff8] gap-10">
            {TABS.map(({ label, value }) => (
                <TabItem
                    key={value}
                    onChangeActive={() => onChangeActive(value)}
                    title={label}
                    isActive={activeId === value}
                />
            ))}
        </div>
    );
};

export default Tabs;
