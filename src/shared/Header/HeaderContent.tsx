import styles from "./styles.module.css";
import HeaderButton from "./HeaderButton";
import { Landmark, Newspaper } from "lucide-react";

const HeaderContent = () => {
    return (
        <div className={styles.item}>
            <div className="ml-[21vw] pt-[5.2vw] select-none">
                <h1 className="text-text-secondary font-heading text-heading uppercase">
                    Imagines <br /> Mundi
                </h1>

                <h3 className="text-heading-description font-heading mt-[1vw] text-primary">
                    Альманах исследований <br></br> всеобщей истории XVI—XX вв.
                </h3>
            </div>

            <div className="flex gap-[1vw] items-center mt-[1.6vw] ml-[5vw] relative z-80">
                <HeaderButton className="bg-primary">
                    <div className="flex items-center gap-[0.6vw]">
                        <Newspaper color="#fafbfb" size={"1.2vw"} /> Текущий
                        выпуск
                    </div>
                </HeaderButton>

                <HeaderButton className="bg-transparent">
                    <div className="flex items-center gap-[0.6vw]">
                        <Landmark color="#fafbfb" size={"1.2vw"} /> Перейти в
                        архив
                    </div>
                </HeaderButton>
            </div>
        </div>
    );
};

export default HeaderContent;
