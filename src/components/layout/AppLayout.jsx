import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Title from "../shared/Title";
import { Box } from "@mui/material";

export default function AppLayout() {
    const headerHeight = "4rem";

    return (
        <Box height="100vh" display="flex" flexDirection="column">

            <Box>
                <Title />
                <Header />
            </Box>

            <Box display="flex" height={`calc(100vh - ${headerHeight})`}>
                <Box
                    flex={{ sm: "0 0 30%", md: "0 0 25%" }}
                    display={{ xs: "none", sm: "block" }}
                    height="100%"
                >
                    First
                </Box>

                <Box
                    flex={1}
                    display={{ xs: "block", md: "flex" }}
                >

                    <Outlet />
                </Box>

                <Box
                    flex={{ md: "0 0 30%", lg: "0 0 25%" }}
                    display={{ xs: "none", md: "block" }}
                    bgcolor="rgba(0,0,0,0.85)"
                    color="white"
                    height="100%"
                >
                    Third
                </Box>
            </Box>
        </Box>
    );
}
