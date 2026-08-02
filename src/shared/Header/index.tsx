import HeaderContent from './HeaderContent'

const Header = () => {
    return (
        <div className="relative">
            <HeaderContent />
            <div className="absolute inset-x-0 bottom-[0] translate-y-[4.1vw]">
                <svg
                    width="100%"
                    height="100%"
                    id="svg"
                    viewBox="0 0 1440 270"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition duration-300 ease-in-out delay-150"
                >
                    <path
                        d="M 0,400 L 0,150 C 106.86124401913875,166.4688995215311 213.7224880382775,182.9377990430622 302,187 C 390.2775119617225,191.0622009569378 459.97129186602865,182.7177033492823 543,191 C 626.0287081339713,199.2822966507177 722.3923444976077,224.1913875598086 819,202 C 915.6076555023923,179.8086124401914 1012.4593301435407,110.51674641148327 1116,94 C 1219.5406698564593,77.48325358851673 1329.7703349282297,113.74162679425837 1440,150 L 1440,400 L 0,400 Z"
                        stroke="none"
                        strokeWidth="0"
                        fill="#f9f8f8"
                        fillOpacity="1"
                        className="transition-all duration-300 ease-in-out delay-150 path-0"
                    ></path>
                </svg>
            </div>
        </div>
    );
};

export default Header;
