import styles from "./styles.module.css";
import HeaderButton from "./HeaderButton";
import { Landmark, Newspaper } from "lucide-react";
import {
    HEADER_TITLE_STYLES,
    HEADER_SUBTITLE_STYLES,
    HEADER_ACTIONS_STYLES,
    HEADER_ACTION_LABEL_STYLES,
} from "./constants";

const HeaderContent = () => {
    return (
        <div className={styles.item}>
            <div className="ml-[21vw] pt-[3.4vw] select-none">
                <h1 className={HEADER_TITLE_STYLES}>
                    Imagines <br /> Mundi
                </h1>

                <h3 className={HEADER_SUBTITLE_STYLES}>
                    Альманах исследований <br></br> всеобщей истории XVI—XX вв.
                </h3>
            </div>

            <div className={HEADER_ACTIONS_STYLES}>
                <HeaderButton className="bg-primary">
                    <div className={HEADER_ACTION_LABEL_STYLES}>
                        <Newspaper color="#fafbfb" size={"0.96vw"} /> Текущий
                        выпуск
                    </div>
                </HeaderButton>

                <HeaderButton className="bg-transparent">
                    <div className={HEADER_ACTION_LABEL_STYLES}>
                        <Landmark color="#fafbfb" size={"0.96vw"} /> Перейти в
                        архив
                    </div>
                </HeaderButton>
            </div>
        </div>
    );
};

export default HeaderContent;
