import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Header";
import Title from "../shared/Title";
import { Grid } from "@mui/material";

export default function AppLayout() {
    return (
        <Grid container direction="column" height="100vh">
            {/* Top Row: Title + Header */}
            <Grid item>
                <Title />
                <Header />
            </Grid>

            {/* Bottom Row: 3 compartments */}
            <Grid item container xs flexGrow={1} height="100%">
                {/* Left Section */}
                <Grid
                    item
                    sm={4}
                    md={3}
                    sx={{
                        display: { xs: "none", sm: "block" },
                        bgcolor: "lightgray",
                        height: "100%",   // <-- important
                    }}
                >
                    First
                </Grid>

                {/* Middle Section */}
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    lg={6}
                    sx={{
                        bgcolor: "white",
                        height: "100%",   // <-- important
                    }}
                >
                    <Outlet />
                </Grid>

                {/* Right Section */}
                <Grid
                    item
                    md={4}
                    lg={3}
                    sx={{
                        display: { xs: "none", md: "block" },
                        bgcolor: "rgba(0, 0, 0, 0.85)",
                        color: "white",
                        p: 2,
                        height: "100%",   // <-- important
                    }}
                >
                    Third
                </Grid>
            </Grid>
        </Grid>
    );
}
