import { ArrowRight, CircleCheck } from "lucide-react";

const magazineInfo = {
    title: "О журнале",
    description: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    ],
    topicsTitle: "Ключевые направления",
    topics: [
        "Lorem ipsum dolor sit amet",
        "Consectetur adipiscing elit",
        "Sed do eiusmod tempor incididunt",
        "Ut labore et dolore magna aliqua",
    ],
    detailsLabel: "Подробнее о журнале",
};

const MagazineInfo = () => (
    <section aria-labelledby="magazine-info-title" className="flex flex-col gap-6">
        <div className="flex flex-col gap-4">
            <h2 id="magazine-info-title" className="font-heading text-h2 font-bold uppercase">
                {magazineInfo.title}
            </h2>
            <div aria-hidden="true" className="flex items-center gap-1 text-primary">
                <span className="h-px w-24 bg-current" />
                <span className="size-2 rotate-45 border border-current" />
            </div>
        </div>

        <div className="space-y-4 text-paragraph leading-relaxed">
            {magazineInfo.description.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
            ))}
        </div>

        <div className="space-y-2 text-paragraph">
            <p className="font-bold">{magazineInfo.topicsTitle}</p>
            <ul className="space-y-2">
                {magazineInfo.topics.map((topic) => (
                    <li key={topic} className="flex items-start gap-2">
                        <CircleCheck size={14} aria-hidden="true" className="mt-0.5 shrink-0 text-primary" />
                        {topic}
                    </li>
                ))}
            </ul>
        </div>

        <button
            type="button"
            disabled
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md border border-primary px-5 py-3 text-sm font-bold uppercase"
        >
            {magazineInfo.detailsLabel}
            <ArrowRight size={16} aria-hidden="true" className="text-primary" />
        </button>
    </section>
);

export default MagazineInfo;
