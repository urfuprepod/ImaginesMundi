export const configurationFolders = [
    {
        id: "home-folder",
        title: "Главная страница",
        files: [
            {
                id: "home",
                name: "home",
                content: JSON.stringify({
                    id: "home",
                    title: "Imagines Mundi",
                    description: "Альманах исследований всеобщей истории XVI—XX вв.",
                    sections: ["compass", "latest-issues"],
                }, null, 2),
            },
            {
                id: "compass",
                name: "compass",
                content: JSON.stringify({
                    id: "compass",
                    title: "Компас серий журнала",
                    items: [
                        { id: "albionica", title: "Альбионика", icon: "ship" },
                        { id: "germanica", title: "Германика", icon: "university" },
                    ],
                }, null, 2),
            },
        ],
    },
    {
        id: "journal-folder",
        title: "Журнал",
        files: [
            {
                id: "journal",
                name: "journal",
                content: JSON.stringify({
                    id: "journal",
                    title: "Imagines Mundi",
                    university: "Уральский федеральный университет",
                    email: "mhistory2025@mail.ru",
                }, null, 2),
            },
            {
                id: "archive",
                name: "archive",
                content: JSON.stringify({
                    id: "archive",
                    title: "Архив выпусков",
                    emptyMessage: "Выпуски пока не опубликованы",
                    pageSize: 12,
                }, null, 2),
            },
        ],
    },
];
