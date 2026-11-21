import { ArrowRight } from "lucide-react";
import { Typography } from "@shared";

const MagazineCollections = () => (
    <section className="flex w-full flex-col gap-5 rounded-xl border border-gg bg-white p-5">
        <img
            src="/books.png"
            alt="Обложки выпусков альманаха Imagines Mundi"
            className="aspect-square w-full rounded-lg object-cover"
        />

        <Typography.H3 className="font-heading font-bold">
            Наши сборники
        </Typography.H3>

        <p className="text-paragraph">
            Ознакомьтесь с предыдущими выпусками альманаха в разделе «Архив».
        </p>

        <button
            type="button"
            disabled
            className="inline-flex min-h-11 w-fit items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-bold text-white uppercase"
        >
            Перейти в архив
            <ArrowRight size={16} aria-hidden="true" />
        </button>
    </section>
);

export default MagazineCollections;
