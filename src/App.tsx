import Home from "./components/Home.tsx";
import {
    QueryClient,
    QueryClientProvider,
} from "@tanstack/react-query";
import {BrowserRouter as Router, Route, Routes} from "react-router";

const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Router>
                    <Routes>
                        <Route path="/items" element={<Home/>}></Route>
                        <Route path="/items:id" element={<Home/>}></Route>
                    </Routes>
                </Router>
            </QueryClientProvider>
        </>
    )
}

export default App
