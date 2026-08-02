import Contact from "./Contact";

const Contacts = () => {
    return (
        <div className="flex flex-col gap-6">
            <Contact icon="MapPinHouse">
                <p className="text-paragraph text-text-primary">
                    620075, г. Екатеринбург, <br /> ул. Тургенева, 4, ауд. 470
                </p>
            </Contact>

            <Contact icon="Phone">
                <span className="text-paragraph text-text-primary">Тел.:</span>
                <a
                    className="text-paragraph text-text-primary"
                    href="tel:+79991234567"
                >
                    +7 (343) 389-94-24
                </a>
            </Contact>

            <Contact icon="Mail">
                <p className="text-paragraph text-text-primary">Email:</p>
                <a
                    className="text-paragraph text-text-primary"
                    href="mailto:mhistory2025@mail.ru"
                >
                    mhistory2025@mail.ru
                </a>
            </Contact>
        </div>
    );
};

export default Contacts;
