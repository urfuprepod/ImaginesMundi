import { Typography } from "@shared";
import { ArrowRight } from "lucide-react";

const REDACTOR = "/redactor.jpg";

const MainRedactor = () => {
    return (
        <div className="overflow-hidden rounded-lg border border-primary/15 bg-gg">
            <img
                src={REDACTOR}
                alt=""
                className="aspect-[5/7] w-full rounded-lg object-cover object-top"
            />
            <div className="flex flex-col items-center gap-4 p-5 text-center">
                <Typography.H3 className="font-heading font-bold">
                    Николай Николаевич Баранов
                </Typography.H3>
                <Typography.Main>Главный редактор</Typography.Main>
                <a
                    href="https://worldhist-urfu.ru/page37570670.html"
                    className="mt-2 inline-flex items-center gap-2 text-paragraph text-primary"
                >
                    <span className="underline underline-offset-2">Подробнее о редакторе</span>
                    <ArrowRight size={14} className="shrink-0" aria-hidden="true" />
                </a>
            </div>
        </div>
    );
};

export default MainRedactor;
