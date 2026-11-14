import styles from "./styles.module.css";
import HeaderButton from "./HeaderButton";
import { Landmark, Newspaper } from "lucide-react";

const HeaderContent = () => {
    return (
        <div className={styles.item}>
            <div className="ml-[21vw] pt-[3.4vw] select-none">
                <h1 className="text-text-secondary font-heading text-heading text-[3.6vw] tracking-[0.32rem] uppercase">
                    Imagines <br /> Mundi
                </h1>

                <h3 className="font-heading mt-[0.8vw] text-primary text-heading-description text-[2vw]">
                    Альманах исследований <br></br> всеобщей истории XVI—XX вв.
                </h3>
            </div>

            <div className="flex gap-[0.8vw] items-center mt-[1.28vw] ml-[5vw] relative z-80">
                <HeaderButton className="bg-primary">
                    <div className="flex items-center gap-[0.48vw]">
                        <Newspaper color="#fafbfb" size={"0.96vw"} /> Текущий
                        выпуск
                    </div>
                </HeaderButton>

                <HeaderButton className="bg-transparent">
                    <div className="flex items-center gap-[0.48vw]">
                        <Landmark color="#fafbfb" size={"0.96vw"} /> Перейти в
                        архив
                    </div>
                </HeaderButton>
            </div>
        </div>
    );
};

export default HeaderContent;
