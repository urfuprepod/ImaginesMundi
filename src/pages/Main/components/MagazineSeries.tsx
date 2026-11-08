import { Typography } from "@shared";
import Compass from "../../../features/Compass";

const MagazineSeries = () => {
    return (
        <section className="bg-[url('/ship.svg')] bg-contain bg-bottom-right bg-no-repeat flex flex-col gap-8">
            <Typography.H2>Компасс серий журнала</Typography.H2>

            <Compass />
        </section>
    );
};

export default MagazineSeries;
