import { memo } from "react";
import { Routes, Route } from "react-router-dom";
import { Home } from "../components/pages/Home";

export const MyRouter = memo(() => {
    return (
        <Routes>
            <Route path={"/"} element={
                <>
                    <Home />
                </>
            } />
        </Routes>
    )
})