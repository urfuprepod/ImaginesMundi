import UnivercityInfo from "./UniversityInfo";
import Divider from "../Divider";
import Contacts from "./Contacts";
import Copyright from "./Copyright";

const Footer = () => {
    return (
        <div className="grid grid-cols-[1fr_10px_1fr_10px_1fr] gap-4 py-10 mx-15 place-items-center">
            <UnivercityInfo />
            <Divider isVertical />
            <Contacts />
            <Divider isVertical />
            <Copyright />
        </div>
    );
};

export default Footer;
