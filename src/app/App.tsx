import { Footer, Header } from "../shared";
import { Outlet } from "react-router-dom";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import 'react-tippy/dist/tippy.css'
import { ConfirmModal } from "@/features";

function App() {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <div className="flex flex-col gap-12 justify-between">
                <Header />
                <div className="flex-1 w-full max-w-[1700px] mx-auto px-12">
                    <Outlet />
                </div>
                <Footer />
            </div>
            <ConfirmModal />
        </QueryClientProvider>
    );
}

export default App;
