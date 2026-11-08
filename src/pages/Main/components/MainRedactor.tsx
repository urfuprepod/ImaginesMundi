import { Typography } from "@shared";

const REDACTOR = "/redactor.jpg";

const MainRedactor = () => {
    return (
        <div className="flex flex-col gap-4 rounded-md background-gg">
            <div className="rounded-md">
                <img src={REDACTOR} width={300} height={500} />
            </div>
            <Typography.H3>Николай Николаевич Баранов</Typography.H3>

            <Typography.Main>Главный редактор</Typography.Main>
        </div>
    );
};

export default MainRedactor;
