import { Footer, Header } from "../shared";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col gap-12 justify-between">
            <Header />
            <div className="flex-1 max-w-[1500px] mx-auto px-12">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}

export default App;
