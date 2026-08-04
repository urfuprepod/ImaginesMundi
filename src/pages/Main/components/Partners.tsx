
import PartnerItem from "./PartnerItem";

const data = {
    layout: {
        partners: { order: 1 },
        redactor: { order: 2 },
        content: { order: 3, flex: 2 },
        magazines: { order: 4 },
    },
    partners: {
        title: "Журнал представлен в научных системах",
        items: [
            {
                name: "Научная электронная библиотека",
                link: "#",
                logo: "https://rlst.by/wp-content/uploads/2021/05/elibrary_fb.png",
            },
        ],
    },
} as const;

const Partners = () => {
    return (
        <div className="border border-border rounded-lg">
            <div className="border-b border-border background-gg p-3">
                {data.partners.title}
            </div>
            <div className="flex flex-col gap-3 p-3 overflow-y-auto max-h-[500px]">
                {data.partners.items.map((partner) => (
                    <PartnerItem item={partner} />
                ))}
            </div>
        </div>
    );
};

export default Partners;
