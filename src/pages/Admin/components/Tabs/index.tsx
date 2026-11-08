import TabItem from "../TabItem";

const TABS = ["Выпуски", "Изображения", "Текстовый редактор"];

type Props = {
    activeId: number;
    onChangeActive: (id: number) => void;
};

const Tabs = ({ activeId, onChangeActive }: Props) => {

    return (
        <div className="flex flex-wrap border-b-2 border-solid border-b-[#e6eff8] gap-10">
            {TABS.map((el, id) => (
                <TabItem
                    key={id}
                    onChangeActive={() => onChangeActive(id)}
                    title={el}
                    isActive={activeId === id}
                />
            ))}
        </div>
    );
};

export default Tabs;
