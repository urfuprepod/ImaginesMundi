import { Typography } from "@shared";

const ConfigurationEmptyState = () => {
    return (
        <div className="flex flex-1 items-center justify-center p-8 text-center">
            <Typography.Main className="text-slate-500">Выберите конфиг в списке слева</Typography.Main>
        </div>
    );
};

export default ConfigurationEmptyState;
