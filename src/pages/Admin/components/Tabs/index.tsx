import React, { useState } from "react";
import TabItem from "../TabItem";

const TABS = ["Выпуски", "Изображения"];

const Tabs = () => {
    const [activeId, setActiveId] = useState(0);

    return (
        <div className="flex border-b-2 border-solid border-b-[#e6eff8] gap-10">
            {TABS.map((el, id) => (
                <TabItem
                    key={id}
                    onChangeActive={() => setActiveId(id)}
                    title={el}
                    isActive={activeId === id}
                />
            ))}
        </div>
    );
};

export default Tabs;
