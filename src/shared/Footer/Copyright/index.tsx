const year = new Date().getFullYear();

const Copyright = () => {
    return (
        <div className="flex flex-col gap-6">
            <p className="text-footer text-text-primary">
                © 2001-{year} «Imagines Mundi: Альманах исследований всеобщей
                истории XVI—XX вв.»
            </p>

            <p className="text-footer text-text-primary">
                Все права защищены. При использовании материала ссылка на
                альманах обязательна
            </p>
        </div>
    );
};

export default Copyright;
