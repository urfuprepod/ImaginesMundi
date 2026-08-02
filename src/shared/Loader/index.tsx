import { useEffect, useRef, useState } from "react";
import Clocks from "./Clocks";
import Eye from "./Eye";
import Globus from "./Globus";
import { getRandomInt } from "@/utils";

const dict = new Map([
    [0, Clocks],
    [1, Eye],
    [2, Globus],
]);

const getIndex = () => getRandomInt(0, 2);

const Loader = () => {
    const [iconIndex, setIconIndex] = useState(getIndex);
    const t = useRef<number | undefined>(undefined);

    useEffect(() => {
        t.current = setInterval(() => {
            setIconIndex(getIndex);
        }, 3000);

        return () => clearInterval(t.current);
    }, []);

    const Component = dict.get(iconIndex);
    if (!Component) return null;

    return (
        <div className="flex justify-center">
            <Component />
        </div>
    );
};

export default Loader;
